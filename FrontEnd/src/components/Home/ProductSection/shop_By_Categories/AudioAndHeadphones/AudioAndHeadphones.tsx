import { FaStar, FaStarHalfAlt } from "react-icons/fa";
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
  rating: number;
  normalPrice: string;
  title: string;
  description: string;
  quantity: number;
  available: string;
  quantitySold: number;
  sold: string;
  info: string;
}

// Array of specific product IDs to be displayed as featured products
const featuredProductIds = ['1', '2', '3'];
// Exporting the length of the featured product IDs array
export const featuredAudioAndHeadphonesProductIdsLength = featuredProductIds.length

const AudioAndHeadphones = () => {

  // State for storing products data
  const [products, setProducts] = useState<Product[]>([]);
  // State for tracking loading status
  const [loading, setLoading] = useState(true);
  // State for handling errors
  const [error, setError] = useState<string | null>(null);
  // Navigation hook for programmatic routing
  const navigate = useNavigate();
  // Translation hook for internationalization
  const { t } = useTranslation();

  // Handler for product click - navigates to product detail page
  const handleProductClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    // Mapping of product IDs to their respective routes
    const routeMap: Record<string, string> = {
      "1": "/Product_05",
      "2": "/Product_04",
      "3": "/Product_03",
    }

    const route = routeMap[id];
    if (route) {
      navigate(route)
    }
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
  
  // Function to generate star rating display
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(<FaStar key={i} className="text-[#fcc419]
                                              
                                              md:text-[15px]
                                              lg:text-[20px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star
        stars.push(<FaStarHalfAlt key={i} className="text-[#fcc419]
                                                      
                                                      md:text-[15px]
                                                      lg:text-[20px]" />);
      } else {
        // Empty star
        stars.push(<FaStar key={i} className="text-gray-300
                                              
                                              md:text-[15px]
                                              lg:text-[20px]" />);
      }
    }
    return stars;
  };

  // Loading state UI
  if (loading) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.loadingProducts")}</p>
      </div>;
  }

  // Error state UI
  if (error) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.networkError")}</p>
      </div>;
  }

  // Empty products state UI
  if (products.length === 0) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.noProducts")}</p>
      </div>;
  }

  // Main component render
  return (
    <div className="w-[85%] flex flex-col mx-auto">
      {/* ============= Section Header ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                       dark:text-white

                       xs:text-[10px]
                       sm:text-[11px]
                       md:text-[15px]
                       lg:text-[22px]">{t("audioAndHeadphonesTitle.electronicsTitle")}</h1>

        <div className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit">
          <p className="text-gray-500
                        dark:text-white
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
            {t("audioAndHeadphonesTitle.info")}
          </p>
        </div>
      </div>
      {/* ============= Divider Line ============= */}
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                      dark:bg-gray-600"/>
    {/* ============= Products Grid ============= */}
    <div className="w-[100%] h-auto mx-auto gap-5 items-center
                    justify-between my-20
                    
                    md:grid md:grid-cols-3">
      {products.map((product, index) => (
              // ============= Product Card =============
              <div className="rounded-lg overflow-hidden h-auto
                              bg-gray-100 border-[1px] border-primary cursor-pointer
                              dark:bg-transparent dark:border-gray-600

                              xs:mb-5
                              md:w-[100%]"
                   key={index}
                  onClick={() => handleProductClick(product._id)}>
                {/* ============= Product Image ============= */}
                <div className="flex w-[100%] h-[300px] justify-center items-center">
                  <img className="w-auto h-full object-cover"
                       src={`http://localhost:4004/images/${product.image}`}
                       alt={product.title}/>
                </div>
                {/* ============= Product Info ============= */}
                <div className="flex flex-col w-[100%] h-[35%] gap-2 p-4 justify-between dark:bg-gray-800">
                  {/* ============= Star Rating ============= */}
                  <div className="flex gap-2">
                    {getStars(product.rating)}
                    <p className="font-camptonBook
                                  dark:text-white

                                  md:text-[12px]
                                  lg:text-[15px]">
                      ({product.rating})
                    </p>
                  </div>
                  {/* ============= Product Title ============= */}
                  <h1 className="font-camptonMedium
                                 dark:text-white

                                 xs:w-[80%]
                                 sm:w-[60%]
                                 md:text-[13px] md:w-[90%]
                                 lg:text-[18px]
                                 xl:text-[22px] xl:w-[70%]">{t(product.title)}</h1>

                  {/* ============= Price and Add to Cart ============= */}
                  <div className="flex justify-between items-center">
                    <h1 className="font-camptonBold text-primary
                                   dark:text-secondary_01

                                   xs:text-[40px]
                                   md:text-[30px]
                                   lg:text-[36px]
                                   xl:text-[40px]">{product.normalPrice}
                    </h1>
                    {/* ============= Add to Cart Button ============= */}
                    <i className="bg-primary border-[1px] border-primary cursor-pointer
                                  hover:scale-[105%] hover:bg-transparent hover:border-[1px] group hover:border-primary duration-300
                                  dark:bg-gray-800 dark:border-gray-800 dark:hover:border-gray-800 dark:hover:bg-transparent

                                  xs:rounded-md
                                  md:rounded-sm
                                  lg:rounded-md">
                      <PiShoppingCartLight className="text-white group-hover:text-primary duration-300
                                                      dark:hover:text-white

                                                      xs:text-[40px] xs:p-1"/></i>
                  </div>
                  {/* ============= Stock Information ============= */}
                  <div className="flex justify-between items-center">
                    <p className="font-camptonBook flex
                                  dark:text-white

                                  xs:text-[12px]
                                  lg:text-[15px]
                                  2xl:text-[20px]">
                      {t(product.available)}:
                      <span className="font-camptonMedium
                                       dark:text-secondary_01

                                       xs:text-[12px]
                                       lg:text-[15px]
                                       2xl:text-[20px]">
                        &nbsp;&nbsp;{product.quantity}
                      </span>
                    </p>
                    <p className="text-[15px] font-camptonBook flex
                                  dark:text-white

                                  xs:text-[12px]
                                  lg:text-[15px]
                                  2xl:text-[20px]">
                      {t(product.sold)}:
                      <span className="text-primary font-camptonMedium
                                       dark:text-secondary_01">
                        &nbsp;&nbsp;{product.quantitySold}
                      </span>
                    </p>
                  </div>
                  {/* ============= Additional Info ============= */}
                  <p className="font-camptonBook
                                dark:text-white

                                xs:text-[10px]
                                lg:text-[15px]
                                2xl:text-[16px]">
                    {t(product.info)}
                  </p>
                </div>
              </div>
            ))}
    </div>
    </div>
  );
};

export default AudioAndHeadphones;
