// Import application-specific error codes constants
import AppErrorCode from "../constants/appErrorCode";
// Import HTTP status code constants
import { HttpStatusCode } from "../constants/http";

/**
 * Custom application error class that extends the native JavaScript Error class
 * Provides standardized error handling with HTTP status codes and custom error codes
 * throughout the application
 */
class AppError extends Error {
  /**
   * Creates a new AppError instance
   * 
   * @param statusCode - HTTP status code associated with the error (e.g., 400, 404, 500)
   * @param message - Human-readable error description for logging and client responses
   * @param errorCode - Optional application-specific error code for programmatic error handling
   * 
   * @example
   * // Basic error with HTTP status and message
   * throw new AppError(HttpStatusCode.NOT_FOUND, "User not found");
   * 
   * @example
   * // Error with custom application error code
   * throw new AppError(
   *   HttpStatusCode.BAD_REQUEST,
   *   "Invalid email format",
   *   AppErrorCode.INVALID_EMAIL
   * );
   */
  constructor(
    // Public properties accessible directly from error instances
    public statusCode: HttpStatusCode,
    public message: string,
    public errorCode?: AppErrorCode
  ) {
    // Call parent Error class constructor with the message
    super(message);
  }
}

export default AppError;
