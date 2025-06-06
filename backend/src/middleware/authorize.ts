import { Request, Response, NextFunction } from "express";
import { UserRole } from "../constants/user";

// Extend Request type to include 'user' property
interface AuthenticatedRequest extends Request {
  user?: { role: UserRole };
}

export const authorizeRoles = (allowedRoles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied. Insufficient permissions." });
    }
    next();
  };
};