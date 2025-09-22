import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Carousel_09 } from "../../../../Shadcn-components/Carousel_09";
import { Carousel_08 } from "../../../../Shadcn-components/Carousel_08";

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
}

// Array of specific product IDs you want to display
const featuredProductIds = ['104', '77', '79', '81', '89', '91'];

// Export the length of featured product IDs for potential external use
export const featuredComputersProductIdsLength = featuredProductIds.length

const Computers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleProductClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap: Record<string, string> = {
      "104": "/Product_01",
      "77": "/Product_35",
      "79": "/Product_36",
      "81": "/Product_32",
      "89": "/Product_37",
      "91": "/Product_34",
    }

    const route = routeMap[id];
    if (route) {
      navigate(route)
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

  // const handleProductClick = (id: string) => {
  //   navigate(`/products/${id}`);
  // };

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    console.log("Add to cart:", productId);
    // Add your cart logic here
  };

  const getStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#fcc419] md:text-[15px] lg:text-[20px]" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#fcc419] md:text-[15px] lg:text-[20px]" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 md:text-[15px] lg:text-[20px]" />);
      }
    }
    return stars;
  };

  if (loading) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.loadingProducts")}</p>
      </div>;
  }

  if (error) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.networkError")}</p>
      </div>;
  }

  if (products.length === 0) {
    return <div className="flex mb-20 justify-center">
      <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full
                    dark:bg-secondary_01">{t("productSection_01.noProducts")}</p>
      </div>;
  }

  return (
    <div className="flex flex-col w-[85%] h-auto mx-auto gap-5 items-center justify-between">
      <div className="flex gap-5
      
                      xs:flex-col
                      xl:flex-row">
        <Carousel_08 />
        <Carousel_09 />
      </div>
    <div className="h-auto mx-auto gap-5 items-center justify-between my-20
    
                    md:grid md:grid-cols-3">
      {products.map((product) => (
        <div 
          className="rounded-lg overflow-hidden h-auto bg-gray-100 border-[1px] border-primary cursor-pointer
                     hover:shadow-lg transition-shadow duration-300
                     dark:bg-transparent dark:border-gray-600
                     
                     xs:mb-5
                     md:w-[100%]"
          key={product._id}
          onClick={() => handleProductClick(product._id)}>
          {/* Product image */}
          <div className="flex w-[100%] justify-center items-center bg-white
                          dark:bg-transparent
                          
                          xs:h-[250px]
                          sm:h-[320px]
                          md:h-[200px]
                          lg:h-[300px]">
            <img className="w-[75%]"
            src={`http://localhost:4004/images/${product.image}`}
            alt={product.title} />
          </div>
          
          {/* Product info */}
          <div className="flex flex-col w-[100%] gap-4 p-4 justify-between
                          dark:bg-gray-800
                          
                          xs:h-auto
                          md:h-[290px]">
            {/* Rating */}
            <div className="flex gap-2">
              {getStars(product.rating)}
              <p className="font-camptonBook
                            dark:text-white
                            
                            md:text-[12px]
                            lg:text-[15px]">
                ({product.rating.toFixed(1)})
              </p>
            </div>
            
            {/* Title */}
            <h1 className="font-camptonMedium
                           dark:text-white
            
                           xs:w-[80%]
                           sm:w-[60%]
                           md:text-[13px] md:w-[90%]
                           lg:text-[18px]
                           xl:text-[22px] xl:w-[70%]">
              {t(product.title)}
            </h1>

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
                onClick={(e) => handleAddToCart(e, product._id)}
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

            {/* Availability and sold */}
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
              <p className="text-[15px] font-camptonBook flex dark:text-white
              
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

            {/* Description */}
            <p className="font-camptonBook dark:text-white
                          
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

export default Computers;
