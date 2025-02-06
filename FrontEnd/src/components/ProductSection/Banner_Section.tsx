import React from "react";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

const Banner_Section = () => {
  return (
    <div className="flex w-[100%] h-auto mx-auto mt-20 mb-20 bg-slate-300">
      <div className="flex flex-col w-[40%] h-[450px] bg-slate-100 p-10 justify-center">
        <p className="flex text-gray-500 gap-3 items-center">
          Exclusive Offer <span className="rounded-3xl bg-primary text-white px-6 py-[3px] items-center justify-center">-20% OFF</span>
        </p>
        <h1 className="text-[50px] font-camptonMedium leading-tight my-3">SUPER FAST PERFORMANCE</h1>
        <p className="text-gray-500">
          We have prepared special discounts for you on electronic products.
          Don't miss these opportunities...
        </p>
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
    </div>
  );
};

export default Banner_Section;
