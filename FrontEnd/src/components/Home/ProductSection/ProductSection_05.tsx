import React, { useEffect, useState } from "react";
import { Carousel_03 } from "../../Shadcn-components/Carousel_03";
import { Carousel_04 } from "../../Shadcn-components/Carousel_04";

import { useNavigate } from "react-router-dom";
import axios from 'axios';

// React Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import the product data.
// import { productSection_05 } from "./ProductSection";

// Translation
import { useTranslation } from 'react-i18next';

interface Product {
  _id: string;
  image: string; // or typeof Product_01 if using image variables
  rating: string;
  title: string;
  description: string;
  normalPrice: string;
  offerPrice: string;
}

// Array of specific product IDs you want to display
const featuredProductIds = ['18', '19', '20', '21'];

const ProductSection_05 = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  
    const handleProductClick = (id) => {
      console.log(`Image with id ${id} clicked.`);
      const routeMap = {
        "18": "/Computers",
        "19": "/Product_02",
        "20": "/Product_03",
        "21": "/Product_04"
      };

      const route = routeMap[id];
      if (route) {
        navigate(route);
      }
    }

    useEffect(() => {
    const fetchProducts = async () => {
      try {
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

  if (loading) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.loadingProducts")}</p>
      </div>;
  }

  if (error) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.networkError")}</p>
      </div>;
  }

  if (products.length === 0) {
    return <div className="flex mb-10 mt-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_02.noProducts")}</p>
      </div>;
  }

  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419]
          
                                              xs:text-[10px]
                                              md:text-[18px]
                                              lg:text-[15px]
                                              xl:text-[17px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-[#fcc419]
          
                                            xs:text-[10px]
                                            md:text-[18px]
                                            lg:text-[15px]
                                            xl:text-[17px]" />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300
          
                                              xs:text-[10px]
                                              md:text-[18px]
                                              lg:text-[15px]
                                              xl:text-[17px]" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex w-[85%] h-auto mx-auto gap-5 items-center justify-between mb-20
    
                    xs:flex-col
                    xl:flex-row">
      <div className="flex gap-5
                      
                      xs:flex-col
                      lg:flex-row">
      <Carousel_03 />
      <Carousel_04 /> 
      </div>
      <div className="gap-5 flex flex-col
      
                      xs:w-[100%]
                      lg:w-[100%]
                      lg:grid lg:grid-cols-2
                      xl:flex xl:flex-col xl:h-[700px] xl:w-[60.66%]">
        {/* ============= Section - right ============= */}
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
                <h1 className="font-camptonMedium leading-tight
                               dark:text-white
              
                               xs:text-[18px]
                               sm:text-[20px]
                               md:text-[27px]
                               lg:text-[22px]">{t(product.title)}
                </h1>
                <p className="text-gray-500
                              dark:text-white
                              
                              xs:text-[10px]
                              sm:text-[12px]
                              md:text-[20px]
                              lg:text-[15px]">{t(product.description)}
                </p>
                <div className="flex gap-4 items-center">
                  <p className="font-camptonBold text-primary
                                dark:text-secondary_01
                                
                                xs:text-[25px]
                                md:text-[35px]
                                lg:text-[25px]">{product.offerPrice}
                  </p>
                  <div className="flex w-auto relative items-center">
                    <div className="absolute h-[1px] w-[100%] bg-primary"/>
                    <p className="text-gray-800
                                  dark:text-white
                    
                                  xs:text-[17px]
                                  md:text-[22px]
                                  lg:text-[20px]">{product.normalPrice}
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
