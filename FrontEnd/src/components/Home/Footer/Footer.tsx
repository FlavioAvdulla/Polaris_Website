import React from "react";

// Polaris Logo
import Polaris_Logo_White from "../../../assets/images/Polaris_Logo_White.svg";

// React Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquarePinterest, FaLinkedin } from "react-icons/fa6";

// Translation
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-[100%] justify-center pt-10 bg-primary
                    dark:bg-gray-800">
      <div className="flex gap-5 justify-between mx-auto mb-8
      
                      xs:flex-col xs:w-[80%]
                      sm:w-[73%]
                      md:flex-row md:w-[85%]
                      md:h-[150px]
                      lg:h-[180px]">
        {/* ============= Logo Section ============= */}
        <div className="flex flex-col h-auto justify-between
        
                        xs:gap-5 xs:w-[100%]
                        md:gap-0 md:w-[20%]">
          <img
            className="
            
                      xs:w-[80px]
                      lg:w-[110px]"
            src={Polaris_Logo_White}
            alt="Polaris_Logo_White"
          />
          <p className="text-white font-camptonBook
                        
                        md:text-[12px] md:leading-tight
                        lg:text-[16px] lg:leading-normal">
            Lorem ipsum dolor amet, consectetur
            sell adipis elit
          </p>
          <div className="flex gap-4">
            <i>
              <FaFacebookSquare className="text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300
                                            
                                            xs:text-[25px]
                                            md:text-[20px]
                                            lg:text-[30px]" />
            </i>
            <i>
              <FaSquareXTwitter className="text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300
                                            
                                            xs:text-[25px]
                                            md:text-[20px]
                                            lg:text-[30px]" />
            </i>
            <i>
              <FaLinkedin className="text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300
                                            
                                            xs:text-[25px]
                                            md:text-[20px]
                                            lg:text-[30px]" />
            </i>
            <i>
              <FaSquarePinterest className="text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300
                                            
                                            xs:text-[25px]
                                            md:text-[20px]
                                            lg:text-[30px]" />
            </i>
          </div>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonBold
                          dark:text-secondary_01
          
                          md:text-[18px]
                          lg:text-[22px]">
            {t("footer.usefulLinks")}
          </h1>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.aboutUs")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.ourTeam")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.recentNews")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.projects")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.ourAllServices")}</p>
          </button>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonBold
                          dark:text-secondary_01
          
                          md:text-[18px]
                          lg:text-[22px]">
            {t("footer.category")}
          </h1>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.coordinator")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.architect")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.manager")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.producer")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">{t("footer.designer")}</p>
          </button>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonBold
                        dark:text-secondary_01
          
                          md:text-[18px]
                          lg:text-[22px]">{t("footer.contact")}</h1>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">
              +355 (0) 67 63 11 918
            </p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">
              a.flavio4366@gmail.com
            </p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          md:text-[12px]
                          lg:text-[16px]">TIRANA, ALBANIA.</p>
          </button>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                      dark:bg-gray-600" />

      {/* ============= Copyright ============= */}
      <div className="flex w-[85%] h-auto py-6 justify-between items-center mx-auto
      
                      xs:flex-col
                      md:flex-row">
        <p className="text-white font-camptonBook
        
                      xs:text-[10px]
                      sm:text-[12px]
                      lg:text-[15px]">
          {t("footer.copyright")}
        </p>
        <div className="flex gap-5">
          <button>
            <p className="text-white font-camptonBook
            
                          xs:text-[10px]
                          sm:text-[12px]
                          lg:text-[15px]">{t("footer.terms&conditions")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          xs:text-[10px]
                          sm:text-[12px]
                          lg:text-[15px]">{t("footer.privacyPolicy")}</p>
          </button>
          <button>
            <p className="text-white font-camptonBook
            
                          xs:text-[10px]
                          sm:text-[12px]
                          lg:text-[15px]">{t("footer.contactUs")}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
