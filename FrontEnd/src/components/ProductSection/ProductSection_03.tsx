import React from "react";
// React Icons
import { IoIosArrowForward } from "react-icons/io";
// Import the product data and image.
import { productSection_03 } from "../../components/ProductSection/ProductSection";

const ProductSection_03 = () => {
  return (
    <div className="flex w-[85%] mx-auto mb-20 mt-10 gap-5
                    
                    xs:flex-col
                    md:flex-row">
      {productSection_03.map((product, index) => (
        // ============= Product Container =============
        <div
          className="flex border-[1px] border-primary rounded-lg overflow-hidden bg-white mx-auto gap-5
          
                    xs:flex-col
                    lg:flex-row lg:w-[50%]
                    xl:w-[50%] xl:h-[400px]"
          key={index}
        >
          {/* ============= Product Part Left ============= */}
          <div
            className="flex flex-col h-[100%] bg-primary p-5 justify-center
                        rounded-tl-lg rounded-bl-lg
                        
                        xs:w-[100%]
                        lg:w-[50%]"
          >
            <p className="text-white font-camptonMedium">
              {product.title_02}
            </p>
            <h1 className="text-white font-camptonMedium leading-tight my-3
            
                          xs:text-[20px]
                          sm:w-[80%]
                          md:w-[100%]
                          xl:text-[30px]">
              {product.title_01}
            </h1>
            <p className="text-white font-camptonLight leading-tight">{product.description}</p>
            {/* ============= Button ============= */}
            <div className="w-auto mt-7">
              <button
                className="flex items-center justify-center bg-white border-[1px] text-primary rounded-full
                            hover:bg-transparent  hover:border-white hover:border-[1px] hover:scale-105 ease-in-out
                            duration-300 hover:text-white
                            
                            xs:text-[12px] xs:gap-2 xs:px-3 xs:py-1
                            xl:px-4 xl:py-2 xl:text-[20px] xl:gap-3">
                {product.button}
                <IoIosArrowForward className="font-camptonLight
                
                                              xs:text-[12px]
                                              lg:text-[15px]
                                              xl:text-[20px]"/>
              </button>
            </div>
          </div>
          {/* ============= Product Part Right ============= */}
          <div className="flex items-center justify-center rounded-tr-lg rounded-br-lg mx-auto
                          
                          xs:w-[100%] xs:h-[100%]
                          lg:w-[50%]">
            <img
              className="object-cover
                        
                        xs:h-[300px]
                        md:w-[90%] md:h-[90%]
                        lg:mr-5"
              src={product.image}
              alt={product.title_01}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection_03;
