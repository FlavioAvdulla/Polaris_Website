import React from "react";
import { Carousel_05 } from "../Shadcn-components/Carousel_05";

// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import the product data correctly
import { productSection_06 } from "../../components/ProductSection/ProductSection";

const ProductSection_05 = () => {
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[20px] text-[#fcc419]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[20px] text-[#fcc419]" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-[20px] text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center mb-20">
      {/* ============= Section - Left ============= */}
      <div className="grid grid-cols-2 gap-5 w-[100%] h-[700px]">
        {productSection_06.map((product, index) => (
          <div
            className="flex w-[100%] h-auto overflow-hidden bg-gray-100 items-center rounded-lg border-[1px] border-primary"
            key={index}
          >
            {/* ============= Section - right - 01 - Photo ============= */}
            <div className="w-[40%] h-[100%] rounded-tl-lg rounded-bl-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full rounded-tl-lg rounded-bl-lg"
              />
            </div>
            {/* ============= Section - right - 01 - Info ============= */}
            <div className="flex flex-col w-[60%] h-[100%] p-3 justify-center gap-1">
              {/* ============= Stars ============= */}
              <div className="flex gap-2 items-center">
                {getStars(product.rating)}
                <p className="text-[13px] font-camptonLight">
                  ({product.rating})
                </p>
              </div>
              <h1 className="text-[16px] font-camptonMedium leading-tight">
                {product.title}
              </h1>
              <p className="text-gray-500 text-[14px]">{product.description}</p>
              <div className="flex gap-4 items-center">
                <p className="text-[20px] font-camptonMedium">
                  {product.offerPrice}
                </p>
                <div className="w-auto relative">
                  <div className="absolute mt-[13px] h-[1.5px] w-[100%] bg-red-500"></div>
                  <p className="text-[17px] text-gray-700 rounded-br-lg rounded-bl-lg">
                    {product.normalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Carousel_05 />
    </div>
  );
};

export default ProductSection_05;
