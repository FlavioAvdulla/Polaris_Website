import React, { useEffect, useRef } from "react";

// React Icons
import { IoIosCloseCircle } from "react-icons/io";

const SignOut = ({ setShowSignOut, setIsSignedIn }) => {
  const handleSignOut = () => {
    setIsSignedIn(false);
    setShowSignOut(false);
    // Any other sign out logic (clear tokens, etc.)
  };

  const handleClose = () => {
    setShowSignOut(false);
  };

  {/* ============= Close when clicking outside ============= */}
  const signOutRef = useRef(null)
  const handleCloseOutside = (event) => {
    if (signOutRef.current && !signOutRef.current.contains(event.target)) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutside)
    return () => {
      document.removeEventListener("mousedown", handleCloseOutside)
    }
  })

  return (
    <div className="flex fixed items-center z-30 w-[100%] h-[100%]"
         onClick={(e) => e.stopPropagation()}>
      <div className="flex mx-auto justify-center items-center z-10">

        <div className="flex flex-col p-5 gap-10 h-auto rounded-xl bg-white
                        dark:bg-darkColor

                        xs:w-[95%]
                        md:w-[350px]">

          <div className="flex w-[100%] h-auto items-center justify-between">
            <h1 className="font-camptonBook text-[25px] ml-5
                           dark:text-white">Sign Out</h1>
            <IoIosCloseCircle
                className="text-primary mr-[15px] text-[30px] cursor-pointer duration-300 hover:rotate-[180deg]
                           dark:text-secondary_01"
                onClick={handleClose}/>
          </div>

          <p className="flex justify-center font-camptonBook
                        dark:text-white">Are you sure you want to sign out?</p>
          <button className="flex items-center justify-center border-primary border-[1px] text-white
                             duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                             hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                             dark:border-secondary_01 dark:bg-secondary_01 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white">
            <p className="font-camptonBook">Change Password</p>
          </button>
          <button className="flex items-center justify-center border-primary border-[1px] text-white
                             duration-300 text-[17px] w-[100%] h-[45px] bg-primary rounded-full
                             hover:bg-transparent hover:border-primary hover:border-[1px] hover:text-primary
                             dark:border-secondary_01 dark:bg-secondary_01 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white"
                  onClick={handleSignOut}>
            <p className="font-camptonBook">Sign Out</p>
          </button>
        </div>
      </div>
      <div className="flex fixed bg-black bg-opacity-60 w-[100%] h-[100%] backdrop-blur-[3px]"
           onClick={handleClose}/>
    </div>
  );
};

export default SignOut;
