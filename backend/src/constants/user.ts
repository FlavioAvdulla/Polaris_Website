/**
 * Enum representing user roles in the application.
 * Used for role-based access control and permission management.
 */
export enum UserRole {
  /**
   * Administrator role with full system access
   * - Can manage all users and content
   * - Has access to administrative functions
   * - Can modify system settings
   */
  ADMIN = "admin",
   /**
   * Standard user role with basic permissions
   * - Can access personal account features
   * - Has limited access to system resources
   * - Default role for new users
   */
  USER = "user",
}