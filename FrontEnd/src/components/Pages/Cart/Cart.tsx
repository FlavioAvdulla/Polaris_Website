import React, { useState } from "react";

// Data
import { cartList } from "../../../components/Home/ProductSection/ProductSection";

// React Icons
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

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
    <div className="w-[85%] flex flex-col mx-auto my-20">
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
          <tr className="flex w-[100%] justify-between bg-slate-200 gap-[1px]">
            <th className="flex p-2 justify-center w-[100%] h-[100%] bg-primary font-camptonLight text-[17px]">
              <p className="text-white">Product</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%] bg-primary font-camptonLight text-[17px]">
              <p className="text-white">Unit Price</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%] bg-primary font-camptonLight text-[17px]">
              <p className="text-white">Quantity</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%] bg-primary font-camptonLight text-[17px]">
              <p className="text-white">Subtotal</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%] bg-primary font-camptonLight text-[17px]">
              <p className="text-white">Remove</p>
            </th>
          </tr>
        </thead>
        {/* ============= Add to Cart - List ============= */}
        <tbody>
          {cartList.map((product, index) => (
            <tr
              key={index}
              className="flex w-[100%] justify-between">
              <td className="flex px-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-primary">
                <img
                  className="w-[80px]"
                  src={product.image}
                  alt={product.title}/>
                {product.title}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-primary">
                {product.unitPrice}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-primary">
                {/* ============= Quantity ============= */}
                <div className="flex h-auto items-center">
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
                  {/* ============= Quantity number ============= */}
                  <div className="flex items-center text-center justify-center w-[100%] h-[100%] bg-primary border-[1px] border-primary ">
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
                    <i><FaCirclePlus
                        className="text-primary cursor-pointer
                                                              
                                    xs:text-[13px]
                                    lg:text-[22px]"/></i>
                  </div>
                </div>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-primary">
                <p>{(
                  parseInt(quantity, 10) * parseFloat(product.unitPrice.replace("$", ""))
                ).toFixed(2)}$</p>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-t-0 border-primary">
                <i><IoCloseCircle className="text-[29px] text-primary cursor-pointer"/></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
