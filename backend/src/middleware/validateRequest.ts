import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodEffects, ZodError } from "zod";
import { BAD_REQUEST } from "../constants/http";


/**
 * Express middleware factory that validates request data against a Zod schema
 * 
 * This higher-order function creates middleware that validates:
 * - Request body (req.body)
 * - Query parameters (req.query) 
 * - URL parameters (req.params)
 * 
 * @param schema - Zod schema object or effect (transformed schema) to validate against
 * @returns Express middleware function that validates the request and either proceeds or returns validation errors
 * 
 * Usage:
 * router.post('/users', validateRequest(userSchema), userController.createUser);
 * router.get('/items', validateRequest(querySchema), itemController.getItems);
 */
export const validateRequest = (
  schema: AnyZodObject | ZodEffects<AnyZodObject>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate the complete request data against the provided schema
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    // If validation passes, proceed to the next middleware/controller
    return next();
  } catch (error) {
    // Handle Zod validation errors with detailed error messages
    if (error instanceof ZodError) {
      // Combine all validation error messages into a single string
      const errorMessage = error.issues
        .map((issue) => issue.message)
        .join(', ');
      return res.status(BAD_REQUEST).json({
        success: false,
        message: errorMessage, // Provides client with specific validation failures
      });
    }

    // Handle unexpected errors (non-Zod errors) with a generic message
    return res.status(BAD_REQUEST).json({
      success: false,
      message: "Invalid request data", // Generic error message for non-validation errors
    });
  }
};