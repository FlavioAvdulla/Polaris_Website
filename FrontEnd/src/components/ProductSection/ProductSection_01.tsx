import React from "react";

// React Icons
import { FaStar } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";

const ProductSection_01 = () => {
  return (
    <div
      className="flex w-[85%] h-auto mx-auto gap-5 items-center
                    justify-between mt-20 mb-20"
    >
      {/* ============= Product 1 ============= */}
      <div className="w-[100%] h-[550px] bg-slate-200 rounded-lg overflow-hidden">
        {/* ============= Image ============= */}
        <div className="w-[100%] h-[65%] bg-slate-100"></div>
        {/* ============= Info ============= */}
        <div className="flex flex-col w-[100%] h-[35%] p-4 justify-between">
          {/* ============= Stars ============= */}
          <div className="flex gap-2">
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <p className="text-[15px] font-camptonLight">(3)</p>
          </div>
          <h1>Sony A7 III Mirrorless Camera with 4K Video</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-camptonMedium">$159.77</h1>
            <i className="bg-gray-100 p-2 rounded-md">
              <PiShoppingCartLight className="text-[20px]" />
            </i>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[15px] font-camptonLight flex">
              Available:
              <span className="font-camptonMedium">&nbsp;&nbsp;79</span>
            </p>
            <p className="text-[15px] font-camptonLight flex">
              Sold:
              <span className="text-red-500 font-camptonMedium">
                &nbsp;&nbsp;18
              </span>
            </p>
          </div>
          <p>Time remaining until the end of the offer.</p>
        </div>
      </div>
      {/* ============= Product 2 ============= */}
      <div className="w-[100%] h-[550px] bg-slate-200 rounded-lg overflow-hidden">
        {/* ============= Image ============= */}
        <div className="w-[100%] h-[65%] bg-slate-100"></div>
        {/* ============= Info ============= */}
        <div className="flex flex-col w-[100%] h-[35%] p-4 justify-between">
          {/* ============= Stars ============= */}
          <div className="flex gap-2">
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <p className="text-[15px] font-camptonLight">(3)</p>
          </div>
          <h1>Sony A7 III Mirrorless Camera with 4K Video</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-camptonMedium">$159.77</h1>
            <i className="bg-gray-100 p-2 rounded-md">
              <PiShoppingCartLight className="text-[20px]" />
            </i>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[15px] font-camptonLight flex">
              Available:
              <span className="font-camptonMedium">&nbsp;&nbsp;79</span>
            </p>
            <p className="text-[15px] font-camptonLight flex">
              Sold:
              <span className="text-red-500 font-camptonMedium">
                &nbsp;&nbsp;18
              </span>
            </p>
          </div>
          <p>Time remaining until the end of the offer.</p>
        </div>
      </div>
      {/* ============= Product 3 ============= */}
      <div className="w-[100%] h-[550px] bg-slate-200 rounded-lg overflow-hidden">
        {/* ============= Image ============= */}
        <div className="w-[100%] h-[65%] bg-slate-100"></div>
        {/* ============= Info ============= */}
        <div className="flex flex-col w-[100%] h-[35%] p-4 justify-between">
          {/* ============= Stars ============= */}
          <div className="flex gap-2">
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <i>
              <FaStar className="text-[20px] text-[#fcc419]" />
            </i>
            <p className="text-[15px] font-camptonLight">(3)</p>
          </div>
          <h1>Sony A7 III Mirrorless Camera with 4K Video</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-camptonMedium">$159.77</h1>
            <i className="bg-gray-100 p-2 rounded-md">
              <PiShoppingCartLight className="text-[20px]" />
            </i>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[15px] font-camptonLight flex">
              Available:
              <span className="font-camptonMedium">&nbsp;&nbsp;79</span>
            </p>
            <p className="text-[15px] font-camptonLight flex">
              Sold:
              <span className="text-red-500 font-camptonMedium">
                &nbsp;&nbsp;18
              </span>
            </p>
          </div>
          <p>Time remaining until the end of the offer.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection_01;
