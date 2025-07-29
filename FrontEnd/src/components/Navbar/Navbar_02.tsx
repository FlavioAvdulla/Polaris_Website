import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useTheme } from "../../components/context/ThemeContext";
import Polaris_Logo from "../../assets/images/Polaris_Logo.svg";
import Polaris_Logo_Secondary from "../../assets/images/Polaris_Logo_Secondary_01.svg";
import Polaris_Logo_Icon_Secondary_01 from "../../assets/images/Polaris_Logo_Icon_Secondary_01.svg";
import Polaris_Logo_Icon from "../../assets/images/Polaris_Logo_Icon.svg";
import { SearchBarSelect } from "../Shadcn-components/SearchBarSelect";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { PiUser, PiShoppingCartLight } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";
import { cartList } from "../Home/ProductSection/ProductSection";
import { debounce } from "lodash";
import axios from 'axios';

interface Product {
  _id: string;
  // id?: string;
  image: string;
  title: string;
  normalPrice: string;
  offerPrice: string;
  // rating: number;
  // quantity?: number;
}

interface NavbarProps {
  setShowSignIn: (show: boolean) => void;
  setShowSignOut: (show: boolean) => void;
  cartQuantity: number;
  favouriteQuantity: number;
  isSignedIn: boolean;
}

const API_BASE_URL = 'http://localhost:4004/api';

const PRODUCT_ROUTE_MAP: Record<string, string> = {
  "4": "/Product_01",
  "48": "/Product_02",
  "49": "/Product_03",
  "50": "/Product_04",
  "51": "/Product_05",
  "52": "/Product_06"
};

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

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("/SignIn");

  const cartItemCount = useMemo(() => 
    cartList.reduce((sum) => sum + cartQuantity, 0), 
    [cartQuantity]
  );
  
  const subtotal = useMemo(() => 
    cartList.reduce((total, item) => {
      const price = parseFloat(item.unitPrice.replace("$", ""));
      return total + (cartQuantity * price);
    }, 0),
    [cartQuantity]
  );

  const handleProductClick = useCallback((id: string) => {
    const route = PRODUCT_ROUTE_MAP[id];
    if (route) {
      navigate(route);
    } else {
      console.warn(`No route mapping for product ID: ${id}`);
      navigate(`/Product_${id.padStart(2, '0')}`);
    }
    clearSearch();
  }, [navigate]);

  const performSearch = useCallback(async (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      setSearchError(null);
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
      
      const mappedResults = response.data.map((product: Product) => ({
        ...product,
        id: product.id || product._id // Use the ID already mapped by the backend
      }));

      const uniqueResults = mappedResults.reduce((acc: Product[], current: Product) => {
        const existingItem = acc.find(item => item.id === current.id);
        return existingItem ? acc : [...acc, current];
      }, []);
      
      setSearchResults(uniqueResults);
    } catch (error) {
      console.error("Search error:", error);
      setSearchError(t('navbar_02.searchError') || "Failed to perform search");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [t]);

  const debouncedSearch = useMemo(
    () => debounce(performSearch, 300),
    [performSearch]
  );

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
    setSearchError(null);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      clearSearch();
    }
  };

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  const handleLogoClick = useCallback(() => {
    navigate("/");
    setActiveSection("Home");
  }, [navigate]);

  const handleSignInClick = useCallback(() => {
    setActiveSection("/SignIn");
    setShowSignIn(true);
  }, [setShowSignIn]);

  const handleSignOutClick = useCallback(() => {
    setActiveSection("/SignOut");
    setShowSignOut(true);
  }, [setShowSignOut]);

  const handleCartOpen = useCallback(() => {
    navigate("/Cart");
    setActiveSection("Cart");
  }, [navigate]);

  const handleFavouritesOpen = useCallback(() => {
    navigate("/Favourites");
    setActiveSection("Favourites");
  }, [navigate]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder-product.png';
  };
  

  const searchRef = useRef<HTMLDivElement>(null);
    
    const handleCloseOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        clearSearch();
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleCloseOutside);
      return () => {
        document.removeEventListener("mousedown", handleCloseOutside);
      };
    }, []);

  return (
    <div className="flex w-[85%] h-[45px] py-0 mx-auto items-center justify-between
    
                    xs:gap-5
                    lg:gap-0" ref={searchRef}>
      {/* Logo */}
      <img className="w-[110px] cursor-pointer xs:hidden sm:w-[80px] md:flex xl:w-[100px]"
           src={theme === "dark" ? Polaris_Logo_Secondary : Polaris_Logo} 
           alt="Polaris Logo" 
           onClick={handleLogoClick}
           loading="lazy"/>
        
      <img className="cursor-pointer
        
                      xs:flex xs:h-[25px]
                      md:hidden"
           src={theme === "dark" ? Polaris_Logo_Icon_Secondary_01 : Polaris_Logo_Icon} 
           alt="Polaris Logo" 
           onClick={handleLogoClick}
           loading="lazy"/>

      {/* Search Bar */}
      <div className="relative w-auto h-full flex">
        <div className="w-auto h-auto
        
                        xs:hidden
                        sm:flex">
          <SearchBarSelect />
        </div>
        
        <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
          <input className="w-[600px] h-[100%] py-3 px-5 appearance-none border-[1px] border-primary border-r-0 outline-none
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
                 aria-label="Search products"/>
          
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 text-gray-400 hover:text-gray-600
                        dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Clear search">
              <IoIosClose className="text-[24px]" />
            </button>
          )}
          
          <button className="bg-white h-[100%] text-primary text-[30px] p-3 border-primary border-[1px] border-l-0
                             items-center justify-center flex rounded-tr-md rounded-br-md
                             dark:bg-transparent dark:border-gray-600 dark:text-white"
                  type="submit"
                  aria-label="Submit search">
            <IoIosSearch className="text-[20px]"/>
          </button>
        </form>

        {/* Search Results Dropdown */}
        {searchQuery.length > 0 && (
          <div className="w-full absolute top-full left-0 right-0 z-50 mt-1 bg-white shadow-lg rounded-md
                          max-h-[400px] overflow-y-auto border border-gray-200
                          dark:bg-gray-800 dark:border-gray-700"
               aria-live="polite"
               ref={searchRef}>
            {isSearching && searchResults.length === 0 ? (
              <div className="p-4 text-center text-gray-500
                              dark:text-gray-400">
                {t('navbar_02.searching')}
              </div>
            ) : searchError ? (
              <div className="p-4 text-center text-red-500
                              dark:text-red-400">
                {searchError}
              </div>
            ) : searchResults.length > 0 ? (
              <ul>
                {searchResults.map((product) => (
                  <li
                    key={`${product._id}-${product.title}`}
                    className="w-[100%] p-3 border-b border-gray-300 hover:bg-gray-100 cursor-pointer
                              dark:border-gray-600 dark:hover:bg-gray-700"
                    onClick={() => handleProductClick(product._id || product._id)}>
                    <div className="flex justify-between items-center mx-auto

                                    xs:w-auto
                                    sm:w-[90%]
                                    md:w-[100%]
                                    lg:w-[100%]
                                    xl:w-[80%]">
                    
                        <img src={`http://localhost:4004/images/${product.image}`}
                             alt={product.title}
                             className="aspect-1 object-contain
                              
                                       xs:w-[30px]
                                       md:w-[55px]
                                       lg:w-[60px] lg:mr-3
                                       xl:mr-0"
                             onError={handleImageError}
                             loading="lazy"/>
                      
                      {/* ============= Product Infos ============= */}
                      <div className="flex w-auto
                                      
                                      xs:flex-col xs:pl-1 xs:items-start
                                      md:pl-0
                                      lg:flex-row lg:items-center lg:gap-[35px]
                                      xl:gap-[40px]">
                          <h4 className="font-camptonBook dark:text-white

                                          xs:text-[8px]
                                          md:text-[13px]
                                          lg:text-[15px]
                                          xl:text-[20px]">
                            {product.title}
                          </h4>
                          {/* ============= Product Price ============= */}
                          <div className="flex
                          
                                          xs:gap-2 xs:flex-row
                                           
                                          lg:flex-row lg:gap-4">
                        {product.offerPrice && (
                          <p className="font-camptonBold text-primary
                                        dark:text-secondary_01
                                        
                                        xs:text-[11px]
                                        md:text-[18px]
                                        lg:text-[20px]
                                        xl:text-[23px]">
                            {t(product.offerPrice)}
                          </p>
                        )}
                        
                        {/* Normal Price (with strikethrough) */}
                        <div className="flex w-fit relative items-center">
                          <div className="absolute mt-[1px] h-[1.5px] w-[100%] bg-red-500"/>
                          <p className="text-gray-800 dark:text-white

                                        xs:text-[9px]
                                        md:text-[14px]
                                        lg:text-[15px]
                                        xl:text-[17px]">
                            {t(product.normalPrice)}
                          </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : searchQuery.length > 1 ? (
              <div className="p-4 text-center text-gray-500
                              dark:text-gray-400">
                {t('navbar_02.noResults')}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* User Controls */}
      <div className="w-auto h-[100%] flex
      
                      xs:gap-3
                      sm:gap-5">
        {/* User Account */}
        <button 
          className="flex items-center justify-center cursor-pointer
          
                     xs:gap-0
                     md:gap-3"
          onClick={isSignedIn ? handleSignOutClick : handleSignInClick}
          aria-label={isSignedIn ? "Sign out" : "Sign in"}
        >
          <i><PiUser className="dark:text-white
          
                                xs:text-[17px]
                                md:text-[28px]"/></i>
          <div className="flex flex-col">
            <p className="font-camptonBook text-[13px]
                          dark:text-white
                          
                          xs:hidden 
                          lg:flex">
              {isSignedIn ? t('navbar_02.signedIn') : t('navbar_02.signIn')}
            </p>
            <p className="font-camptonMedium text-[13px]
                        dark:text-white
                        
                        xs:hidden
                        md:flex">
              {t('navbar_02.account')}
            </p>
          </div>
        </button>

        {/* Favorites */}
        <div className="relative flex items-center justify-center">
          <button 
            onClick={handleFavouritesOpen}
            aria-label="Favorites"
            className="cursor-pointer">
            <SlHeart className="dark:text-white
            
                                xs:text-[17px]
                                md:text-[28px]" />
          </button>
          {favouriteQuantity > 0 && (
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
          )}
        </div>

        {/* Shopping Cart */}
        <div className="relative flex items-center justify-center">
          <button 
            onClick={handleCartOpen}
            aria-label="Shopping cart"
            className="cursor-pointer">
            <PiShoppingCartLight className="dark:text-white
            
                                            xs:text-[17px]
                                            md:text-[28px]" />
          </button>
          {cartItemCount > 0 && (
            <div className="absolute top-0 flex rounded-full bg-primary items-center justify-center
                            dark:bg-secondary_01
                            
                            xs:w-[13px] xs:h-[13px] xs:ml-4 xs:mt-2
                            sm:w-[18px] sm:h-[18px] sm:ml-6 sm:mt-1
                            md:ml-6 md:mt-1">
              <p className="text-white
              
                            xs:text-[8px]
                            sm:text-[10px]">
                {cartItemCount}
              </p>
            </div>
          )}
        </div>

        {/* Cart Total */}
        <div className="flex-col justify-center xs:hidden md:flex">
          <p className="font-camptonBook
                        dark:text-white
                        
                        xs:text-[10px]
                        sm:text-[13px]">
            {t('navbar_02.total')}
          </p>
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