import resend from "../config/resend";
import { EMAIL_SENDER, NODE_ENV } from "../constants/env";

/**
 * Parameters interface for sending an email
 * @property to - Recipient email address
 * @property subject - Email subject line
 * @property text - Plain text version of the email content
 * @property html - HTML version of the email content
 */
type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

/**
 * Determines the appropriate "from" email address based on the environment
 * In development, uses a test email address to prevent sending to real recipients
 * In production, uses the configured email sender from environment variables
 * @returns The appropriate "from" email address
 */
const getFromEmail = () =>
  NODE_ENV === "development" ? "onboarding@com.dev" : EMAIL_SENDER;

/**
 * Determines the appropriate "to" email address based on the environment
 * In development, redirects all emails to a test address to prevent accidental sending
 * In production, uses the actual recipient email address
 * @param to - The intended recipient email address
 * @returns The appropriate "to" email address
 */
const getToEmail = (to: string) =>
  NODE_ENV === "development" ? "onboarding@com.dev" : to;

/**
 * Sends an email using the Resend email service
 * Automatically handles environment-specific email routing (development vs production)
 * @param params - Email parameters including recipient, subject, and content
 * @returns Promise that resolves to the email sending result
 */
export const sendMail = async ({ to, subject, text, html }: Params) =>
  await resend.emails.send({
    from: getFromEmail(),
    to: getToEmail(to),
    subject,
    text,
    html,
  });
