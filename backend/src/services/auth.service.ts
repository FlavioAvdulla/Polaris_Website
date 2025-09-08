import { APP_ORIGIN } from "../constants/env";
import {
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  TOO_MANY_REQUESTS,
  UNAUTHORIZED,
  UNPROCESSABLE_CONTENT,
} from "../constants/http";
import VerificationCodeType from "../constants/verificationCodeType";
import SessionModel, { SessionDocument } from "../models/session.model";
import UserModel, { UserDocument } from "../models/user.model";
import VerificationCodeModel from "../models/verificationCode.model";
import appAssert from "../utils/appAssert";
import { hashValue } from "../utils/bcrypt";
import {
  ONE_DAY_MS,
  fiveMinutesAgo,
  oneHourFromNow,
  oneYearFromNow,
  thirtyDaysFromNow,
} from "../utils/date";
import {
  getPasswordResetTemplate,
  getVerifyEmailTemplate,
} from "../utils/emailTemplates";
import {
  RefreshTokenPayload,
  refreshTokenSignOptions,
  signToken,
  verifyToken,
} from "../utils/jwt";
import { sendMail } from "../utils/sendMail";

/**
 * Parameters for creating a new user account
 */
type CreateAccountParams = {
  email: string;
  password: string;
  userAgent?: string; // Optional: client browser/device information
};

/**
 * Creates a new user account with email verification
 * @param data - User registration data
 * @returns Object containing user data, access token, and refresh token
 */
export const createAccount = async (data: CreateAccountParams) => {
  // Check if email is already registered
  const existingUser = await UserModel.exists({
    email: data.email,
  });
  appAssert(!existingUser, CONFLICT, "Email already in use!");

  // Create new user in database
  const user = await UserModel.create({
    email: data.email,
    password: data.password,
  });
  const userId = user._id;
  
  // Create email verification code (valid for 1 year)
  const verificationCode = await VerificationCodeModel.create({
    userId,
    type: VerificationCodeType.EmailVerification,
    expiresAt: oneYearFromNow(),
  });

  // Generate verification URL
  const url = `${APP_ORIGIN}/email/verify/${verificationCode._id}`;

  // Send verification email (non-blocking, errors are logged but don't fail registration)
  const { error } = await sendMail({
    to: user.email,
    ...getVerifyEmailTemplate(url),
  });
  // Ignore email errors to prevent registration failure due to email issues
  if (error) console.error(error);

  // Create session for immediate access after registration
  const session = await SessionModel.create({
    userId,
    userAgent: data.userAgent,
  });

  // Generate JWT tokens
  const refreshToken = signToken(
    {
      sessionId: session._id,
    },
    refreshTokenSignOptions
  );
  const accessToken = signToken({
    userId,
    sessionId: session._id,
  });
  
  return {
    user: user.omitPassword(), // Return user without password
    accessToken,
    refreshToken,
  };
};

/**
 * Parameters for user login
 */
type LoginParams = {
  email: string;
  password: string;
  userAgent?: string; // Optional: client browser/device information
};

/**
 * Authenticates a user and creates a new session
 * @param param0 - Login credentials and user agent
 * @returns Object containing user data, access token, and refresh token
 */
export const loginUser = async ({
  email,
  password,
  userAgent,
}: LoginParams) => {
  // Find user by email
  const user = await UserModel.findOne({ email });
  appAssert(user, UNAUTHORIZED, "Invalid email or password!");

  // Validate password
  const isValid = await user.comparePassword(password);
  appAssert(isValid, UNAUTHORIZED, "Invalid email or password!");

  const userId = user._id;
  // Create new session for the user
  const session = await SessionModel.create({
    userId,
    userAgent,
  });

  const sessionInfo: RefreshTokenPayload = {
    sessionId: session._id,
  };

  // Generate JWT tokens
  const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
  const accessToken = signToken({
    ...sessionInfo,
    userId,
  });
  
  return {
    user: user.omitPassword(), // Return user without password
    accessToken,
    refreshToken,
  };
};

/**
 * Verifies a user's email address using a verification code
 * @param code - Verification code from email link
 * @returns Updated user object without password
 */
export const verifyEmail = async (code: string) => {
  // Find valid, unexpired verification code
  const validCode = await VerificationCodeModel.findOne({
    _id: code,
    type: VerificationCodeType.EmailVerification,
    expiresAt: { $gt: new Date() }, // Check if code hasn't expired
  });
  appAssert(validCode, NOT_FOUND, "Invalid or expired verification code!");

  // Update user's verified status
  const updatedUser = await UserModel.findByIdAndUpdate(
    validCode.userId,
    {
      verified: true,
    },
    { new: true } // Return updated document
  );
  appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to verify email!");

  // Delete used verification code
  await validCode.deleteOne();

  return {
    user: updatedUser.omitPassword(), // Return user without password
  };
};

/**
 * Refreshes an access token using a valid refresh token
 * @param refreshToken - Current refresh token
 * @returns New access token and optionally a new refresh token
 */
export const refreshUserAccessToken = async (refreshToken: string) => {
  // Verify refresh token validity
  const { payload } = verifyToken<RefreshTokenPayload>(refreshToken, {
    secret: refreshTokenSignOptions.secret,
  });
  appAssert(payload, UNAUTHORIZED, "Invalid refresh token");

  // Find and validate session
  const session = await SessionModel.findById(payload.sessionId);
  const now = Date.now();
  appAssert(
    session && session.expiresAt.getTime() > now,
    UNAUTHORIZED,
    "Session expired"
  );

  // Refresh session if it expires within the next 24 hours
  const sessionNeedsRefresh = session.expiresAt.getTime() - now <= ONE_DAY_MS;
  if (sessionNeedsRefresh) {
    session.expiresAt = thirtyDaysFromNow();
    await session.save();
  }

  // Generate new refresh token only if session was refreshed
  const newRefreshToken = sessionNeedsRefresh
    ? signToken(
        {
          sessionId: session._id,
        },
        refreshTokenSignOptions
      )
    : undefined;

  // Generate new access token
  const accessToken = signToken({
    userId: session.userId,
    sessionId: session._id,
  });

  return {
    accessToken,
    newRefreshToken,
  };
};

/**
 * Sends a password reset email to the user
 * @param email - User's email address
 * @returns Object containing reset URL and email ID (for testing) or empty object on error
 */
export const sendPasswordResetEmail = async (email: string) => {
  // Use try-catch to prevent leaking sensitive information about user existence
  try {
    const user = await UserModel.findOne({ email });
    appAssert(user, NOT_FOUND, "User not found");

    // Rate limiting: Check for excessive password reset requests (max 2 in 5 minutes)
    const fiveMinAgo = fiveMinutesAgo();
    const count = await VerificationCodeModel.countDocuments({
      userId: user._id,
      type: VerificationCodeType.PasswordReset,
      createdAt: { $gt: fiveMinAgo }, // Created in the last 5 minutes
    });
    appAssert(
      count <= 1, // Allow 2 requests (0 and 1 already exist)
      TOO_MANY_REQUESTS,
      "Too many requests, please try again later."
    );

    // Create password reset code (valid for 1 hour)
    const expiresAt = oneHourFromNow();
    const verificationCode = await VerificationCodeModel.create({
      userId: user._id,
      type: VerificationCodeType.PasswordReset,
      expiresAt,
    });

    // Generate password reset URL with code and expiration timestamp
    const url = `${APP_ORIGIN}/password/reset?code=${
      verificationCode._id
    }&exp=${expiresAt.getTime()}`;

    // Send password reset email
    const { data, error } = await sendMail({
      to: email,
      ...getPasswordResetTemplate(url),
    });

    // Verify email was sent successfully
    appAssert(
      data?.id,
      INTERNAL_SERVER_ERROR,
      `${error?.name} - ${error?.message}`
    );
    
    return {
      url, // For testing/demonstration purposes
      emailId: data.id, // Email service ID for tracking
    };
  } catch (error: any) {
    // Log error but return success to prevent email enumeration attacks
    console.log("SendPasswordResetError:", error.message);
    return {}; // Return empty object to indicate "success" to client
  }
};

/**
 * Parameters for password reset
 */
type ResetPasswordParams = {
  password: string; // New password
  verificationCode: string; // Reset code from email
};

/**
 * Resets user password using a valid verification code
 * @param param0 - New password and verification code
 * @returns Updated user object without password
 */
export const resetPassword = async ({
  verificationCode,
  password,
}: ResetPasswordParams) => {
  // Find valid, unexpired password reset code
  const validCode = await VerificationCodeModel.findOne({
    _id: verificationCode,
    type: VerificationCodeType.PasswordReset,
    expiresAt: { $gt: new Date() }, // Check if code hasn't expired
  });
  appAssert(validCode, NOT_FOUND, "Invalid or expired verification code");

  // Update user password (automatically hashed by pre-save middleware)
  const updatedUser = await UserModel.findByIdAndUpdate(validCode.userId, {
    password: await hashValue(password),
  });
  appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to reset password!");

  // Delete used verification code
  await validCode.deleteOne();

  // Invalidate all existing sessions for security
  await SessionModel.deleteMany({ userId: validCode.userId });

  return { user: updatedUser.omitPassword() }; // Return user without password
};
