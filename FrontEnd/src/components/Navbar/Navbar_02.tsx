import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../components/context/ThemeContext";
import Polaris_Logo from "../../assets/images/Polaris_Logo.svg";
import Polaris_Logo_Secondary from "../../assets/images/Polaris_Logo_Secondary_01.svg";
import { SearchBarSelect } from "../Shadcn-components/SearchBarSelect";
import { IoIosSearch } from "react-icons/io";
import { PiUser, PiShoppingCartLight } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import { cartList } from "../Home/ProductSection/ProductSection";

const Navbar_02 = ({ 
  setShowSignIn, 
  setShowSignOut, 
  cartQuantity, 
  favouriteQuantity, 
  isSignedIn, 
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/SignIn");
  const { theme } = useTheme();

  // Calculate total items in cart
  const cartItemCount = cartList.reduce((sum) => sum + cartQuantity, 0);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartList.reduce((total, item) => {
      const price = parseFloat(item.unitPrice.replace("$", ""));
      return total + (cartQuantity * price);
    }, 0);
  };

  const subtotal = calculateSubtotal();

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

  const handleSignOutClick = () => {
    setActiveSection("/SignOut");
    setShowSignOut(true);
  };

  const handleCartOpen = () => {
    navigate("/Cart");
    setActiveSection("Cart");
  };

  const handleFavouritesOpen = () => {
    navigate("/Favourites");
    setActiveSection("Favourites");
  };

  return (
    <div className="flex w-[85%] h-[45px] py-0 mx-auto items-center justify-between
                    xs:gap-5
                    lg:gap-0">
      {/* Logo - switches based on theme */}
      <img 
        className="w-[110px] cursor-pointer
                  xs:hidden
                  sm:w-[80px]
                  md:flex
                  xl:w-[100px]"
        src={theme === "dark" ? Polaris_Logo_Secondary : Polaris_Logo} 
        alt="Polaris Logo" 
        onClick={handleLogoClick}/>

      {/* Search Bar */}
      <div className="w-auto h-full flex">
        <div className="w-auto h-auto
                        xs:hidden
                        sm:flex">
          <SearchBarSelect />
        </div>
        <input
          className="w-[600px] py-3 px-5 appearance-none border-[1px] border-primary border-r-0 outline-none
                      focus:ring-0 focus:bg-white font-camptonBook bg-white
                      dark:bg-transparent dark:border-gray-600
                      
                      xs:w-[100%] xs:rounded-tl-md xs:rounded-bl-md
                      sm:rounded-tl-none sm:rounded-bl-none
                      lg:w-[300px]
                      xl:w-[600px]"
          type="search"
          id="search"
          name="search"
          placeholder={t('navbar_02.searchPlaceholder')}/>
        <i className="bg-white text-primary text-[30px] p-3 border-primary border-[1px] border-l-0
                        items-center justify-center flex rounded-tr-md rounded-br-md
                        dark:bg-transparent dark:border-gray-600 dark:text-white">
          <IoIosSearch className="text-[20px]"/>
        </i>
      </div>

      {/* User Controls */}
      <div className="w-auto h-[100%] flex

                      xs:gap-3
                      sm:gap-5">
        {/* User Account */}
        <div className="flex items-center justify-center gap-3 cursor-pointer"
             onClick={isSignedIn ? handleSignOutClick : handleSignInClick}>
          <i> <PiUser className="dark:text-white

                                 xs:text-[17px]
                                 md:text-[28px]" />
          </i>
          <div className="flex flex-col">
            <p className="font-camptonBook text-[13px]
                          dark:text-white
                          
                          xs:hidden
                          lg:flex">
              {isSignedIn ? t('navbar_02.signedIn') : t('navbar_02.signIn')}
            </p>
            <p className="font-camptonMedium text-[13px]
                          dark:text-white">{t('navbar_02.account')}</p>
          </div>
        </div>

        {/* Favorites */}
        <div className="relative flex items-center justify-center">
          <i><SlHeart className="cursor-pointer
                                 dark:text-white
                                
                                 xs:text-[17px]
                                 md:text-[28px]"onClick={handleFavouritesOpen}/>
          </i>
          <div className="absolute top-0 ml-6 mt-1 flex rounded-full bg-primary items-center justify-center
                          dark:bg-secondary_01

                          xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                          sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1
                          md:ml-6 md:mt-1">
            <p className="text-white
                          xs:text-[8px]
                          sm:text-[10px]">
              {favouriteQuantity}
            </p>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="relative flex items-center justify-center">
          <i><PiShoppingCartLight 
              className="cursor-pointer
                        dark:text-white
              
                        xs:text-[17px] md:text-[28px]" 
              onClick={handleCartOpen}/></i>
          <div className="absolute top-0 flex rounded-full bg-primary items-center justify-center
                          dark:bg-secondary_01
                          
                          xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                          sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1
                          md:ml-6 md:mt-1">
            <p className="text-white
            
                          xs:text-[8px]
                          sm:text-[10px]">{cartItemCount}</p>
          </div>
        </div>

        {/* Cart Total */}
        <div className="flex-col justify-center
        
                        xs:hidden
                        md:flex">
          <p className="font-camptonBook
                        dark:text-white
          
                        xs:text-[10px]
                        sm:text-[13px]">Total</p>
          <p className="font-camptonMedium
                        dark:text-white
          
                        xs:text-[10px]
                        sm:text-[13px]">
            ${subtotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_02;