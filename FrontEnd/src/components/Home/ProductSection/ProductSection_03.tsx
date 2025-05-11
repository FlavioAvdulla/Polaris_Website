import React from "react";
// Import the product data and image.
import { productSection_03 } from "./ProductSection";
import { useNavigate } from "react-router-dom";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

// Translation
import { useTranslation } from 'react-i18next';

const ProductSection_03 = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  
    const handleProductClick = (id) => {
      console.log(`Image with id ${id} clicked.`)
      const routeMap = {
        "1": "/Product_01",
        "2": "/Product_04",
      }

      const route = routeMap[id]
      if (route) {
        navigate(route)
      }
    }

  return (
    <div className="flex w-[85%] mx-auto mb-20 mt-10 gap-5
                    
                    xs:flex-col
                    md:flex-row">
      {productSection_03.map((product, index) => (
        // ============= Product Container =============
        <div
          className="flex border-[1px] border-primary rounded-lg overflow-hidden bg-transparent mx-auto cursor-pointer
                     dark:border-white
          
                    xs:flex-col
                    lg:flex-row lg:w-[50%]
                    xl:h-[400px]"
          key={index}
          onClick={() => handleProductClick(product._id)}>
          {/* ============= Product Part Left ============= */}
          <div
            className="flex flex-col h-[100%] bg-primary p-5 justify-center rounded-tl-lg rounded-bl-lg
                       dark:bg-gray-700
                        
                        xs:w-[100%]
                        lg:w-[50%]">
            <p className="text-white font-camptonMedium">
            {t(product.title_02)}
            </p>
            <h1 className="text-white font-camptonMedium leading-tight my-3
            
                          xs:text-[20px]
                          sm:w-[80%]
                          md:w-[100%]
                          xl:text-[30px]">
              {t(product.title_01)}
            </h1>
            <p className="text-white font-camptonLight leading-tight">{t(product.description)}</p>
            {/* ============= Button ============= */}
            <div className="w-auto mt-7">
              <button
                className="flex items-center justify-center bg-white border-[1px] text-primary rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg
                            hover:bg-transparent  hover:border-white hover:border-[1px] hover:scale-105 ease-in-out
                            duration-300 hover:text-white
                            dark:bg-secondary_01 dark:text-white dark:hover:bg-transparent
                            
                            xs:text-[12px] xs:gap-2 xs:px-3 xs:py-1
                            xl:px-4 xl:py-2 xl:text-[20px] xl:gap-3">
                {t(product.button)}
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
            <img className="object-cover
                        
                            xs:h-[300px]
                            md:w-[100%] md:h-auto"
              src={product.image}
              alt={product.title_01}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection_03;
