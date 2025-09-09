import { Request, Response, NextFunction } from "express";

/**
 * Type definition for an asynchronous Express controller function
 * These are async functions that handle Express requests and may throw errors
 */
type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

/**
 * Higher-order function that wraps async Express controllers to automatically catch errors
 * This is an error handling middleware factory that prevents unhandled promise rejections
 * in async route handlers by catching errors and passing them to Express's error handling pipeline
 * 
 * @param controller - An async Express controller function that may throw errors
 * @returns AsyncController - A wrapped controller function with error handling
 * 
 * @example
 * // Without catchErrors:
 * app.get('/users', async (req, res, next) => {
 *   const users = await User.find(); // Might throw!
 *   res.json(users);
 * });
 * 
 * @example
 * // With catchErrors:
 * app.get('/users', catchErrors(async (req, res, next) => {
 *   const users = await User.find(); // Errors are automatically caught
 *   res.json(users);
 * }));
 * 
 * @example
 * // Usage with route definitions:
 * import catchErrors from './catchErrors';
 * 
 * router.get('/profile', catchErrors(async (req, res) => {
 *   const user = await getUserById(req.userId);
 *   res.json(user);
 * }));
 * 
 * @why_this_is_useful
 * - Prevents unhandled promise rejections that could crash your Node.js process
 * - Centralizes error handling logic instead of repeating try-catch blocks
 * - Ensures all errors are properly forwarded to Express error middleware
 * - Makes async controller code cleaner and more readable
 * - Provides consistent error handling across all routes
 */
const catchErrors =
  (controller: AsyncController): AsyncController =>
  async (req, res, next) => {
    try {
      // Execute the original controller function
      // If it throws an error or rejects a promise, catch it below
      await controller(req, res, next);
    } catch (error) {
      // Pass the caught error to Express's next() function
      // This triggers the error-handling middleware chain
      next(error);
    }
  };

export default catchErrors;
