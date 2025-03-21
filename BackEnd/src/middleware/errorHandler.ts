import { z } from "zod";
import { ErrorRequestHandler, Response, Request, NextFunction } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import AppError from "../utils/App.Error";
import { clearAuthCookies, REFRESH_PATH } from "../utils/cookies";

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  });
};

const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
  });
};

const errorHandler: ErrorRequestHandler = (error, req: Request, res: Response, next: NextFunction) => {
  console.log(`PATH: ${req.path}`, error);

  if (req.path === REFRESH_PATH) {
    clearAuthCookies(res)
  }

  if (error instanceof z.ZodError) {
    handleZodError(res, error);
  } else if (error instanceof AppError) {
    handleAppError(res, error);
  } else {
    res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
  }

  next();
};

export default errorHandler;
