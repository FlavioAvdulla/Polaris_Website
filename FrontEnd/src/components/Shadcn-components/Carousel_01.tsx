import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
const featuredProductIds = ['37', '38'];

export function Carousel_01() {

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
    }, 8000);

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
    <div
      className="mx-auto
                    
                 xs:w-[100%]">
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
                  className={`flex aspect-square items-center justify-center m-0 p-0
                              rounded-xl overflow-hidden

                              xs:h-[300px]
                              md:h-[400px]
                              2xl:h-[600px]

                              ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}>
                  <div className="flex items-center w-[100%] h-[100%]">
                    <div className="flex flex-col absolute h-auto justify-center
                    
                                    xs:w-[100%] xs:py-0 xs:pl-7
                                    sm:w-[80%]
                                    md:w-[50%]
                                    lg:pl-10
                                    xl:w-[60%] xl:py-10 xl:pl-12">
                      {/* ============= Exclusive offer ============= */}                
                      <div className="gap-3

                                      xs:flex">
                        <p className="flex text-white gap-3 items-center
                                      
                                      xs:text-[13px]
                                      md:text-[15px]
                                      2xl:text-[20px]">
                          {t(product.exclusiveOffer)}
                        </p>
                        <div className="w-fit rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg bg-primary
                                        border-[1px] cursor-pointer border-white text-white items-center justify-center
                                        hover:bg-transparent hover:scale-110 ease-in-out duration-300
                                        dark:bg-darkColor dark:hover:bg-transparent">
                          <p className="xs:text-[12px] xs:px-4 xs:py-[1px]
                                        md:text-[15px] md:px-6 md:py-[3px]
                                        2xl:text-[20px]">{t(product.discount)}</p>
                        </div>
                      </div>
                      <h1
                        className="text-white font-camptonBold leading-tight my-3
                      
                                    xs:text-[22px] xs:w-[80%]
                                    sm:text-[30px]
                                    md:text-[35px]
                                    2xl:text-[60px]">
                        {t(product.title)}
                      </h1>
                      <p className="text-white font-camptonBook
                      
                                    xs:text-[10px] xs:w-[70%]
                                    sm:text-[13px] sm:w-[90%]
                                    md:w-[100%]
                                    lg:text-[15px] lg:w-[90%]
                                    2xl:text-[20px]">
                        {t(product.paragraph)}
                      </p>
                      <div className="w-auto mt-7">
                        <button
                          className="flex items-center justify-center bg-primary border-[1px] border-white text-white
                                     rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg
                                     hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                                     dark:bg-darkColor dark:hover:bg-transparent
                                          
                                     xs:gap-2 xs:px-3 xs:py-1
                                     md:gap-3 md:px-4 md:py-2">
                          <p className="xs:text-[10px]
                                        md:text-[15px]
                                        2xl:text-[20px]">{t(product.addToCart)}</p>
                          <i>
                            <IoIosArrowForward className="xs:text-[10px]
                                                          md:text-[15px]
                                                          2xl:text-[20px]"/>
                          </i>
                        </button>
                      </div>
                    </div>
                    <div className="flex w-[100%] h-[100%] bg-carousel_red">
                    <img
                      className="w-[100%] h-[100%] object-cover
                      
                                 xs:hidden
                                 md:flex"
                      src={`http://localhost:4004/images/${product.image}`}
                      alt={product.title}/>
                      </div>
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
