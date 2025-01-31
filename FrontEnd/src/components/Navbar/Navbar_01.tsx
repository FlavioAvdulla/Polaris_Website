import React from "react";

// React Icons
import { SelectLanguage } from "../Shadcn-components/SelectLanguage";
import { SelectCurrency } from "../Shadcn-components/SelectCurrency";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

const Navbar_01 = () => {
  return (
    <div className="flex w-full h-auto  p-5">
      <div className="flex gap-7  w-fit mx-auto justify-between">
        <button className="font-camptonLight">
          <p>Track Order</p>
        </button>
        <button className="font-camptonLight">
          <p>About Us</p>
        </button>
        <button className="font-camptonLight">
          <p>Contact</p>
        </button>
        <button className="font-camptonLight ">
          <p>FAQ</p>
        </button>
      </div>
      <div className="flex gap-7  w-fit mx-auto justify-between items-center">
        <button className="font-camptonLight flex gap-2 items-center">
        <i>
            <BsPhone className="text-[18px] " />
          </i>
          <p>
            You can contact us
            <span className="font-camptonMedium bg-gray-100 rounded-md px-2 py-1 ml-3">
              24/70 800 300-353
            </span>
          </p>
        </button>
        <div className="h-[100%] w-[1px]  " />
        <button className="font-camptonLight">
          <SelectLanguage />
        </button>
        <button className="font-camptonLight">
          <SelectCurrency />
        </button>
        <button className="font-camptonLight flex items-center gap-2">
          <i>
            <BsBrightnessHigh className="bg-gray-100 w-auto h-auto p-1 rounded-md text-[18px] " />
          </i>
          <p>Light Theme</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar_01;
