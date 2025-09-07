import { Response, ErrorRequestHandler } from "express";
import { z } from "zod";
import AppError from "../utils/AppError";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import { REFRESH_PATH, clearAuthCookies } from "../utils/cookies";

/**
 * Handles Zod validation errors by formatting them into a consistent response structure
 * @param res - Express response object
 * @param error - ZodError instance containing validation details
 */
const handleZodError = (res: Response, error: z.ZodError) => {
  // Transform Zod issues into a more client-friendly format
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    // Convert path array to dot notation (e.g., ["user", "email"] -> "user.email")
    message: err.message, // Validation error message
  }));

  return res.status(BAD_REQUEST).json({
    message: "Password is too short!", // Generic message (note: this seems hardcoded and might need improvement)
    errors, // Detailed validation errors
  });
};

/**
 * Handles custom application errors with consistent response format
 * @param res - Express response object
 * @param error - AppError instance containing error details
 */
const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message, // Human-readable error message
    errorCode: error.errorCode, // Application-specific error code for client handling
  });
};

/**
 * Global error handling middleware for Express applications
 * Catches and processes all errors in a consistent manner
 * 
 * Features:
 * - Logs errors with request path information
 * - Handles token refresh failures by clearing authentication cookies
 * - Processes Zod validation errors with detailed field information
 * - Handles custom AppError instances with status codes and error codes
 * - Provides a fallback for unexpected errors with generic 500 response
 */
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // Log error details for debugging purposes
  console.log(`PATH ${req.path}`, error);

  // Special handling for refresh token endpoint errors
  // Clear authentication cookies to force re-authentication
  if (req.path === REFRESH_PATH) {
    clearAuthCookies(res);
  }

  // Handle Zod validation errors (request data validation failures)
  if (error instanceof z.ZodError) {
    return handleZodError(res, error);
  }

  // Handle custom application errors (business logic failures)
  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  // Fallback for unexpected errors - return generic server error
  // Note: Avoid exposing internal error details in production
  return res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
};

export default errorHandler;
