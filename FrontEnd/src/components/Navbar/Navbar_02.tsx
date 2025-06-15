import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../components/context/ThemeContext";
import Polaris_Logo from "../../assets/images/Polaris_Logo.svg";
import Polaris_Logo_Secondary from "../../assets/images/Polaris_Logo_Secondary_01.svg";
import { SearchBarSelect } from "../Shadcn-components/SearchBarSelect";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { PiUser, PiShoppingCartLight } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import { cartList } from "../Home/ProductSection/ProductSection";
import { debounce } from "lodash";
import axios from 'axios';

interface Product {
  _id: string;
  image: string;
  title: string;
  normalPrice: string;
  offerPrice?: string;
  rating: number;
  quantity?: number;
}

interface NavbarProps {
  setShowSignIn: (show: boolean) => void;
  setShowSignOut: (show: boolean) => void;
  cartQuantity: number;
  favouriteQuantity: number;
  isSignedIn: boolean;
}

const API_BASE_URL = 'http://localhost:4004/api';

const Navbar_02: React.FC<NavbarProps> = ({ 
  setShowSignIn, 
  setShowSignOut, 
  cartQuantity, 
  favouriteQuantity, 
  isSignedIn, 
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const searchRef = useRef<HTMLDivElement>(null);

  // Search functionality state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Navigation state
  const [activeSection, setActiveSection] = useState("/SignIn");
  
  // Cart calculations
  const cartItemCount = cartList.reduce((sum) => sum + cartQuantity, 0);
  
  const calculateSubtotal = () => {
    return cartList.reduce((total, item) => {
      const price = parseFloat(item.unitPrice.replace("$", ""));
      return total + (cartQuantity * price);
    }, 0);
  };
  
  const subtotal = calculateSubtotal();

  // Search functions
  const performSearch = useCallback(async (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    setSearchError(null);
    
    try {
      const response = await axios.get(`${API_BASE_URL}/products/search`, {
        params: { q: query },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      setSearchResults(response.data);
    } catch (error) {
      console.error("Search error:", error);
      setSearchError(t('navbar_02.searchError') || "Failed to perform search");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [t]);

  const debouncedSearch = useCallback(
    debounce((query: string) => performSearch(query), 300),
    [performSearch]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setSearchError(null);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      clearSearch();
    }
  };

  // Navigation handlers
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

  // Click outside handler for search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResults([]);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-[85%] h-[45px] py-0 mx-auto items-center justify-between xs:gap-5 lg:gap-0">
      {/* Logo */}
      <img 
        className="w-[110px] cursor-pointer xs:hidden sm:w-[80px] md:flex xl:w-[100px]"
        src={theme === "dark" ? Polaris_Logo_Secondary : Polaris_Logo} 
        alt="Polaris Logo" 
        onClick={handleLogoClick}
      />

      {/* Search Bar */}
      <div className="relative w-auto h-full flex" ref={searchRef}>
        <div className="w-auto h-auto xs:hidden sm:flex">
          <SearchBarSelect />
        </div>
        
        <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
          <input
            className="w-[600px] h-[100%] py-3 px-5 appearance-none border-[1px] border-primary border-r-0 outline-none
                      focus:ring-0 focus:bg-white font-camptonBook bg-white
                      dark:bg-transparent dark:border-gray-600 dark:text-white
                      xs:w-full xs:rounded-tl-md xs:rounded-bl-md
                      sm:rounded-tl-none sm:rounded-bl-none
                      lg:w-[300px] xl:w-[600px]"
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === 'Escape' && clearSearch()}
            placeholder={t('navbar_02.searchPlaceholder')}
            autoComplete="off"
          />
          
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 text-gray-400 hover:text-gray-600
                        dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Clear search"
            >
              <IoIosClose size={24} />
            </button>
          )}
          
          <button
            type="submit"
            className="bg-white h-[100%] text-primary text-[30px] p-3 border-primary border-[1px] border-l-0
                      items-center justify-center flex rounded-tr-md rounded-br-md
                      dark:bg-transparent dark:border-gray-600 dark:text-white"
          >
            <IoIosSearch className="text-[20px]"/>
          </button>
        </form>

        {/* Search Results Dropdown */}
        {searchQuery.length > 0 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white shadow-lg rounded-md
                        max-h-[400px] overflow-y-auto border border-gray-200
                        dark:bg-gray-800 dark:border-gray-700 w-full">
            {isSearching ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {t('navbar_02.searching')}
              </div>
            ) : searchError ? (
              <div className="p-4 text-center text-red-500 dark:text-red-400">
                {searchError}
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map((product) => (
                <div 
                  key={product._id}
                  className="w-[100%] p-3 border-b border-gray-300 hover:bg-gray-100 cursor-pointer
                            dark:border-gray-600 dark:hover:bg-gray-700"
                  onClick={() => {
                    navigate(`/products/${product._id}`);
                    clearSearch();
                  }}>
                  <div className="flex w-[70%] justify-between items-center gap-4 mx-auto">
                    <div className="flex gap-3 items-center">
                    <img 
                      src={`http://localhost:4004/images/${product.image}`}
                      alt={product.title}
                      className="w-[60px] aspect-1 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder-product.png';
                      }}/>

                      <h4 className="font-camptonBook
                                     dark:text-white">{product.title}</h4></div>
                      <p className="text-[20px] font-camptonBold text-primary dark:text-secondary_01">
                        {product.offerPrice || product.normalPrice}
                      </p>
               
                  </div>
                </div>
              ))
            ) : searchQuery.length > 1 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {t('navbar_02.noResults')}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* User Controls */}
      <div className="w-auto h-[100%] flex xs:gap-3 sm:gap-5">
        {/* User Account */}
        <div className="flex items-center justify-center gap-3 cursor-pointer"
             onClick={isSignedIn ? handleSignOutClick : handleSignInClick}>
          <i> <PiUser className="dark:text-white xs:text-[17px] md:text-[28px]" />
          </i>
          <div className="flex flex-col">
            <p className="font-camptonBook text-[13px] dark:text-white xs:hidden lg:flex">
              {isSignedIn ? t('navbar_02.signedIn') : t('navbar_02.signIn')}
            </p>
            <p className="font-camptonMedium text-[13px] dark:text-white">{t('navbar_02.account')}</p>
          </div>
        </div>

        {/* Favorites */}
        <div className="relative flex items-center justify-center">
          <i><SlHeart className="cursor-pointer dark:text-white xs:text-[17px] md:text-[28px]" onClick={handleFavouritesOpen}/>
          </i>
          <div className="absolute top-0 ml-6 mt-1 flex rounded-full bg-primary items-center justify-center
                          dark:bg-secondary_01 xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                          sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1 md:ml-6 md:mt-1">
            <p className="text-white xs:text-[8px] sm:text-[10px]">
              {favouriteQuantity}
            </p>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="relative flex items-center justify-center">
          <i><PiShoppingCartLight 
              className="cursor-pointer dark:text-white xs:text-[17px] md:text-[28px]" 
              onClick={handleCartOpen}/></i>
          <div className="absolute top-0 flex rounded-full bg-primary items-center justify-center
                          dark:bg-secondary_01 xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                          sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1 md:ml-6 md:mt-1">
            <p className="text-white xs:text-[8px] sm:text-[10px]">{cartItemCount}</p>
          </div>
        </div>

        {/* Cart Total */}
        <div className="flex-col justify-center xs:hidden md:flex">
          <p className="font-camptonBook dark:text-white xs:text-[10px] sm:text-[13px]">Total</p>
          <p className="font-camptonMedium dark:text-white xs:text-[10px] sm:text-[13px]">
            ${subtotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar_02;