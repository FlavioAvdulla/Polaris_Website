import React from "react";

// React Icons
import { PiShoppingCartLight } from "react-icons/pi";

import { dealsOfTheDay } from "../../components/ProductSection/ProductSection";
import { useNavigate } from "react-router-dom";

const ProductSection_02 = () => {

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    if (id === "1") {
      navigate("/Product_01") // Update the path here to match the route in your App.js
    }
  }

  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Deals of the day - left ============= */}
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-[22px] font-camptonMedium">Deals Of The Day</h1>
        {/* ============= Deals of the day - right ============= */}
        <div className="flex items-center gap-10">
          <button className="flex border-[1px] border-primary px-10 py-2 rounded-3xl items-center">
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
          <div className="flex flex-col w-[220px] h-auto group relative border-[1px] border-primary
                          rounded-lg" key={index} onClick={() => handleImageClick(product._id)}>
            {/* ============= Image ============= */}
            <div className="flex w-[100%] h-[200px] rounded-tl-lg rounded-tr-lg overflow-hidden">
              <img src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div className="flex flex-col w-[100%] h-auto p-4 bg-gray-100 justify-between rounded-br-lg rounded-bl-lg z-10
            group-hover:shadow-shadow-dark transition-all duration-300">
              <h1 className="mb-4">{product.title}</h1>
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center">
                <p className="text-[20px] font-camptonMedium text-primary">{product.normalPrice}</p>
                <div className="w-auto relative">
                  <div className="absolute mt-[13px] h-[1.5px] w-[100%] bg-primary"/>
                  <p className="text-[17px] text-gray-700 rounded-br-lg rounded-bl-lg">{product.offerPrice}</p>
                </div>
              </div>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center
                         rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                         duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary"
            >
              <i>
                <PiShoppingCartLight className="text-[18px] text-white" />
              </i>
              <p className="text-white">ADD TO CART</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_02;
