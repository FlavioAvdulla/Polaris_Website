import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";

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

// Array of specific product IDs to display in the Electronics section
const featuredProductIds = ['1', '2', '3'];
// Export the length of featured product IDs for potential external use
export const featuredElectronicsProductIdsLength = featuredProductIds.length

const Electronics = () => {

  // State for storing the list of products
  const [products, setProducts] = useState<Product[]>([]);
  // State to track if products are currently being loaded
  const [loading, setLoading] = useState(true);
  // State to store any error that occurs during data fetching
  const [error, setError] = useState<string | null>(null);
  // React Router hook for programmatic navigation
  const navigate = useNavigate();
   // Translation hook for internationalization
  const { t } = useTranslation();

  const handleProductClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap: Record<string, string> = {
      "1": "/Product_05",
      "2": "/Product_04",
      "3": "/Product_03",
    }

    // Navigate to the corresponding product page if a mapping exists
    const route = routeMap[id];
    if (route) {
      navigate(route)
    }
  }

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    // Fetches products from the API and filters them based on featuredProductIds
    const fetchProducts = async () => {
      try {
        // API call to get all products
        const response = await axios.get('http://localhost:4004/api/products');
        // Filter products to only include those with IDs in featuredProductIds
        const filteredProducts = response.data.filter((product: Product) => 
          featuredProductIds.includes(product._id)
        );
        // Update state with filtered products
        setProducts(filteredProducts);
      } catch (err) {
        // Handle errors during API call
        console.error("Failed to fetch products:", err);
        setError(err.message || "Failed to load products");
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };
    // Invoke the fetch function
    fetchProducts();
  }, []); // Empty dependency array means this runs once on component mount
  
  // Generates star rating components based on a numeric rating value
  const getStars = (rating) => {
    const stars = [];
    // Create 5 stars (full, half, or empty) based on the rating
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

  // Display loading state
  if (loading) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.loadingProducts")}</p>
      </div>;
  }

  // Display error state
  if (error) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.networkError")}</p>
      </div>;
  }

  // Display message if no products are available
  if (products.length === 0) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.noProducts")}</p>
      </div>;
  }

  // Main component render
  return (
    <div className="w-[85%] flex flex-col mx-auto">
      {/* ============= Electronics - Header Section ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                       dark:text-white

                       xs:text-[10px]
                       sm:text-[11px]
                       md:text-[15px]
                       lg:text-[22px]">{t("electronics.electronicsTitle")}</h1>

        <div className="flex items-center
                        
                        xs:w-[50%]
                        md:w-fit">
          <p className="text-gray-500
                        dark:text-white
                        
                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">
            {t("electronics.info")}
          </p>
        </div>
      </div>
      {/* Divider line */}
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                      dark:bg-gray-600"/>
    {/* Products grid */}
    <div className="w-[100%] h-auto mx-auto gap-5 items-center
                    justify-between my-20
                    
                    md:grid md:grid-cols-3">
      {products.map((product, index) => (
              // ============= Individual Product Card =============
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
                  {/* Product Title */}
                  <h1 className="font-camptonMedium
                                 dark:text-white

                                 xs:w-[80%]
                                 sm:w-[60%]
                                 md:text-[13px] md:w-[90%]
                                 lg:text-[18px]
                                 xl:text-[22px] xl:w-[70%]">{t(product.title)}</h1>
                  {/* Price and cart */}
                              <div className="flex justify-between items-center">
                                <div className="flex items-center xs:gap-2 md:gap-4">
                                  <p
                                    className="font-camptonBold text-primary
                                               dark:text-secondary_01
                                                
                                               xs:text-[22px]
                                               md:text-[30px]
                                               lg:text-[40px]">
                                    {t(product.offerPrice)}
                                  </p>
                                  <div className="flex w-auto relative items-center">
                                    <div className="absolute mt-[2px] h-[1.5px] w-[100%] bg-red-500" />
                  
                                    <p className="font-camptonBook text-gray-700
                                                  dark:text-white
                                                    
                                                  xs:text-[16px]
                                                  md:text-[17px]
                                                  lg:text-[25px]">
                                      {t(product.normalPrice)}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  onClick={(e) => handleWhatsappMessage(product, e)}
                                  className="bg-primary border-[1px] border-primary cursor-pointer
                                             hover:scale-[105%] hover:bg-transparent hover:border-[1px] group hover:border-primary duration-300
                                             dark:bg-secondary_01 dark:border-gray-800 dark:hover:bg-transparent dark:hover:border-secondary_01
                                             
                                             xs:rounded-md
                                             md:rounded-sm
                                             lg:rounded-md">
                                  <PiShoppingCartLight className="text-white group-hover:text-primary duration-300
                                                                  dark:hover:text-secondary_01
                  
                                                                  xs:text-[40px] xs:p-1"/>
                                </button>
                              </div>
                  {/* Stock and Sales Information */}
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
                  {/* Additional Product Information */}
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

export default Electronics;
