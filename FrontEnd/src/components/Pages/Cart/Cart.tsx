import { cartList as initialCartList } from "../../../components/Home/ProductSection/ProductSection";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";

const Cart = ({ setCartQuantity }) => {

  const { t } = useTranslation();
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
                     dark:text-white

                     xs:text-[10px]
                     sm:text-[11px]
                     md:text-[15px] 
                     lg:text-[22px]">{" "}{t("addToCart.addToCart")}</h1>
        <div className="flex items-center

                        xs:w-[50%]
                        md:w-fit">
          <p className="text-gray-500
                        dark:text-white

                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
            {t("addToCart.info")}
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full mx-auto" />
      {/* ============= Add to Cart - Table ============= */}
      <div className="flex overflow-scroll [&::-webkit-scrollbar]:hidden
                      [-ms-overflow-style:none] [scrollbar-width:none]">
      <table className="flex flex-col 

                        xs:min-w-[1000px]
                        lg:min-w-[100%]">
        <thead>
          <tr className="flex w-[100%] justify-between gap-[1px]">
            <th className="flex p-2 justify-center w-[100%] h-[100%]
                           bg-primary font-camptonLight text-[17px]
                           dark:bg-secondary_01">
              <p className="text-white">{t("addToCart.product")}</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%]
                           bg-primary font-camptonLight text-[17px]
                           dark:bg-secondary_01">
              <p className="text-white">{t("addToCart.unitPrice")}</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%]
                           bg-primary font-camptonLight text-[17px]
                           dark:bg-secondary_01">
              <p className="text-white">{t("addToCart.quantity")}</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%]
                           bg-primary font-camptonLight text-[17px]
                           dark:bg-secondary_01">
              <p className="text-white">{t("addToCart.subtotal")}</p>
            </th>
            <th className="flex p-2 justify-center w-[100%] h-[100%]
                           bg-primary font-camptonLight text-[17px]
                           dark:bg-secondary_01">
              <p className="text-white">{t("addToCart.remove")}</p>
            </th>
          </tr>
        </thead>
        {/* ============= Add to Cart - List ============= */}
        <tbody>
          {cartItems.map((product, index) => (
            <tr key={index} className="flex w-[100%] justify-between">
              <td className="flex px-5 items-center w-[100%] gap-5 justify-center
                             border-[1px] border-r-0 border-t-0 border-primary font-camptonBook
                             dark:border-secondary_01 dark:text-white">
                <img className="xs:w-[50px]
                                lg:w-[70px]"
                     src={product.image}
                     alt={product.title}/>{t(product.title)}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center
                             border-[1px] border-r-0 border-t-0 border-primary font-camptonBook
                             dark:border-secondary_01 dark:text-white">{product.unitPrice}
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center
                             border-[1px] border-r-0 border-t-0 border-primary font-camptonBook
                             dark:border-secondary_01 dark:text-white">
                {/* ============= Quantity ============= */}
                <div className="flex h-auto items-center">
                  <div className="flex items-center justify-center
                                  border-[1px] border-primary cursor-pointer
                                  dark:border-secondary_01
                              
                                  xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tl-md xs:rounded-bl-md
                                  lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tl-lg lg:rounded-bl-lg"
                    onClick={decreaseQuantity}>
                    <i><FaCircleMinus className="text-primary cursor-pointer
                                                 dark:text-secondary_01

                                                 xs:text-[13px]
                                                 lg:text-[22px]"/></i>
                  </div>
                  {/* ============= Quantity number ============= */}
                  <div className="flex items-center text-center justify-center w-[100%] h-[100%]
                                  bg-primary border-[1px] border-primary
                                  dark:bg-secondary_01 dark:border-secondary_01">
                    <input className="text-center text-white font-camptonMedium bg-transparent outline-none

                                      xs:w-[25px] xs:h-[26px] xs:text-[12px]
                                      lg:w-[40px] lg:h-[40px] lg:text-[20px]"
                           type="text"
                           id="quantity"
                           name="quantity"
                           min="1"
                           value={localQuantity}
                           onChange={handleQuantityChange}/>
                  </div>
                  <div className="flex items-center justify-center
                                  border-[1px] border-primary cursor-pointer
                                  dark:border-secondary_01

                                  xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tr-md xs:rounded-br-md
                                  lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tr-lg lg:rounded-br-lg"
                       onClick={increaseQuantity}>

                    <i><FaCirclePlus className="text-primary cursor-pointer
                                                dark:text-secondary_01
                                
                                                  xs:text-[13px]
                                                  lg:text-[22px]"/></i>
                  </div>
                </div>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center
                             border-[1px] border-r-0 border-t-0 border-primary
                             dark:border-secondary_01 dark:text-white">
                <p>
                  {(
                    parseInt(localQuantity, 10) *
                    parseFloat(product.unitPrice.replace("$", ""))
                  ).toFixed(2)}$
                </p>
              </td>
              <td className="flex p-5 items-center w-[100%] gap-5 justify-center
                             border-[1px] border-t-0 border-primary
                             dark:border-secondary_01">
                <i><IoCloseCircle className="text-[29px] text-primary cursor-pointer
                                             dark:text-secondary_01"
                  onClick={() => handleRemoveItem(product._id)} />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
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
            <input className="w-[100%] h-[45px] rounded-md rounded-r-none font-camptonLight
                              bg-gray-100 p-5 outline-none border-none
                              dark:bg-gray-800"
                   type="text"
                   placeholder={t("addToCart.couponCode")}
                   required/>
            <button className="flex w-[150px] h-[45px] rounded-md rounded-l-none items-center
                               justify-center text-white font-camptonLight bg-primary p-5 border-[1px] border-primary
                               dark:bg-secondary_01 dark:border-secondary_01

                               dark:hover:bg-transparent duration-300">
              <p className="font-camptonLight">{t("addToCart.apply")}</p>
            </button>
          </div>
          {/* ============= Coupon Infos input ============= */}
          <div className="flex flex-col gap-3">
            <input className="w-[100%] h-[45px] rounded-md font-camptonLight
                              bg-gray-100 p-5 outline-none border-none
                              dark:bg-gray-800"
                   type="text"
                   placeholder={t("addToCart.country")}
                   required/>
            <input className="w-[100%] h-[45px] rounded-md font-camptonLight
                              bg-gray-100 p-5 outline-none border-none
                              dark:bg-gray-800"
                   type="text"
                   placeholder={t("addToCart.city")}
                   required/>
            <input className="w-[100%] h-[45px] rounded-md font-camptonLight
                              bg-gray-100 p-5 outline-none border-none
                              dark:bg-gray-800"
                   type="text"
                   placeholder={t("addToCart.postCode")}
                   required/>
          </div>
        </div>

        {/* ============= Section - 02 ============= */}
        <div className="flex flex-col rounded-md border-[1px] border-primary px-4 justify-center
                        dark:border-secondary_01
        
                        xs:w-[100%] xs:h-[303px]
                        lg:w-[33.33%]">
          <div className="flex flex-col gap-3">

            <p className="font-camptonSemiBold
                          dark:text-white">{t("addToCart.cartTotal")}</p>

            <div className="flex justify-between">
              <p className="font-camptonBook
                            dark:text-white">{t("addToCart.subtotal")}</p>
              <p className="font-camptonSemiBoldfont-camptonBook
                            dark:text-white">{calculations.subtotalElement}</p>
            </div>

            <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                            dark:bg-gray-600" />

            <div className="flex justify-between">

              <p className="font-camptonBook
                            dark:text-white">{t("addToCart.shipping")}</p>
              <div className="font-camptonBook">
                <p className="flex gap-1 dark:text-white">{t("addToCart.flatRate")}:
                  <span className="font-camptonSemiBold">{calculations.flatRateElement}</span></p>
                <p className="dark:text-white">{t("addToCart.freeShipping")}</p>
                <p className="dark:text-white">
                  {t("addToCart.shippingTo")} <span className="font-camptonSemiBold">CA.</span>
                </p>
              </div>
            </div>

            <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                            dark:bg-gray-600" />

            <div className="flex justify-between">
              <p className="font-camptonBook dark:text-white">{t("addToCart.total")}</p>
              <p className="font-camptonSemiBold dark:text-white">{calculations.totalElement}</p>
            </div>
            <button
              className="flex w-[100%] h-[45px] rounded-md items-center justify-center
                         font-camptonLight bg-primary border-primary p-5 text-white border-[1px]
                         hover:bg-transparent hover:text-primary duration-300
                         dark:hover:text-white dark:bg-secondary_01 dark:hover:bg-transparent dark:border-secondary_01">

              <p className="font-camptonLight">{t("addToCart.proceedToCheckout")}</p>
            </button>
          </div>
        </div>

        {/* ============= Section - 03 ============= */}
        <div className="flex gap-3
        
                        xs:w-[100%] xs:flex-col
                        lg:w-[33.33%]">
          <button className="flex w-[100%] h-[45px] rounded-md items-center justify-center
                             font-camptonLight border-[1px] border-primary p-5
                             dark:border-secondary_01">

            <p className="font-camptonLight text-primary
                          dark:text-white">{t("addToCart.continueShopping")}</p>
          </button>
          <button className="flex w-[100%] h-[45px] rounded-md items-center justify-center
                             font-camptonLight bg-primary p-5 gap-2 group
                             dark:bg-secondary_01">
            <i><HiOutlineRefresh className="text-white group-hover:rotate-[180deg]
                                            group-hover:duration-300 group-hover:ease-in-out" />
            </i>
            <p className="font-camptonLight text-white">{t("addToCart.updateCart")}</p>
          </button>
        </div>
      </div>
      <button
        className="flex h-[45px] rounded-md items-center justify-center border-[1px]
                   font-camptonLight bg-primary border-primary p-5 mt-3 text-white 
                   hover:bg-transparent hover:text-primary duration-300
                   dark:bg-secondary_01 dark:border-secondary_01
                  
                   lg:w-[150px]">
        <p className="font-camptonLight">{t("addToCart.update")}</p>
      </button>
    </div>
  );
};

export default Cart;