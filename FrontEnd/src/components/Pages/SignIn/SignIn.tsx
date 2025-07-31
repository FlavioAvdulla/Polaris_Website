import Google_Logo from "../../../assets/images/Google_Logo.svg";
import React, { useState, useRef, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import axios from "axios";

interface SignInProps {
  setShowSignIn: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
  setIsSignedIn: (signedIn: boolean) => void;
  setShowForgotPassword: (value: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({
  setShowSignIn,
  setShowRegister,
  setIsSignedIn,
  setShowForgotPassword
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleRegisterOpen = () => {
    setShowSignIn(false);
    setShowRegister(true);
  };

  const handleForgotPasswordOpen = () => {
    setShowSignIn(false);
    setShowForgotPassword(true);
  };

  const handleClose = () => {
    setShowSignIn(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:4004/auth/login", {
        email,
        password,
      });
      setIsSignedIn(true);
      setShowSignIn(false);
      console.log("Login successful:", response.data);
      setMessage({ text: "Login successful!", type: "success" });
      setTimeout(() => setShowSignIn(false), 1500);
    } catch (error: any) {
      console.error("Error during login:", error);
      setMessage({
        text:
          error.response?.data?.message ||
          "Invalid email or password. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  {/* ============= Close when clicking outside ============= */}
  const signInRef = useRef<HTMLDivElement>(null);
  
  const handleCloseOutside = (event: MouseEvent) => {
    if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutside);
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside);
    };
  }, []);

  return (
    <div className="flex fixed items-center z-30 w-[100%] h-[100%]"
      onClick={(e) => e.stopPropagation()}>
      <div className="flex mx-auto justify-center items-center z-10" ref={signInRef}>
        <div className="flex p-5 h-auto rounded-xl bg-white
                        dark:bg-darkColor

                        xs:w-[95%]
                        md:w-[350px]">
          <form
            className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]"
            onSubmit={handleSubmit}>
            <div className="flex w-[100%] h-auto items-center justify-between">
              <h1 className="font-camptonBook text-[20px] ml-5
                             dark:text-white">
                {t("authentication.signIn")}
              </h1>
              <IoIosCloseCircle className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]
                                           dark:text-secondary_01"
                                onClick={handleClose}/>
            </div>

            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5 dark:text-white">{t("authentication.emailAddress")}</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                           dark:bg-gray-800 dark:text-white"
                type="email"
                placeholder={t("authentication.enterEmail")}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col w-[100%] gap-2 relative">
              <h2 className="ml-5 font-camptonBook dark:text-white">
                {t("authentication.password")}
              </h2>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-4.24-4.242m9.9 2.121a3 3 0 11-4.243 4.243m4.242-4.242a3 3 0 004.243 4.243" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {message && (
              <div
                className={`flex w-[100%] h-[45px] rounded-full p-5 items-center ${
                  message.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-primary dark:text-secondary_01"
                }`}
              >
                {message.text}
              </div>
            )}

            <p 
              className="ml-10 text-primary w-[100%] xs:text-[12px] md:text-[16px] cursor-pointer dark:text-secondary_01"
              onClick={handleForgotPasswordOpen}
            >
              {t("authentication.forgotPassword")}
            </p>

            <button
              className="flex items-center justify-center border-primary border-[1px] text-white
                         duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                         hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                         dark:border-secondary_01 dark:bg-secondary_01 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? t("authentication.signingIn") : t("authentication.signIn")}
            </button>

            <div className="flex w-[80%] gap-5 items-center">
              <div className="h-[0.5px] w-[100%] bg-black dark:bg-gray-600"/>
              <p className="font-camptonBook dark:text-white">{t("authentication.or1")}</p>
              <div className="h-[0.5px] w-[100%] bg-black dark:bg-gray-600"/>
            </div>

            <button className="flex items-center gap-3 justify-center border-primary border-[1px] duration-300
                               text-[17px] w-[100%] h-[45px] bg-transparent rounded-full dark:border-gray-600">
              <img className="w-[25px] h-auto" src={Google_Logo} alt="Google_Logo"/>
              <p className="xs:text-[14px] md:text-[16px] font-camptonBook dark:text-white">
                {t("authentication.signInWithGoogle")}
              </p>
            </button>

            <div className="flex w-[100%] h-auto justify-center">
              <p className="font-camptonBook
                            dark:text-white

                            xs:text-[12px]
                            md:text-[16px]">
                {t("authentication.dontHaveAnAccount")}
              </p>
              <button className="outline-none border-none underline-offset-1">
                <p className="ml-2 text-primary font-camptonBook
                             dark:text-secondary_01
                  
                             xs:text-[12px]
                             md:text-[16px]"
                   onClick={handleRegisterOpen}>
                  {t("authentication.register")}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]"
           onClick={handleClose}
      />
    </div>
  );
};

export default SignIn;