import React from "react";

import { LuCheckCheck } from "react-icons/lu";
import { PiUser } from "react-icons/pi";
import { PiMotorcycleFill } from "react-icons/pi";
import { BiSolidPackage } from "react-icons/bi";

const TrackOrder = () => {
  return (
    <div className="w-[85%] flex flex-col mx-auto my-20">
      {/* ============= Track Orders - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1
          className="font-camptonMedium
                       dark:text-white
                      
                       xs:text-[10px]
                       sm:text-[11px]
                       md:text-[15px] 
                       lg:text-[22px]"
        >
          My Orders / Tracking
        </h1>

        <div
          className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit"
        >
          <p
            className="text-gray-500
                        dark:text-white
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]"
          >
            No handling fees + free shipping on orders over $35*
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-auto bg-slate-100 gap-5">
        <p className="font-camptonBook">Order ID: ODOIEFHW9323</p>

        <div className="flex w-[100%] h-auto border-primary border-[1px] justify-between py-5 px-20">
          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary">
              Estimated Delivery Time:
            </p>
            <p>29 Nov 20225</p>
          </div>

          <div
            className="h-[max] w-[1px] bg-primary
                      dark:bg-gray-600"
          />

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary">Shipped By:</p>
            <p>BLUEDART | +355676311918</p>
          </div>

          <div
            className="h-[max] w-[1px] bg-primary
                      dark:bg-gray-600"
          />

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary">Status:</p>
            <p>Picked by the courier</p>
          </div>

          <div
            className="h-[max] w-[1px] bg-primary
                      dark:bg-gray-600"
          />

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary">Tracking #:</p>
            <p>BUE95HJKDGIER90KL</p>
          </div>
        </div>

        <div className="flex flex-col w-[100%] h-auto items-center justify-center relative mt-6">
          <div className="flex w-[65%] justify-between absolute">
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-primary rounded-full">
              <i><LuCheckCheck className="text-white"/></i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-primary rounded-full">
              <i><PiUser className="text-white"/></i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-gray-300 rounded-full">
              <i><PiMotorcycleFill className="text-black"/></i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-gray-300 rounded-full">
              <i><BiSolidPackage className="text-black"/></i>
            </div>
          </div>

          <div className="flex w-[100%]">
            <div className="w-[50%] h-[10px] bg-primary"></div>
            <div className="w-[50%] h-[10px] bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
