import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import catchErrors from "../utils/catchErrors";
import { createAccount, loginUser } from "../services/auth.service";
import { CREATED, OK, UNAUTHORIZED } from "../constants/http";
import { clearAuthCookies, setAuthCookies } from "../utils/cookies";
import { loginSchema, registerSchema } from "./auth.schemas";
import { AccessTokenPayload, verifyToken } from "../utils/jwt";
import SessionModel from "../models/session.model";
import appAssert from "../utils/appAssert";

export const registerHandler = catchErrors(
  async (req: Request, res: Response) => {
    // variable request
    const request = registerSchema.parse({
      ...req.body,
      userAgent: req.headers["user-agent"],
    });

    // Handle registration logic here
    // res.status(200).json({ message: "User Already Exists" });

    // Call Service
    const { user, accessToken, refreshToken } = await createAccount(request);

    // return response
    return setAuthCookies({ res, accessToken, refreshToken })
      .status(CREATED)
      .json(user);
  }
);

export const loginHandler = catchErrors(async (req: Request, res: Response) => {
  const request = loginSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  const { accessToken, refreshToken } = await loginUser(request);

  return setAuthCookies({ res, accessToken, refreshToken }).status(OK).json({
    message: "Login successful.",
  });
});

export const logoutHandler = catchErrors(
  async (req: Request, res: Response) => {
    const accessToken = req.cookies.accessToken as string | undefined;
    const { payload } = verifyToken(accessToken || "");

    if (payload) {
      await SessionModel.findByIdAndDelete(payload.sessionId);
    }

    return clearAuthCookies(res).status(OK).json({
      message: "Logout successful.",
    });
  }
);

export const refreshHandler = catchErrors(async (req, res) => {
  const refreshToken = req.cookies.refreshToken as string | undefined;
  appAssert(refreshToken, UNAUTHORIZED, "Missing refresh token");
});
