import React from "react";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

const ProductSection_03 = () => {
  return (
    <div className="flex w-[85%] mx-auto mb-20 mt-10 gap-5">
      {/* ============= Product Left ============= */}
      <div className="flex w-[50%] h-[400px]">
        {/* ============= Product 1 Part Left ============= */}
        <div
          className="flex flex-col w-[55%] h-[100%] bg-slate-200 p-5 justify-center
                        rounded-tl-lg rounded-bl-lg"
        >
          <p className="text-primary font-camptonMedium">Weekend Discount</p>
          <h1 className="text-[30px] font-camptonMedium leading-tight my-3">
            OLYMPUS MARK II MIRRORLESS CAMERA
          </h1>
          <p className="text-gray-500">Mirrorless Camera with 4K Video</p>
          {/* ============= Button ============= */}
          <div className="w-auto mt-7">
            <button
              className=" flex items-center justify-center gap-3 bg-primary text-white px-4 py-2 rounded-3xl
                                hover:bg-transparent hover:border hover:border-primary hover:border-[1px] ease-in-out duration-300 hover:text-primary"
            >
              SHOW NOW
              <i>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
        </div>
        {/* ============= Product 1 Part Right ============= */}
        <div className="w-[45%] h-[100%] bg-slate-100 p-5 rounded-tr-lg rounded-br-lg"></div>
      </div>

      {/* ============= Product Right ============= */}
      <div className="flex w-[50%] h-[400px]">
        {/* ============= Product 1 Part Left ============= */}
        <div
          className="flex flex-col w-[55%] h-[100%] bg-slate-200 p-5 justify-center
                        rounded-tl-lg rounded-bl-lg"
        >
          <p className="text-primary font-camptonMedium">Weekend Discount</p>
          <h1 className="text-[30px] font-camptonMedium leading-tight my-3">
            OLYMPUS MARK II MIRRORLESS CAMERA
          </h1>
          <p className="text-gray-500">Mirrorless Camera with 4K Video</p>
          {/* ============= Button ============= */}
          <div className="w-auto mt-7">
            <button
              className=" flex items-center justify-center gap-3 bg-primary text-white px-4 py-2 rounded-3xl
                                hover:bg-transparent hover:border hover:border-primary hover:border-[1px] ease-in-out duration-300 hover:text-primary"
            >
              SHOW NOW
              <i>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
        </div>
        {/* ============= Product 1 Part Right ============= */}
        <div className="w-[45%] h-[100%] bg-slate-100 p-5 rounded-tr-lg rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ProductSection_03;
