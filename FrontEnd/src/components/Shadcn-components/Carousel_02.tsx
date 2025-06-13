import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Card, CardContent } from "@/components/ui/card";
// import { carousel_02 } from "../Home/ProductSection/ProductSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  CarouselNext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Translation
import { useTranslation } from 'react-i18next';

interface Product {
  _id: string;
  image: string;
}

// Array of specific product IDs you want to display
const featuredProductIds = ['39', '40', '41', '42', '43', '44', '45', '46', '47'];

// React Icons
// import { IoIosArrowForward } from "react-icons/io";

export function Carousel_02() {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation()
  const [api, setApi] = React.useState<CarouselApi>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isGrabbing, setIsGrabbing] = React.useState(false);

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
        setError(err instanceof Error ? err.message : "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === count) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [api, count]);

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

  return (
    <div className="mx-auto w-[50%]
                    
                    xs:w-[100%]
                    xl:w-[50%]">
      <Carousel
        setApi={setApi}
        className="w-full flex flex-col"
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent
                  className={`flex aspect-square items-center justify-center m-0 p-0
                              rounded-xl overflow-hidden bg-slate-300
                              
                              xs:h-[300px]
                              md:h-[400px]
                              2xl:h-[600px]

                    ${isGrabbing ? "cursor-grabbing" : "cursor-grab"
                    }`}>
                  <div className="flex items-center justify-center w-[100%] h-[100%]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={`http://localhost:4004/images/${product.image}`}
                      alt="image_01"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
      {/* <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div> */}
    </div>
  );
}
