import React from "react";

import banner_01 from "../../assets/images/banner_01.jpg";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

const BannerSection = () => {
  return (
    <div className="flex w-[100%] h-auto mx-auto mt-20 mb-20">
      <div className="flex flex-col absolute justify-center
      
                      xs:w-[70%] xs:h-[150px] xs:pl-4 xs:gap-2
                      sm:w-[55%]
                      md:w-[55%] md:h-[300px] md:pl-16
                      lg:w-[45%] lg:h-[350px] lg:gap-3
                      xl:w-[35%] xl:h-[450px] xl:gap-5
                      2xl:w-[30%]">
        <p className="flex text-white gap-3 items-center
        
                      xs:text-[8px]
                      md:text-[12px]
                      lg:text-[18px]
                      xl:text-[20px]">
          Exclusive Offer
          <span className="rounded-3xl bg-primary border-[1px] cursor-pointer border-white text-white items-center justify-center
                          hover:bg-transparent hover:scale-110 ease-in-out duration-300
                          
                          xs:px-3 xs:py-[1px] xs:text-[8px]
                          md:text-[12px] md:px-6 md:py-[3px]
                          lg:text-[17px] ">
            -20% OFF
          </span>
        </p>
        <h1 className="text-white font-camptonBold leading-tight
        
                        
                        sm:text-[15px]
                        md:text-[35px]
                        lg:text-[40px]
                        xl:text-[50px]">
          SUPER FAST PERFORMANCE
        </h1>
        <p className="text-white
                      
                      xs:text-[8px]
                      sm:text-[8px]
                      md:text-[15px]
                      2xl:text-[17px]">
          We have prepared special discounts for you on electronic products.
          Don't miss these opportunities...
        </p>
        <div className="w-auto">
          <button
            className="flex items-center justify-center border-[1px] border-white text-white rounded-3xl
                        hover:scale-110 hover:border-[1px] bg-primary hover:bg-transparent ease-in-out duration-300
                        
                        xs:text-[8px] xs:px-2 xs:py-1
                        sm:mt-1
                        md:text-[12px] md:px-4 md:py-2 md:gap-3 md:mt-3
                        lg:text-[18px]
                        xl:text-[20px]">
            SHOW NOW
            <i>
              <IoIosArrowForward />
            </i>
          </button>
        </div>
      </div>
      <div className="flex w-[100%]
                      xs:h-[150px]
                      md:h-[300px]
                      lg:h-[350px]
                      xl:h-[450px]">
        <img className="relative -z-10 w-[100%] object-cover" src={banner_01} alt="banner_01" />
      </div>
    </div>
  );
};

export default BannerSection;
