import React, { useState } from "react";

// Data
import { cartList as initialCartList } from "../../../components/Home/ProductSection/ProductSection";

// React Icons
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
// import { IoIosArrowForward } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
// import { IoIosArrowRoundForward } from "react-icons/io";

const Cart = ({ setCartQuantity }) => {
  const [localQuantity, setLocalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(initialCartList);
  

  const handleQuantityChange = (e) => {
    
    const value = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 99) {
      setLocalQuantity(numericValue);
      setCartQuantity(numericValue); // Update the global quantity
    } else {
      setLocalQuantity(0);
      setCartQuantity(0); // Reset to 0 if invalid
    }
  };

  const increaseQuantity = () => {
    const newQuantity = Math.min(99, localQuantity + 1);
    setLocalQuantity(newQuantity);
    setCartQuantity(newQuantity);
  };

  const decreaseQuantity = () => {
    const newQuantity = Math.max(0, localQuantity - 1);
    setLocalQuantity(newQuantity);
    setCartQuantity(newQuantity);
  };
  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };

  const flatRate = 5.00;

function CartCalculations({ cartItems }) {
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.unitPrice.replace("$", ""));
    return total + localQuantity * price;
  }, 0);

  const total = subtotal + flatRate;

  return {
    subtotalElement: <div>{subtotal.toFixed(2)}$</div>,
    flatRateElement: <div>{flatRate.toFixed(2)}$</div>,
    totalElement: <div>{total.toFixed(2)}$</div>,
  };
}

const calculations = CartCalculations({cartItems})

  return (
    <div className="w-[85%] flex flex-col mx-auto my-20">
      {/* ============= Add to Cart - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1
          className="font-camptonMedium
                      
                      xs:text-[10px]
                      sm:text-[11px]
                      md:text-[15px] 
                      lg:text-[22px]">{" "}Add to Cart</h1>
        <div className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit">
          <p className="text-gray-500
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
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
          {cartItems.map((product, index) => (
            <tr key={index} className="flex w-[100%] justify-between">
              <td className="flex px-5 items-center w-[100%] gap-5 justify-center border-[1px] border-r-0 border-t-0 border-primary">
                <img
                  className="w-[80px]"
                  src={product.image}
                  alt={product.title}
                />
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
                    onClick={decreaseQuantity}>
                    <i>
                      <FaCircleMinus
                        className="text-primary cursor-pointer
                                                               
                                    xs:text-[13px]
                                    lg:text-[22px]"/></i>
                  </div>
                  {/* ============= Quantity number ============= */}
                  <div className="flex items-center text-center justify-center w-[100%] h-[100%] bg-primary border-[1px] border-primary">
                    <input
                      className="text-center text-white font-camptonMedium bg-transparent outline-none
                        
                                xs:w-[25px] xs:h-[26px] xs:text-[12px]
                                lg:w-[40px] lg:h-[40px] lg:text-[20px]"
                      type="text"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={localQuantity}
                      onChange={handleQuantityChange}/>
                  </div>
                  <div
                    className="flex items-center justify-center
                                border-[1px] border-primary cursor-pointer
                                                
                                xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tr-md xs:rounded-br-md
                                lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tr-lg lg:rounded-br-lg"
                    onClick={increaseQuantity}>

                    <i><FaCirclePlus className="text-primary cursor-pointer
                                                              
                                    xs:text-[13px]
                                    lg:text-[22px]"/></i>
                  </div>
                </div>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center
                            border-[1px] border-r-0 border-t-0 border-primary">
                <p>
                  {(
                    parseInt(localQuantity, 10) *
                    parseFloat(product.unitPrice.replace("$", ""))
                  ).toFixed(2)}$
                </p>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center border-[1px] border-t-0 border-primary">
                <i>
                  <IoCloseCircle className="text-[29px] text-primary cursor-pointer"
                  onClick={() => handleRemoveItem(product._id)} />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ============= Coupon section ============= */}
      <div className="flex w-[100%] gap-10 mx-auto mt-20
      
                      xs:flex-col xs:h-auto
                      lg:flex-row lg:h-[300px]">
        {/* ============= Section - 01 ============= */}
        <div className="flex flex-col gap-3 justify-between
        
                        xs:w-[100%]
                        lg:w-[33.33%]">
          {/* ============= Coupon input ============= */}
          <div className="flex w-[100%]">
            <input
              className="w-[100%] h-[45px] rounded-md rounded-r-none font-camptonLight bg-gray-100 p-5 outline-none border-none"
              type="text"
              placeholder="Coupon Code"
              required/>
            <button
              className="flex w-[150px] h-[45px] rounded-md rounded-l-none items-center
                          justify-center text-white font-camptonLight bg-primary p-5 border-[1px] border-primary
                          
                          hover:text-primary hover:bg-transparent duration-300">
              <p className="font-camptonLight">Apply</p>
            </button>
          </div>
          {/* ============= Coupon Infos input ============= */}
          <div className="flex flex-col gap-3">
            <input
              className="w-[100%] h-[45px] rounded-md font-camptonLight
                      bg-gray-100 p-5 outline-none border-none"
              type="text"
              placeholder="Country"
              required
            />
            <input
              className="w-[100%] h-[45px] rounded-md font-camptonLight
                      bg-gray-100 p-5 outline-none border-none"
              type="text"
              placeholder="City"
              required
            />
            <input
              className="w-[100%] h-[45px] rounded-md font-camptonLight
                      bg-gray-100 p-5 outline-none border-none"
              type="text"
              placeholder="Postcode / ZIP"
              required
            />
          </div>
        </div>

        {/* ============= Section - 02 ============= */}
        <div className="flex flex-col rounded-md border-[1px] border-primary px-4 justify-center
        
                        xs:w-[100%] xs:h-[303px]
                        lg:w-[33.33%]">
          <div className="flex flex-col gap-3">
            <p className="font-camptonSemiBold">Cart Total</p>

            <div className="flex justify-between">
              <p className="font-camptonBook">Subtotal</p>
              <p className="font-camptonSemiBold">{calculations.subtotalElement}</p>
            </div>

            <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />

            <div className="flex justify-between">
              <p className="font-camptonBook">Shipping</p>
              <div className="font-camptonBook">
                <p className="flex gap-1">Flat rate: <span className="font-camptonSemiBold">{calculations.flatRateElement}</span></p>
                <p className="font-camptonBook">Free shipping</p>
                <p className="font-camptonBook">
                  Shipping to <span className="font-camptonSemiBold">CA.</span>
                </p>
              </div>
            </div>

            <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />

            <div className="flex justify-between">
              <p className="font-camptonBook">Total</p>
              <p className="font-camptonSemiBold">{calculations.totalElement}</p>
            </div>
            <button
              className="flex w-[100%] h-[45px] rounded-md items-center justify-center
                          font-camptonLight bg-primary border-primary p-5 text-white border-[1px]
                          hover:bg-transparent hover:text-primary duration-300">
              <p className="font-camptonLight">Proceed to Checkout</p>
            </button>
          </div>
        </div>

        {/* ============= Section - 03 ============= */}
        <div className="flex gap-3
        
                        xs:w-[100%] xs:flex-col
                        lg:w-[33.33%] lg:flex-row">
          <button
            className="flex w-[100%] h-[45px] rounded-md items-center justify-center
                        font-camptonLight border-[1px] border-primary p-5">
            <p className="font-camptonLight text-primary">Continue Shopping</p>
          </button>
          <button className="flex w-[100%] h-[45px] rounded-md items-center justify-center font-camptonLight bg-primary p-5 gap-2 group">
            <i>
              <HiOutlineRefresh className="text-white group-hover:rotate-[180deg] group-hover:duration-300 group-hover:ease-in-out" />
            </i>
            <p className="font-camptonLight text-white">Update Cart</p>
          </button>
        </div>
      </div>
      <button
        className="flex h-[45px] rounded-md items-center justify-center
                  font-camptonLight bg-primary border-primary p-5 mt-3 text-white border-[1px]
                  hover:bg-transparent hover:text-primary duration-300
                  
                  lg:w-[150px]">
        <p className="font-camptonLight">Update</p>
      </button>
    </div>
  );
};

export default Cart;
