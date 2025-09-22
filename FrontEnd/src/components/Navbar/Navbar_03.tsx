import { AllCategories } from "../Shadcn-components/AllCategories";
import { To, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { CiDiscount1 } from "react-icons/ci";

const Navbar_03 = () => {

  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("Home");
    } else if (path.includes("/Shop")) {
      setActiveSection("Shop");
    }
  }, [location]);

  const handleNavigation = (path: To) => {
    navigate(path);
  };

  return (
    <div
      className="bg-white bg-opacity-50 backdrop-blur-[15px] sticky
                 border-b-[1px] border-b-gray-400 mb-20 top-0 z-20
                 dark:bg-darkColor dark:bg-opacity-50 dark:border-b-gray-600">
      <div className="flex w-[85%] h-auto mx-auto items-center justify-between py-5

                      sm:gap-5
                      md:gap-0">
        <AllCategories onCategorySelect={undefined} />
        <div className="xs:w-auto
                        lg:w-[50%]">
          {/* ============= Navbar Pages ============= */}
          <ul className="flex justify-between

                         xs:hidden
                         lg:flex">
            {/* ============= Home Pages ============= */}
            <li className={`font-camptonBook cursor-pointer ease-in-out duration-300 hover:text-primary dark:text-white ${
                            activeSection === "Home" ? "active" : ""}`}
                onClick={() => {
                  setActiveSection("Home");
                  handleNavigation("/");
                }}>{t('navbar_03.home')}
            </li>
            {/* ============= Shop Pages ============= */}
            <li className={`font-camptonBook cursor-pointer ease-in-out duration-300 hover:text-primary dark:text-white ${
                            activeSection === "Shop" ? "active" : ""}`}
                onClick={() => {
                  setActiveSection("Shop");
                  handleNavigation("/Shop");
                }}>{t('navbar_03.shop')}
            </li>
            
            {/* ============= Computers Page ============= */}
            <li
              className={`font-camptonBook cursor-pointer ease-in-out duration-300 hover:text-primary dark:text-white ${
                activeSection === "Computers" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("Computers");
                handleNavigation("/Computers");
              }}>{t('navbar_03.computers')}
            </li>
            {/* ============= blog Pages ============= */}
            <li
              className={`font-camptonBook cursor-pointer ease-in-out duration-300 hover:text-primary dark:text-white ${
                activeSection === "Blog" ? "active" : ""}`}
              onClick={() => {
                setActiveSection("Blog");
                handleNavigation("/Blog");
              }}>Blog
            </li>
            <li
              className="font-camptonBook cursor-pointer ease-in-out duration-300
                         hover:text-primary active:text-primary">
              <p className="font-camptonBook
                          dark:text-white">{t('navbar_03.pages')}</p>
            </li>
          </ul>
        </div>
        {/* ============= best Discounts ============= */}
        <div className="flex w-auto h-[100%] items-center gap-2
                        cursor-pointer ease-in-out duration-300 hover:text-primary
                        xs:w-auto
                        lg:flex">
          <i className="dark:bg-gray-800 dark:text-white
                          
                        xs:bg-gray-100 xs:p-2 xs:text-primary xs:rounded-full">
            <CiDiscount1 className="sm:text-[20px]"/>
          </i>
          <p className="font-camptonBook
                        dark:text-white

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
