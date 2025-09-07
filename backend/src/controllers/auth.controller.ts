import { CREATED, OK, UNAUTHORIZED } from "../constants/http";
import SessionModel from "../models/session.model";
import {
  createAccount,
  loginUser,
  refreshUserAccessToken,
  resetPassword,
  sendPasswordResetEmail,
  verifyEmail,
} from "../services/auth.service";
import appAssert from "../utils/appAssert";
import {
  clearAuthCookies,
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
  setAuthCookies,
} from "../utils/cookies";
import { verifyToken } from "../utils/jwt";
import catchErrors from "../utils/catchErrors";
import {
  emailSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verificationCodeSchema,
} from "./auth.schemas";

/**
 * Handles user registration requests
 * - Validates request body against registration schema
 * - Creates new user account
 * - Sets authentication cookies
 * - Returns created user data
 */
export const registerHandler = catchErrors(async (req, res) => {
  // Parse and validate request data including user agent for session tracking
  const request = registerSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  // Create user account and generate tokens
  const { user, accessToken, refreshToken } = await createAccount(request);
  // Set HTTP-only cookies and return user data with 201 status
  return setAuthCookies({ res, accessToken, refreshToken })
    .status(CREATED)
    .json(user);
});

/**
 * Handles user login requests
 * - Validates credentials against login schema
 * - Authenticates user and generates tokens
 * - Sets authentication cookies
 */
export const loginHandler = catchErrors(async (req, res) => {
  // Parse and validate login credentials with user agent
  const request = loginSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  // Authenticate user and generate tokens
  const { accessToken, refreshToken } = await loginUser(request);

  // Set HTTP-only cookies and return success message
  return setAuthCookies({ res, accessToken, refreshToken })
    .status(OK)
    .json({ message: "Login successful" });
});

/**
 * Handles user logout requests
 * - Verifies access token to identify session
 * - Removes session from database
 * - Clears authentication cookies
 */
export const logoutHandler = catchErrors(async (req, res) => {
  // Extract access token from cookies
  const accessToken = req.cookies.accessToken as string | undefined;
  // Verify token to get payload (if token exists and is valid)
  const { payload } = verifyToken(accessToken || "");

  // If valid session exists, remove it from database
  if (payload) {
    await SessionModel.findByIdAndDelete(payload.sessionId);
  }

  // Clear authentication cookies and return success message
  return clearAuthCookies(res)
    .status(OK)
    .json({ message: "Logout successful" });
});

/**
 * Handles access token refresh requests
 * - Validates refresh token existence
 * - Generates new access token (and optionally new refresh token)
 * - Sets updated cookies
 */
export const refreshHandler = catchErrors(async (req, res) => {
  // Extract refresh token from cookies
  const refreshToken = req.cookies.refreshToken as string | undefined;

  // Validate that refresh token exists
  appAssert(refreshToken, UNAUTHORIZED, "Missing refresh token");

  // Generate new tokens using refresh token
  const { accessToken, newRefreshToken } = await refreshUserAccessToken(
    refreshToken
  );

  // Set new refresh token cookie if provided (rotation)
  if (newRefreshToken) {
    res.cookie("refreshToken", newRefreshToken, getRefreshTokenCookieOptions());
  }

  // Set new access token and return success message
  return res
    .status(OK)
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .json({ message: "Access token refreshed" });
});

/**
 * Handles email verification requests
 * - Validates verification code from URL parameters
 * - Marks user's email as verified
 */
export const verifyEmailHandler = catchErrors(async (req, res) => {
  // Parse and validate verification code from URL params
  const verificationCode = verificationCodeSchema.parse(req.params.code);

  // Verify email using the provided code
  await verifyEmail(verificationCode);

  return res.status(OK).json({ message: "Email was successfully verified" });
});

/**
 * Handles password reset email requests
 * - Validates email address
 * - Sends password reset email with verification code
 */
export const sendPasswordResetHandler = catchErrors(async (req, res) => {
  // Parse and validate email from request body
  const email = emailSchema.parse(req.body.email);

  // Send password reset email to the provided address
  await sendPasswordResetEmail(email);

  return res.status(OK).json({ message: "Password reset email sent" });
});

/**
 * Handles password reset requests
 * - Validates reset request data (code, new password)
 * - Updates user password
 * - Clears any existing authentication cookies
 */
export const resetPasswordHandler = catchErrors(async (req, res) => {
  // Parse and validate password reset data
  const request = resetPasswordSchema.parse(req.body);

  // Reset password using provided verification code and new password
  await resetPassword(request);

  // Clear authentication cookies (as security measure) and return success
  return clearAuthCookies(res)
    .status(OK)
    .json({ message: "Password was reset successfully" });
});
