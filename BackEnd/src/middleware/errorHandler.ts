import { z } from "zod";
import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message, // Fixed this to use err.message
  }));
  return res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  });
};

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);

  if (error instanceof z.ZodError) {
    handleZodError(res, error); // Removed the return statement
  } else {
    res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error.");
  }
  next(); // Ensure the function always returns void
};

export default errorHandler;
