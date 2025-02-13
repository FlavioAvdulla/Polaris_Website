import React from "react";
import { AllCategories } from "../Shadcn-components/AllCategories";

// React Icons
import { CiDiscount1 } from "react-icons/ci";

const Navbar_03 = () => {
  return (
    <div
      className="bg-white bg-opacity-50 backdrop-blur-[15px] sticky
                      border-b-[1px] border-b-gray-400 mb-20 top-0 z-20"
    >
      <div className="flex w-[85%] h-auto mx-auto items-center justify-between py-5">
        <AllCategories />
        <div className="w-[50%]">
          {/* ============= Navbar Pages ============= */}
          <ul
            className="flex justify-between
        
                        xs:hidden
                        lg:flex"
          >
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
            >
              <p className="font-camptonBook">Home</p>
            </li>
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
            >
              <p className="font-camptonBook">Shop</p>
            </li>
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
            >
              <p className="font-camptonBook">Laptops & Computers</p>
            </li>
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
            >
              <p className="font-camptonBook">Blog</p>
            </li>
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
            >
              <p className="font-camptonBook">Pages</p>
            </li>
          </ul>
        </div>
        {/* ============= best Discounts ============= */}
        <div
          className="flex w-auto h-[100%] items-center gap-2
                      cursor-pointer ease-in-out duration-300 hover:text-primary
                      
                      xs:hidden
                      lg:flex"
        >
          <i>
            <CiDiscount1 className="text-[20px]" />
          </i>
          <p className="font-camptonBook">Best Discounts</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_03;
