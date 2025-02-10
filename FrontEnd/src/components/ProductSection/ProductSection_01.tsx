import React from "react";
// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";

import { productSection_01 } from "../../components/ProductSection/ProductSection";

const ProductSection_01 = () => {
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[20px] text-[#fcc419]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-[20px] text-[#fcc419]" />);
      } else {
        stars.push(<FaStar key={i} className="text-[20px] text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div
      className="flex w-[85%] h-auto mx-auto gap-5 items-center
                justify-between mt-20 mb-20"
    >
      {productSection_01.map((product, index) => (
        // ============= Product 1 =============
        <div
          className="w-[33.33%] h-[550px] rounded-lg overflow-hidden
                      bg-gray-100 border-[1px] border-primary"
          key={index}
        >
          {/* ============= Image ============= */}
          <div className="w-[100%] h-[65%]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* ============= Info ============= */}
          <div className="flex flex-col w-[100%] h-[35%] p-4 justify-between">
            {/* ============= Stars ============= */}
            <div className="flex gap-2">
              {getStars(product.rating)}
              <p className="text-[15px] font-camptonLight">
                ({product.rating})
              </p>
            </div>
            <h1>{product.title}</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-[22px] font-camptonMedium text-primary">
                {product.normalPrice}
              </h1>
              <i className="bg-primary p-2 rounded-md border-[1px] border-primary cursor-pointer
                              hover:scale-[105%] hover:bg-transparent hover:border-[1px] group hover:border-primary duration-300">
                <PiShoppingCartLight className="text-[20px] text-white group-hover:text-primary duration-300" />
              </i>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[15px] font-camptonLight flex">
                Available:
                <span className="font-camptonMedium">
                  &nbsp;&nbsp;{product.available}
                </span>
              </p>
              <p className="text-[15px] font-camptonLight flex">
                Sold:
                <span className="text-red-500 font-camptonMedium">
                  &nbsp;&nbsp;{product.sold}
                </span>
              </p>
            </div>
            <p className="font-camptonLight text-[15px]">
              Time remaining until the end of the offer.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection_01;
