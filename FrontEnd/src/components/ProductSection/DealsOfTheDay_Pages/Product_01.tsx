import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { GoDot } from "react-icons/go";

// Photos
import Lenovo_01 from "../../../assets/images/Products/Legion/Legion_01.jpg";
import Lenovo_02 from "../../../assets/images/Products/Legion/Legion_02.jpg";
import Lenovo_03 from "../../../assets/images/Products/Legion/Legion_03.jpg";
import Lenovo_04 from "../../../assets/images/Products/Legion/Legion_04.jpg";

import { dealsOfTheDay } from "../../../components/ProductSection/ProductSection";

const Product01 = () => {
  const [mainPhoto, setMainPhoto] = useState(Lenovo_01);
  const [quantity, setQuantity] = useState("01");

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

  const handleQuantityChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value, 10);
    
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 99) {
      setQuantity(numericValue.toString().padStart(2, '0'));
    } else {
      setQuantity("01");
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.min(99, parseInt(prevQuantity) + 1).toString();
      return newQuantity.padStart(2, '0');
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, parseInt(prevQuantity) - 1).toString();
      return newQuantity.padStart(2, '0');
    });
  };

  // Find the product with _id: "1"
  const product = dealsOfTheDay.find((item) => item._id === "1");

  return (
    <div className="flex w-[85%] h-auto mx-auto my-20 gap-5
                    
                    xs:flex-col
                    md:flex-row">
      {/* ============= Left - Product - Photos ============= */}
      <div className="flex flex-col w-[50%] h-[600px] gap-5 mx-auto
                      xs:w-[70%]">
        {/* ============= Big Photo ============= */}
        <div className="flex w-[100%] h-[75%] items-center justify-center rounded-lg border-[1px] overflow-hidden border-primary bg-white
                        ">
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
              src={Lenovo_01}
              alt="Image_02"
              onClick={() => handleClick(Lenovo_01)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Lenovo_02}
              alt="Image_03"
              onClick={() => handleClick(Lenovo_02)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Lenovo_03}
              alt="Image_04"
              onClick={() => handleClick(Lenovo_03)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Lenovo_04}
              alt="Image_01"
              onClick={() => handleClick(Lenovo_04)}
            />
          </div>
        </div>
      </div>
      {/* ============= Right - Product - Infos ============= */}
      <div className="flex flex-col w-[50%] h-[600px] bg-gray-100 rounded-lg gap-5 p-10 mx-auto">
        <h1 className="font-camptonBold leading-tight text-[35px] text-primary">
          {product.title}
        </h1>
        <p className="w-[90%] font-camptonLight">
          Web designing in a powerful way of just not an only professi however,
          in a pass Company We have a to a tendency.
        </p>
        <div className="flex gap-2">{getStars(product.rating)}</div>
        <p className="font-camptonBook text-[20px]">{product.reviews}</p>
        {/* ============= Price ============= */}
        <div className="flex gap-4 items-center">
          <p className="text-[30px] font-camptonBold text-primary">
            {product.offerPrice}
          </p>
          <div className="flex w-auto relative items-center mb-1">
            <div className="absolute mt-[2px] h-[1.5px] w-[100%] bg-red-500" />
            <p className="text-[20px] text-gray-700">{product.normalPrice}</p>
          </div>
        </div>
        <div className="gap-1 flex flex-col">
          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary text-[12px]" />
            </i>
            <p className="font-camptonLight">{product.detail_01}</p>
          </div>

          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary text-[12px]" />
            </i>
            <p className="font-camptonLight">{product.detail_02}</p>
          </div>

          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary text-[12px]" />
            </i>
            <p className="font-camptonLight">{product.detail_03}</p>
          </div>

          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary text-[12px]" />
            </i>
            <p className="font-camptonLight">{product.detail_04}</p>
          </div>
        </div>
        {/* ============= Quantity ============= */}
        <div className="flex w-fit h-auto items-center">
          <div
            className="flex items-center justify-center p-5 rounded-tl-lg rounded-bl-lg w-[20px] h-[20px] border-[1px] border-primary cursor-pointer"
            onClick={decreaseQuantity}
          >
            <i>
              <FaCircleMinus className="text-[22px] text-primary cursor-pointer" />
            </i>
          </div>
          <div className="flex items-center text-center justify-center w-[100%] h-[100%]  bg-primary ">
            <input
              className="w-[40px] h-[40px] text-center text-white font-camptonMedium bg-transparent text-[20px] outline-none"
              type="text"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div
            className="flex items-center justify-center p-5 rounded-tr-lg rounded-br-lg w-[20px] h-[20px] border-[1px] border-primary cursor-pointer"
            onClick={increaseQuantity}
          >
            <i>
              <FaCirclePlus className="text-[22px] text-primary cursor-pointer" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product01;

