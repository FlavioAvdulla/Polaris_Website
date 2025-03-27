import React, { useState } from "react";

// Data
import { cartList } from "../../../components/Home/ProductSection/ProductSection";

// React Icons
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  const [quantity, setQuantity] = useState("01");

  const handleQuantityChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 99) {
      setQuantity(numericValue.toString().padStart(2, "0"));
    } else {
      setQuantity("01");
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.min(99, parseInt(prevQuantity) + 1).toString();
      return newQuantity.padStart(2, "0");
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, parseInt(prevQuantity) - 1).toString();
      return newQuantity.padStart(2, "0");
    });
  };

  return (
    <div className="w-[85%] flex flex-col mx-auto bg-slate-100 my-20">
      {/* ============= Add to Cart - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1
          className="font-camptonMedium
                      
                      xs:text-[10px]
                      sm:text-[11px]
                      md:text-[15px] 
                      lg:text-[22px]"
        >
          Add to Cart
        </h1>

        <div
          className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit"
        >
          <p
            className="text-gray-500
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]"
          >
            No handling fees + free shipping on orders over $35*
          </p>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />
      {/* ============= Add to Cart - Table ============= */}
      <table className="flex flex-col w-[100%]">
        <thead>
          <tr className="flex w-[100%] justify-between bg-slate-200">
            <th className="flex p-5 justify-center w-[100%] h-[100%] border-[1px] border-r-0 border-gray-500 font-camptonLight text-[17px]">
              Product
            </th>
            <th className="flex p-5 justify-center w-[100%] h-[100%] border-[1px] border-r-0 border-gray-500 font-camptonLight text-[17px]">
              Unit Price
            </th>
            <th className="flex p-5 justify-center w-[100%] h-[100%] border-[1px] border-r-0 border-gray-500 font-camptonLight text-[17px]">
              Quantity
            </th>
            <th className="flex p-5 justify-center w-[100%] h-[100%] border-[1px] border-r-0 border-gray-500 font-camptonLight text-[17px]">
              Subtotal
            </th>
            <th className="flex p-5 justify-center w-[100%] h-[100%] border-[1px] border-gray-500 font-camptonLight text-[17px]">
              Remove
            </th>
          </tr>
        </thead>
        {/* ============= Add to Cart - List ============= */}
        <tbody>
          {cartList.map((product, index) => (
            <tr
              key={index}
              className="flex w-[100%] justify-between"
            >
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-gray-500">
                <img
                  className="w-[50px]"
                  src={product.image}
                  alt={product.title}
                />
                {product.title}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-gray-500">
                {product.unitPrice}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-gray-500">
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
                      <FaCircleMinus
                        className="text-primary cursor-pointer
                                      
                                                              
                                    xs:text-[13px]
                                    lg:text-[22px]"
                      />
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
                    onClick={increaseQuantity}>
                    <i>
                      <FaCirclePlus
                        className="text-primary cursor-pointer
                                      
                                                          
                                    xs:text-[13px]
                                    lg:text-[22px]"/>
                    </i>
                  </div>
                </div>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-gray-500">
                {product.quantity}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-t-0 border-gray-500">
                {product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
