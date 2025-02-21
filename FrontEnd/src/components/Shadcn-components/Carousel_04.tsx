import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { carousel_04 } from "../../components/ProductSection/ProductSection";
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

export function Carousel_04() {
  const [api, setApi] = React.useState<CarouselApi>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isGrabbing, setIsGrabbing] = React.useState(false);

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
    }, 10000);

    return () => clearInterval(interval);
  }, [api, count]);

  return (
    <div className="mx-auto w-[100%]">
      <Carousel
        setApi={setApi}
        className="w-full flex flex-col"
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
      >
        <CarouselContent>
          {carousel_04.map((product, index) => (
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
                    <div
                      className="flex flex-col absolute h-auto justify-center
                                                    
                                xs:w-[100%] xs:pl-7 xs:bottom-0 xs:mb-[30px]
                                sm:w-[80%] sm:bottom-0 sm:mb-[30px]
                                md:w-[80%] md:bottom-0 md:mb-[70px] md:gap-5
                                lg:w-[90%] lg:mb-[30px] lg:gap-2
                                xl:w-[90%] xl:pl-12
                                2xl:bottom-0 2xl:mb-[30px] 2xl:gap-0"
>
                      {/* ============= Exclusive offer ============= */}
                      <div
                        className="gap-3
                                                      
                                  xs:flex">
                        <p
                          className="flex text-white gap-3 items-center
                                                                      
                                    xs:text-[10px]
                                    sm:text-[13px]
                                    md:text-[20px]
                                    lg:text-[15px]
                                    2xl:text-[16px]"
                        >
                          Exclusive Offer
                        </p>
                        <div
                          className="w-fit rounded-full bg-primary border-[1px] cursor-pointer
                                    border-white text-white items-center justify-center
                                      hover:bg-transparent hover:scale-110 ease-in-out duration-300">
                          <p
                            className="
                                                                              
                                      xs:text-[10px] xs:px-4 xs:py-[1px]
                                      md:text-[20px] md:px-6 md:py-[3px]
                                      lg:text-[15px]
                                      2xl:text-[16px]">
                            -20% OFF
                          </p>
                        </div>
                      </div>
                      <h1
                        className="text-white font-camptonBold leading-tight my-3
                                                      
                                  xs:text-[22px] xs:w-[80%]
                                  sm:text-[30px]
                                  md:text-[65px]
                                  lg:text-[35px]
                                  2xl:text-[45px]"
                      >
                        {product.title}
                      </h1>
                      <p
                        className="text-white font-camptonBook
                                                      
                                  xs:text-[8px] xs:w-[80%]
                                  sm:text-[13px] sm:w-[90%]
                                  md:w-[100%] md:text-[20px]
                                  lg:text-[15px] lg:w-[90%]
                                  2xl:text-[16px] 2xl:w-[100%]">
                        {product.description}
                      </p>
                      <div className="w-auto mt-7">
                        <button
                          className="flex items-center justify-center bg-primary border-[1px] border-white text-white rounded-full
                                    hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                                                                          
                                      xs:gap-2 xs:px-3 xs:py-1
                                      md:gap-3 md:px-4 md:py-2">
                          <p
                            className="
                                      xs:text-[10px]
                                      md:text-[20px]
                                      lg:text-[15px]
                                      2xl:text-[20px]">
                            SHOW NOW
                          </p>
                          <i>
                            <IoIosArrowForward
                              className="
                                        xs:text-[10px]
                                        md:text-[15px]
                                        lg:text-[20px]
                                        2xl:text-[20px]"
                            />
                          </i>
                        </button>
                      </div>
                    </div>

                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={product.image}
                      alt={product.title}
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
