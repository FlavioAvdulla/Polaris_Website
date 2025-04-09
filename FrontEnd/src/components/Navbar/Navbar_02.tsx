import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Polaris Logo
import Polaris_Logo from "../../assets/images/Polaris_Logo.svg";

// React Icons
import { SearchBarSelect } from "../Shadcn-components/SearchBarSelect";
import { IoIosSearch } from "react-icons/io";
import { PiUser, PiShoppingCartLight } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import { cartList } from "../Home/ProductSection/ProductSection";

const Navbar_02 = ({ setShowSignIn, cartQuantity, favouriteQuantity }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/SignIn");

  const cartTotal = cartList.length * cartQuantity

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const handleLogoClick = () => {
    navigate("/");
    setActiveSection("Home");
  };
  
  const handleSignInClick = () => {
    setActiveSection("/SignIn");
    setShowSignIn(true);
  };

  const handleCartOpen = () => {
    navigate("/Cart")
    setActiveSection("Cart");
  }

  const handleFavouritesOpen = () => {
    navigate("/Favourites")
    setActiveSection("Favourites");
  }

  return (
    <div className="flex w-[85%] h-[45px] py-0 mx-auto items-center justify-between

                    xs:gap-5
                    lg:gap-0">
      <img className="w-[110px] cursor-pointer

                      xs:hidden
                      sm:w-[80px]
                      xl:w-[100px]
                      md:flex"
           src={Polaris_Logo} alt="Polaris_Logo" onClick={handleLogoClick}/>
      <div className="w-auto h-full flex">
        <div className="w-auto h-auto
        
                        xs:hidden
                        sm:flex">
          <SearchBarSelect />
        </div>
        <input
          className="w-[600px] py-3 px-5 appearance-none border-[1px]
                    border-primary border-r-0 outline-none focus:ring-0
                    focus:bg-white font-camptonBook bg-white

                    xs:w-[100%] xs:rounded-tl-md xs:rounded-bl-md
                    sm:rounded-tl-none sm:rounded-bl-none
                    lg:w-[300px]
                    xl:w-[600px]"
          type="search"
          id="search"
          name="search"
          placeholder="Search for products..."></input>

        <i className="bg-white text-primary text-[30px] p-3 border-primary
                     border-[1px] border-l-0 items-center justify-center flex
                     rounded-tr-md rounded-br-md">
          <IoIosSearch className="text-[20px]"/>
        </i>
      </div>
      <div className="w-auto h-[100%] flex
      
                      xs:gap-3 sm:gap-5">
        {/* ============= User ============= */}
        <div className="flex items-center justify-center gap-3 cursor-pointer"
             onClick={handleSignInClick}>
          <i>
            <PiUser className="xs:text-[17px]
                              md:text-[28px]" /></i>

          <div className="flex flex-col xs:hidden lg:flex">
            <p className="font-camptonBook text-[13px]">Sign In</p>
            <p className="font-camptonMedium text-[13px]">Account</p>
          </div>
        </div>
        {/* ============= Heart Icon ============= */}
        <div className="relative flex items-center justify-center">
          <i>
            <SlHeart className="xs:text-[17px] md:text-[28px] cursor-pointer" onClick={handleFavouritesOpen}/>
          </i>
          <div className="absolute top-0 ml-6 mt-1 flex rounded-full
                          bg-primary items-center justify-center

                          xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                          sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1
                          md:ml-6 md:mt-1">
            <p className="text-white
            
                          xs:text-[8px]
                          sm:text-[10px]">{favouriteQuantity}</p>
          </div>
        </div>

        {/* ============= Cart Icon ============= */}
        <div className="relative flex items-center justify-center">
          <i>
            <PiShoppingCartLight className="cursor-pointer
                                            
                                            xs:text-[17px]
                                            md:text-[28px]" onClick={handleCartOpen}/>
          </i>
          <div className="absolute top-0 flex rounded-full
                          bg-primary items-center justify-center

                          xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                          sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1
                          md:ml-6 md:mt-1">
            <p className="text-white xs:text-[8px] sm:text-[10px]">{cartTotal}</p>
          </div>
        </div>
        <div className="flex-col justify-center xs:hidden md:flex">
          <p className="font-camptonBook
          
                        xs:text-[10px]
                        sm:text-[13px]">Total</p>
                        
          <p className="font-camptonMedium
          
                        xs:text-[10px]
                        sm:text-[13px]">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_02;