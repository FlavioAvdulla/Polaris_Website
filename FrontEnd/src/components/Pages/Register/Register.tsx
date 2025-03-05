import React from "react";

// Google Logo
import Google_Logo from "../../../assets/images/Google_Logo.svg"

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

const Register = ({setShowSignIn, setShowRegister}) => {

    const handleSignInOpen = () => {
      setShowRegister(false);
      setShowSignIn(true);
    }

    const handleClose = () => {
      setShowRegister(false)
    }

  return (
    <div className="flex fixed items-center z-20 w-[100%] h-[100%]">
      <div className="flex mx-auto justify-center items-center z-10">
        {/* ============= Register Modal ============= */}
        <div className="flex p-5 h-auto rounded-xl bg-white
        
                        xs:w-[95%]
                        md:w-[350px]">
          {/* ============= Input Section ============= */}
          <div className="flex flex-col items-center justify-center gap-4 w-[100%] h-[100%]">
            {/* ============= Sign In Title ============= */}
            <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[25px] ml-5">Register</h1>
            <i><IoIosCloseCircle className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300
                                            hover:rotate-[180deg]" onClick={handleClose}/></i>
            </div>
            {/* ============= Fullname Input ============= */}
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5">Fullname</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="text"
                name="fullname"
                placeholder="Enter your Fullname"
                required
              />
              </div>
            {/* ============= Email Input ============= */}
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5">Email Address</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="email"
                name="Email"
                placeholder="Enter your Email"
                required
              />
            </div>
            {/* ============= Password Input ============= */}
            <div className="flex flex-col w-[100%] gap-2">
              <h2 className="ml-5">Password</h2>
              <input
                className="w-[100%] h-[45px] rounded-full font-camptonLight bg-gray-100 p-5 outline-none border-none"
                type="password"
                name="Password"
                placeholder="Enter your Password"
                required
              />
            </div>
            {/* ============= Sign in Button ============= */}
            <button
              className="flex items-center justify-center border-primary border-[1px] text-white duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                                hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary">
              Register
            </button>
            {/* ============= OR ============= */}
            <div className="flex w-[80%] gap-5 items-center">
              <div className="h-[0.5px] w-[100%] bg-black" />
              <p>OR</p>
              <div className="h-[0.5px] w-[100%] bg-black" />
            </div>
            {/* ============= Google Register ============= */}
            <button
              className="flex items-center gap-3 justify-center border-primary border-[1px] duration-300 text-[17px] w-[100%] h-[45px] bg-transparent rounded-full">
                <img className="w-[25px] h-auto" src={Google_Logo} alt="Google_Logo" />
                <p className="
                
                              xs:text-[14px]
                              md:text-[16px]">Register with google</p>
            </button>
          <div className="flex w-[100%] h-auto justify-center">
            <p className="
            
                          xs:text-[12px]
                          md:text-[16px]">Already have an account?</p>
            <button className="outline-none border-none underline-offset-1">
                <p className="ml-2 text-primary font-camptonLight
                
                              xs:text-[12px]
                              md:text-[16px]" onClick={handleSignInOpen}>Sign in</p></button>
          </div>
          </div>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]" />
    </div>
  );
};

export default Register;
