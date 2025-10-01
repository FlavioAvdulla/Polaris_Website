// Importing React hooks and other dependencies
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

// Interface defining the structure of a Product object
interface Product {
  _id: string;
  image: string;
  rating: number;
  normalPrice: string;
  offerPrice: string;
  title: string;
  // description: string;
  quantity: number;
  available: string;
  quantitySold: number;
  sold: string;
  info: string;
  description: never | string | string[];
  detail_01: never | string | string[];
  detail_02: never | string | string[];
  detail_03: never | string | string[];
  detail_04: never | string | string[];
}

// Array of specific product IDs to display as featured products
const featuredProductIds = ['1', '2', '3'];

const ProductSection_01 = () => {

  // State management for products, loading status, and errors
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hooks for navigation and translation
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Handler for when a product is clicked - navigates to specific product pages
  const handleProductClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap: Record<string, string> = {
      "1": "/Product_05",
      "2": "/Product_04",
      "3": "/Product_03",
    }

    const route = routeMap[id];
    if (route) {
      navigate(route) // Navigate to the specified product page
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
        setLoading(false); // Ensure loading state is updated regardless of success/failure
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on component mount

  // const handleProductClick = (id: string) => {
  //   navigate(`/products/${id}`);
  // };

  // Handler for adding products to cart (prevents event propagation to parent)
  // const handleAddToCart = (e: React.MouseEvent, productId: string) => {
  //   e.stopPropagation();
  //   console.log("Add to cart:", productId);
  //   // Add your cart logic here
  // };

  // Helper function to generate star rating UI based on numeric rating
  const getStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(<FaStar key={i} className="text-[#fcc419] md:text-[15px] lg:text-[20px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(<FaStarHalfAlt key={i} className="text-[#fcc419] md:text-[15px] lg:text-[20px]" />);
      } else {
        // Empty star
        stars.push(<FaStar key={i} className="text-gray-300 md:text-[15px] lg:text-[20px]" />);
      }
    }
    return stars;
  };

  // Display loading state while fetching data
  if (loading) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.loadingProducts")}</p>
      </div>;
  }

  // Display error state if API call fails
  if (error) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.networkError")}</p>
      </div>;
  }

  // Display message if no products are found
  if (products.length === 0) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.noProducts")}</p>
      </div>;
  }

  // Main component render
  return (
    <div
      className="w-[85%] h-auto mx-auto gap-5 items-center justify-between my-20
    
                    md:grid md:grid-cols-3" // Grid layout with 3 columns on medium screens and up
      >
      {/* Map through products and render each product card */}
      {products.map((product) => (
        <div
          className="rounded-lg overflow-hidden h-auto bg-gray-100 border-[1px] border-primary cursor-pointer
                     hover:shadow-lg transition-shadow duration-300
                     dark:bg-transparent dark:border-gray-600
                     
                     xs:mb-5
                     md:w-[100%]"
          key={product._id}
          onClick={() => handleProductClick(product._id)} // Click handler for navigation
        >
          {/* Product image section */}
          <div
            className="flex w-[100%] justify-center items-center bg-white
                       dark:bg-transparent

                       xs:h-[250px]
                       sm:h-[320px]
                       md:h-[200px]
                       lg:h-[300px]">
            <img
              className="w-[75%]"
              src={`http://localhost:4004/images/${product.image}`}
              alt={product.title}
            />
          </div>

          {/* Product information section */}
          <div
            className="flex flex-col w-[100%] gap-4 p-4 justify-between
                      dark:bg-slate-800 
                     

                       xs:h-auto
                       md:h-[290px]">
            {/* Rating display with stars */}
            <div className="flex gap-2">
              {getStars(product.rating)}
              <p className="font-camptonBook
                            dark:text-white

                            md:text-[12px]
                            lg:text-[15px]">
                ({product.rating.toFixed(1)}) {/* Display rating with one decimal */}
              </p>
            </div>

            {/* Product title */}
            <h1 className="font-camptonMedium
                           dark:text-white
            
                           xs:w-[80%]
                           sm:w-[60%]
                           md:text-[13px] md:w-[90%]
                           lg:text-[18px]
                           xl:text-[22px] xl:w-[70%]">
              {t(product.title)}
            </h1>

            {/* Price and add to cart button */}
            <div className="flex justify-between items-center">
              <div className="flex items-center xs:gap-2 md:gap-4">
                {/* Discounted price */}
                <p className="font-camptonBold text-primary
                              dark:text-secondary_01
                                
                              xs:text-[22px]
                              md:text-[30px]
                              lg:text-[40px]">
                  {t(product.offerPrice)}
                </p>
                {/* Original price with strikethrough */}
                <div className="flex w-auto relative items-center">
                  <div className="absolute mt-[2px] h-[1.5px] w-[100%] bg-red-500" /> {/* Strikethrough line */}

                  <p className="font-camptonBook text-gray-700
                                dark:text-white
                                
                                xs:text-[16px]
                                md:text-[17px]
                                lg:text-[25px]">
                    {t(product.normalPrice)}
                  </p>
                </div>
              </div>
              {/* Add to cart button */}
              <button
                onClick={(e) => handleWhatsappMessage(product, e)}
                className="bg-primary border-[1px] border-primary cursor-pointer
                           hover:scale-[105%] hover:bg-transparent hover:border-[1px] group hover:border-primary duration-300
                           dark:bg-secondary_01 dark:border-gray-800 dark:hover:bg-transparent dark:hover:border-secondary_01
                           
                           xs:rounded-md
                           md:rounded-sm
                           lg:rounded-md">
                <PiShoppingCartLight
                  className="text-white group-hover:text-primary duration-300
                             dark:hover:text-secondary_01

                             xs:text-[40px] xs:p-1"/>
              </button>
            </div>

            {/* Availability and sold */}
            <div className="flex justify-between items-center">
              <p className="font-camptonBook flex
                            dark:text-white

                            xs:text-[12px]
                            lg:text-[15px]
                            2xl:text-[20px]">
                {t(product.available)}:
                <span
                  className="font-camptonMedium
                             dark:text-secondary_01 
                            
                             xs:text-[12px]
                             lg:text-[15px]
                             2xl:text-[20px]">
                  &nbsp;&nbsp;{product.quantity}
                </span>
              </p>
              <p
                className="text-[15px] font-camptonBook flex dark:text-white
              
                           xs:text-[12px]
                           lg:text-[15px]
                           2xl:text-[20px]">
                {t(product.sold)}:
                <span
                  className="text-primary font-camptonMedium
                                 dark:text-secondary_01">
                  &nbsp;&nbsp;{product.quantitySold}
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              className="font-camptonBook dark:text-white
                          
                         xs:text-[10px]
                         lg:text-[15px]
                         2xl:text-[16px]">
              {t(product.info)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection_01;