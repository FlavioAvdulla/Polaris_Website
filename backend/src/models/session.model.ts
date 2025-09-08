import mongoose from "mongoose";
import { thirtyDaysFromNow } from "../utils/date";

/**
 * Interface representing a Session document in MongoDB
 * Extends mongoose.Document to inherit Mongoose document properties and methods
 */
export interface SessionDocument extends mongoose.Document {
  /** Reference to the User ID associated with this session */
  userId: mongoose.Types.ObjectId;
  /** User agent string from the client's browser/device (optional) */
  userAgent?: string;
  /** Timestamp when the session was created */
  createdAt: Date;
  /** Timestamp when the session will expire (typically 30 days from creation) */
  expiresAt: Date;
}

/**
 * Mongoose schema definition for Session documents
 * Defines the structure, types, and options for session data stored in MongoDB
 */
const sessionSchema = new mongoose.Schema<SessionDocument>({
  userId: {
    ref: "User", // Reference to the User model for population
    type: mongoose.Schema.Types.ObjectId, // MongoDB ObjectId type
    index: true, // Create an index for faster queries on userId
  },

  userAgent: { type: String // String type for storing user agent
    // No 'required: true' so this field is optional
  },

  createdAt: {
    type: Date,
    required: true, // This field is mandatory
    default: Date.now, // Default to current date/time if not provided
  },
  expiresAt: {
    type: Date,
    required: true, // This field is mandatory
    default: thirtyDaysFromNow, // Default to 30 days from creation
  },
});

/**
 * Mongoose Model for Session documents
 * Provides the interface to interact with the sessions collection in MongoDB
 */
const SessionModel = mongoose.model<SessionDocument>("Session", sessionSchema);

export default SessionModel;
