/**
 * Returns a Date object representing 5 minutes ago from the current time
 * Useful for setting expiration times or calculating time windows in the past
 * 
 * @returns Date - A Date object 5 minutes in the past
 * 
 * @example
 * // Check if a token was issued within the last 5 minutes
 * const recentThreshold = fiveMinutesAgo();
 * if (token.issuedAt > recentThreshold) {
 *   // Token is recently issued
 * }
 */
export const fiveMinutesAgo = () => new Date(Date.now() - 5 * 60 * 1000);

/**
 * Returns a Date object representing 15 minutes from the current time
 * Commonly used for short-lived access tokens or temporary sessions
 * 
 * @returns Date - A Date object 15 minutes in the future
 * 
 * @example
 * // Set access token expiration
 * const accessTokenExpiry = fifteenMinutesFromNow();
 * const token = createToken({ exp: accessTokenExpiry });
 */
export const fifteenMinutesFromNow = () =>
  new Date(Date.now() + 15 * 60 * 1000);

/**
 * Returns a Date object representing 1 hour from the current time
 * Useful for medium-term caching, session timeouts, or temporary resources
 * 
 * @returns Date - A Date object 1 hour in the future
 * 
 * @example
 * // Set cache expiration for 1 hour
 * res.setHeader('Cache-Control', `max-age=3600, until=${oneHourFromNow()}`);
 */
export const oneHourFromNow = () => new Date(Date.now() + 60 * 60 * 1000);

/**
 * Returns a Date object representing 1 year from the current time
 * Typically used for long-term cookies, persistent storage, or "remember me" functionality
 * 
 * @returns Date - A Date object 1 year in the future
 * 
 * @example
 * // Set long-term "remember me" cookie
 * res.cookie('rememberToken', token, { expires: oneYearFromNow() });
 */
export const oneYearFromNow = () =>
  new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

/**
 * Returns a Date object representing 30 days from the current time
 * Commonly used for refresh tokens, monthly subscriptions, or temporary data retention
 * 
 * @returns Date - A Date object 30 days in the future
 * 
 * @example
 * // Set refresh token expiration
 * const refreshTokenExpiry = thirtyDaysFromNow();
 * await saveRefreshToken(userId, token, refreshTokenExpiry);
 */
export const thirtyDaysFromNow = () =>
  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

/**
 * Constant representing the number of milliseconds in one day
 * Useful for date calculations without having to recompute the value
 * 
 * @example
 * // Calculate date 7 days from now
 * const nextWeek = new Date(Date.now() + 7 * ONE_DAY_MS);
 * 
 * @example
 * // Calculate days between two dates
 * const daysDifference = (endDate - startDate) / ONE_DAY_MS;
 */
export const ONE_DAY_MS = 24 * 60 * 60 * 1000;
