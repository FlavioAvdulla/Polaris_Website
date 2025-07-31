import React, { useEffect, useState } from "react";
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';

interface Product {
  _id: string;
  image: string;
  discount: string;
  title: string;
  addToCart: string;
  paragraph: string;
  exclusiveOffer: string;
}

const featuredProductIds = ['26'];

const BannerSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4004/api/products');
        const filteredProducts = response.data.filter((product: Product) => 
          featuredProductIds.includes(product._id)
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err instanceof Error ? err.message : "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex mb-10 mt-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_02.loadingProducts")}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex mb-10 mt-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_02.networkError")}
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex mb-10 mt-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_02.noProducts")}
        </p>
      </div>
    );
  }

  const product = products[0]; // Get the first product (since we're filtering for one)

  return (
    <div className="flex w-[100%] h-auto mx-auto mt-20 mb-20 relative">
      <div className="flex flex-col absolute justify-center z-10

                      xs:w-[70%] xs:h-[150px] xs:pl-4 xs:gap-2
                      sm:w-[55%]
                      md:w-[55%] md:h-[300px] md:pl-16
                      lg:w-[45%] lg:h-[350px] lg:gap-3
                      xl:w-[35%] xl:h-[450px] xl:gap-5
                      2xl:w-[30%]">
        
        <p className="flex text-white gap-3 items-center

                      xs:text-[8px]
                      md:text-[12px]
                      lg:text-[18px]
                      xl:text-[20px]">
          {t(product.exclusiveOffer)}
          <span className="rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg bg-primary
                           border-[1px] cursor-pointer border-white text-white items-center justify-center
                           hover:bg-transparent hover:scale-110 ease-in-out duration-300

                           xs:px-3 xs:py-[1px] xs:text-[8px]
                           md:text-[12px] md:px-6 md:py-[3px]
                           lg:text-[17px]">
            {t(product.discount)}
          </span>
        </p>

        <h1 className="text-white font-camptonBold leading-tight

                       sm:text-[15px]
                       md:text-[35px]
                       lg:text-[40px]
                       xl:text-[50px]">
          {t(product.title)}
        </h1>

        <p className="text-white

                      xs:text-[8px]
                      sm:text-[8px]
                      md:text-[15px]
                      2xl:text-[17px]">
          {t(product.paragraph)}
        </p>

        <div className="w-auto mt-3">
          <button
            className="flex items-center justify-center border-[1px] border-white text-white rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg
              hover:scale-110 hover:border-[1px] bg-primary hover:bg-transparent ease-in-out duration-300

              xs:text-[8px] xs:px-2 xs:py-1
              md:text-[12px] md:px-4 md:py-2 md:gap-3
              lg:text-[18px]
              xl:text-[20px]">
            {t(product.addToCart)}
            <IoIosArrowForward className="ml-1" />
          </button>
        </div>
      </div>

      <div className="flex w-[100%]

                      xs:h-[150px]
                      md:h-[300px]
                      lg:h-[350px]
                      xl:h-[450px]">
        <img 
          className="w-[100%] h-full object-cover" 
          src={`http://localhost:4004/images/${product.image}`} 
          alt={t(product.title)} 
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/default-banner.jpg';
          }}
        />
      </div>
    </div>
  );
};

export default BannerSection;