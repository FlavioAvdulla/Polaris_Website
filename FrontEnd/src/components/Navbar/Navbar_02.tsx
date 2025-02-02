import React from "react";

// Polaris Logo
import Polaris_Logo from "../../assets/images/Polaris_Logo.svg";

// React Icons
import { SearchBarSelect } from "../Shadcn-components/SearchBarSelect";
import { IoIosSearch } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar_02 = () => {
  return (
    <div className="flex w-[85%] h-[45px] py-0 mx-auto items-center justify-between">
      <img className="w-[110px]" src={Polaris_Logo} alt="Polaris_Logo" />
      <div className="w-auto h-full flex">
        <SearchBarSelect />
        <input
          className="w-[600px] py-3 px-5 appearance-none border-[1px]
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
      <div className="w-auto h-[100%] flex gap-5">
        {/* ============= User ============= */}
        <div className="flex items-center justify-center gap-3">
          <i>
            <PiUser className="text-[28px]" />
          </i>
          <div className="flex flex-col">
            <p className="font-camptonLight text-[13px]">Sign In</p>
            <p className="font-camptonMedium text-[13px]">Account</p>
          </div>
        </div>
        {/* ============= Heart Icon ============= */}
        <div className="relative flex items-center justify-center">
          <i>
            <SlHeart className="text-[26px]" />
          </i>
          <div
            className="absolute top-0 ml-6 mt-1 flex rounded-full w-[18px] h-[18px]
                bg-primary items-center justify-center"
          >
            <p className="text-white text-[10px]">3</p>
          </div>
        </div>

        {/* ============= Cart Icon ============= */}
        <div className="relative flex items-center justify-center">
          <i>
            <PiShoppingCartLight className="text-[28px]" />
          </i>
          <div
            className="absolute top-0 ml-6 mt-1 flex rounded-full w-[18px] h-[18px]
                bg-primary items-center justify-center"
          >
            <p className="text-white text-[10px]">3</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-camptonLight text-[13px]">Total</p>
          <p className="font-camptonMedium text-[13px]">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_02;
