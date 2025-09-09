import bcrypt from "bcrypt";

/**
 * Hashes a plain text value using bcrypt's secure hashing algorithm
 * Uses salt rounds to add randomness and protect against rainbow table attacks
 * 
 * @param val - The plain text value to hash (e.g., password, sensitive data)
 * @param saltRounds - Optional: Number of salt rounds for hashing complexity (default: 10)
 *                    Higher rounds = more secure but slower (10-12 is typical for production)
 * @returns Promise<string> - Resolves with the hashed value
 * 
 * @example
 * // Hash a password with default salt rounds (10)
 * const hashedPassword = await hashValue('userPassword123');
 * 
 * @example
 * // Hash with custom salt rounds for higher security
 * const hashedData = await hashValue('sensitiveValue', 12);
 * 
 * @throws {Error} - May throw if hashing fails (invalid input, memory issues, etc.)
 */
export const hashValue = async (val: string, saltRounds?: number) =>
  bcrypt.hash(val, saltRounds || 10);

/**
 * Compares a plain text value against a hashed value to verify if they match
 * Uses bcrypt's secure comparison that is resistant to timing attacks
 * 
 * @param val - The plain text value to verify (e.g., user input password)
 * @param hashedValue - The previously hashed value to compare against
 * @returns Promise<boolean> - Resolves with true if values match, false otherwise
 *                            Also returns false if comparison fails (e.g., invalid hash format)
 * 
 * @example
 * // Verify user login credentials
 * const isValid = await compareValue(inputPassword, storedHashedPassword);
 * if (isValid) {
 *   // Grant access
 * }
 * 
 * @note The .catch(() => false) ensures the function never throws and always returns a boolean,
 *       making it safe to use in authentication flows without try-catch blocks
 * 
 * Security features:
 * - Timing attack resistant: Comparison time is consistent regardless of input
 * - Safe error handling: Never reveals information about why comparison failed
 * - Automatic salt extraction: bcrypt handles salt retrieval from the hashed value
 */
export const compareValue = async (val: string, hashedValue: string) =>
  bcrypt.compare(val, hashedValue).catch(() => false);
