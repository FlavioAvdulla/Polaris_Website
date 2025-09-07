import { Request, Response, NextFunction } from "express";
import { UserRole } from "../constants/user";

/**
 * Extended Express Request interface that includes user information
 * This ensures TypeScript recognizes the user property on the request object
 */
interface AuthenticatedRequest extends Request {
  user?: { role: UserRole };
}

/**
 * Higher-order function that creates role-based authorization middleware
 * 
 * @param allowedRoles - Array of UserRole values that are permitted to access the route
 * @returns Express middleware function that checks if the authenticated user's role is included in the allowed roles
 * 
 * Usage:
 * router.get('/admin', authorizeRoles([UserRole.ADMIN]), adminHandler);
 * router.get('/management', authorizeRoles([UserRole.ADMIN, UserRole.MANAGER]), managementHandler);
 */
export const authorizeRoles = (allowedRoles: UserRole[]) => {
  // Check if user exists and has a role that's included in the allowed roles
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied. Insufficient permissions." });
    }

    // If authorized, proceed to the next middleware or route handler
    next();
  };
};