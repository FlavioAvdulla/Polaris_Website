import React from "react";

// Polaris Logo
import Polaris_Logo_White from "../../assets/images/Polaris_Logo_White.svg";

// React Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-[100%] justify-center pt-10 bg-primary">
      <div className="flex w-[85%] gap-5 justify-between mx-auto mb-8
      
                      xs:flex-col
                      md:flex-row
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
          <p className="text-white font-camptonLight
                        
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
          <h1 className="text-white font-camptonMedium
          
                          md:text-[18px]
                          lg:text-[22px]">
            USEFUL LINKS
          </h1>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">ABOUT US</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">OUR TEAM</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">RECENT NEWS</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">PROJECTS</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">OUR ALL SERVICES</p>
          </button>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonMedium
          
                          md:text-[18px]
                          lg:text-[22px]">
            CATEGORY
          </h1>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">COORDINATOR</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">ARCHITECT</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">MANAGER</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">PRODUCER</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">DESIGNER</p>
          </button>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonMedium
          
                          md:text-[18px]
                          lg:text-[22px]">CONTACT</h1>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">
              +355 (0) 67 63 11 918
            </p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">
              a.flavio4366@gmail.com
            </p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          md:text-[12px]
                          lg:text-[16px]">TIRANA, ALBANIA.</p>
          </button>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto" />

      {/* ============= Copyright ============= */}
      <div className="flex w-[85%] h-auto py-6 justify-between items-center mx-auto
      
                      xs:flex-col
                      md:flex-row">
        <p className="text-white font-camptonLight
        
                      xs:text-[10px]
                      sm:text-[12px]
                      lg:text-[15px]">
          Copyright 2025 © Flavio Avdulla - All rights reserved
        </p>
        <div className="flex gap-5">
          <button>
            <p className="text-white font-camptonLight
            
                          xs:text-[10px]
                          sm:text-[12px]
                          lg:text-[15px]">Terms & Conditions</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          xs:text-[10px]
                          sm:text-[12px]
                          lg:text-[15px]">Privacy Policy</p>
          </button>
          <button>
            <p className="text-white font-camptonLight
            
                          xs:text-[10px]
                          sm:text-[12px]
                          lg:text-[15px]">Contact Us</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
