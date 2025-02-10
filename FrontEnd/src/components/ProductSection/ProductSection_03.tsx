import React from "react";
// React Icons
import { IoIosArrowForward } from "react-icons/io";
// Import the product data and image.
import { productSection_03 } from "../../components/ProductSection/ProductSection";
import Product_01 from "../../assets/Product_01.jpg"; // Make sure the path to the image is correct

const ProductSection_03 = () => {
  return (
    <div className="flex w-[85%] mx-auto mb-20 mt-10 gap-5">
      {productSection_03.map((product, index) => (
        // ============= Product Container =============
        <div
          className="flex w-[50%] h-[400px] border-[1px] border-primary rounded-lg overflow-hidden"
          key={index}
        >
          {/* ============= Product Part Left ============= */}
          <div
            className="flex flex-col w-[50%] h-[100%] bg-primary p-5 justify-center
                        rounded-tl-lg rounded-bl-lg"
          >
            <p className="text-white font-camptonMedium">
              {product.title_02}
            </p>
            <h1 className="text-[30px] text-white font-camptonMedium leading-tight my-3">
              {product.title_01}
            </h1>
            <p className="text-white font-camptonLight">{product.description}</p>
            {/* ============= Button ============= */}
            <div className="w-auto mt-7">
              <button
                className=" flex items-center justify-center gap-3 bg-white border-[1px] text-primary px-4 py-2 rounded-3xl
                                hover:bg-transparent  hover:border-white hover:border-[1px] hover:scale-105 ease-in-out duration-300 hover:text-white"
              >
                {product.button}
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          {/* ============= Product Part Right ============= */}
          <div className="flex items-center justify-center w-[50%] h-[100%] rounded-tr-lg rounded-br-lg">
            <img
              className="w-[100%] object-cover"
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
