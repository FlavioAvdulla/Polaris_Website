import { Carousel_03 } from "../../Shadcn-components/Carousel_03";
import { Carousel_04 } from "../../Shadcn-components/Carousel_04";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

// Interface defining the structure of a Product object
interface Product {
  _id: string;
  image: string;
  rating: string;
  title: string;
  description: string;
  normalPrice: string;
  offerPrice: string;
  productType: string;
}

// Array of specific product IDs to display as featured products
const featuredProductIds = ['50', '78', '4', '75'];

const ProductSection_05 = () => {
  // State management for products, errors, and loading status
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  // Hooks for translation and navigation
  const { t } = useTranslation();
  const navigate = useNavigate();
  
    // Handler for when a product is clicked - navigates to specific routes based on product ID
    const handleProductClick = (id: string) => {
      console.log(`Image with id ${id} clicked.`);
      const routeMap = {
        "18": "/Product_01",
        "19": "/Product_02",
        "20": "/Product_04",
        "21": "/Product_06"
      };

      const route = routeMap[id];
      if (route) {
        navigate(route);
      }
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

  // Helper function to generate star rating UI based on numeric rating
  const getStars = (rating) => {
    const stars = [];
    // Convert rating string to number
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(<FaStar key={i} className="text-[#fcc419]
          
                                              xs:text-[10px]
                                              md:text-[18px]
                                              lg:text-[15px]
                                              xl:text-[17px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                            xs:text-[10px]
                                            md:text-[18px]
                                            lg:text-[15px]
                                            xl:text-[17px]" />
        );
      } else {
        // Empty star
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[10px]
                                              md:text-[18px]
                                              lg:text-[15px]
                                              xl:text-[17px]" />);
      }
    }
    return stars;
  };

  // Main component render
  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center justify-between mb-20
    
                    xs:flex-col
                    xl:flex-row">
      {/* Left section with carousels */}
      <div className="flex gap-5
                      
                      xs:flex-col
                      lg:flex-row">
      <Carousel_03 />
      <Carousel_04 /> 
      </div>
      {/* Right section with product listings */}
      <div className="gap-5 flex flex-col
      
                      xs:w-[100%]
                      lg:w-[100%]
                      lg:grid lg:grid-cols-2
                      xl:flex xl:flex-col xl:h-[700px] xl:w-[60.66%]">
        {/* ============= Section - right ============= */}
        {/* Map through products and render each one */}
        {products.map((product, index) => (
          <div className="flex flex-col w-[100%] justify-between gap-5 cursor-pointer overflow-hidden"
               key={index}
               onClick={() => handleProductClick(product._id)}>
            {/* ============= Section - right - 01 ============= */}
            <div className="flex w-[100%] h-[100%] bg-gray-100 items-center rounded-lg border-[1px] border-primary
                            dark:bg-transparent dark:border-gray-600">
              {/* ============= Section - right - 01 - Photo ============= */}
              <div className="flex w-[40%] h-[100%] items-center justify-center rounded-tl-lg rounded-bl-lg bg-white
                              dark:bg-transparent">
                <img src={`http://localhost:4004/images/${product.image}`}
                     alt={product.title}
                     className="object-cover rounded-tl-lg rounded-bl-lg

                               md:w-[80%] md:h-[80%]
                               xl:w-full xl:h-full
                               2xl:w-[75%]"/>
              </div>
              {/* ============= Section - right - 01 - Info ============= */}
              <div className="flex flex-col w-[60%] h-[100%] py-3 justify-center rounded-tr-lg rounded-br-lg
                              dark:bg-gray-800

                              xs:px-2 xs:gap-1
                              sm:px-4 sm:gap-2
                              md:px-6 
                              lg:px-2 lg:gap-1
                              xl:px-6">
                {/* ============= Stars ============= */}
                <div className="flex gap-2 items-center">
                  {getStars(product.rating)}
                  <p className="font-camptonBook mt-[3px]
                                dark:text-white

                                xs:text-[10px]
                                md:text-[15px]
                                lg:text-[11px]
                                xl:text-[12px]">({product.rating})
                  </p>
                </div>
                {/* Product title */}
                <h1 className="font-camptonMedium leading-tight
                               dark:text-white
              
                               xs:text-[18px]
                               sm:text-[20px]
                               md:text-[27px]
                               lg:text-[22px]">{t(product.title)}
                </h1>
                {/* Product description */}
                <p className="font-camptonBook text-gray-500
                              dark:text-white
                              
                              xs:text-[10px]
                              sm:text-[12px]
                              md:text-[20px]
                              lg:text-[15px]">{t(product.productType)}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="font-camptonBold text-primary
                                dark:text-secondary_01
                                
                                xs:text-[25px]
                                md:text-[35px]
                                lg:text-[25px]">{t(product.offerPrice)}
                  </p>
                  {/* Pricing information */}
                  <div className="flex w-auto relative items-center">
                    <div className="absolute h-[1px] w-[100%] bg-primary"/>
                    <p className="font-camptonBook text-gray-800
                                  dark:text-white
                    
                                  xs:text-[17px]
                                  md:text-[22px]
                                  lg:text-[20px]">{t(product.normalPrice)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_05;
