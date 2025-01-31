import React from "react";

// Polaris Logo
import Polaris_Logo from "../../assets/images/Polaris_Logo.svg";

// React Icons
import { SearchBarSelect } from "../Shadcn-components/SearchBarSelect";
import { IoIosSearch } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";

const Navbar_02 = () => {
  return (
    <div className="flex w-[85%] h-auto py-0 mx-auto bg-slate-100 items-center justify-between">
      <img className="w-[110px]" src={Polaris_Logo} alt="Polaris_Logo" />
      <div className="w-auto h-full flex">
        <SearchBarSelect />
        <input
          className="w-[500px] py-3 px-5 appearance-none border-[1px]
                    border-primary border-r-0 outline-none focus:ring-0
                    focus:bg-white font-camptonLight bg-white"
          type="search"
          id="search"
          name="search"
          placeholder="Search for products..."
        ></input>
        <i
          className="bg-white text-primary text-[30px] p-3 border-primary
                        border-[1px] border-l-0 rounded-tr-md rounded-br-md
                        items-center justify-center flex"
        >
          <IoIosSearch className="text-[20px]" />
        </i>
      </div>
      <div className="w-auto h-[100%] flex bg-slate-300 gap-5">
        {/* ============= User ============= */}
        <div className="flex items-center justify-center gap-3 bg-slate-400">
          <i>
            <PiUser className="text-[28px]" />
          </i>
          <div className="flex flex-col">
            <p className="font-camptonLight">Sign In</p>
            <p className="font-camptonMedium">Account</p>
          </div>
        </div>
        {/* ============= Heart Icon ============= */}
        <div className="flex items-center justify-center">
          <i><PiHeartStraight className="text-[28px]"/></i>
          <div className="flex rounded-[100%] w-[25px] h-[25px] bg-primary items-center justify-center"><p className="text-white">3</p></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_02;
