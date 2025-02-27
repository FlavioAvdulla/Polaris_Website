import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { GoDot } from "react-icons/go";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

// Photos
import Ps5_01 from "../../../../assets/images/Products/Ps5/Ps5_01.jpg";
import Ps5_02 from "../../../../assets/images/Products/Ps5/Ps5_02.jpg";
import Ps5_03 from "../../../../assets/images/Products/Ps5/Ps5_03.jpg";
import Ps5_04 from "../../../../assets/images/Products/Ps5/Ps5_04.jpg";

import { dealsOfTheDay } from "../../../Home/ProductSection/ProductSection";

const Product_03 = () => {
  const [mainPhoto, setMainPhoto] = useState(Ps5_01);
  const [quantity, setQuantity] = useState("01");

  const handleClick = (photo) => {
    setMainPhoto(photo);
  };

  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419]
          
                                              xs:text-[10px]
                                              md:text-[17px]
                                              lg:text-[20px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                              xs:text-[10px]
                                              md:text-[17px]
                                              lg:text-[20px]" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[10px]
                                              md:text-[17px]
                                              lg:text-[20px]" />);
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

  // Find the product with _id: "3"
  const product = dealsOfTheDay.find((item) => item._id === "3");

  return (
    <div className="flex w-[85%] h-auto mx-auto my-20
                    
                    xs:flex-col xs:gap-2
                    md:flex-row md:gap-3
                    lg:gap-5">
      {/* ============= Left - Product - Photos ============= */}
      <div className="flex flex-col mx-auto
                      
                      xs:gap-1 xs:w-[100%]
                      md:gap-3
                      lg:h-[500px] lg:gap-5 lg:w-[50%]
                      xl:h-[600px]">
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
        <div className="flex w-[100%] h-[25%]
        
                        xs:gap-1
                        md:gap-3
                        lg:gap-5">
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Ps5_01}
              alt="Image_02"
              onClick={() => handleClick(Ps5_01)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Ps5_02}
              alt="Image_03"
              onClick={() => handleClick(Ps5_02)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Ps5_03}
              alt="Image_04"
              onClick={() => handleClick(Ps5_03)}
            />
          </div>
          <div
            className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Ps5_04}
              alt="Image_01"
              onClick={() => handleClick(Ps5_04)}
            />
          </div>
        </div>
      </div>

      {/* ============= Right - Product - Infos ============= */}
      <div className="flex flex-col bg-gray-100 gap-2 rounded-lg mx-auto justify-between
      
                      xs:p-3 xs:h-auto xs:w-[100%]
                      md:p-4 lg:w-[50%]
                      lg:h-[500px] lg:p-5
                      xl:h-[600px] xl:p-10">
        <h1 className="font-camptonBold leading-tight text-primary
        
                        xs:text-[20px]
                        md:text-[28px]
                        lg:text-[38px]
                        xl:text-[45px]
                        ">
          {product.title}
        </h1>
        <p className="w-[100%] font-camptonBook leading-tight
        
                      xs:text-[10px] text-justify
                      md:text-[13px]
                      lg:text-[16px]
                      xl:text-[18px]">
          Web designing in a powerful way of just not an only professi however,
          in a pass Company We have a to a tendency.
        </p>
        <div className="flex gap-2">{getStars(product.rating)}</div>
        <p className="font-camptonBook
        
                      xs:text-[12px]
                      md:text-[15px]
                      lg:text-[18px]
                      xl:text-[20px]">{product.reviews}</p>
        {/* ============= Price ============= */}
        <div className="flex items-center
        
                        xs:gap-2
                        md:gap-4">
          <p className="font-camptonBold text-primary
          
                        xs:text-[22px]
                        md:text-[30px]
                        lg:text-[40px]">
            {product.offerPrice}
          </p>
          <div className="flex w-auto relative items-center">
            <div className="absolute mt-[2px] h-[1.5px] w-[100%] bg-red-500" />
            <p className="text-gray-700
            
                          xs:text-[16px]
                          md:text-[17px]
                          lg:text-[25px]">{product.normalPrice}</p>
          </div>
        </div>
        <div className="gap-1 flex flex-col mb-2">
          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary
              
                               
                                xs:text-[12px]" />
            </i>
            <p className="font-camptonBook
            
                        
                        xs:text-[10px]
                        lg:text-[13px]
                        xl:text-[15px]">{product.detail_01}</p>
          </div>

          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary
              
                                
                                xs:text-[12px]" />
            </i>
            <p className="font-camptonBook
            
                          
                          xs:text-[10px]
                          lg:text-[13px]
                          xl:text-[15px]">{product.detail_02}</p>
          </div>

          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary
              
                                xs:text-[12px]" />
            </i>
            <p className="font-camptonBook
            
                          
                          xs:text-[10px]
                          lg:text-[13px]
                          xl:text-[15px]">{product.detail_03}</p>
          </div>

          <div className="flex items-center gap-1">
            <i>
              <GoDot className="text-primary
              
                                
                                xs:text-[12px]" />
            </i>
            <p className="font-camptonBook
            
                          
                          xs:text-[10px]
                          lg:text-[13px]
                          xl:text-[15px]">{product.detail_04}</p>
          </div>
        </div>
        {/* ============= Quantity ============= */}
        <div className="flex w-fit h-auto items-center mb-2">
          <div
            className="flex items-center justify-center
                        border-[1px] border-primary cursor-pointer
                        
                        
                        xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tl-md xs:rounded-bl-md
                        lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tl-lg lg:rounded-bl-lg"
            onClick={decreaseQuantity}
          >
            <i>
              <FaCircleMinus className="text-primary cursor-pointer
              
                                      
                                        xs:text-[13px]
                                        lg:text-[22px]" />
            </i>
          </div>
          <div className="flex items-center text-center justify-center w-[100%] h-[100%]  bg-primary ">
            <input
              className="text-center text-white font-camptonMedium bg-transparent outline-none
              
                       
                        xs:w-[25px] xs:h-[26px] xs:text-[12px]
                        lg:w-[40px] lg:h-[40px] lg:text-[20px]"
              type="text"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div
            className="flex items-center justify-center
                        border-[1px] border-primary cursor-pointer
                        
                        xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tr-md xs:rounded-br-md
                        lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tr-lg lg:rounded-br-lg"
            onClick={increaseQuantity}
          >
            <i>
              <FaCirclePlus className="text-primary cursor-pointer
              
                                  
                                        xs:text-[13px]
                                        lg:text-[22px]" />
            </i>
          </div>
        </div>
        {/* ============= Button ============= */}
      <button
              className=" flex items-center w-fit justify-center gap-3 border-[1px] bg-primary
                        border-white text-white px-4 py-2 rounded-tr-3xl rounded-br-3xl rounded-tl-lg rounded-bl-lg
                          hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                          
                          xs:gap-2 xs:px-4 xs:py-2
                          md:gap-3">
              <p className="
              
                          xs:text-[10px]
                          lg:text-[18px]
                          2xl:text-[20px]">
                ADD TO CART</p>
              <i>
                <IoIosArrowForward className="
                                              xs:text-[10px]
                                              lg:text-[18px]
                                              2xl:text-[20px]"/>
              </i>
        </button>
      </div>
    </div>
  );
};

export default Product_03;