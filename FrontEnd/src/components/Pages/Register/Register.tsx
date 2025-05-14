import React, { useState } from "react";
import axios from "axios";
import Google_Logo from "../../../assets/images/Google_Logo.svg";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

// Translation
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
        
        <div className="flex p-5 h-auto rounded-xl bg-white xs:w-[95%] md:w-[350px]
                        dark:bg-darkColor">
          <form
            className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]"
            onSubmit={handleSubmit}>
            <div className="flex w-[100%] h-auto items-center justify-between">
              <h1 className="font-camptonBook text-[20px] ml-5 dark:text-white">{t("authentication.register")}</h1>
              <IoIosCloseCircle
                className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]
                           dark:text-secondary_01"
                onClick={handleClose}
              />
            </div>
            
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5 font-camptonBook
                            dark:text-white">{t("authentication.emailAddress")}</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                          dark:bg-gray-800"
                type="email"
                placeholder={t("authentication.enterEmail")}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5 font-camptonBook
                            dark:text-white">{t("authentication.password")}</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                           dark:bg-gray-800"
                type="password"
                placeholder={t("authentication.enterPassword")}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5 font-camptonBook
                            dark:text-white">{t("authentication.confirmPassword")}</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                           dark:bg-gray-800"
                type="password"
                placeholder={t("authentication.confirmPassword")}
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
                    : "bg-red-100 text-red-800 dark:text-secondary_01"
                }`}>
                <p className="font-camptonBook">{message.text}</p>
              </div>
            )}
            <button
              className="flex items-center justify-center border-primary border-[1px] text-white duration-300
                          text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                          hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                          dark:border-secondary_01 dark:bg-secondary_01 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white"
              type="submit"
              disabled={isLoading}>
              {isLoading ? t("authentication.registering") : t("authentication.register")}
            </button>

            <div className="flex w-[100%] h-auto justify-center">
              <p className="xs:text-[12px] md:text-[16px] font-camptonBook
                            dark:text-white">{t("authentication.alreadyHaveAnAccount")}</p>
              <button className="outline-none border-none underline-offset-1">
                <p
                  className="ml-2 text-primary xs:text-[12px] md:text-[16px]
                             dark:text-secondary_01"
                  onClick={handleSignInOpen}>
                  {t("authentication.signIn")}
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