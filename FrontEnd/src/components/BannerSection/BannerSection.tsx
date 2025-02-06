import React from "react";

import banner_01 from "../../assets/images/banner_01.jpg";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

const BannerSection = () => {
  return (
    <div className="flex w-[100%] h-auto mx-auto mt-20 mb-20">
      
      <div className="flex flex-col absolute w-[40%] h-[450px] p-10 justify-center">
        <p className="flex text-white gap-3 items-center">
          Exclusive Offer{" "}
          <span className="rounded-3xl bg-primary border-[1px] cursor-pointer border-white text-white px-6 py-[3px] items-center justify-center
                          hover:bg-transparent hover:scale-110 ease-in-out duration-300">
            -20% OFF
          </span>
        </p>
        <h1 className="text-[50px] text-white font-camptonBold leading-tight my-3">
          SUPER FAST PERFORMANCE
        </h1>
        <p className="text-white">
          We have prepared special discounts for you on electronic products.
          <br />
          Don't miss these opportunities...
        </p>
        <div className="w-auto mt-7">
          <button
            className=" flex items-center justify-center gap-3 border-[1px] border-white text-white px-4 py-2 rounded-3xl
                        hover:scale-110 hover:border-[1px] hover:bg-primary ease-in-out duration-300"
          >
            SHOW NOW
            <i>
              <IoIosArrowForward />
            </i>
          </button>
        </div>
      </div>
      <div className="flex h-[450px]">
        <img className="relative -z-10 h-[100%]" src={banner_01} alt="banner_01" />
      </div>
    </div>
  );
};

export default BannerSection;
