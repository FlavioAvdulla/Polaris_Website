import React from "react";

// React Icons
import { IoIosSearch } from "react-icons/io";
import { shopByCategories } from "../../components/ProductSection/ProductSection";

const ProductSection_04 = () => {
  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Deals of the day - left ============= */}
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-[22px] font-camptonMedium">Shop By Categories</h1>
        {/* ============= Deals of the day - right ============= */}
        <div className="flex items-center gap-10">
          <p className="text-gray-500">
            No handling fees + free shipping on orders over $35*
          </p>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />
      <div className="flex w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10">
        {/* ============= Product List ============= */}
        {shopByCategories.map((product, index) => (
          <div
            className="flex flex-col w-[220px] h-auto group relative border-[1px] border-primary
                                rounded-lg"
            key={index}
          >
            {/* ============= Image ============= */}
            <div className="flex w-[100%] h-[200px] rounded-tl-lg rounded-tr-lg overflow-hidden items-center">
              <img src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div
              className="flex flex-col w-[100%] h-auto p-4 bg-gray-100 justify-between rounded-br-lg rounded-bl-lg z-10
                  group-hover:shadow-shadow-dark transition-all duration-300 items-center"
            >
              <h1 className="mb-1 font-camptonMedium">{product.title}</h1>
              <p className="text-gray-500">{product.quantity}</p>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center
                               rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                               duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary"
            >
              <i>
                <IoIosSearch className="text-[18px] text-white" />
              </i>
              <p className="text-white">VIEW MORE</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_04;
