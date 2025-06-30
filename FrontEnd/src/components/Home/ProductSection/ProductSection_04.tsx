import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

interface Product {
  _id: string;
  image: string;
  title: string;
  quantity: number;
  normalPrice: string;
  offerPrice: string;
  detail_01: string;
  detail_02: string;
  detail_03: string;
  detail_04: string;
  rating: string;
  reviews: string;
}

// Array of specific product IDs you want to display
const featuredProductIds = ['12', '13', '14', '15', '16', '17'];

const ProductSection_04 = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    console.log(`Image with id ${id} clicked.`)
    const routeMap = {
      "12": "/Computers",
      "13": "/MobilesAndTablets",
      "14": "/GameAccessories",
      "15": "/CameraAndPhoto",
      "16": "/Electronics",
      "17": "/AudioAndHeadphones"
    }

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

  return (
    <div className="flex flex-col w-[85%] mx-auto">
      {/* ============= Shop by Categories - Head ============= */}
      <div className="flex w-[100%] justify-between items-center mb-7">
        <h1 className="font-camptonMedium
                       dark:text-white

                       xs:text-[10px]
                       sm:text-[11px]
                       md:text-[15px] 
                       lg:text-[22px]">{t("productSection_04.shopByCategories")}</h1>

        <div className="flex items-center

                        xs:w-[50%]
                        md:w-fit">

          <p className="text-gray-500
                        dark:text-white

                        xs:text-[10px]
                        sm:text-[11px]
                        md:text-[15px]
                        xl:text-[18px]">{t("productSection_04.info")}
          </p>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300 mx-auto
                      dark:bg-gray-600" />
      <div className="flex w-[100%] h-auto mx-auto items-center justify-between mb-20 mt-10

                      xs:grid xs:grid-cols-1 xs:gap-y-[60px]
                      md:grid-cols-3 md:gap-x-5 md:gap-y-[60px]
                      xl:flex">
        {/* ============= Product List ============= */}
        {products.map((product, index) => (
          <div className="flex flex-col w-auto h-auto group relative border-[1px] border-primary rounded-lg cursor-pointer
                          dark:border-gray-600"
               key={index}
               onClick={() => handleImageClick(product._id)}>
            {/* ============= Image ============= */}
            <div className="flex w-[100%] h-auto rounded-tl-lg rounded-tr-lg overflow-hidden items-center justify-center bg-transparent">
              <img className="xs:h-auto
                              lg:w-[90%] w-[100%]
                              xl:w-[100%]"
                   src={`http://localhost:4004/images/${product.image}`}
                   alt={product.title} />
            </div>
            {/* ============= Title ============= */}
            <div className="flex flex-col w-[100%] h-auto p-4 bg-gray-100 justify-between rounded-br-lg rounded-bl-lg text-center z-10
                            group-hover:shadow-shadow-dark transition-all duration-300 items-center
                            dark:bg-gray-800">
              <h1 className="mb-1 font-camptonMedium
                             dark:text-white

                             xs:text-[23px]
                             md:text-[17px]
                             lg:text-[20px]
                             xl:text-[16px]
                             2xl:text-[20px]">{t(product.title)}</h1>
              <p className="text-gray-500
                            dark:text-white

                            xs:text-[19px]
                            md:text-[17px]
                            lg:text-[16px]
                            xl:text-[14px]
                            2xl:text-[17px]">{product.quantity} {t("productSection_04.items")}</p>
            </div>
            {/* ============= Add to cart ============= */}
            <button className="flex px-3 pt-5 pb-3 w-full h-auto items-center gap-3 justify-center 
                               rounded-br-lg rounded-bl-lg absolute bottom-0 transition-all
                               duration-300 group-hover:bottom-[-45px] bg-primary border-[1px] border-primary
                               dark:bg-secondary_01 dark:border-secondary_01">
                            
              <i><IoIosSearch className="text-[18px] text-white" /></i>
              <p className="text-white">{t("productSection_04.viewMore")}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection_04;
