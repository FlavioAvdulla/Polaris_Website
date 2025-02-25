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
          
                                              xs:text-[10px]
                                              md:text-[18px]
                                              lg:text-[15px]
                                              xl:text-[17px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                            xs:text-[10px]
                                            md:text-[18px]
                                            lg:text-[15px]
                                            xl:text-[17px]" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[10px]
                                              md:text-[18px]
                                              lg:text-[15px]
                                              xl:text-[17px]" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center justify-between mb-20
    
                    xs:flex-col
                    xl:flex-row">
      <div className="flex gap-5
                      
                      xs:flex-col
                      lg:flex-row">
      <Carousel_03 />
      <Carousel_04 /> 
      </div>
      <div className="gap-5 flex flex-col
      
                      xs:w-[100%]
                      lg:w-[100%]
                      lg:grid lg:grid-cols-2
                      xl:flex xl:flex-col xl:h-[700px] xl:w-[60.66%]">
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
                            xl:w-full xl:h-full
                            2xl:w-[75%]"
                />
              </div>
              {/* ============= Section - right - 01 - Info ============= */}
              <div className="flex flex-col w-[60%] h-[100%] py-3 justify-center
                              
                              xs:px-2 xs:gap-1
                              sm:px-4 sm:gap-2
                              md:px-6 
                              lg:px-2 lg:gap-1
                              xl:px-6">
                {/* ============= Stars ============= */}
                <div className="flex gap-2 items-center">
                  {getStars(product.rating)}
                  <p className="font-camptonBook mt-[3px]
                                
                                xs:text-[10px]
                                md:text-[15px]
                                lg:text-[11px]
                                xl:text-[12px]">
                    ({product.rating})
                  </p>
                </div>
                <h1 className="font-camptonMedium leading-tight
                
                                xs:text-[18px]
                                sm:text-[20px]
                                md:text-[27px]
                                lg:text-[22px]
                              
                                ">
                  {product.title}
                </h1>
                <p className="text-gray-500
                              
                              xs:text-[10px]
                              sm:text-[12px]
                              md:text-[20px]
                              lg:text-[15px]">
                  {product.description}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="font-camptonBold text-primary
                                
                                xs:text-[25px]
                                md:text-[35px]
                                lg:text-[25px]">
                    {product.offerPrice}
                  </p>
                  <div className="flex w-auto relative items-center">
                    <div className="absolute h-[1px] w-[100%] bg-primary"/>
                    <p className="text-gray-700
                    
                                  xs:text-[17px]
                                  md:text-[22px]
                                  lg:text-[20px]">
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
