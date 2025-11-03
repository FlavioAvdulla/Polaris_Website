import React, { useEffect, useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import axios from "axios";

interface RegisterProps {
  setShowSignIn: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setShowSignIn, setShowRegister }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  {/* Outside click to Close Component */}

  const registerRef = useRef<HTMLDivElement>(null);

  const handleCloseOutside = (event: MouseEvent) => {
    if (registerRef.current && !registerRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutside)
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside)
    }
  }, [])

  return (
    <div className="flex fixed items-center z-30 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10" ref={registerRef}>
        
        <div className="flex p-5 h-auto rounded-xl bg-white
                        dark:bg-darkColor
                        
                        xs:w-[95%]
                        md:w-[350px]">
          <form
            className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]"
            onSubmit={handleSubmit}>
            <div className="flex w-[100%] h-auto items-center justify-between">
              <h1 className="font-camptonBook text-[20px] ml-5 dark:text-white">{t("authentication.register")}</h1>
              <IoIosCloseCircle
                className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]
                           dark:text-secondary_01"
                onClick={handleClose}/>
            </div>
            
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5 font-camptonBook dark:text-white">{t("authentication.emailAddress")}</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                          dark:bg-gray-800 dark:text-white"
                type="email"
                placeholder={t("authentication.enterEmail")}
                required
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            {/* Password Field with Show/Hide */}
            <div className="flex flex-col w-[100%] gap-2 relative">
              <h2 className="ml-5 font-camptonBook dark:text-white">{t("authentication.password")}</h2>
              <div className="relative">
                <input
                  className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 pr-12 outline-none border-none
                            dark:bg-gray-800 dark:text-white
                            [&::-webkit-contacts-auto-fill-button]:hidden
                            [&::-webkit-credentials-auto-fill-button]:hidden
                            [&::-ms-reveal]:hidden"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("authentication.enterPassword")}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500
                             hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-4.24-4.242m9.9 2.121a3 3 0 11-4.243 4.243m4.242-4.242a3 3 0 004.243 4.243" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field with Show/Hide */}
            <div className="flex flex-col w-[100%] gap-2 relative">
              <h2 className="ml-5 font-camptonBook dark:text-white">{t("authentication.confirmPassword")}</h2>
              <div className="relative">
                <input
                  className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 pr-12 outline-none border-none
                            dark:bg-gray-800 dark:text-white
                            [&::-webkit-contacts-auto-fill-button]:hidden
                            [&::-webkit-credentials-auto-fill-button]:hidden
                            [&::-ms-reveal]:hidden"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t("authentication.confirmPassword")}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500
                             hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}>
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-4.24-4.242m9.9 2.121a3 3 0 11-4.243 4.243m4.242-4.242a3 3 0 004.243 4.243" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Message display */}
            {message && (
              <div className={`flex w-[100%] h-[45px] rounded-full p-5 items-center
                    ${message.type === "success" ? "bg-green-100 text-green-800 dark:text-green-500" : "bg-red-100 text-red-800 dark:text-secondary_01"}`}>
                <p className="font-camptonBook">{message.text}</p>
              </div>
            )}

            <button className="flex items-center justify-center border-primary border-[1px] text-white duration-300 font-camptonBook
                         text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                         hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                         dark:border-secondary_01 dark:bg-secondary_01 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white"
                    type="submit"
                    disabled={isLoading}>
              {isLoading ? t("authentication.registering") : t("authentication.register")}
            </button>

            <div className="flex w-[100%] h-auto justify-center">
              <p className="font-camptonBook
                            dark:text-white

                            xs:text-[12px]
                            md:text-[16px]">{t("authentication.alreadyHaveAnAccount")}</p>
              <button className="outline-none border-none underline-offset-1">
                <p className="ml-2 text-primary font-camptonBook
                              dark:text-secondary_01

                              xs:text-[12px]
                              md:text-[16px]"
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