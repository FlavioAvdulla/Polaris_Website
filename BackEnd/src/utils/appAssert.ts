import assert from "node:assert";
import AppError from "./App.Error";
import { HttpStatusCode } from "../constants/http";
import AppErrorCode from "../constants/app.ErrorCode";

type AppAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  message: string,
  appErrorCode?: AppErrorCode
) => asserts condition;

// Asserts a condition and throws an AppError if the condition is false.

const appAssert: AppAssert = (
  condition,
  httpStatusCode,
  message,
  appErrorCode
) => assert(condition, new AppError(httpStatusCode, message, appErrorCode));

export default appAssert;
