import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AllCategories } from "../Shadcn-components/AllCategories";
// React Icons
import { CiDiscount1 } from "react-icons/ci";

// Translation
import { useTranslation } from 'react-i18next';

const Navbar_03 = () => {

  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/");

  // useEffect hook to update active section based on current URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("Home");
    } else if (path.includes("/Shop")) {
      setActiveSection("Shop");
    }
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="bg-white bg-opacity-50 backdrop-blur-[15px] sticky
                  border-b-[1px] border-b-gray-400 mb-20 top-0 z-10"
    >
      <div
        className="flex w-[85%] h-auto mx-auto items-center justify-between py-5
                      sm:gap-5
                      md:gap-0"
      >
        <AllCategories />
        <div
          className="
                        xs:w-auto
                        lg:w-[50%]"
        >
          {/* ============= Navbar Pages ============= */}
          <ul
            className="flex justify-between
                        xs:hidden
                        lg:flex"
          >
            {/* ============= Home Pages ============= */}
            <li
              className={`cursor-pointer ease-in-out duration-300 hover:text-primary ${
                activeSection === "Home" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("Home");
                handleNavigation("/");
              }}>{t('navbar_03.home')}
            </li>
            {/* ============= Shop Pages ============= */}
            <li
              className={`cursor-pointer ease-in-out duration-300 hover:text-primary ${
                activeSection === "Shop" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("Shop");
                handleNavigation("/Shop");
              }}>{t('navbar_03.shop')}
            </li>
            
            {/* ============= Computers Page ============= */}
            <li
              className={`cursor-pointer ease-in-out duration-300 hover:text-primary ${
                activeSection === "Computers" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("Computers");
                handleNavigation("/Computers");
              }}>{t('navbar_03.computers')}
            </li>
            {/* ============= blog Pages ============= */}
            <li
              className={`cursor-pointer ease-in-out duration-300 hover:text-primary ${
                activeSection === "Blog" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("Blog");
                handleNavigation("/Blog");
              }}>Blog
            </li>
            <li
              className="cursor-pointer ease-in-out duration-300
                      hover:text-primary active:text-primary"
            >
              <p className="font-camptonBook">{t('navbar_03.pages')}</p>
            </li>
          </ul>
        </div>
        {/* ============= best Discounts ============= */}
        <div
          className="flex w-auto h-[100%] items-center gap-2
                      cursor-pointer ease-in-out duration-300 hover:text-primary
                      xs:w-auto
                      lg:flex">
          <i
            className="xs:bg-gray-100 xs:p-2 xs:text-primary xs:rounded-full">
            <CiDiscount1
              className="
                          sm:text-[20px]"/>
          </i>
          <p
            className="font-camptonBook
                        xs:hidden
                        sm:flex
                        md:flex md:text-[16px]
                        2xl:text-[16px]">
            {t('navbar_03.bestDiscounts')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_03;
