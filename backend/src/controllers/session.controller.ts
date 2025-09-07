import { z } from "zod";
import { NOT_FOUND, OK } from "../constants/http";
import SessionModel from "../models/session.model";
import catchErrors from "../utils/catchErrors";
import appAssert from "../utils/appAssert";

/**
 * Handler to retrieve all active sessions for the authenticated user
 * Returns sessions sorted by creation date (newest first)
 * Marks the current session with an 'isCurrent' flag
 */
export const getSessionsHandler = catchErrors(async (req, res) => {
  // Find all active sessions for the current user that haven't expired
  const sessions = await SessionModel.find(
    {
      userId: req.userId, // Filter by current user's ID
      expiresAt: { $gt: Date.now() }, // Only include non-expired sessions
    },
    {
      _id: 1, // Include session ID
      userAgent: 1, // Include user agent information
      createdAt: 1, // Include creation timestamp
    },
    {
      sort: { createdAt: -1 }, // Sort by creation date (newest first)
    }
  );

  // Return sessions with current session marked
  return res.status(OK).json(
    // Transform sessions to mark the current one
    sessions.map((session) => ({
      ...session.toObject(),
      // Add isCurrent flag if this is the session making the request
      ...(session.id === req.sessionId && {
        isCurrent: true,
      }),
    }))
  );
});

/**
 * Handler to delete a specific session for the authenticated user
 * Validates session ID and ensures user can only delete their own sessions
 */
export const deleteSessionHandler = catchErrors(async (req, res) => {
  // Validate and parse the session ID from request parameters
  const sessionId = z.string().parse(req.params.id);

  // Find and delete the session, ensuring it belongs to the current user
  const deleted = await SessionModel.findOneAndDelete({
    _id: sessionId, // Session ID to delete
    userId: req.userId, // Ensure session belongs to current user
  });
  // Throw error if session not found (either doesn't exist or doesn't belong to user)
  appAssert(deleted, NOT_FOUND, "Session not found");
  // Return success response
  return res.status(OK).json({ message: "Session removed" });
});
