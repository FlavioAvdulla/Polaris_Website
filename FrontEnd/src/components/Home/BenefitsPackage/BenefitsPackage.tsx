import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { CiMedal, CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";

interface Product {
  _id: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

// Array of specific product IDs you want to display
const featuredProductIds = ['59', '60', '61', '62'];

// Map image strings to actual components
const iconComponents: Record<string, React.ComponentType> = {
  'benefitsSection.CiMedal': CiMedal,
  'benefitsSection.CiDeliveryTruck': CiDeliveryTruck,
  'benefitsSection.CiWallet': CiWallet,
  'benefitsSection.PiHandbagSimpleLight': PiHandbagSimpleLight,
};

const BenefitsPackage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex mb-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_01.loadingProducts")}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex mb-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_01.networkError")}
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex mb-20 justify-center">
        <p className="font-camptonBook bg-primary text-white px-10 py-2 rounded-full dark:bg-secondary_01">
          {t("productSection_01.noProducts")}
        </p>
      </div>
    );
  }

  return (
    <div className="w-[85%] h-auto mx-auto items-center justify-between my-20 xs:grid xs:grid-cols-2 md:grid-cols-4">
      {products.map((product) => {
        const IconComponent = iconComponents[product.image];
        
        if (!IconComponent) {
          console.warn(`No icon component found for: ${product.image}`);
          return null;
        }

        return (
          <div 
            className="flex flex-col items-center text-center xs:mb-5 md:mb-0" 
            key={product._id}
          >
            <div className="flex items-center justify-center border-[1px] border-primary dark:border-gray-600 xs:w-[80px] xs:h-[80px] xs:rounded-[8px] xs:mb-3 md:w-[120px] md:h-[120px] md:rounded-[15px] md:mb-6 lg:w-[150px] lg:h-[150px]">
              <IconComponent 
                className="text-primary dark:text-white xs:text-[40px] md:text-[55px] lg:text-[65px]"
              />
            </div>
            <h1 className="font-camptonMedium dark:text-white xs:text-[11px] md:text-[14px] lg:text-[17px]">
              {t(product.titleKey)}
            </h1>
            <p className="text-gray-500 font-camptonBook w-[80%] dark:text-gray-400 xs:text-[10px] md:text-[12px] lg:text-[14px]">
              {t(product.descriptionKey)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsPackage;