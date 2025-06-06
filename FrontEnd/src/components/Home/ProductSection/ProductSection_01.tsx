import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

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

// Array of specific product IDs you want to display
const featuredProductIds = ['1', '2', '3'];

const ProductSection_01 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  const handleProductClick = (id: string) => {
    navigate(`/products/${id}`);
  };

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
    return <div className="text-center py-20">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-20">No featured products available</div>;
  }

  return (
    <div className="w-[85%] h-auto mx-auto gap-5 items-center justify-between my-20
    
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
          <div className="flex w-[100%] h-[300px] justify-center items-center bg-white
                          dark:bg-transparent">
            <img className="w-[75%]" src={`http://localhost:4004/images/${product.image}`} alt={product.title} />
          </div>
          
          {/* Product info */}
          <div className="flex flex-col w-[100%] gap-4 p-4 justify-between
                          dark:bg-gray-800">
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
              <h1 className="font-camptonBold text-primary
                             dark:text-secondary_01
                              
                             xs:text-[40px]
                             md:text-[30px]
                             lg:text-[36px]
                             xl:text-[40px]">
                {product.normalPrice}
              </h1>
              <button
                onClick={(e) => handleAddToCart(e, product._id)}
                className="bg-primary border-[1px] border-primary cursor-pointer
                           hover:scale-[105%] hover:bg-transparent hover:border-[1px] group hover:border-primary duration-300
                           dark:bg-gray-800 dark:border-gray-800 dark:hover:border-gray-800 dark:hover:bg-transparent
                           
                           xs:rounded-md
                           md:rounded-sm
                           lg:rounded-md">
                <PiShoppingCartLight className="text-white group-hover:text-primary duration-300
                                                dark:hover:text-white

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
  );
};

export default ProductSection_01;