import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodEffects, ZodError } from "zod";
import { BAD_REQUEST } from "../constants/http";

export const validateRequest = (
  schema: AnyZodObject | ZodEffects<AnyZodObject>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = error.issues
        .map((issue) => issue.message)
        .join(', ');
      return res.status(BAD_REQUEST).json({
        success: false,
        message: errorMessage,
      });
    }
    // Handle non-Zod errors
    return res.status(BAD_REQUEST).json({
      success: false,
      message: "Invalid request data",
    });
  }
};