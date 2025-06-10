import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Card, CardContent } from "@/components/ui/card";
// import { carousel_05 } from "../Home/ProductSection/ProductSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// React Icons
import { IoIosArrowForward } from "react-icons/io";

// Translation
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

// Array of specific product IDs you want to display
const featuredProductIds = ['35', '36'];

export function Carousel_05() {

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
    <div className="mx-auto xs:w-[100%]
                    lg:w-[50%]">
      <Carousel
        setApi={setApi}
        className="w-full flex flex-col"
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}>
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent
                  className={`flex items-center m-0 p-0 rounded-xl overflow-hidden
                              ${
                                isGrabbing
                                  ? "cursor-grabbing"
                                  : "cursor-grab"
                              }`}>
                  <div className="flex items-center w-[100%]
                                  
                                  xl:h-[700px]">
                    <div className="flex flex-col absolute h-auto justify-center
                                                    
                                    xs:w-[100%] xs:pl-7 xs:bottom-0 xs:mb-[30px]
                                    sm:w-[80%] sm:bottom-0 sm:mb-[30px]
                                    md:w-[80%] md:bottom-0 md:mb-[70px] md:gap-5
                                    lg:w-[90%] lg:mb-[30px] lg:gap-2
                                    xl:w-[90%] xl:pl-12
                                    2xl:bottom-0 2xl:mb-[30px] 2xl:gap-0">
                      {/* ============= Exclusive offer ============= */}
                      <div className="gap-3
                                                      
                                      xs:flex">
                        <p className="flex text-white gap-3 items-center
                                                                      
                                      xs:text-[12px]
                                      sm:text-[13px]
                                      md:text-[20px]
                                      lg:text-[15px]
                                      2xl:text-[16px]">{t(product.exclusiveOffer)}
                        </p>
                        <div className="w-fit rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg bg-primary border-[1px] cursor-pointer
                                        border-white text-white items-center justify-center
                                        hover:bg-transparent hover:scale-110 ease-in-out duration-300">

                          <p className="xs:px-4 xs:text-[12px] xs:py-[1px]
                                        md:text-[20px] md:px-6 md:py-[3px]
                                        lg:text-[15px]
                                        2xl:text-[16px]">{t(product.discount)}
                          </p>
                        </div>
                      </div>
                      <h1 className="text-white font-camptonBold leading-tight my-3
                                                      
                                      xs:text-[30px] xs:w-[80%]
                                      md:text-[65px]
                                      lg:text-[35px]
                                      2xl:text-[45px]">{t(product.title)}
                      </h1>
                      <p className="text-white font-camptonBook
                                                      
                                    xs:text-[12px] xs:w-[80%]
                                    sm:text-[13px] sm:w-[90%]
                                    md:w-[100%] md:text-[20px]
                                    lg:text-[15px] lg:w-[90%]
                                    2xl:text-[16px] 2xl:w-[100%]">{t(product.paragraph)}
                      </p>
                      <div className="w-auto mt-7">
                        <button className="flex items-center justify-center bg-primary border-[1px] border-white
                                            text-white rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg
                                            hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                                                                                    
                                            xs:gap-2 xs:px-3 xs:py-1
                                            md:gap-3 md:px-4 md:py-2">
                          <p className="xs:text-[12px]
                                        md:text-[20px]
                                        lg:text-[15px]
                                        2xl:text-[20px]">{t(product.addToCart)}
                          </p>
                          <i><IoIosArrowForward className="xs:text-[12px]
                                                           md:text-[15px]
                                                           lg:text-[20px]
                                                           2xl:text-[20px]"/>
                          </i>
                        </button>
                      </div>
                    </div>

                    <img className="w-[100%] h-[100%] object-cover"
                         src={`http://localhost:4004/images/${product.image}`}
                         alt={product.title}/>
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
