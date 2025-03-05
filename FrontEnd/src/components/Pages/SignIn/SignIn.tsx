import React from "react";

// Google Logo
import Google_Logo from "../../../assets/images/Google_Logo.svg"

const SignIn = (setShowSignIn, setShowRegister) => {
  return (
    <div className="flex fixed items-center z-10 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">
        {/* ============= SignIn Modal ============= */}
        <div className="flex p-3 w-[400px] h-[550px] rounded-xl bg-white">
          {/* ============= Input Section ============= */}
          <div className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]">
            <h1 className="font-camptonBook text-[30px]">SIGN IN</h1>
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
              <h2 className="ml-5">Email Address</h2>
              <input
                className="w-[100%] h-[55px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="password"
                name="Password"
                placeholder="Enter your Password"
                required
              />
            </div>
            {/* ============= Password Input ============= */}
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
            <p>Dont't have an account?</p>
            <button className="outline-none border-none underline-offset-1 underline-colo"><p className="ml-2 text-primary">Register</p></button>
          </div>
          </div>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-50 w-[100%] h-[100%] backdrop-blur-5" />
    </div>
  );
};

export default SignIn;
