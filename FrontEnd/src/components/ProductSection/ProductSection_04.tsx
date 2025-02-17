import React from "react";

// React Icons
import { IoIosSearch } from "react-icons/io";
import { shopByCategories } from "../../components/ProductSection/ProductSection";

const ProductSection_04 = () => {
  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Shop by Categories - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                      
                      xs:text-[8px]
                      sm:text-[11px]
                      md:text-[15px] 
                      lg:text-[22px]">Shop By Categories</h1>

        <div className="flex items-center
                        
                        xs:w-[40%]
                        md:w-fit">
          <p className="text-gray-500
                        
                        xs:text-[8px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
            No handling fees + free shipping on orders over $35*
          </p>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />
      <div className="flex w-[100%] h-auto mx-auto items-center justify-between mb-20 mt-10
      
                      xs:grid xs:grid-cols-1 xs:gap-y-[60px]
                      md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                      xl:flex">
        {/* ============= Product List ============= */}
        {shopByCategories.map((product, index) => (
          <div
            className="flex flex-col w-auto h-auto group relative border-[1px] border-primary rounded-lg
                        "
            key={index}
          >
            {/* ============= Image ============= */}
            <div className="flex w-[100%] h-auto rounded-tl-lg rounded-tr-lg overflow-hidden items-center justify-center bg-white">
              <img className="xs:h-auto
                              lg:w-[90%] w-[100%] 
                              xl:w-[100%]"
                              src={product.image} alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div
              className="flex flex-col w-[100%] h-auto p-4 bg-gray-100 justify-between rounded-br-lg rounded-bl-lg z-10 text-center
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
