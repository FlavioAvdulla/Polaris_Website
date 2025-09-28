import React, { useEffect, useState, useCallback } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import ScrollToTop from "@/ScrollToTop/ScrollToTop";

interface Product {
  _id: string;
  image: string;
  title: string;
  description: string;
  normalPrice: string;
  offerPrice: string;
  detail_01: string;
  detail_02: string;
  detail_03: string;
  detail_04: string;
  rating: number;
  reviews: string;
  addToCart: string;
  additionalImages: string[];
}

const featuredProductIds = ['106'];

const Product_40 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  const [mainPhoto, setMainPhoto] = useState("");
  const [quantity, setQuantity] = useState("01");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4004/api/products');
        const filteredProducts = response.data.filter((product: Product) => 
          featuredProductIds.includes(product._id)
        );
        setProducts(filteredProducts);
        if (filteredProducts.length > 0) {
          setMainPhoto(`http://localhost:4004/images/${filteredProducts[0].image}`);
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = useCallback((photo: string) => {
    setMainPhoto(photo);
  }, []);

  const getStars = useCallback((rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419]
          
                                              xs:text-[10px]
                                              md:text-[17px]
                                              lg:text-[20px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                                     xs:text-[10px]
                                                     md:text-[17px]
                                                     lg:text-[20px]" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
            
                                              xs:text-[10px]
                                              md:text-[17px]
                                              lg:text-[20px]" />);
      }
    }
    return stars;
  }, []);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value, 10);
    
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 99) {
      setQuantity(numericValue.toString().padStart(2, '0'));
    } else if (value === "") {
      setQuantity("01");
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.min(99, parseInt(prevQuantity) + 1).toString();
      return newQuantity.padStart(2, '0');
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, parseInt(prevQuantity) - 1).toString();
      return newQuantity.padStart(2, '0');
    });
  };

  if (loading) {
    return (
      <div className="flex mb-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_01.loadingProducts")}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex mb-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_01.networkError")}
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex mb-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_01.noProducts")}
        </p>
      </div>
    );
  }

  const product = products[0];

  // Generate thumbnails - using main image and additional images
  const thumbnails = [
    `http://localhost:4004/images/${product.image}`,
    ...(product.additionalImages?.map(img => `http://localhost:4004/images/${img}`) || [])
  ].slice(0, 4);

  return (
    <div className="flex w-[85%] h-auto mx-auto my-20
                    xs:flex-col xs:gap-2
                    md:flex-row md:gap-3
                    lg:gap-5">
      <ScrollToTop/>
      
      {/* Left - Product Photos */}
      <div className="flex flex-col mx-auto
                      xs:gap-1 xs:w-[100%]
                      md:gap-3 lg:h-[500px]
                      lg:gap-5 lg:w-[50%]
                      xl:h-[600px]">
        {/* Main Photo */}
        <div className="flex w-[100%] h-[75%] items-center justify-center rounded-lg
                        border-[1px] overflow-hidden border-primary bg-white
                        dark:bg-transparent dark:border-gray-600">
          <img
            className="w-[85%] object-cover"
            src={mainPhoto || `http://localhost:4004/images/${product.image}`}
            alt={product.title}
          />
        </div>
        
        {/* Thumbnails */}
        <div className="flex w-[100%] h-[25%]
                        
                        xs:gap-1
                        md:gap-3
                        lg:gap-5">
          {thumbnails.map((thumbnail, index) => (
            <div key={index}
                 className="w-[25%] items-center justify-center rounded-lg cursor-pointer
                            hover:scale-105 hover:shadow-shadow-dark ease-in-out duration-300
                            border-[1px] overflow-hidden border-primary
                            dark:bg-transparent dark:border-gray-600"
                 onClick={() => handleClick(thumbnail)}>
              <img className="w-[100%] h-[100%] object-cover"
                   src={thumbnail}
                   alt={`Thumbnail ${index + 1}`}/>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Product Info */}
      <div className="flex flex-col bg-gray-100 gap-2 rounded-lg mx-auto justify-between
                      dark:bg-gray-800
                      
                      xs:p-3 xs:h-auto xs:w-[100%]
                      md:p-4
                      lg:w-[50%] lg:h-[500px] lg:p-5
                      xl:h-[600px] xl:p-10">
        <h1 className="font-camptonBold leading-tight text-primary
                       dark:text-secondary_01
                       
                       xs:text-[20px]
                       md:text-[28px]
                       lg:text-[38px]
                       xl:text-[45px]">
          {t(product.title)}
        </h1>
        
        <p className="w-[100%] font-camptonBook leading-tight text-justify
                      dark:text-white
                      
                      xs:text-[10px]
                      md:text-[13px]
                      lg:text-[15px]">
          {t(product.description)}
        </p>
        
        <div className="flex gap-2">{getStars(product.rating)}</div>
        
        <p className="font-camptonBook
                      dark:text-white
                      
                      xs:text-[12px]
                      md:text-[15px]
                      lg:text-[18px]
                      xl:text-[20px]">
          {t(product.reviews)}
        </p>
        
        {/* Price */}
        <div className="flex items-center
        
                        xs:gap-2
                        md:gap-4">
          <p className="font-camptonBold text-primary
                        dark:text-secondary_01
                        
                        xs:text-[22px]
                        md:text-[30px]
                        lg:text-[40px]">
            {t(product.offerPrice)}
          </p>
          <div className="flex w-auto relative items-center">

            <div className="absolute mt-[2px] h-[1.5px] w-[100%] bg-red-500" />

            <p className="text-gray-700
                          dark:text-white
                          
                          xs:text-[16px]
                          md:text-[17px]
                          lg:text-[25px]">
              {t(product.normalPrice)}
            </p>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="gap-1 flex flex-col mb-2">
          {[product.detail_01, product.detail_02, product.detail_03, product.detail_04].map(
            (detail, index) => detail && (
              <div key={index} className="flex items-center gap-1">
                <GoDot className="text-primary
                                  dark:text-secondary_01
                                  
                                  xs:text-[12px]" />
                <p className="font-camptonBook
                              dark:text-white

                              xs:text-[10px]
                              lg:text-[13px]
                              xl:text-[15px]">{t(detail)}
                </p>
              </div>
            ))}
        </div>
        
        {/* Quantity Selector */}
        <div className="flex w-fit h-auto items-center mb-2">
          <button
            className="flex items-center justify-center border-[1px] border-primary cursor-pointer
                       dark:border-secondary_01
                       
                       xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tl-md xs:rounded-bl-md
                       lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tl-lg lg:rounded-bl-lg"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity">
            <i><FaCircleMinus className="text-primary
                                         dark:text-secondary_01
                                         
                                         xs:text-[13px]
                                         lg:text-[22px]" /></i>
          </button>
          
          <div className="flex items-center text-center justify-center w-[100%] h-[100%] bg-primary
                          dark:bg-secondary_01">
            <input className="text-center text-white font-camptonMedium bg-transparent outline-none
                          
                              xs:w-[25px] xs:h-[26px] xs:text-[12px]
                              lg:w-[40px] lg:h-[40px] lg:text-[20px]"
                   type="text"
                   id="quantity"
                   name="quantity"
                   min="1"
                   value={quantity}
                   onChange={handleQuantityChange}/>
          </div>
          
          <button className="flex items-center justify-center border-[1px] border-primary cursor-pointer
                       dark:border-secondary_01
                       
                       xs:w-[26px] xs:h-[26px] xs:p-2 xs:rounded-tr-md xs:rounded-br-md
                       lg:w-[20px] lg:h-[20px] lg:p-5 lg:rounded-tr-lg lg:rounded-br-lg"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity">
            <i><FaCirclePlus className="text-primary
                                        dark:text-secondary_01

                                        xs:text-[13px]
                                        lg:text-[22px]" /></i>
          </button>
        </div>
        
        {/* Add to Cart Button */}
        <button className="flex items-center w-fit justify-center gap-3 border-[1px] bg-primary border-white 
                           py-2 rounded-tr-3xl rounded-br-3xl rounded-tl-lg rounded-bl-lg text-white px-4
                           hover:scale-110 hover:border-[1px] hover:bg-transparent hover:border-primary hover:text-primary ease-in-out duration-300
                           dark:bg-secondary_01 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white
                           
                           xs:gap-2 xs:px-4 xs:py-2
                           md:gap-3">
          <p className="font-camptonBook
          
                        xs:text-[10px]
                        lg:text-[18px]
                        2xl:text-[20px]">
            {t(product.addToCart)}
          </p>
          <i><IoIosArrowForward className="xs:text-[10px]
                                           lg:text-[18px]
                                           2xl:text-[20px]"/></i>
        </button>
      </div>
    </div>
  );
};

export default Product_40;