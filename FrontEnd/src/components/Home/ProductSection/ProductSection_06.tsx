import { Carousel_05 } from "../../Shadcn-components/Carousel_05";
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
}

// Array of specific product IDs to display as featured products
const featuredProductIds = ['27', '28', '29', '30', '31', '32', '33', '34'];


const ProductSection_05 = () => {

  // State management for products, errors, and loading status
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Hooks for translation and navigation
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Handler for when a product is clicked - navigates to specific routes based on product ID
  const handleProductClick = (id) => {
    console.log(`Image with ${id} clicked.`);
    const routeMap = {
      "27": "/Product_48",
      "28": "/Product_40",
      "29": "/Product_47",
      "30": "/Product_36",
      "31": "/Product_35",
      "32": "/Product_03",
      "33": "/Product_05",
      "34": "/Product_06"
    };
    
    const route = routeMap[id];
    if (route) {
      navigate(route);
    }
  };

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
                                              md:text-[12px]
                                              xl:text-[17px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                            xs:text-[10px]
                                            md:text-[12px]
                                            xl:text-[17px]" />
        );
      } else {
        // Empty star
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[10px]
                                              md:text-[12px]
                                              xl:text-[17px]" />);
      }
    }
    return stars;
  };

  // Main component render
  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center mb-20

                    xs:flex-col
                    lg:flex-row">
      {/* Left section with product grid */}
      <div className="gap-5 w-[100%]
      
                      xs:grid xs:grid-cols-1
                      md:grid md:grid-cols-2
                      lg:h-[600px]
                      xl:h-[700px]">
        {/* Map through products and render each one */}
        {products.map((product, index) => (
          <div className="flex w-[100%] h-auto overflow-hidden
                          items-center rounded-lg border-[1px] border-primary cursor-pointer
                          dark:bg-transparent dark:border-gray-600"
               key={index}
               onClick={() => handleProductClick(product._id)}>
            {/* Product image */}
            <div className="flex w-[40%] h-[100%] items-center rounded-tl-lg rounded-bl-lg bg-transparent">
              <img src={`http://localhost:4004/images/${product.image}`}
                   alt={product.title}
                   className="w-full h-auto rounded-tl-lg rounded-bl-lg"/>
            </div>
            {/* Product information */}
            <div className="flex flex-col w-[60%] h-[100%] p-3 justify-center gap-1 bg-gray-100
                            dark:bg-gray-800">
              {/* Star rating */}
              <div className="flex gap-2 items-center">
                {getStars(product.rating)}
                <p className="font-camptonBook mt-[2px]
                              dark:text-white
                
                              xs:text-[10px]
                              xl:text-[13px]">({product.rating})</p>
              </div>
              {/* Product title */}
              <h1 className="text-[20px] font-camptonMedium leading-tight
                             dark:text-white">
              {t(product.title)}
              </h1>
              {/* Product description */}
              <p className="font-camptonBook text-gray-500 leading-tight
                            dark:text-white
                            
                            xs:text-[12px] xs:w-[70%]
                            lg:w-[80%]
                            xl:text-[14px] xl:w-[70%]">{t(product.description)}</p>

              {/* Pricing information */}
              <div className="flex items-center gap-4">
                <p className="font-camptonBold text-primary
                              dark:text-secondary_01

                              xs:text-[23px]
                              lg:text-[15px]
                              xl:text-[23px]">{t(product.offerPrice)}</p>

                <div className="flex w-auto relative items-center">
                  <div className="absolute mt-[1px] h-[1.5px] w-[100%] bg-red-500"/>
                  <p className="font-camptonBook text-gray-800
                                dark:text-white

                                lg:text-[12px]
                                xl:text-[17px]">{t(product.normalPrice)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right section with carousel */}
      <Carousel_05 />
    </div>
  );
};

export default ProductSection_05;
