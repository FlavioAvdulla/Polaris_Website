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
  // const handleProductClick = (id) => {
  //   console.log(`Image with ${id} clicked.`)
  //   if (id === "1") {
  //     navigate("/Product_01")
  //   }
  //   if (id === "2") {
  //     navigate("/Product_02")
  //   }
  //   if (id === "3") {
  //     navigate("/Product_04")
  //   }
  //   if (id === "4") {
  //     navigate("/Product_06")
  //   }
  //   if (id === "5") {
  //     navigate("/Product_04")
  //   }
  //   if (id === "6") {
  //     navigate("/Product_03")
  //   }
  //   if (id === "7") {
  //     navigate("/Product_05")
  //   }
  //   if (id === "8") {
  //     navigate("/Product_04")
  //   }
  // }

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
                      items-center rounded-lg border-[1px] border-primary cursor-pointer"
            key={index} onClick={() => handleProductClick(product._id)}>
            {/* ============= Section - right - 01 - Photo ============= */}
            <div className="flex w-[40%] h-[100%] items-center rounded-tl-lg rounded-bl-lg bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto rounded-tl-lg rounded-bl-lg"/>
            </div>
            {/* ============= Section - right - 01 - Info ============= */}
            <div className="flex flex-col w-[60%] h-[100%] p-3 justify-center gap-1">
              {/* ============= Stars ============= */}
              <div className="flex gap-2 items-center">
                {getStars(product.rating)}
                <p className="font-camptonBook mt-[2px]
                
                              xs:text-[10px]
                              xl:text-[13px]">({product.rating})</p>
              </div>
              <h1 className="text-[16px] font-camptonMedium leading-tight">
              {t(product.title)}
              </h1>
              <p className="text-gray-500 leading-tight
                            
                            xs:text-[12px] xs:w-[70%]
                            lg:w-[80%]
                            xl:text-[17px] xl:w-[70%]">{t(product.description)}</p>

              {/* ============= Price ============= */}
              <div className="flex items-center gap-4">
                <p className="font-camptonBold text-primary
                              
                              xs:text-[23px]
                              lg:text-[15px]
                              xl:text-[23px]">{product.offerPrice}</p>

                <div className="flex w-auto relative items-center">
                  <div className="absolute mt-[1px] h-[1.5px] w-[100%] bg-red-500"/>
                  <p className="text-gray-700

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
