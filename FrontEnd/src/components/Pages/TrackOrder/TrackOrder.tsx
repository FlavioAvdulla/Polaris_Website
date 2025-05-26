import React from "react";
import { useNavigate } from "react-router-dom";

import { LuCheckCheck } from "react-icons/lu";
import { PiUser } from "react-icons/pi";
import { PiMotorcycleFill } from "react-icons/pi";
import { BiSolidPackage } from "react-icons/bi";

// Data
import { cartList } from "../../../components/Home/ProductSection/ProductSection";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

const TrackOrder = () => {

  const navigate = useNavigate();

  const handleHomeOpen = () => {
    navigate("/");
  };

  return (
    <div className="w-[85%] flex flex-col mx-auto my-20">
      {/* ============= Track Orders - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1
          className="font-camptonMedium
                       dark:text-white
                      
                       xs:text-[10px]
                       sm:text-[11px]
                       md:text-[15px] 
                       lg:text-[22px]">
          My Orders / Tracking
        </h1>

        <div
          className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit">
          <p
            className="text-gray-500 font-camptonBook
                       dark:text-white
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
            No handling fees + free shipping on orders over $35*
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-auto gap-5">
        <p className="font-camptonBook
                      dark:text-white
                      
                      xs:text-[15px]
                      lg:text-[20px]">Order ID: ODOIEFHW9323</p>

        {/* ============= Package Track Details ============= */}
        <div className="flex w-[100%] h-auto border-primary border-[1px] rounded-lg justify-between p-5
                        dark:border-secondary_01
                        
                        xs:flex-col xs:gap-5
                        lg:flex-row lg:gap-0">
          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01
                          
                          xs:text-[15px]
                          lg:text-[20px]">
              Estimated Delivery Time:
            </p>
            <p className="font-camptonBook
                          dark:text-white
                          
                          xs:text-[15px]
                          lg:text-[20px]">29 Nov 2025</p>
          </div>

          <div
            className="bg-primary
                       dark:bg-secondary_01
                       
                       xs:h-[1px] xs:w-[max]
                       lg:h-[max] lg:w-[1px]"/>

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01
                          
                          xs:text-[15px]
                          lg:text-[20px]">Shipped By:</p>
            <p className="font-camptonBook
                          dark:text-white
                          
                          xs:text-[15px]
                          lg:text-[20px]">BLUEDART +355 67 63 11 918</p>
          </div>

          <div className="bg-primary
                          dark:bg-secondary_01

                          xs:h-[1px] xs:w-[max]
                          lg:h-[max] lg:w-[1px]"/>

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01
                          
                          xs:text-[15px]
                          lg:text-[20px]">Status:</p>
            <p className="font-camptonBook
                          dark:text-white
                          
                          xs:text-[15px]
                          lg:text-[20px]">Picked by the courier</p>
          </div>

          <div className="bg-primary
                          dark:bg-secondary_01

                          xs:h-[1px] xs:w-[max]
                          lg:h-[max] lg:w-[1px]"/>

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01
                          
                          xs:text-[15px]
                          lg:text-[20px]">Tracking #:</p>
            <p className="font-camptonBook
                          dark:text-white
                          
                          xs:text-[15px]
                          lg:text-[20px]">BUE95HJKDGIER90KL</p>
          </div>
        </div>

        {/* ============= Track Path ============= */}

        <div className="flex flex-col w-[100%] h-auto items-center justify-center relative mt-6">
          <div className="flex w-[65%] justify-between absolute">
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-primary rounded-full
                            dark:bg-secondary_01">
              <i>
                <LuCheckCheck className="text-white" />
              </i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-primary rounded-full
                            dark:bg-secondary_01">
              <i>
                <PiUser className="text-white" />
              </i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-gray-300 rounded-full">
              <i>
                <PiMotorcycleFill className="text-darkColor" />
              </i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-gray-300 rounded-full">
              <i>
                <BiSolidPackage className="text-darkColor" />
              </i>
            </div>
          </div>

          <div className="flex w-[100%]">
            <div className="w-[50%] h-[10px] bg-primary
                            dark:bg-secondary_01"></div>
            <div className="w-[50%] h-[10px] bg-gray-300"></div>
          </div>
        </div>

        <div
          className="h-[1px] w-[100%] bg-gray-300 mx-auto mt-10
          dark:bg-gray-600"
        />
        {/* ============= Orders ============= */}
        <div className="grid grid-cols-3 w-[100%] gap-5">
          {cartList.map((product, index) => (
            <div
              className="flex w-[100%] h-[100px] border-[1px] border-primary rounded-lg
                         dark:border-gray-600"
              key={index}
            >
              {/* ============= Orders - Photo ============= */}
              <div className="flex aspect-1 p-1 justify-center items-center">
                <img
                  className="xs:w-[100%] aspect-1"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              {/* ============= Orders - Info ============= */}
              <div className="flex flex-col justify-center py-3 px-4 bg-gray-100 w-[100%] rounded-lg rounded-tl-none rounded-bl-none
                              dark:bg-gray-800">
                <h1 className="font-camptonMedium
                               dark:text-white">SONY HEADSET WH-1000XM5</h1>
                <p className="flex font-camptonSemiBold text-primary text-[25px]
                              dark:text-secondary_01">
                  {product.unitPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                        dark:bg-gray-600"/>

        <button
          className="flex w-[180px] items-center justify-center bg-primary border-[1px] border-white text-white
                     rounded-bl-3xl rounded-tl-3xl rounded-tr-lg rounded-br-lg
                     hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                     dark:bg-secondary_01 dark:hover:bg-transparent
                        
                     xs:gap-2 xs:px-3 xs:py-1
                     md:gap-3 md:px-4 md:py-2">
          <i><IoIosArrowForward className="xs:text-[10px] rotate-[180deg]
                                           md:text-[15px]
                                           2xl:text-[20px]"/>
          </i>
          <p className="xs:text-[10px]
                        md:text-[15px]
                        2xl:text-[20px]"
                        onClick={handleHomeOpen}>
            BACK TO HOME
          </p>
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
