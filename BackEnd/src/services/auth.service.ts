import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";
import { CONFLICT, UNAUTHORIZED } from "../constants/http";
import VerificationCodeType from "../constants/verificationCodeType";
import SessionModel from "../models/session.model";
import UserModel from "../models/user.model";
import VerificationCodeModel from "../models/verificationCode.model";
import appAssert from "../utils/appAssert";
import { oneYearFromNow } from "../utils/date";
import jwt from "jsonwebtoken";
import { refreshTokenSignOptions, signToken } from "../utils/jwt";

export type createAccountParams = {
  email: string;
  password: string;
  userAgent?: string;
};

export const createAccount = async (data: createAccountParams) => {
  // Verify existing user doesnt exist
  const existingUser = await UserModel.exists({
    email: data.email,
  });
  appAssert(!existingUser, CONFLICT, "Email already in use");
  // Creat user
  const user = await UserModel.create({
    email: data.email,
    password: data.password,
  });

  const userId = user._id

  // create verification code
  const verificationCode = await VerificationCodeModel.create({
    userId: userId,
    type: VerificationCodeType.EmailVerification,
    expiresAt: oneYearFromNow(),
  });
  // send verification email
  // create session
  const session = await SessionModel.create({
    userId: userId,
    userAgent: data.userAgent,
  });
  // sign access token & refresh token
  const refreshToken = signToken(
    { sessionId: session._id },
    refreshTokenSignOptions
  );
  const accessToken = signToken(
    { userId: userId, sessionId: session._id }
  );
  // return user
  return {
    user: user.omitPassword(),
    accessToken,
    refreshToken,
  };
};

export type LoginParams = {
  email: string;
  password: string;
  userAgent?: string;
};

export const loginUser = async ({
  email,
  password,
  userAgent,
}: LoginParams) => {
  // Get the user by email
  const user = await UserModel.findOne({ email }); // Corrected syntax here
  appAssert(user, UNAUTHORIZED, "Invalid email or password");

  // Validate password from the request
  const isValid = await user.comparePassword(password); // Add optional chaining to prevent errors
  appAssert(isValid, UNAUTHORIZED, "Invalid email or password");

  const userId = user._id;

  // Create a session
  const session = await SessionModel.create({
    userId,
    userAgent,
  });

  const sessionInfo = {
    sessionId: session._id,
  };

  // Sign access token & refresh token
  const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);

  const accessToken = signToken({
    ...sessionInfo,
    userId: user._id,
  });

  // Return user & tokens
  return {
    user: user.omitPassword(),
    accessToken,
    refreshToken,
  };
};
