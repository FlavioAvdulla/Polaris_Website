import React, { useState } from "react";
import axios from "axios";
import Google_Logo from "../../../assets/images/Google_Logo.svg";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

interface RegisterProps {
  setShowSignIn: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setShowSignIn, setShowRegister }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleSignInOpen = () => {
    setShowRegister(false);
    setShowSignIn(true);
  };

  const handleClose = () => {
    setShowRegister(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match!", type: "error" });
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:4004/auth/register", {
        email,
        password,
        confirmPassword
      });
      console.log("Registration successful:", response.data);
      setMessage({ text: "Registration successful! Redirecting to sign in...", type: "success" });
      
      // Redirect to sign in after a delay
      setTimeout(() => {
        setShowRegister(false);
        setShowSignIn(true);
      }, 1500);
    } catch (error: any) {
      console.error("Error during registration:", error);
      setMessage({
        text: error.response?.data?.message || "An unexpected error occurred. Please try again.",
        type: "error"
      });
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
              <h1 className="font-camptonBook text-[25px] ml-5">Register</h1>
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5">Confirm Password</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="password"
                placeholder="Confirm your Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            {/* Message display */}
            {message && (
              <div 
                className={`flex w-[100%] h-[45px] rounded-full p-5 items-center ${
                  message.type === "success" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}
              >
                <p className="font-camptonBook">{message.text}</p>
              </div>
            )}
            <button
              className="flex items-center justify-center border-primary border-[1px] text-white duration-300
                          text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                          hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary"
              type="submit"
              disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
            <div className="flex w-[100%] h-auto justify-center">
              <p className="xs:text-[12px] md:text-[16px]">Already have an account?</p>
              <button className="outline-none border-none underline-offset-1">
                <p
                  className="ml-2 text-primary xs:text-[12px] md:text-[16px]"
                  onClick={handleSignInOpen}
                >
                  Sign in
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

export default Register;