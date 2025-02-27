import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AllCategories } from "../Shadcn-components/AllCategories";
// React Icons
import { CiDiscount1 } from "react-icons/ci";

const Navbar_03 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/");

  // useEffect hook to update active section based on current URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("Home");
    }
  }, [location]);

  const handleHomeClick = () => {
    navigate("/");
    setActiveSection("Home");
  };

  return (
    <div
      className="bg-white bg-opacity-50 backdrop-blur-[15px] sticky
                  border-b-[1px] border-b-gray-400 mb-20 top-0 z-20"
    >
      <div className="flex w-[85%] h-auto mx-auto items-center justify-between py-5
                      sm:gap-5
                      md:gap-0">
        <AllCategories />
        <div className="
                        xs:w-auto
                        lg:w-[50%]">
          {/* ============= Navbar Pages ============= */}
          <ul
            className="flex justify-between
                        xs:hidden
                        lg:flex"
          >
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
              onClick={handleHomeClick}
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
                      xs:w-auto
                      lg:flex"
        >
          <i className="xs:bg-gray-100 xs:p-2 xs:text-primary xs:rounded-full
                          sm:bg-transparent sm:p-0 sm:text-black sm:rounded">
            <CiDiscount1 className="
                          sm:text-[20px]" />
          </i>
          <p className="font-camptonBook
                        xs:hidden
                        sm:flex
                        md:flex md:text-[10px]
                        2xl:text-[16px]">Best Discounts</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_03;
