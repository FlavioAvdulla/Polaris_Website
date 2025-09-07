// Standard HTTP status codes for API responses

// Successful responses
export const OK = 200; // Standard response for successful requests
export const CREATED = 201; // Request succeeded and resource was created

// Client error responses
export const BAD_REQUEST = 400; // Server cannot process due to client error
export const UNAUTHORIZED = 401; // Authentication is required or has failed
export const FORBIDDEN = 403; // Client lacks necessary permissions
export const NOT_FOUND = 404; // Requested resource could not be found
export const CONFLICT = 409; // Request conflicts with current state
export const UNPROCESSABLE_CONTENT = 422; // Request well-formed but semantic errors
export const TOO_MANY_REQUESTS = 429; // Rate limiting - too many requests

// Server error response
export const INTERNAL_SERVER_ERROR = 500; // Generic server error

/**
 * Union type representing all available HTTP status codes
 * Useful for type-safe HTTP response handling throughout the application
 */
export type HttpStatusCode =
  | typeof OK
  | typeof CREATED
  | typeof BAD_REQUEST
  | typeof UNAUTHORIZED
  | typeof FORBIDDEN
  | typeof NOT_FOUND
  | typeof CONFLICT
  | typeof UNPROCESSABLE_CONTENT
  | typeof TOO_MANY_REQUESTS
  | typeof INTERNAL_SERVER_ERROR;
