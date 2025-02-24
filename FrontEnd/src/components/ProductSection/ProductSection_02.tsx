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
      navigate("/Product_01")
    }
  }

  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Deals of the day - left ============= */}
      <div className="flex justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        lg:text-[22px]">Deals Of The Day</h1>
        {/* ============= Deals of the day - right ============= */}
        <div className="flex items-center
        
                        xs:gap-3
                        sm:gap-4
                        md:gap-7
                        lg:gap-10">
          <button className="flex border-[1px] border-primary rounded-full items-center">
            <p className="
            
                        xs:text-[10px] w-auto xs:px-3 py-1
                        sm:text-[11px]
                        md:text-[15px]
                        lg:text-[22px] md:px-10 md:py-2">Latest Products</p>
          </button>
          <button><p className="
          
                                xs:text-[8px]
                                sm:text-[11px]
                                md:text-[15px]
                                lg:text-[22px]">Top Rating</p></button>
          <button><p className="
                                
                                xs:text-[8px]
                                sm:text-[11px]
                                md:text-[15px]
                                lg:text-[22px]">Best Selling</p></button>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />
      <div
        className="w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10
        
                  xs:grid-cols-1 xs:grid xs:gap-y-[60px]
                  md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                  xl:flex"
      >
        {/* ============= Product List ============= */}
        {dealsOfTheDay.map((product, index) => (
          <div className="flex flex-col w-auto h-auto group relative border-[1px] border-primary
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
            <div className="flex flex-col w-[100%] h-[140px] p-4 bg-gray-100 justify-center rounded-br-lg rounded-bl-lg z-10
            group-hover:shadow-shadow-dark transition-all duration-300">
              <h1 className="mb-4">{product.title}</h1>
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center">
                <p className="font-camptonMedium text-primary
                
                              lg:text-[20px]
                              2xl:text-[25px]">{product.normalPrice}</p>
                <div className="w-auto relative">
                  <div className="absolute h-[1.5px] w-[100%] bg-primary
                                  
                                  xs:mt-[12px]
                                  2xl:mt-[15px]
                                  "/>
                  <p className="text-gray-700 rounded-br-lg rounded-bl-lg

                                lg:text-[17px]
                                2xl:text-[20px]">{product.offerPrice}</p>
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
