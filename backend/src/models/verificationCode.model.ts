import mongoose from "mongoose";
import VerificationCodeType from "../constants/verificationCodeType";

/**
 * Interface representing a Verification Code document in MongoDB
 * Extends mongoose.Document to inherit Mongoose document properties and methods
 * 
 * This collection stores verification codes used for various purposes like:
 * - Email verification
 * - Password reset
 * - Two-factor authentication
 */
export interface VerificationCodeDocument extends mongoose.Document {
  /** Reference to the User ID associated with this verification code */
  userId: mongoose.Types.ObjectId;

  /** Type of verification code (determines its purpose and validation rules) */
  type: VerificationCodeType;

  /** Timestamp when the verification code expires and becomes invalid */
  expiresAt: Date;

  /** Timestamp when the verification code was created */
  createdAt: Date;
}

/**
 * Mongoose schema definition for Verification Code documents
 * Defines the structure, types, and options for verification code data stored in MongoDB
 */
const verificationCodeSchema = new mongoose.Schema<VerificationCodeDocument>({
  userId: {
    ref: "User", // Reference to the User model for population
    type: mongoose.Schema.Types.ObjectId, // MongoDB ObjectId type
    required: true, // Mandatory field - every code must be associated with a user
    index: true, // Create an index for faster queries on userId
  },
  type: {
    type: String,
    required: true, // Mandatory field - must specify the code type
    // Expected to be one of the values from VerificationCodeType enum
  },
  createdAt: {
    type: Date,
    required: true, // Mandatory field
    default: Date.now // Default to current date/time if not provided
  },
  expiresAt: {
    type: Date,
    required: true // Mandatory field - must have an expiration time
    // Note: No default value - must be explicitly set when creating a code
  },
});

/**
 * Mongoose Model for Verification Code documents
 * Provides the interface to interact with the verification_codes collection in MongoDB
 * 
 * @param "VerificationCode" - Name of the model
 * @param verificationCodeSchema - Schema definition
 * @param "verification_codes" - Custom collection name (optional third parameter)
 *                If omitted, Mongoose would use pluralized lowercase "verificationcodes"
 */
const VerificationCodeModel = mongoose.model<VerificationCodeDocument>(
  "VerificationCode",
  verificationCodeSchema,
  "verification_codes" // Explicit collection name for better readability
);
export default VerificationCodeModel;
