import ScrollManager from "@/ScrollManager/ScrollManager";
import { PiShoppingCartLight } from "react-icons/pi";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Translation
import { useTranslation } from 'react-i18next';

// Product interface defining the structure of product data
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

// Array of specific product IDs to be displayed as featured products
const featuredProductIds = ['4', '51', '88', '106', '80', '110'];

const Latest_Products = () => {

  // State for storing products data
  const [products, setProducts] = useState<Product[]>([]);
  // State for handling errors
  const [error, setError] = useState<string | null>(null);
  // State for tracking loading status
  const [loading, setLoading] = useState(true);
  // Translation hook for internationalization
  const { t } = useTranslation();
  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  // Handler for product image click - navigates to product detail page
  const handleImageClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    // Mapping of product IDs to their respective routes
    const routeMap: Record<string, string> = {
      "4": "/Product_01",
      "51": "/Product_05",
      "88": "/Product_37",
      "106": "/Product_40",
      "80": "/Product_32",
      "110": "/Product_42"
    }

    const route = routeMap[id];
    if (route) {
      navigate(route)
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

  // Effect hook to fetch products data on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // API call to fetch all products
        const response = await axios.get('http://localhost:4004/api/products');
        // Filter products to only include those with IDs in featuredProductIds
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
  }, []);

  // Loading state UI
  if (loading) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.loadingProducts")}</p>
      </div>;
  }

  // Error state UI
  if (error) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.networkError")}</p>
      </div>;
  }

  // Empty products state UI
  if (products.length === 0) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.noProducts")}</p>
      </div>;
  }

  // Main component render
  return (
    <div className="flex flex-col w-[100%] mx-auto">
      {/* Component for managing scroll behavior */}
      <ScrollManager/>
      <div
        className="w-[100%] h-auto mx-auto gap-5 items-center justify-between mb-20 mt-10

                   xs:grid-cols-1 xs:grid xs:gap-y-[60px]
                   md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                   xl:flex">
        {/* ============= Product List ============= */}
        {products.map((product, index) => (
          <div 
            className="flex flex-col w-auto h-auto group relative border-[1px] border-primary cursor-pointer rounded-lg
                       dark:border-gray-600" 
            key={index} 
            onClick={() => handleImageClick(product._id)}>
            {/* ============= Product Image ============= */}
            <div className="flex rounded-tl-lg items-center justify-center rounded-tr-lg overflow-hidden">
              <img 
                className="xs:h-auto
                           lg:w-[100%] w-[100%]
                           xl:w-[100%]" 
                src={`http://localhost:4004/images/${product.image}`}
                alt={product.title} 
              />
            </div>
            {/* ============= Product Title and Price ============= */}
            <div className="flex flex-col w-[100%] h-[140px] text-center p-4 z-10
                          justify-center rounded-br-lg rounded-bl-lg bg-gray-100
                          group-hover:shadow-shadow-dark transition-all duration-300
                          dark:bg-gray-800

                          xs:text-[20px]
                          md:text-[18px]
                          lg:text-[20px]
                          xl:text-[17px]">
              <h1 className="flex mb-4 justify-center font-camptonBook
                            dark:text-white">{t(product.title)}</h1>
              {/* ============= Price Display ============= */}
              <div className="flex gap-4 items-center justify-center">
                <p className="font-camptonBold text-primary
                              dark:text-secondary_01

                              xs:text-[25px]
                              2xl:text-[25px]">{t(product.offerPrice)}</p>
                <div className="flex w-auto relative items-center">
                  <div className="absolute h-[1px] w-[100%] bg-primary"/>
                  <p className="font-camptonBook text-gray-800 rounded-br-lg rounded-bl-lg text-[17px]
                              dark:text-white
                              ">{t(product.normalPrice)}</p>
                </div>
              </div>
            </div>
            {/* ============= Add to Cart Button ============= */}
            <button onClick={(e) => handleWhatsappMessage(product, e)}
                    className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center
                              rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                              duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary
                              dark:bg-secondary_01 dark:border-secondary_01">
              <i>
                <PiShoppingCartLight className="text-[18px] text-white" />
              </i>
              <p className="font-camptonBook text-white text-[13px] font-camptonBook">{t("productSection_02.addToCart")}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_Products;
