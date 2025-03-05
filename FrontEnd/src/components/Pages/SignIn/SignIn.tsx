import React from "react";

// Google Logo
import Google_Logo from "../../../assets/images/Google_Logo.svg"

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

const SignIn = ({setShowSignIn, setShowRegister}) => {

    const handleRegisterOpen = () => {
        setShowSignIn(false);
        setShowRegister(true);
    }

    const handleClose = () => {
        setShowSignIn(false)
    }

  return (
    <div className="flex fixed items-center z-10 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">
        {/* ============= SignIn Modal ============= */}
        <div className="flex p-5 w-[420px] h-[550px] rounded-xl bg-white">
          {/* ============= Input Section ============= */}
          <div className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]">
            {/* ============= Sign In Title ============= */}
            <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[25px] ml-5">Sign In</h1>
            <i><IoIosCloseCircle className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300
                                            hover:rotate-[180deg]" onClick={handleClose}/></i>
            </div>
            {/* ============= Email Input ============= */}
            <div className="flex flex-col w-[100%] gap-4">
              <h2 className="ml-5">Email Address</h2>
              <input
                className="w-[100%] h-[55px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="email"
                name="Email"
                placeholder="Enter your Email"
                required
              />
            </div>
            {/* ============= Password Input ============= */}
            <div className="flex flex-col w-[100%] gap-4">
              <h2 className="ml-5">Password</h2>
              <input
                className="w-[100%] h-[55px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="password"
                name="Password"
                placeholder="Enter your Password"
                required
              />
            </div>
            {/* ============= Sign in input ============= */}
            <button
              className="flex items-center justify-center border-primary border-[1px] text-white duration-300 text-[17px] w-[100%] h-[55px] bg-primary rounded-full
                                hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary">
              SIGN IN
            </button>
            {/* ============= OR ============= */}
            <div className="flex w-[80%] gap-5 items-center">
              <div className="h-[0.5px] w-[100%] bg-black" />
              <p>OR</p>
              <div className="h-[0.5px] w-[100%] bg-black" />
            </div>
            {/* ============= Password Input ============= */}
            <button
              className="flex items-center gap-5 justify-center border-primary border-[1px] duration-300 text-[17px] w-[100%] h-[55px] bg-transparent rounded-full">
                <img className="w-[30px] h-auto" src={Google_Logo} alt="Google_Logo" />
                <p>Sign in with google</p>
            </button>
          <div className="flex w-[100%] h-auto justify-center">
            <p>Don't have an account?</p>
            <button className="outline-none border-none underline-offset-1 underline-colo">
                <p className="ml-2 text-primary" onClick={handleRegisterOpen}>Register</p></button>
          </div>
          </div>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" />
    </div>
  );
};

export default SignIn;
