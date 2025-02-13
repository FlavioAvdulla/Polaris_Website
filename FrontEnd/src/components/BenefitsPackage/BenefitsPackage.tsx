import React from "react";

// React Icons
import { CiMedal } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";

const BenefitsPackage = () => {
  return (
    <div className="flex w-[85%] h-auto mx-auto items-center justify-between my-20">
      {/* ============= Benefit 1 ============= */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] mb-6
                        
                        md:w-[120px] md:h-[120px]
                        lg:w-[150px] lg:h-[150px]">
          <i><CiMedal className="text-gray-500
          
                                    md:text-[55px]
                                    lg:text-[65px]"/></i>
        </div>
        <h1 className="font-camptonMedium
                      
                      md:text-[14px] 
                      lg:text-[17px]
                       ">Online Support 24/7</h1>
        <p className="text-gray-500 font-camptonLight w-[80%]
                        
                        md:text-[12px]
                        lg:text-[14px]
                        ">Support online 24 hours a day.</p>
      </div>
      {/* ============= Benefit 2 ============= */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] mb-6
                        
                        md:w-[120px] md:h-[120px]
                        lg:w-[150px] lg:h-[150px]">
          <i><CiDeliveryTruck className="text-gray-500
          
                                          md:text-[55px]
                                          lg:text-[65px]"/></i>
        </div>
        <h1 className="font-camptonMedium
        
                      md:text-[14px] 
                      lg:text-[17px]
                        ">Member Discount</h1>
        <p className="text-gray-500 font-camptonLight
        
                        md:text-[12px]
                        lg:text-[14px]
                        ">Onevery order over $120.00</p>
      </div>
      {/* ============= Benefit 3 ============= */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] mb-6
                        
                        md:w-[120px] md:h-[120px]
                        lg:w-[150px] lg:h-[150px]">
          <i><CiWallet className="text-[65px] text-gray-500"/></i>
        </div>
        <h1 className="font-camptonMedium text-[17px]">Money Return</h1>
        <p className="text-gray-500
        
                      md:text-[12px]
                      ">Back guarantee under 7 days</p>
      </div>
      {/* ============= Benefit 4 ============= */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] mb-6
                        
                        md:w-[120px] md:h-[120px]
                        lg:w-[150px] lg:h-[150px]">
          <i><PiHandbagSimpleLight className="text-[65px] text-gray-500"/></i>
        </div>
        <h1 className="font-camptonMedium text-[17px]">Fast, Free Shipping</h1>
        <p className="text-gray-500
                        
                        md:text-[12px]
                        lg:text-[14px]
                        ">Fast, Free Shipping</p>
      </div>
    </div>
  );
};

export default BenefitsPackage;
