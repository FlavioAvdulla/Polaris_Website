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
      <div className="flex w-[85%] gap-5 justify-between mx-auto mb-8 bg-slate-500
      
                      xs:grid xs:grid-cols-1 
                      md:grid md:grid-cols-2 md:h-[350px]
                      lg:h-[200px]
                      lg:grid-cols-4 ">
        {/* ============= Logo Section ============= */}
        <div className="flex flex-col w-fit h-auto justify-between
        
                        xs:gap-5
                        md:gap-0">
          <img
            className="w-[110px]"
            src={Polaris_Logo_White}
            alt="Polaris_Logo_White"
          />
          <p className="text-white font-camptonLight
                        
                        md:w-[75%]
                        ">
            Lorem ipsum dolor amet, consectetur
            sell adipis elit phase nibh ellentes
          </p>
          <div className="flex gap-4">
            <i>
              <FaFacebookSquare className="text-[30px] text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300" />
            </i>
            <i>
              <FaSquareXTwitter className="text-[30px] text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300" />
            </i>
            <i>
              <FaLinkedin className="text-[30px] text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300" />
            </i>
            <i>
              <FaSquarePinterest className="text-[30px] text-white cursor-pointer
                                            hover:scale-110 ease-in-out duration-300" />
            </i>
          </div>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonMedium text-[22px]">
            USEFUL LINKS
          </h1>
          <button>
            <p className="text-white font-camptonLight">ABOUT US</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">OUR TEAM</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">RECENT NEWS</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">PROJECTS</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">OUR ALL SERVICES</p>
          </button>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start">
          <h1 className="text-white font-camptonMedium text-[22px]">
            CATEGORY
          </h1>
          <button>
            <p className="text-white font-camptonLight">COORDINATOR</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">ARCHITECT</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">MANAGER</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">PRODUCER</p>
          </button>
          <button>
            <p className="text-white font-camptonLight">DESIGNER</p>
          </button>
        </div>
        {/* ============= Useful Links ============= */}
        <div className="flex flex-col w-fit justify-between items-start bg-slate-200">
          <h1 className="text-white font-camptonMedium text-[22px]">CONTACT</h1>
          <button>
            <p className="text-white font-camptonLight">
              +355 (0) 67 63 11 918
            </p>
          </button>
          <button>
            <p className="text-white font-camptonLight">
              a.flavio4366@gmail.com
            </p>
          </button>
          <button>
            <p className="text-white font-camptonLight">TIRANA, ALBANIA.</p>
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
