import { CookieOptions, Response } from "express";
import { fifteenMinutesFromNow, thirtyDaysFromNow } from "./date";

/**
 * Path where refresh token endpoint is located
 * Refresh tokens will only be sent to requests to this specific path
 */
export const REFRESH_PATH = "/auth/refresh";

/**
 * Default cookie options for both access and refresh tokens
 * These settings follow security best practices for authentication cookies
 */
const defaults: CookieOptions = {
  sameSite: "strict", // Prevents CSRF attacks by restricting cross-site requests
  httpOnly: true,     // Prevents JavaScript access, mitigating XSS attacks
  secure: true,       // Only sent over HTTPS, preventing man-in-the-middle attacks
};

/**
 * Returns cookie options specifically for access tokens
 * Access tokens are short-lived for security reasons
 * 
 * @returns CookieOptions - Configuration for access token cookies
 * 
 * @features
 * - Short expiration (15 minutes) limits damage if token is compromised
 * - Inherits secure defaults from base configuration
 */
export const getAccessTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: fifteenMinutesFromNow(), // Short-lived for enhanced security
});

/**
 * Returns cookie options specifically for refresh tokens
 * Refresh tokens are longer-lived but have additional security measures
 * 
 * @returns CookieOptions - Configuration for refresh token cookies
 * 
 * @features
 * - Longer expiration (30 days) for better user experience
 * - Restricted to refresh path only, limiting exposure
 * - Inherits secure defaults from base configuration
 */
export const getRefreshTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: thirtyDaysFromNow(),   // Longer-lived for session persistence
  path: REFRESH_PATH,             // Only sent to refresh endpoint, not all routes
});

/**
 * Sets both access and refresh tokens as HTTP-only cookies in the response
 * This is typically called after successful authentication or token refresh
 * 
 * @param params - Object containing response object and tokens
 * @returns Response - The Express response object for method chaining
 * 
 * @example
 * // After user login or token refresh
 * setAuthCookies({
 *   res,
 *   accessToken: newAccessToken,
 *   refreshToken: newRefreshToken
 * });
 * 
 * @security_benefits
 * - HTTP-only prevents XSS attacks from stealing tokens
 * - SameSite=strict prevents CSRF attacks
 * - Secure flag ensures HTTPS-only transmission
 * - Path restriction for refresh token limits exposure
 */
type Params = {
  res: Response;          // Express response object
  accessToken: string;    // JWT access token
  refreshToken: string;   // JWT refresh token
};
export const setAuthCookies = ({ res, accessToken, refreshToken }: Params) =>
  res
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions());

/**
 * Clears both access and refresh token cookies from the response
 * This is typically called during user logout or session termination
 * 
 * @param res - Express response object
 * @returns Response - The Express response object for method chaining
 * 
 * @example
 * // During logout
 * clearAuthCookies(res);
 * res.status(200).json({ message: "Logged out successfully" });
 * 
 * @note The path option must be specified when clearing the refresh token
 *       to match the path used when setting the cookie
 */
export const clearAuthCookies = (res: Response) =>
  res
    .clearCookie("accessToken")
    .clearCookie("refreshToken", { path: REFRESH_PATH }); // Path must match set path
