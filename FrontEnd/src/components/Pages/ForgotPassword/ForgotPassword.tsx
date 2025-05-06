import React, { useState } from "react";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

const ForgotPassword = ({
  setShowSignIn,
  setShowRegister,
  setShowForgotPassword,
}) => {
  const handleSignInOpen = () => {
    setShowRegister(false);
    setShowSignIn(true);
  };

  const handleClose = () => {
    setShowForgotPassword(false);
  };

  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex fixed items-center z-20 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">

        <div className="flex flex-col gap-10 p-5 h-auto rounded-xl bg-white xs:w-[95%] md:w-[350px]">
          <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[25px] ml-5">
              Reset Password.
            </h1>
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

          <button
            className="flex items-center justify-center border-primary border-[1px] text-white duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                        hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary">
            <p className="ml-2 xs:text-[12px] md:text-[16px] font-camptonBook">
              Reset Password
            </p>
          </button>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" />
    </div>
  );
};

export default ForgotPassword;
