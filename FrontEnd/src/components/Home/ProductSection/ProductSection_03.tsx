// Importing React hooks and other dependencies
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

// Interface defining the structure of a Product object
interface Product {
  title: never | string | string[];
  offerPrice: never | string | string[];
  normalPrice: never | string | string[];
  detail_01: never | string | string[];
  detail_02: never | string | string[];
  detail_03: never | string | string[];
  detail_04: never | string | string[];
  _id: string;
  image: string;
  title_02: string; // Subtitle or category text
  title_01: string; // Main title text
  description: string;
  button: string; // Button text
}

// Array of specific product IDs to display as promotional banners
const featuredProductIds = ['10', '11'];

const ProductSection_03 = () => {

  // State management for products, errors, and loading status
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Hooks for translation and navigation
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Handler for when a promotional banner is clicked - navigates to specific product pages
    const handleProductClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap: Record<string, string> = {
      "10": "/Product_01", // Route for product with ID 10
      "11": "/Product_04", // Route for product with ID 11
    }

    const route = routeMap[id];
    if (route) {
      navigate(route) // Navigate to the specified route
    }
  }

  // Handler for Whatsapp message - sends product info to Whatsapp
        const handleWhatsappMessage = (product: Product, event: React.MouseEvent) => {
          event.stopPropagation() // Prevent triggering the parent click event
      
          const imageUrl = `http://localhost:4004/images/${product.image}`;
      
        // Construct the Whatsapp message with product details
        const message = `Hello! I want to buy this product:
        
        *Product Details:*
        *Title:* ${t(product.title)}
        *Description:* ${t(product.description)}
        *Original Price:* ${t(product.description)}
        *Original Price:* ${t(product.normalPrice)}
        *Offer Price:* ${t(product.offerPrice)}
      
        ${product.detail_01 ? `${t(product.detail_01)}` : ''}
        ${product.detail_02 ? `${t(product.detail_02)}` : ''}
        ${product.detail_03 ? `${t(product.detail_03)}` : ''}
        ${product.detail_04 ? `${t(product.detail_04)}` : ''}
      
        *Product Image:* ${imageUrl}
      
        Please contact me to proceed with the purchase. Thank you!`;
      
        // Encode the message for URL
          const encodedMessage = encodeURIComponent(message);
      
          // WhatsApp API URL (Replace with your actual WhatsApp number)
          const whatsappNumber = "355676311918"
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
          // Open Whatsapp in a new tab
          window.open(whatsappUrl, '_blank')
        }

    // useEffect hook to fetch products from the API when component mounts
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        // API call to get all products
        const response = await axios.get('http://localhost:4004/api/products');
        // Filter to only include products with IDs in featuredProductIds
        const filteredProducts = response.data.filter((product: Product) => 
          featuredProductIds.includes(product._id)
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on component mount

  // Display loading state while fetching data
  if (loading) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.loadingProducts")}</p>
      </div>;
  }

  // Display error state if API call fails
  if (error) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.networkError")}</p>
      </div>;
  }

  // Display message if no products are found
  if (products.length === 0) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.noProducts")}</p>
      </div>;
  }

  // Main component render
  return (
    <div className="flex w-[85%] mx-auto mb-20 mt-10 gap-5
                    
                    xs:flex-col
                    md:flex-row">
      {/* Map through products and render each promotional banner */}
      {products.map((product, index) => (
        // ============ Product Container =============
        <div className="flex border-[1px] border-primary rounded-lg overflow-hidden bg-transparent mx-auto cursor-pointer
                        dark:border-gray-600
              
                        xs:flex-col
                        lg:flex-row lg:w-[50%]
                        xl:h-[400px]"
             key={index}
             onClick={() => handleProductClick(product._id)}> {/* Click handler for navigation */}
          {/* ============= Left Section - Text Content ============= */}
          <div className="flex flex-col h-[100%] bg-primary p-5 justify-center rounded-tl-lg rounded-bl-lg
                          dark:bg-gray-800
                            
                          xs:w-[100%]
                          lg:w-[50%]">
            {/* Subtitle/Category text */}
            <p className="text-white font-camptonMedium">
            {t(product.title_02)}
            </p>

            {/* Main title text */}
            <h1 className="text-white font-camptonMedium leading-tight my-3
                           dark:text-secondary_01
            
                           xs:text-[20px]
                           sm:w-[80%]
                           md:w-[100%]
                           xl:text-[30px]">{t(product.title_01)}
            </h1>

            {/* Description text */}
            <p className="text-white font-camptonLight leading-tight">{t(product.description)}</p>
            {/* ============= Button ============= */}
            <div className="w-auto mt-7">
              <button onClick={(e) => handleWhatsappMessage(product, e)}
                      className="flex items-center justify-center bg-white border-[1px] text-primary rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg
                                 hover:bg-transparent hover:border-white hover:border-[1px] hover:scale-105 ease-in-out
                                 duration-300 hover:text-white
                                 dark:bg-secondary_01 dark:text-white dark:hover:bg-transparent

                                 xs:text-[12px] xs:gap-2 xs:px-3 xs:py-1
                                 xl:px-4 xl:py-2 xl:text-[15px] xl:gap-3">{t(product.button)}
                <IoIosArrowForward className="font-camptonLight
                
                                              xs:text-[12px]
                                              lg:text-[15px]
                                              xl:text-[20px]"/>
              </button>
            </div>
            </div>
          {/* ============= Right Section - Image ============= */}
          <div className="flex items-center justify-center rounded-tr-lg rounded-br-lg mx-auto

                          xs:w-[100%] xs:h-[100%]
                          lg:w-[50%]"> {/* 50% width on large screens */}
            <img className="object-cover
                        
                            xs:h-[300px]
                            md:w-[100%] md:h-auto"
                 src={`http://localhost:4004/images/${product.image}`}
                 alt={product.title_01}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection_03;
