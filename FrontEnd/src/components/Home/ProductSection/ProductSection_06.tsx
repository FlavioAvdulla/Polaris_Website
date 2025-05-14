import React from "react";
import { Carousel_05 } from "../../Shadcn-components/Carousel_05";

import { useNavigate } from "react-router-dom";

// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import the product data correctly
import { productSection_06 } from "./ProductSection";

// Translation
import { useTranslation } from 'react-i18next';

const ProductSection_05 = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    console.log(`Image with ${id} clicked.`);
    const routeMap = {
      "1": "/Product_01",
      "2": "/Product_02",
      "3": "/Product_04",
      "4": "/Product_06",
      "5": "/Product_04",
      "6": "/Product_03",
      "7": "/Product_05",
      "8": "/Product_04"
    };
    
    const route = routeMap[id];
    if (route) {
      navigate(route);
    }
  };

  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419]
          
                                              xs:text-[10px]
                                              md:text-[12px]
                                              xl:text-[17px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                            xs:text-[10px]
                                            md:text-[12px]
                                            xl:text-[17px]" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[10px]
                                              md:text-[12px]
                                              xl:text-[17px]" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center mb-20

                    xs:flex-col
                    lg:flex-row">
      {/* ============= Section - Left ============= */}
      <div className="gap-5 w-[100%]
      
                      xs:grid xs:grid-cols-1
                      md:grid md:grid-cols-2
                      lg:h-[600px]
                      xl:h-[700px]">
        {productSection_06.map((product, index) => (
          <div
            className="flex w-[100%] h-auto overflow-hidden bg-gray-100
                      items-center rounded-lg border-[1px] border-primary cursor-pointer
                      dark:bg-transparent dark:border-gray-600"
            key={index} onClick={() => handleProductClick(product._id)}>
            {/* ============= Section - right - 01 - Photo ============= */}
            <div className="flex w-[40%] h-[100%] items-center rounded-tl-lg rounded-bl-lg bg-transparent">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-tl-lg rounded-bl-lg"/>
            </div>
            {/* ============= Section - right - 01 - Info ============= */}
            <div className="flex flex-col w-[60%] h-[100%] p-3 justify-center gap-1
                            dark:bg-gray-800">
              {/* ============= Stars ============= */}
              <div className="flex gap-2 items-center">
                {getStars(product.rating)}
                <p className="font-camptonBook mt-[2px]
                              dark:text-white
                
                              xs:text-[10px]
                              xl:text-[13px]">({product.rating})</p>
              </div>
              <h1 className="text-[20px] font-camptonMedium leading-tight
                            dark:text-white">
              {t(product.title)}
              </h1>
              <p className="text-gray-500 leading-tight
                            dark:text-white
                            
                            xs:text-[12px] xs:w-[70%]
                            lg:w-[80%]
                            xl:text-[14px] xl:w-[70%]">{t(product.description)}</p>

              {/* ============= Price ============= */}
              <div className="flex items-center gap-4">
                <p className="font-camptonBold text-primary
                              dark:text-secondary_01
                              
                              xs:text-[23px]
                              lg:text-[15px]
                              xl:text-[23px]">{product.offerPrice}</p>

                <div className="flex w-auto relative items-center">
                  <div className="absolute mt-[1px] h-[1.5px] w-[100%] bg-red-500"/>
                  <p className="text-gray-800
                                dark:text-white

                                lg:text-[12px]
                                xl:text-[17px]">{product.normalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Carousel_05 />
    </div>
  );
};

export default ProductSection_05;
