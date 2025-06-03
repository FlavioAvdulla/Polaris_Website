import React, { useState } from "react";
import axios from "axios";
import Google_Logo from "../../../assets/images/Google_Logo.svg";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

// Translation
import { useTranslation } from 'react-i18next';

interface SignInProps {
  setShowSignIn: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
  setIsSignedIn: (signedIn: boolean) => void;
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
  const { t } = useTranslation();
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  // const handleSignInClose = () => {
  //   setShowSignIn(false);
  // };

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
    setMessage(null); // Clear previous messages

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
      // Close the modal after a delay on successful login
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

  return (
    <div className="flex fixed items-center z-30 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">

        <div className="flex p-5 h-auto rounded-xl bg-white xs:w-[95%] md:w-[350px]
                        dark:bg-darkColor">
          <form
            className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]"
            onSubmit={handleSubmit}>
            <div className="flex w-[100%] h-auto items-center justify-between">
              <h1 className="font-camptonBook text-[20px] ml-5
                             dark:text-white">{t("authentication.signIn")}</h1>
              <IoIosCloseCircle
                className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]
                            dark:text-secondary_01"
                onClick={handleClose}/>
            </div>

            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5
                          dark:text-white">{t("authentication.emailAddress")}</h2>
              <input className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                           dark:bg-gray-800"
                     type="email"
                     placeholder={t("authentication.enterEmail")}
                     required
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5 font-camptonBook
                          dark:text-white">{t("authentication.password")}</h2>
              <input className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none
                           dark:bg-gray-800"
                     type="password"
                     placeholder={t("authentication.enterPassword")}
                     required
                     onChange={(e) => setPassword(e.target.value)}/>
            </div>

            {/* Message display */}
            {message && (
              <div
                className={`flex w-[100%] h-[45px] rounded-full p-5 items-center ${
                  message.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-primary dark:text-secondary_01"
                }`}>
                {message.text}
              </div>
            )}
            <p className="ml-10 text-primary w-[100%] xs:text-[12px] md:text-[16px] cursor-pointer
                        dark:text-secondary_01"
               onClick={handleForgotPasswordOpen}>
               {t("authentication.forgotPassword")}
            </p>
            <button className="flex items-center justify-center border-primary border-[1px] text-white
                               duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                               hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                               dark:border-secondary_01 dark:bg-secondary_01 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white"
                    type="submit"
                    disabled={isLoading}>
                    {isLoading ? t("authentication.signingIn") : t("authentication.signIn")}
            </button>

            <div className="flex w-[80%] gap-5 items-center">
              <div className="h-[0.5px] w-[100%] bg-black
                              dark:bg-gray-600"/>
              <p className="font-camptonBook
                            dark:text-white">{t("authentication.or1")}</p>
              <div className="h-[0.5px] w-[100%] bg-black
                              dark:bg-gray-600"/>
            </div>
            <button className="flex items-center gap-3 justify-center border-primary border-[1px] duration-300
                               text-[17px] w-[100%] h-[45px] bg-transparent rounded-full
                               dark:border-gray-600">

              <img className="w-[25px] h-auto" src={Google_Logo} alt="Google_Logo"/>
              
              <p className="xs:text-[14px] md:text-[16px] font-camptonBook
                            dark:text-white">
              {t("authentication.signInWithGoogle")}
              </p>
            </button>
            <div className="flex w-[100%] h-auto justify-center">
              <p className="xs:text-[12px] md:text-[16px] font-camptonBook
                            dark:text-white">
              {t("authentication.dontHaveAnAccount")}
              </p>
              <button className="outline-none border-none underline-offset-1">
                <p className="ml-2 text-primary xs:text-[12px] md:text-[16px] font-camptonBook
                            dark:text-secondary_01"
                  onClick={handleRegisterOpen}>
                  {t("authentication.register")}
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