import { NOT_FOUND, OK } from "../constants/http";
import UserModel from "../models/user.model";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";

/**
 * Handler to retrieve the authenticated user's profile information
 * - Fetches the user from the database using the userId from the request
 * - Returns the user data without the password field for security
 * - Throws a 404 error if the user is not found
 */
export const getUserHandler = catchErrors(async (req, res) => {
  // Find the user by ID from the authenticated request
  const user = await UserModel.findById(req.userId);

  // Assert that the user exists, otherwise throw a 404 error
  appAssert(user, NOT_FOUND, "User not found");
  
  // Return the user data with password omitted for security
  return res.status(OK).json(user.omitPassword());
});
