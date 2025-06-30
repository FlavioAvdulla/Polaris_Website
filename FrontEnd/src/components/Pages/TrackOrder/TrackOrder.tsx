import { cartList } from "../../../components/Home/ProductSection/ProductSection";
import { PiUser, PiMotorcycleFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidPackage } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { LuCheckCheck } from "react-icons/lu";
import React from "react";

const TrackOrder = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleHomeOpen = () => {
    navigate("/");
  };

  return (
    <div className="w-[85%] flex flex-col mx-auto my-20">
      {/* ============= Track Orders - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                       dark:text-white
                      
                       xs:text-[10px]
                       sm:text-[11px]
                       md:text-[15px]
                       lg:text-[22px]">{t("trackOrder.trackOrders")}</h1>

        <div className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit">
          <p className="text-gray-500 font-camptonBook
                        dark:text-white
                         
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
            {t("trackOrder.info")}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-auto gap-5">
        <p className="font-camptonBook
                      dark:text-white
                      
                      xs:text-[15px]
                      lg:text-[20px]"><span>{t("trackOrder.orderId")}</span> ODOIEFHW9323</p>

        {/* ============= Package Track Details ============= */}
        <div className="flex w-[100%] h-auto border-primary border-[1px]
                        rounded-lg justify-between py-5
                        dark:border-secondary_01
                        
                        xs:flex-col xs:gap-5 mx-auto xs:px-[20px]
                        md:px-[40px]
                        lg:flex-row lg:gap-0 lg:px-[30px]
                        xl:px-[80px]">
          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01
                          
                          xs:text-[15px]
                          md:text-[17px]
                          xl:text-[20px]">
              {t("trackOrder.deliveryTime")}
            </p>
            <p className="font-camptonBook
                          dark:text-white
                          
                          xs:text-[15px]
                          md:text-[14px]
                          xl:text-[20px]">29/12/2025</p>
          </div>

          <div className="bg-primary
                          dark:bg-secondary_01
                          
                          xs:h-[1px] xs:w-full
                          lg:h-[45px] lg:w-[1px]
                          xl:h-[60px]"/>

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01
                          
                          xs:text-[15px]
                          md:text-[17px]
                          xl:text-[20px]">{t("trackOrder.shippedBy")}</p>
            <p className="font-camptonBook
                          dark:text-white
                          
                          xs:text-[15px]
                          md:text-[14px]
                          xl:text-[20px]">BLUEDART +355 67 63 11 918</p>
          </div>

          <div className="bg-primary
                          dark:bg-secondary_01

                          xs:h-[1px] xs:w-full
                          lg:h-[45px] lg:w-[1px]
                          xl:h-[60px]"/>

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01

                          xs:text-[15px]
                          md:text-[17px]
                          xl:text-[20px]">{t("trackOrder.statusT")}</p>
            <p className="font-camptonBook
                          dark:text-white

                          xs:text-[15px]
                          md:text-[14px]
                          xl:text-[20px]">{t("trackOrder.statusP")}</p>
          </div>

          <div className="bg-primary
                          dark:bg-secondary_01

                          xs:h-[1px] xs:w-full
                          lg:h-[45px] lg:w-[1px]
                          xl:h-[60px]"/>

          <div className="flex flex-col">
            <p className="font-camptonSemiBold text-primary
                          dark:text-secondary_01

                          xs:text-[15px]
                          md:text-[17px]
                          xl:text-[20px]">{t("trackOrder.tracking")}</p>
            <p className="font-camptonBook
                          dark:text-white

                          xs:text-[15px]
                          md:text-[14px]
                          xl:text-[20px]">BUE95HJKDGIER90KL</p>
          </div>
        </div>

        {/* ============= Track Path ============= */}

        <div className="flex flex-col w-[100%] h-auto items-center justify-center relative mt-10">
          <div className="flex justify-between absolute mx-auto

                          xs:w-[80%]
                          lg:w-[70%]">
            <div className="flex items-center justify-center text-[30px] aspect-1 bg-primary rounded-full
                            dark:bg-secondary_01

                            xs:w-[35px]
                            md:w-[50px]
                            lg:w-[60px]
                            xl:w-[70px]">
              <i><LuCheckCheck className="text-white

                                          xs:w-[19px]
                                          lg:w-[23px]
                                          xl:w-[30px]"/>
              </i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-primary rounded-full
                            dark:bg-secondary_01

                            xs:w-[35px]
                            md:w-[50px]
                            lg:w-[60px]
                            xl:w-[70px]">
              <i>
                <PiUser className="text-white

                                   xs:w-[19px]
                                   lg:w-[23px]
                                   xl:w-[30px]" />
              </i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-gray-300 rounded-full

                            xs:w-[35px]
                            md:w-[50px]
                            lg:w-[60px]
                            xl:w-[70px]">
              <i><PiMotorcycleFill className="text-darkColor

                                              xs:w-[19px]
                                              lg:w-[23px]
                                              xl:w-[30px]"/>
              </i>
            </div>
            <div className="flex items-center justify-center text-[30px] w-[60px] aspect-1 bg-gray-300 rounded-full

                            xs:w-[35px]
                            md:w-[50px]
                            lg:w-[60px]
                            xl:w-[70px]">
              <i><BiSolidPackage className="text-darkColor
                                            xs:w-[19px]
                                            lg:w-[23px]
                                            xl:w-[30px]"/>
              </i>
            </div>
          </div>

          <div className="flex w-[100%]">
            <div className="w-[50%] bg-primary rounded-l-full
                            dark:bg-secondary_01

                            xs:h-[5px]
                            lg:h-[10px]"></div>
            <div className="w-[50%] bg-gray-300 rounded-r-full

                            xs:h-[5px]
                            lg:h-[10px]"></div>
          </div>
        </div>

        <div className="h-[1px] w-[100%] bg-gray-300 mx-auto mt-10
                        dark:bg-gray-600"/>
        {/* ============= Orders ============= */}
        <div className="grid w-[100%] gap-5

                        xs: grid-cols-1
                        lg:grid-cols-3">
          {cartList.map((product, index) => (
            <div className="flex w-[100%] h-[100px] border-[1px] border-primary rounded-lg
                            dark:border-gray-600" key={index}>
              {/* ============= Orders - Photo ============= */}
              <div className="flex aspect-1 p-1 justify-center items-center">
                <img
                  className="xs:w-[100%] aspect-1"
                  src={product.image}
                  alt={t(product.title)}
                />
              </div>
              {/* ============= Orders - Info ============= */}
              <div className="flex flex-col justify-center py-3 px-4 bg-gray-100 w-[100%] rounded-lg rounded-tl-none rounded-bl-none
                              dark:bg-gray-800">
                <h1 className="font-camptonMedium
                               dark:text-white

                               xs:text-[15px]
                               md:text-[20px]
                               lg:text-[18px]">{t(product.title)}</h1>
                <p className="flex font-camptonSemiBold text-primary text-[25px]
                              dark:text-secondary_01

                              xs:text-[20px]
                              md:text-[30px]
                              lg:text-[25px]">
                  {product.unitPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                        dark:bg-gray-600"/>

        <button className="flex items-center justify-center bg-primary border-[1px] border-white text-white
                           rounded-bl-3xl rounded-tl-3xl rounded-tr-lg rounded-br-lg
                           hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                           dark:bg-secondary_01 dark:hover:bg-transparent

                           xs:gap-2 xs:px-3 xs:py-1 xs:w-[120px]
                           md:gap-3 md:px-4 md:py-2 md:w-[180px]
                           lg:w-[250px]">
          <i><IoIosArrowForward className="xs:text-[10px] rotate-[180deg]
                                           md:text-[15px]
                                           2xl:text-[20px]"/>
          </i>
          <p className="xs:text-[10px]
                        md:text-[15px]
                        2xl:text-[20px]"
                        onClick={handleHomeOpen}>
            {t("trackOrder.backToHome")}
          </p>
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
