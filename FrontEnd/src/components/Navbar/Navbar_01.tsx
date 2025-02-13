import React from "react";

// Shadcn
import { SelectLanguage } from "../Shadcn-components/SelectLanguage";
import { SelectCurrency } from "../Shadcn-components/SelectCurrency";

// React Icons
import { BsBrightnessHigh } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

const Navbar_01 = () => {
  return (
    <div
      className="flex w-[85%] h-auto py-5 mx-auto justify-between
    
                    xs:flex-col xs:items-center xs:gap-3 xs:w-[100%]
                    lg:flex-row
                    xl:flex-row
                    "
    >
      <div className="flex gap-7 w-fit">
        <button className="font-camptonLight">
          <p className="hover:text-primary ease-in-out duration-300
          
                        xs:text-[12px]
                        md:text-[14px]">
            Track Order
          </p>
        </button>
        <button className="font-camptonLight">
          <p className="hover:text-primary ease-in-out duration-300
          
                        xs:text-[12px]
                        md:text-[14px]">
            About Us
          </p>
        </button>
        <button className="font-camptonLight">
          <p className="hover:text-primary ease-in-out duration-300
          
                        xs:text-[12px]
                        md:text-[14px]">
            Contact
          </p>
        </button>
        <button className="font-camptonLight">
          <p className="hover:text-primary ease-in-out duration-300
          
                        xs:text-[12px]
                        md:text-[14px]">
            FAQ
          </p>
        </button>
      </div>
      <div
        className="w-[45%] flex items-center justify-between

                   xs:gap-0 xs:w-[75%]
                   sm:w-[80%]
                   md:w-[60%]
                   lg:w-[45%]
                   xl:w-[50%]
                   ">
        <button className="font-camptonLight flex gap-2 items-center ">
          <i className="xs:bg-primary xs:p-2 xs:text-white xs:rounded-3xl
                          sm:hidden">
            <BsPhone className="text-[15px]"/>
          </i>
          <div className="flex items-center
          
                          lg:flex-col lg:gap-2
                          xl:flex-row">
          <p className="text-[14px]

                        xs:hidden
                        xl:flex">
            You can contact us
          </p>
            <p
              className="font-camptonMedium bg-gray-100 rounded-md
                              text-primary px-2 py-1 
                              
                              xs:hidden
                              sm:flex sm:text-[10px]
                              md:text-[14px]">

              +355 (0) 67 63 11 918
            </p>
            </div>
        </button>
        <div className="h-[60%] w-[1px]" />
        <button className="font-camptonLight">
          <SelectLanguage />
        </button>
        <button className="font-camptonLight">
          <SelectCurrency />
        </button>
      </div>
      <button className="font-camptonLight group flex items-center gap-2">
        <i>
          <BsBrightnessHigh
            className="bg-gray-100 w-auto h-auto p-1 rounded-md text-[15px]
                                          group-hover:text-primary ease-in-out duration-300"
          />
        </i>
        <p className="text-[14px] group-hover:text-primary ease-in-out duration-300">
          Light Theme
        </p>
      </button>
    </div>
  );
};

export default Navbar_01;
