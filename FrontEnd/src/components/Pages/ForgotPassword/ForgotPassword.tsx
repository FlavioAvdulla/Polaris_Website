import React, { useState } from "react";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

// Translation
import { useTranslation } from 'react-i18next';

const ForgotPassword = ({
  setShowSignIn,
  setShowRegister,
  setShowForgotPassword
}) => {
  const handleSignInOpen = () => {
    setShowForgotPassword(false);
    setShowSignIn(true);
  };

  const { t } = useTranslation();

  const handleRegisterOpen = () => {
    setShowForgotPassword(false);
    setShowRegister(true);
  };

  const handleClose = () => {
    setShowForgotPassword(false);
  };

  // const [email, setEmail] = useState<string>("");

  return (
    <div className="flex fixed items-center z-20 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">

        <div className="flex flex-col gap-10 p-5 h-auto rounded-xl bg-white xs:w-[95%] md:w-[350px]
                        dark:bg-darkColor">
          <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[20px] ml-5
                            dark:text-white">
            {t("authentication.resetPassword")}
            </h1>
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
              className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="email"
              placeholder={t("authentication.enterEmail")}
              required
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="flex items-center justify-center border-primary border-[1px] text-white duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                        hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                        dark:border-secondary_01 dark:bg-secondary_01 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white">
              <p className="ml-2 xs:text-[12px] md:text-[16px] font-camptonBook
                            dark:text-white">
              {t("authentication.resetPassword")}
              </p>
            </button>
            <p className="font-camptonBook ml-5
            dark:text-white">
            {t("authentication.goBackTo")}{" "}
              <button className="text-primary
                                 dark:text-secondary_01" onClick={handleSignInOpen}>
              {t("authentication.signIn")}
              </button>{" "}
              {t("authentication.or2")}{" "}
              <button className="text-primary
                                 dark:text-secondary_01" onClick={handleRegisterOpen}>
              {t("authentication.signup")}
              </button>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" />
    </div>
  );
};

export default ForgotPassword;
