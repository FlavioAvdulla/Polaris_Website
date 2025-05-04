import React, { useState } from "react";
import axios from "axios";
import Google_Logo from "../../../assets/images/Google_Logo.svg";
import { IoIosCloseCircle } from "react-icons/io";

interface SignInProps {
  setShowSignIn: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ setShowSignIn, setShowRegister }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterOpen = () => {
    setShowSignIn(false);
    setShowRegister(true);
  };

  const handleClose = () => {
    setShowSignIn(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:4004/auth/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      alert("Login successful!");
      setShowSignIn(false); // Close the modal on successful login
    } catch (error: any) {
      console.error("Error during login:", error);
      alert(error.response?.data?.message || "Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex fixed items-center z-20 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">
        <div className="flex p-5 h-auto rounded-xl bg-white xs:w-[95%] md:w-[350px]">
          <form
            className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]"
            onSubmit={handleSubmit}>
            <div className="flex w-[100%] h-auto items-center justify-between">
              <h1 className="font-camptonBook text-[25px] ml-5">Sign In</h1>
              <IoIosCloseCircle
                className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]"
                onClick={handleClose}
              />
            </div>
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5">Email Address</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="email"
                placeholder="Enter your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5">Password</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="password"
                placeholder="Enter your Password"
                required
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button
              className="flex items-center justify-center border-primary border-[1px] text-white duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary"
              type="submit"
              disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
            <div className="flex w-[80%] gap-5 items-center">
              <div className="h-[0.5px] w-[100%] bg-black" />
              <p>OR</p>
              <div className="h-[0.5px] w-[100%] bg-black" />
            </div>
            <button className="flex items-center gap-3 justify-center border-primary border-[1px] duration-300 text-[17px] w-[100%] h-[45px] bg-transparent rounded-full">
              <img className="w-[25px] h-auto" src={Google_Logo} alt="Google_Logo" />
              <p className="xs:text-[14px] md:text-[16px]">Sign in with Google</p>
            </button>
            <div className="flex w-[100%] h-auto justify-center">
              <p className="xs:text-[12px] md:text-[16px]">Don't have an account?</p>
              <button className="outline-none border-none underline-offset-1">
                <p
                  className="ml-2 text-primary xs:text-[12px] md:text-[16px]"
                  onClick={handleRegisterOpen}>
                  Register
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" />
    </div>
  );
};

export default SignIn;