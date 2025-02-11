import React, { useState } from "react";

// Photos
import Product_01 from "../../../assets/images/Products/Product_01.jpg";
import Product_02 from "../../../assets/images/Products/Product_02.jpg";
import Product_03 from "../../../assets/images/Products/Product_03.jpg";
import Product_04 from "../../../assets/images/Products/Product_04.jpg";

const Product01 = () => {
  const [mainPhoto, setMainPhoto] = useState(Product_01)

  const handleClick = (photo) => {
    setMainPhoto(photo)
  }

  return (
    <div className="flex w-[85%] h-auto mx-auto my-20 gap-5">
      {/* ============= Left - Product - Photos ============= */}
      <div className="flex flex-col w-[50%] h-[600px] gap-5">
        {/* ============= Big Photo ============= */}
        <div className="flex w-[100%] h-[75%] items-center justify-center rounded-lg border-[1px] overflow-hidden border-primary bg-white">
          <img
            className="w-[85%]  object-cover"
            src={mainPhoto}
            alt="Image_01"
          />
        </div>
        {/* ============= Small Photos ============= */}
        <div className="flex w-[100%] h-[25%] gap-5">
          <div className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_01}
              alt="Image_02"
              onClick={() => handleClick(Product_01)}
            />
          </div>
          <div className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_02}
              alt="Image_03"
              onClick={() => handleClick(Product_02)}
            />
          </div>
          <div className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={Product_03}
              alt="Image_04"
              onClick={() => handleClick(Product_03)}
            />
          </div>
          <div className="w-[25%] items-center justify-center rounded-lg
                          cursor-pointer hover:scale-105 hover:shadow-shadow-dark
                          ease-in-out duration-300 border-[1px] overflow-hidden border-primary">
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
      <div className="flex flex-col w-[50%] h-[600px] bg-slate-400 gap-5"></div>
    </div>
  );
};

export default Product01;
