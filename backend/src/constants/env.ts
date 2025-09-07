/**
 * Retrieves an environment variable with optional default value.
 * Throws an error if the environment variable is undefined and no default is provided.
 * 
 * @param key - The name of the environment variable to retrieve
 * @param defaultValue - Optional default value to use if the environment variable is not set
 * @returns The value of the environment variable or the default value
 * @throws {Error} If the environment variable is undefined and no default value is provided
 */
const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

// Application runtime environment (defaults to 'development')
export const NODE_ENV = getEnv("NODE_ENV", "development");
// Port number the server will listen on (defaults to 4004)
export const PORT = getEnv("PORT", "4004");
// MongoDB connection string (required)
export const MONGO_URI = getEnv("MONGO_URI");
// Frontend application origin URL for CORS configuration (required)
export const APP_ORIGIN = getEnv("APP_ORIGIN");
// Secret key for signing JWT access tokens (required)
export const JWT_SECRET = getEnv("JWT_SECRET");
// Secret key for signing JWT refresh tokens (required)
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
// Email address that will appear as the sender in outgoing emails (required)
export const EMAIL_SENDER = getEnv("EMAIL_SENDER");
// API key for Resend email service (required)
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");
