// Import Node.js assert module for assertion functionality
import assert from "node:assert";
// Import custom AppError class for application-specific errors
import AppError from "./AppError";
// Import HTTP status codes constants
import { HttpStatusCode } from "../constants/http";
// Import application-specific error codes
import AppErrorCode from "../constants/appErrorCode";

/**
 * Type definition for appAssert function
 * This is a custom assertion function that throws AppError instead of AssertionError
 * 
 * @param condition - The condition to test (truthy values pass, falsy values throw)
 * @param httpStatusCode - HTTP status code to use in the error if assertion fails
 * @param message - Error message describing the assertion failure
 * @param appErrorCode - Optional application-specific error code for detailed error handling
 * @throws {AppError} - Throws AppError instead of standard AssertionError when condition is falsy
 */
type AppAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  message: string,
  appErrorCode?: AppErrorCode
) => asserts condition;


/**
 * Custom assertion function that wraps Node.js assert but throws AppError instead of AssertionError
 * This provides more consistent error handling throughout the application by using
 * application-specific error types rather than the generic AssertionError
 * 
 * @example
 * // Basic usage - throws AppError with 400 status if user is not found
 * appAssert(user, HttpStatusCode.BAD_REQUEST, "User not found");
 * 
 * @example
 * // With custom error code
 * appAssert(
 *   isValidEmail(email),
 *   HttpStatusCode.BAD_REQUEST,
 *   "Invalid email format",
 *   AppErrorCode.INVALID_EMAIL
 * );
 */
const appAssert: AppAssert = (
  condition,
  httpStatusCode,
  message,
  appErrorCode
) => 
  // Use Node.js assert but provide a custom error factory function
  // When condition is falsy, assert will throw the AppError instead of AssertionError
  assert(
    condition,
    // Error factory: creates AppError with provided HTTP status, message, and optional error code
  new AppError(httpStatusCode, message, appErrorCode));

  // Export the custom assertion function for use throughout the application
export default appAssert;
