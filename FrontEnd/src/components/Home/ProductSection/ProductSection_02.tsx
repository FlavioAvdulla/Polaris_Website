// Importing React hooks and routing dependencies
import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ScrollManager from "@/ScrollManager/ScrollManager";

// Translation functionality
import { useTranslation } from 'react-i18next';

const ProductSection_02 = () => {
  // Initialize translation hook
  const { t } = useTranslation();

  // State to track the active navigation section
  // Initialize from localStorage if available, otherwise empty string
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "";
  });

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Effect to set default section and navigate on component mount
  useEffect(() => {
    const defaultLabel = t("productSection_02.latestProducts");
    const defaultPath = "/deals/latest-products";
    
    // If no active section is set, set the default one
    if (!activeSection) {
      setActiveSection(defaultLabel);
      navigate(defaultPath);
    }
  }, [activeSection, navigate, t]);

  return (
    <div className="flex flex-col w-[85%] mx-auto">

      {/* Component to manage scroll behavior */}
      <ScrollManager/>
      {/* ============= Deals of the day - left ============= */}
      <div className="flex justify-between items-center mb-7

                      xs:flex-col xs:gap-5
                      md:flex-row">

        {/* Main heading */}
        <h1 className="font-camptonMedium
                       dark:text-white

                       xs:text-[17px]
                       md:text-[15px]
                       lg:text-[22px]
                       xl:text-[20px]">
          {t("productSection_02.dealsOfTheDay")}
        </h1>
        {/* ============= Deals of the day - right ============= */}
        <div className="flex items-center
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

              // Conditional styling based on active state
              className={`flex items-center rounded-full

                ${activeSection === label
                  ? "border-[1px] border-primary bg-primary text-white dark:border-secondary_01 dark:bg-secondary_01"
                  : ""}`}

              onClick={() => {
                navigate(path); // Navigate to the specified path
                setActiveSection(label); // Update active section state
              }}>
              <p className="xs:text-[10px] w-auto xs:px-3 py-1
                            sm:text-[11px]
                            md:text-[15px] md:px-5 md:py-2
                            lg:text-[22px]
                            xl:text-[18px]">{label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                      dark:bg-gray-600" />

      {/* Outlet to display nested route components */}
      <Outlet />
    </div>
  );
};

export default ProductSection_02;
