import React from "react";
import { bestSelling, latestProducts, topRating } from "../../ProductSection";
import { useNavigate } from "react-router-dom";
import ScrollManager from "@/ScrollManager/ScrollManager";

// React Icons
import { PiShoppingCartLight } from "react-icons/pi";

// Translation
import { useTranslation } from 'react-i18next';

const Best_Selling = () => {
  
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap = {
      "1": "/Product_03",
      "2": "/Product_04",
      "3": "/Product_01",
      "4": "/Product_05",
      "5": "/Product_05",
      "6": "/Product_06"
    }

    const route = routeMap[id];
    if (route) {
      navigate(route)
    }
  }

  return (
    <div className="flex flex-col w-[100%] mx-auto">
      <ScrollManager/>
      <div
        className="w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10
        
                  xs:grid-cols-1 xs:grid xs:gap-y-[60px]
                  md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                  xl:flex">
        {/* ============= Product List ============= */}
        {bestSelling.map((product, index) => (
          <div className="flex flex-col w-auto h-auto group relative border-[1px] border-primary cursor-pointer rounded-lg
          
                          dark:border-gray-600" key={index} onClick={() => handleImageClick(product._id)}>
            {/* ============= Image ============= */}
            <div className="flex rounded-tl-lg items-center justify-center rounded-tr-lg overflow-hidden">
              <img className="
              
                              
                              xs:h-auto
                              lg:w-[100%] w-[100%]
                              xl:w-[100%]" src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div className="flex flex-col  w-[100%] h-[140px] text-center p-4 bg-gray-100 justify-center rounded-br-lg rounded-bl-lg
                            group-hover:shadow-shadow-dark transition-all duration-300 z-10
                            dark:bg-gray-800
            
                            xs:text-[20px]
                            md:text-[18px]
                            lg:text-[20px]
                            xl:text-[17px]">
              <h1 className="flex mb-4 justify-center font-camptonBook
                             dark:text-white">{t(product.title)}</h1>
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center justify-center">
                <p className="font-camptonBold text-primary
                              dark:text-secondary_01
                
                              xs:text-[25px]
                              2xl:text-[25px]">{product.offerPrice}</p>
                <div className="flex w-auto relative items-center">
                  <div className="absolute h-[1px] w-[100%] bg-primary"/>
                  <p className="text-gray-700 rounded-br-lg rounded-bl-lg text-[17px]
                                  dark:text-white
                                ">{product.normalPrice}</p>
                </div>
              </div>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center
                         rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                         duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary
                         dark:bg-secondary_01 dark:border-secondary_01">
              <i>
                <PiShoppingCartLight className="text-[18px] text-white" />
              </i>
              <p className="text-white text-[13px] font-camptonBook">{t("productSection_02.addToCart")}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best_Selling;
