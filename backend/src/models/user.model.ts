import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

/**
 * Interface representing a User document in MongoDB
 * Extends mongoose.Document to inherit Mongoose document properties and methods
 */
export interface UserDocument extends mongoose.Document {
  /** User's email address (must be unique) */
  email: string;
  /** Hashed password for authentication */
  password: string;
  /** Flag indicating if the user's email has been verified */
  verified: boolean;
  /** User role determining access permissions */
  role: "user" | "admin";
  /** Timestamp when the user account was created */
  createdAt: Date;
  /** Timestamp when the user account was last updated */
  updatedAt: Date;
  /**
   * Compares a plain text password with the hashed password
   * @param val - Plain text password to compare
   * @returns Promise that resolves to true if passwords match
   */
  comparePassword(val: string): Promise<boolean>;
  /**
   * Returns a user object without the password field for safe transmission
   * @returns User object with password omitted
   */
  omitPassword(): Pick<
    UserDocument,
    "_id" | "email" | "verified" | "role" | "createdAt" | "updatedAt" | "__v"
  >;
}

/**
 * Mongoose schema definition for User documents
 * Defines the structure, types, validation, and options for user data
 */
const userSchema = new mongoose.Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
    role: { type: String, required: true, default: "user", enum: ["user", "admin"] },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

/**
 * Pre-save middleware to hash the password before saving to database
 * Only hashes the password if it has been modified (or is new)
 */
userSchema.pre("save", async function (next) {
  // Skip hashing if password hasn't been modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hash the password and continue with the save operation
  this.password = await hashValue(this.password);
  return next();
});

/**
 * Instance method to compare provided password with stored hashed password
 * Uses bcrypt comparison for secure password verification
 */
userSchema.methods.comparePassword = async function (val: string) {
  return compareValue(val, this.password);
};

/**
 * Instance method to return a safe version of the user object without password
 * Useful for sending user data to clients without exposing sensitive information
 */
userSchema.methods.omitPassword = function () {
  // Convert Mongoose document to plain JavaScript object
  const user = this.toObject();

  // Remove the password field from the object
  delete user.password;

  // Return the sanitized user object
  return user;
};

// Create and export the User model based on the schema
const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;