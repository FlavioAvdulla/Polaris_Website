/**
 * Enum representing the types of verification codes used in the application.
 * 
 * Verification codes are used for various security and validation purposes,
 * typically sent via email or other communication channels to users.
 * 
 * Using a const enum provides better performance as it gets inlined during compilation.
 */
const enum VerificationCodeType {
  /**
   * Used for verifying a user's email address during registration
   * or when changing email addresses.
   */
  EmailVerification = "email_verification",
  /**
   * Used for resetting a user's password when they have forgotten it.
   * Provides a secure way to authenticate password change requests.
   */
  PasswordReset = "password_reset",
}

export default VerificationCodeType;
