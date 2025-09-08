import { Router } from "express";
import {
  deleteSessionHandler,
  getSessionsHandler,
} from "../controllers/session.controller";

/**
 * Session Management Routes Router
 * 
 * This router defines endpoints for managing user sessions.
 * It allows users to view and terminate their active sessions,
 * providing security and session control functionality.
 * 
 * Base URL prefix: /sessions
 */
const sessionRoutes = Router();

// Get all active sessions for the authenticated user
// GET /sessions/ - Retrieves a list of the current user's active sessions
sessionRoutes.get("/", getSessionsHandler);

// Terminate a specific session by ID
// DELETE /sessions/:id - Deletes/Invalidates a specific session
// :id - The session ID to be terminated
sessionRoutes.delete("/:id", deleteSessionHandler);

export default sessionRoutes;
