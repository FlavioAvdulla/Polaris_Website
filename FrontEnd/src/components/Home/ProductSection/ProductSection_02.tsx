import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// Translation
import { useTranslation } from 'react-i18next';

const ProductSection_02 = () => {

  const { t } = useTranslation();

  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || ""; // Retrieve saved active section or set default
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection); // Save active section on change
  }, [activeSection]);

  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Deals of the day - left ============= */}
      <div className="flex justify-between items-center mb-7
      
                      xs:flex-col xs:gap-5
                      md:flex-row">
        <h1
          className="font-camptonMedium
                     dark:text-white

                      xs:text-[17px]
                      md:text-[15px]
                      lg:text-[22px]
                      xl:text-[20px]">
          {t("productSection_02.dealsOfTheDay")}
        </h1>
        {/* ============= Deals of the day - right ============= */}
        <div
          className="flex items-center
                     dark:text-white

                     xs:gap-3
                     sm:gap-4
                     md:gap-7
                     lg:gap-10">
          {[
            { label: t("productSection_02.latestProducts"), path: "/deals/latest-products" },
            { label: t("productSection_02.topRating"), path: "/deals/top-rating" },
            { label: t("productSection_02.bestSelling"), path: "/deals/best-selling" },
          ].map(({ label, path }) => (
            <button
              key={label}
              className={`flex items-center rounded-full
                
                ${activeSection === label
                  ? "border-[1px] border-primary bg-primary text-white dark:border-secondary_01 dark:bg-secondary_01"
                  : ""}`}

              onClick={() => {
                navigate(path);
                setActiveSection(label); // Update the active section
              }}>
              <p className="
                          xs:text-[10px] w-auto xs:px-3 py-1
                          sm:text-[11px]
                          md:text-[15px] md:px-5 md:py-2
                          lg:text-[22px]
                          xl:text-[18px]">
                {label}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />
      {/* Outlet to display nested routes */}
      <Outlet />
    </div>
  );
};

export default ProductSection_02;
