import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Photos
import Product_01 from "../../../assets/images/Products/Product_01.jpg";
import Product_02 from "../../../assets/images/Products/Product_02.jpg";
import Product_03 from "../../../assets/images/Products/Product_03.jpg";
import Product_04 from "../../../assets/images/Products/Product_04.jpg";

import { dealsOfTheDay } from "../../../components/ProductSection/ProductSection";

const Product01 = () => {
  const [mainPhoto, setMainPhoto] = useState(Product_01);

  const handleClick = (photo) => {
    setMainPhoto(photo);
  };

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

  // Find the product with _id: "1"
  const product = dealsOfTheDay.find((item) => item._id === "1");

  return (
    <div className="flex w-[85%] h-auto mx-auto my-20 gap-5">
      {/* ============= Left - Product - Photos ============= */}
      <div className="flex flex-col w-[50%] h-[600px] gap-5">
        {/* ============= Big Photo ============= */}
        <div className="flex w-[100%] h-[75%] items-center justify-center rounded-lg border-[1px] overflow-hidden border-primary bg-white">
          <img
            className="w-[85%] object-cover"
            src={mainPhoto}
            alt="Image_01"
          />
        </div>
        {/* ============= Small Photos ============= */}
        <div className="flex w-[100%] h-[25%] gap-5">
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_01}
              alt="Image_02"
              onClick={() => handleClick(Product_01)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_02}
              alt="Image_03"
              onClick={() => handleClick(Product_02)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_03}
              alt="Image_04"
              onClick={() => handleClick(Product_03)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_04}
              alt="Image_01"
              onClick={() => handleClick(Product_04)}
            />
          </div>
        </div>
      </div>
      {/* ============= Right - Product - Infos ============= */}
      <div className="flex flex-col w-[50%] h-[600px] bg-gray-100 rounded-lg gap-5 p-10">
        <h1 className="font-camptonBold leading-tight text-[35px] text-primary">
          POWERING YOUR
          <br />
          MOBILE EXPERIENCE
        </h1>
        <p className="w-[90%] font-camptonLight">
          Web designing in a powerful way of just not an only professi however,
          in a pass Company We have a to a tendency
        </p>
        <div className="flex gap-2">{getStars(product.rating)}</div>
        <p className="font-camptonBook text-[20px]">{product.reviews}</p>
        {/* ============= Price ============= */}
        <div className="flex gap-4 items-center">
          <p className="text-[30px] font-camptonMedium">{product.offerPrice}</p>
          <div className="flex w-auto relative items-center mb-1">
            <div className="absolute mt-[2px] h-[1.5px] w-[100%] bg-red-500" />
            <p className="text-[20px] text-gray-700">{product.normalPrice}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>6.4Inch display toch sceen (1920x1180)</p>
          <p>50Mp Font Camera Back Camera 108Mp</p>
          <p>6000Mh Battry With Fast Chager</p>
        </div>
      </div>
    </div>
  );
};

export default Product01;
