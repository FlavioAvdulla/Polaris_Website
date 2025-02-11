import React from "react";

// Shadcn
import { SelectLanguage } from "../Shadcn-components/SelectLanguage";
import { SelectCurrency } from "../Shadcn-components/SelectCurrency";

// React Icons
import { BsBrightnessHigh } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

const Navbar_01 = () => {
  return (
    <div className="flex w-[85%] h-auto py-5 mx-auto justify-between">
      <div className="flex gap-7 w-fit">
        <button className="font-camptonLight">
          <p className="text-[14px] hover:text-primary ease-in-out duration-300">Track Order</p>
        </button>
        <button className="font-camptonLight">
          <p className="text-[14px] hover:text-primary ease-in-out duration-300">About Us</p>
        </button>
        <button className="font-camptonLight">
          <p className="text-[14px] hover:text-primary ease-in-out duration-300">Contact</p>
        </button>
        <button className="font-camptonLight ">
          <p className="text-[14px] hover:text-primary ease-in-out duration-300">FAQ</p>
        </button>
      </div>
      <div className="flex gap-7 items-center">
        <button className="font-camptonLight flex gap-2 items-center">
        <i>
            <BsPhone className="text-[15px]" />
          </i>
          <p className="text-[14px]">
            You can contact us
            <span className="font-camptonMedium bg-gray-100 rounded-md
                              text-primary px-2 py-1 ml-3 text-[14px]">
              +355 67 63 11 918
            </span>
          </p>
        </button>
        <div className="h-[60%] w-[1px] bg-gray-300" />
        <button className="font-camptonLight ">
          <SelectLanguage />
        </button>
        <button className="font-camptonLight">
          <SelectCurrency />
        </button>
        <button className="font-camptonLight group flex items-center gap-2">
          <i>
            <BsBrightnessHigh className="bg-gray-100 w-auto h-auto p-1 rounded-md text-[15px]
                                          group-hover:text-primary ease-in-out duration-300" />
          </i>
          <p className="text-[14px] group-hover:text-primary ease-in-out duration-300">Light Theme</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar_01;
