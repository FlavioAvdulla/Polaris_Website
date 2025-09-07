import { RequestHandler } from "express";
import appAssert from "../utils/appAssert";
import AppErrorCode from "../constants/appErrorCode";
import { UNAUTHORIZED } from "../constants/http";
import { verifyToken } from "../utils/jwt";

/**
 * Express middleware for authenticating requests using JWT access tokens
 * 
 * This middleware:
 * - Extracts the access token from cookies
 * - Verifies the token's validity and expiration
 * - Attaches user ID and session ID to the request object
 * - Handles various authentication failure scenarios with appropriate error messages
 */
const authenticate: RequestHandler = (req, res, next) => {
  // Extract access token from cookies
  const accessToken = req.cookies.accessToken as string | undefined;

  // Verify that access token exists
  appAssert(
    accessToken,
    UNAUTHORIZED,
    "Not authorized",
    AppErrorCode.InvalidAccessToken
  );

  // Verify the token and extract payload
  const { error, payload } = verifyToken(accessToken);

  // Check if token is valid and not expired
  appAssert(
    payload,
    UNAUTHORIZED,
    error === "jwt expired" ? "Token expired" : "Invalid token",
    AppErrorCode.InvalidAccessToken
  );
  
  // Attach user ID and session ID to the request object for use in subsequent handlers
  req.userId = payload.userId;
  req.sessionId = payload.sessionId;
  
  // Proceed to the next middleware or route handler
  next();
};

export default authenticate;
