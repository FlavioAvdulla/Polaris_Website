export type createAccountParams = {
    email: string;
    password: string;
    userAgent?: string;
}

export const createAccount = async (data:createAccountParams) => {
    // Verify existing user doesnt exist
    // Creat user
    // create verification code
    // send verification email
    // create session
    // sign access token & refresh token
    // return user
}