import React from "react";

// React Icons
import { PiShoppingCartLight } from "react-icons/pi";
import { dealsOfTheDay } from "../../components/ProductSection/ProductSection";

const ProductSection_02 = () => {
  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Deals of the day - left ============= */}
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-[22px] font-camptonMedium">Deals Of The Day</h1>
        {/* ============= Deals of the day - right ============= */}
        <div className="flex items-center gap-10">
          <button className="flex bg-gray-200 px-10 py-2 rounded-3xl items-center">
            Latest Products
          </button>
          <button>Top Rating</button>
          <button>Best Selling</button>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />
      <div
        className="flex w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10"
      >
        {/* ============= Product List ============= */}
        {dealsOfTheDay.map((product, index) => (
          <div className="flex flex-col w-[220px] h-auto group relative" key={index}>
            {/* ============= Image ============= */}
            <div className="flex w-[100%] h-[200px] bg-slate-100 rounded-tl-lg rounded-tr-lg">
              <img src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div className="flex flex-col w-[100%] h-auto p-4 bg-slate-200 justify-between rounded-br-lg rounded-bl-lg z-10">
              <h1 className="mb-4">{product.title}</h1>
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center">
                <p className="text-[20px] font-camptonMedium">{product.normalPrice}</p>
                <div className="w-auto relative">
                  <div className="absolute mt-3.5 h-[1px] w-[59px] bg-red-500"></div>
                  <p className="text-[17px] text-gray-400 rounded-br-lg rounded-bl-lg">{product.offerPrice}</p>
                </div>
              </div>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center bg-slate-300 rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all duration-300 group-hover:bottom-[-45px]"
            >
              <i>
                <PiShoppingCartLight className="text-[18px]" />
              </i>
              <p>ADD TO CART</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_02;
