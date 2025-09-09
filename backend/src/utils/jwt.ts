import jwt, { VerifyOptions, SignOptions } from "jsonwebtoken";
import Audience from "../constants/audience";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";
import { UserDocument } from "../models/user.model";
import { SessionDocument } from "../models/session.model";

/**
 * Represents the payload structure for a refresh token
 * Contains the session ID to identify the user's session
 */
export type RefreshTokenPayload = {
  sessionId: SessionDocument["_id"];
};

/**
 * Represents the payload structure for an access token
 * Contains both user ID and session ID to identify the user and their session
 */
export type AccessTokenPayload = {
  userId: UserDocument["_id"];
  sessionId: SessionDocument["_id"];
};

/**
 * Extended SignOptions interface that includes the secret key
 * Used for token signing configuration
 */
type SignOptionsAndSecret = SignOptions & {
  secret: string;
};

/**
 * Default JWT signing options applied to all tokens
 * Specifies the intended audience for the tokens
 */
const defaults: SignOptions = {
  audience: [Audience.User],
};

/**
 * Configuration options specifically for access tokens:
 * - Expires in 15 minutes
 * - Uses the JWT_SECRET from environment variables
 */
const accessTokenSignOptions: SignOptionsAndSecret = {
  expiresIn: "15m",
  secret: JWT_SECRET,
};

/**
 * Configuration options specifically for refresh tokens:
 * - Expires in 30 days
 * - Uses the JWT_REFRESH_SECRET from environment variables
 */
export const refreshTokenSignOptions: SignOptionsAndSecret = {
  expiresIn: "30d",
  secret: JWT_REFRESH_SECRET,
};

/**
 * Signs a JWT token with the provided payload and options
 * @param payload - The token payload (either AccessTokenPayload or RefreshTokenPayload)
 * @param options - Optional signing options and secret (defaults to access token options)
 * @returns Signed JWT token string
 */
export const signToken = (
  payload: AccessTokenPayload | RefreshTokenPayload,
  options?: SignOptionsAndSecret
) => {
  const { secret, ...signOpts } = options || accessTokenSignOptions;
  return jwt.sign(payload, secret, {
    ...defaults,
    ...signOpts,
  });
};

/**
 * Verifies a JWT token and returns its payload if valid
 * @param token - The JWT token to verify
 * @param options - Optional verification options including secret (defaults to JWT_SECRET)
 * @returns Object containing either the payload or an error message
 */
export const verifyToken = <TPayload extends object = AccessTokenPayload>(
  token: string,
  options?: VerifyOptions & {
    secret?: string;
  }
) => {
  const { secret = JWT_SECRET, ...verifyOpts } = options || {};
  try {
    const payload = jwt.verify(token, secret, {
      ...defaults,
      ...verifyOpts,
    }) as TPayload;
    return {
      payload,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
