import React from "react";

// React Icons
import { PiShoppingCartLight } from "react-icons/pi";

import { topRating } from "../../ProductSection";

import { useNavigate } from "react-router-dom";
import ScrollManager from "@/ScrollManager/ScrollManager";

const Top_Rating = () => {

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    if (id === "1") {
      navigate("/Product_01")
    }
    if (id === "2") {
      navigate("/Product_02")
    }
    if (id === "3") {
      navigate("/Product_03")
    }
    if (id === "4") {
      navigate("/Product_04")
    }
    if (id === "5") {
      navigate("/Product_05")
    }
    if (id === "6") {
      navigate("/Product_06")
    }
  }

  return (
    <div className="flex flex-col w-[100%] mx-auto">
      <ScrollManager />
      <div
        className="w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10
        
                  xs:grid-cols-1 xs:grid xs:gap-y-[60px]
                  md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                  xl:flex">
        {/* ============= Product List ============= */}
        {topRating.map((product, index) => (
          <div className="flex flex-col w-auto h-auto group relative border-[1px] border-primary cursor-pointer
                          rounded-lg" key={index} onClick={() => handleImageClick(product._id)}>
            {/* ============= Image ============= */}
            <div className="flex rounded-tl-lg items-center justify-center rounded-tr-lg overflow-hidden">
              <img className="
              
                              
                              xs:h-auto
                              lg:w-[100%] w-[100%]
                              xl:w-[100%]
                            bg-slate-500" src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div className="flex flex-col font-camptonMedium w-[100%] h-[140px] p-4 bg-gray-100 justify-center rounded-br-lg rounded-bl-lg z-10
                            group-hover:shadow-shadow-dark transition-all duration-300 
            
                            xs:text-[20px]
                            md:text-[18px]
                            lg:text-[20px]
                            xl:text-[17px]">
              <h1 className="mb-4">{product.title}</h1>
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center">
                <p className="font-camptonBold text-primary
                
                              xs:text-[25px]
                              2xl:text-[25px]">{product.offerPrice}</p>
                <div className="flex w-auto relative items-center">
                  <div className="absolute h-[1px] w-[100%] bg-primary"/>
                  <p className="text-gray-700 rounded-br-lg rounded-bl-lg text-[20px]
                                ">{product.normalPrice}</p>
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

export default Top_Rating;
