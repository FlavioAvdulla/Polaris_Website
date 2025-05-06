import React from "react";
import { topRating } from "../../ProductSection";
import { useNavigate } from "react-router-dom";
import ScrollManager from "@/ScrollManager/ScrollManager";

// React Icons
import { PiShoppingCartLight } from "react-icons/pi";


// Translation
import { useTranslation } from 'react-i18next';

const Top_Rating = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap = {
      "1": "/Product_01",
      "2": "/Product_02",
      "3": "/Product_03",
      "4": "/Product_04",
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
      <ScrollManager />
      <div
        className="w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10
        
                  xs:grid-cols-1 xs:grid xs:gap-y-[60px]
                  md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                  xl:flex">
        {/* ============= Product List ============= */}
        {topRating.map((product, index) => (
          <div className="flex flex-col w-auto h-auto group relative border-[1px] border-primary cursor-pointer
                          rounded-lg" key={index} onClick={() => handleImageClick(product._id)}>
            {/* ============= Image ============= */}
            <div className="flex rounded-tl-lg items-center justify-center rounded-tr-lg overflow-hidden">
              <img className="
              
                              
                              xs:h-auto
                              lg:w-[100%] w-[100%]
                              xl:w-[100%]
                            bg-slate-500" src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div className="flex flex-col font-camptonMedium w-[100%] h-[140px] text-center p-4 bg-gray-100 justify-center rounded-br-lg rounded-bl-lg
                            group-hover:shadow-shadow-dark transition-all duration-300 
            
                            xs:text-[20px]
                            md:text-[18px]
                            lg:text-[20px]
                            xl:text-[17px]">
              <h1 className="flex mb-4 justify-center">{product.title}</h1>
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center justify-center">
                <p className="font-camptonBold text-primary
                
                              xs:text-[25px]
                              2xl:text-[25px]">{product.offerPrice}</p>
                <div className="flex w-auto relative items-center">
                  <div className="absolute h-[1px] w-[100%] bg-primary"/>
                  <p className="text-gray-700 rounded-br-lg rounded-bl-lg text-[20px]
                                ">{product.normalPrice}</p>
                </div>
              </div>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center -z-10
                         rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                         duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary"
            >
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

export default Top_Rating;
