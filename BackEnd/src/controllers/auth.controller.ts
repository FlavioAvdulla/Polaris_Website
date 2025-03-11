import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import catchErrors from "../utils/catchErrors";

const registerSchema = z.object({
  email: z.string().email().min(1).max(255),
  password: z.string().min(6).max(255),
  confirmPassword: z.string().min(6).max(255),
  userAgent: z.string().optional(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

export const registerHandler = catchErrors(
  async (req: Request, res: Response) => {
    const request = registerSchema.parse({
      ...req.body,
      userAgent: req.headers["user-agent"],
    });
    // Handle registration logic here
    res.status(200).json({ message: "User registered successfully" });
  }
);
