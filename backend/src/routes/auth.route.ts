import { Router } from "express";
import {
  sendPasswordResetHandler,
  loginHandler,
  logoutHandler,
  refreshHandler,
  registerHandler,
  resetPasswordHandler,
  verifyEmailHandler,
} from "../controllers/auth.controller";

/**
 * Authentication Routes Router
 * 
 * This router defines all the authentication-related endpoints for the application.
 * It handles user registration, login, logout, token refresh, email verification,
 * and password reset functionality.
 */
const authRoutes = Router();

// User registration endpoint - creates a new user account
authRoutes.post("/register", registerHandler);

// User login endpoint - authenticates user and returns access/refresh tokens
authRoutes.post("/login", loginHandler);

// Token refresh endpoint - generates new access token using refresh token
authRoutes.get("/refresh", refreshHandler);

// User logout endpoint - invalidates refresh token and clears session
authRoutes.get("/logout", logoutHandler);

// Email verification endpoint - verifies user's email using verification code
authRoutes.get("/email/verify/:code", verifyEmailHandler);

// Password reset request endpoint - sends password reset email to user
authRoutes.post("/password/forgot", sendPasswordResetHandler);

// Password reset confirmation endpoint - allows user to set new password using reset token
authRoutes.post("/password/reset", resetPasswordHandler);

export default authRoutes;
