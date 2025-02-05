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
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] w-[150px] h-[150px] mb-6">
          <i><CiMedal className="text-[65px] text-gray-500"/></i>
        </div>
        <h1 className="font-camptonMedium text-[17px]">Online Support 24/7</h1>
        <p className="text-gray-500">Support online 24 hours a day</p>
      </div>
      {/* ============= Benefit 2 ============= */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] w-[150px] h-[150px] mb-6">
          <i><CiDeliveryTruck className="text-[65px] text-gray-500"/></i>
        </div>
        <h1 className="font-camptonMedium text-[17px]">Member Discount</h1>
        <p className="text-gray-500">Onevery order over $120.00</p>
      </div>
      {/* ============= Benefit 3 ============= */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] w-[150px] h-[150px] mb-6">
          <i><CiWallet className="text-[65px] text-gray-500"/></i>
        </div>
        <h1 className="font-camptonMedium text-[17px]">Money Return</h1>
        <p className="text-gray-500">Back guarantee under 7 days</p>
      </div>
      {/* ============= Benefit 4 ============= */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-gray-100
                        rounded-[15px] w-[150px] h-[150px] mb-6">
          <i><PiHandbagSimpleLight className="text-[65px] text-gray-500"/></i>
        </div>
        <h1 className="font-camptonMedium text-[17px]">Fast, Free Shipping</h1>
        <p className="text-gray-500">Fast, Free Shipping</p>
      </div>
    </div>
  );
};

export default BenefitsPackage;
