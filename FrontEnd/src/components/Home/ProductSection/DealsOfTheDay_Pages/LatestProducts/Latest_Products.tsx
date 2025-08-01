import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollManager from "@/ScrollManager/ScrollManager";
// React Icons
import { PiShoppingCartLight } from "react-icons/pi";
import axios from 'axios';

// Translation
import { useTranslation } from 'react-i18next';

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

// Array of specific product IDs you want to display
const featuredProductIds = ['4', '48', '49', '50', '51', '52'];

const Latest_Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageClick = (id: string) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap: Record<string, string> = {
      "4": "/Product_01",
      "48": "/Product_02",
      "49": "/Product_03",
      "50": "/Product_04",
      "51": "/Product_05",
      "52": "/Product_06"
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

  return (
    <div className="flex flex-col w-[100%] mx-auto">
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
            {/* ============= Image ============= */}
            <div className="flex rounded-tl-lg items-center justify-center rounded-tr-lg overflow-hidden">
              <img 
                className="xs:h-auto
                          lg:w-[100%] w-[100%]
                          xl:w-[100%]" 
                src={`http://localhost:4004/images/${product.image}`}
                alt={product.title} 
              />
            </div>
            {/* ============= Title ============= */}
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
              {/* ============= Price ============= */}
              <div className="flex gap-4 items-center justify-center">
                <p className="font-camptonBold text-primary
                            dark:text-secondary_01
                            xs:text-[25px]
                            2xl:text-[25px]">{t(product.offerPrice)}</p>
                <div className="flex w-auto relative items-center">
                  <div className="absolute h-[1px] w-[100%] bg-primary"/>
                  <p className="text-gray-800 rounded-br-lg rounded-bl-lg text-[17px]
                              dark:text-white
                              ">{t(product.normalPrice)}</p>
                </div>
              </div>
            </div>
            {/* ============= Add to cart ============= */}
            <button
              className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center
                        rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                        duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary
                        dark:bg-secondary_01 dark:border-secondary_01">
              <i>
                <PiShoppingCartLight className="text-[18px] text-white" />
              </i>
              <p className="text-white text-[13px] font-camptonBook">{t("productSection_02.addToCart")}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_Products;