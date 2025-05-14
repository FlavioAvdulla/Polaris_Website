import React from "react";
import { useNavigate } from "react-router-dom";

// React Icons
import { IoIosSearch } from "react-icons/io";

// Data
import { shopByCategories } from "./ProductSection";

// Translation
import { useTranslation } from 'react-i18next';

const ProductSection_04 = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap = {
      "1": "/Computers",
      "2": "/MobilesAndTablets",
      "3": "/GameAccessories",
      "4": "/CameraAndPhoto",
      "5": "/Electronics",
      "6": "/AudioAndHeadphones"
    }

    const route = routeMap[id];
    if (route) {
      navigate(route);
    }
  }

  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Shop by Categories - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                        dark:text-white
                      
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px] 
                        lg:text-[22px]">{t("productSection_04.shopByCategories")}</h1>

        <div className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit">

          <p className="text-gray-500
                        dark:text-white
                        
                          xs:text-[10px]
                          sm:text-[11px]
                          md:text-[15px]
                          xl:text-[18px]">
            {t("productSection_04.info")}
          </p>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                      dark:bg-gray-600" />
      <div className="flex w-[100%] h-auto mx-auto items-center justify-between mb-20 mt-10
      
                      xs:grid xs:grid-cols-1 xs:gap-y-[60px]
                      md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                      xl:flex">
        {/* ============= Product List ============= */}
        {shopByCategories.map((product, index) => (
          <div
            className="flex flex-col w-auto h-auto group relative border-[1px] border-primary rounded-lg cursor-pointer
                       dark:border-gray-600"
            key={index} onClick={() => handleImageClick(product._id)}>
            {/* ============= Image ============= */}
            <div className="flex w-[100%] h-auto rounded-tl-lg rounded-tr-lg overflow-hidden items-center justify-center bg-transparent">
              <img className="
                              xs:h-auto
                              lg:w-[90%] w-[100%]
                              xl:w-[100%]"
                              src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div
              className="flex flex-col w-[100%] h-auto p-4 bg-gray-100 justify-between rounded-br-lg rounded-bl-lg text-center
                  group-hover:shadow-shadow-dark transition-all duration-300 items-center
                  dark:bg-gray-800">
              <h1 className="mb-1 font-camptonMedium
                             dark:text-white
              
                            xs:text-[23px]
                            md:text-[17px]
                            lg:text-[20px]
                            xl:text-[16px]
                            2xl:text-[20px]">{t(product.title)}</h1>
              <p className="text-gray-500
                            dark:text-white
              
                            xs:text-[19px]
                            md:text-[17px]
                            lg:text-[16px]
                            xl:text-[14px]
                            2xl:text-[17px]">{product.quantity} {t("productSection_04.items")}</p>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center -z-10
                          rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                          duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary">
                            
              <i><IoIosSearch className="text-[18px] text-white" /></i>
              <p className="text-white">{t("productSection_04.viewMore")}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_04;
