import { z } from "zod";

/**
 * Schema for validating email addresses
 * - Must be a valid email format
 * - Minimum 1 character, maximum 255 characters
 */
export const emailSchema = z.string().email().min(1).max(255);

/**
 * Schema for validating passwords
 * - Minimum 6 characters, maximum 255 characters
 */
const passwordSchema = z.string().min(6).max(255);

/**
 * Schema for user login requests
 * Validates:
 * - Email format and length
 * - Password length requirements
 * - Optional user agent string for session tracking
 */
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  userAgent: z.string().optional(),
});

/**
 * Schema for user registration requests
 * Extends login schema with password confirmation
 * Includes custom validation to ensure passwords match
 */
export const registerSchema = loginSchema
  .extend({
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Specifies which field the error should be attached to
  });

/**
 * Schema for verification codes (email verification, password reset, etc.)
 * - Minimum 1 character, maximum 24 characters
 */
export const verificationCodeSchema = z.string().min(1).max(24);

/**
 * Schema for password reset requests
 * Validates:
 * - New password meets complexity requirements
 * - Verification code format and length
 */
export const resetPasswordSchema = z.object({
  password: passwordSchema,
  verificationCode: verificationCodeSchema,
});
