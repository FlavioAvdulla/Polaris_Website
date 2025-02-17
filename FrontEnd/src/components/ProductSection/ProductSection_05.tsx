import React from "react";
import { Carousel_03 } from "../Shadcn-components/Carousel_03";
import { Carousel_04 } from "../Shadcn-components/Carousel_04";

// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import the product data.
import { productSection_05 } from "../../components/ProductSection/ProductSection";

const ProductSection_05 = () => {
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419]
          
                                              xs:text-[12px]
                                              md:text-[18px]
                                              lg:text-[12px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                            xs:text-[12px]
                                            md:text-[18px]
                                            lg:text-[12px]" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[12px]
                                              md:text-[18px]
                                              lg:text-[12px]" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center justify-between mb-20
    
                    xs:flex-col
                    xl:flex-row">
      <div className="flex gap-5 bg-slate-300
                      
                      xs:flex-col
                      lg:flex-row">
      <Carousel_03 />
      <Carousel_04 /> 
      </div>
      <div className="gap-5 w-[100%] bg-slate-400 flex flex-col
      
                      lg:grid lg:grid-cols-2 
                      xl:flex xl:flex-col xl:h-[700px]">
        {/* ============= Section - right ============= */}
        {productSection_05.map((product, index) => (
          <div
            className="flex flex-col w-[100%] justify-between gap-5 cursor-pointer overflow-hidden"
            key={index}
          >
            {/* ============= Section - right - 01 ============= */}
            <div className="flex w-[100%] h-[100%] bg-gray-100 items-center rounded-lg border-[1px] border-primary">
              {/* ============= Section - right - 01 - Photo ============= */}
              <div className="flex w-[40%] h-[100%] items-center justify-center rounded-tl-lg rounded-bl-lg bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover rounded-tl-lg rounded-bl-lg
                            
                            md:w-[80%] md:h-[80%]
                            xl:w-full xl:h-full"
                />
              </div>
              {/* ============= Section - right - 01 - Info ============= */}
              <div className="flex flex-col w-[60%] h-[100%] py-3 justify-center
                              
                              xs:px-4 xs:gap-1
                              sm:px-4 sm:gap-2
                              md:px-6 
                              lg:px-2 lg:gap-1
                              xl:lg:gap-2">
                {/* ============= Stars ============= */}
                <div className="flex gap-2 items-center">
                  {getStars(product.rating)}
                  <p className="font-camptonBook mt-[3px]
                                
                                xs:text-[12px]
                                lg:text-[11px]">
                    ({product.rating})
                  </p>
                </div>
                <h1 className="font-camptonMedium leading-tight
                
                                md:text-[16px]
                                lg:text-[14px]
                                xl:text-[16px]">
                  {product.title}
                </h1>
                <p className="text-gray-500
                              
                              xs:text-[12px]
                              md:text-[16px]
                              lg:text-[10px]
                              xl:text-[16px]">
                  {product.description}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="font-camptonMedium
                                
                                md:text-[20px]
                                lg:text-[17px]
                                xl:text-[20px]">
                    {product.offerPrice}
                  </p>
                  <div className="w-auto relative items-center">
                    <div className="absolute h-[1.5px] w-[100%] bg-red-500
                    
                                    xs:mt-[13px]
                                    lg:mt-[10px]
                                    xl:mt-[13px]"></div>
                    <p className="text-gray-700
                    
                                  md:text-[17px]
                                  lg:text-[14px]
                                  xl:text-[17px]">
                      {product.normalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_05;
