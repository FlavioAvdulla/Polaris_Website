import VerificationCodeType from "../constants/verificationCodeTypes";
import UserModel from "../models/user.model";
import VerificationCodeModel from "../models/verificationCode.model";
import { oneYearFromNow } from "../utils/date";

export type createAccountParams = {
    email: string;
    password: string;
    userAgent?: string;
}

export const createAccount = async (data:createAccountParams) => {
    // Verify existing user doesnt exist
    const existingUser = await UserModel.exists({
        email:data.email
    })
    if (existingUser) {
        throw new Error("User already exists.")
    }
    // Creat user
    const user = await UserModel.create({
        email: data.email,
        password: data.password,
    })
    // create verification code
    const verificationCode = await VerificationCodeModel.create({
        userId: user._id,
        type: VerificationCodeType.EmailVerification,
        expiresAt: oneYearFromNow()
    })
    // send verification email
    // create session
    // sign access token & refresh token
    // return user
}