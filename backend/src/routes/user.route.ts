import { Router } from "express";
import { getUserHandler } from "../controllers/user.controller";

/**
 * User Profile Routes Router
 * 
 * This router defines endpoints for user profile management.
 * It handles operations related to retrieving and managing 
 * the authenticated user's profile information.
 * 
 * Note: These routes typically require authentication middleware
 * to be applied at the application level to ensure only
 * authenticated users can access their own profile data.
 */
const userRoutes = Router();

// Get current user's profile information
// GET /user/ - Retrieves the authenticated user's profile details
// Typically returns user information (email, name, preferences, etc.)
// while excluding sensitive data like password
userRoutes.get("/", getUserHandler);

export default userRoutes;
