import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { carousel_05 } from "../Home/ProductSection/ProductSection";
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

export function Carousel_05() {
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
    }, 7000);

    return () => clearInterval(interval);
  }, [api, count]);

  return (
    <div
      className="mx-auto
    
                    xs:w-[100%]
                    lg:w-[50%]">
      <Carousel
        setApi={setApi}
        className="w-full flex flex-col"
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}>
        <CarouselContent>
          {carousel_05.map((product, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent
                  className={`flex aspect-square items-center justify-center m-0 p-0

                              xs:h-auto
                              lg:h-[600px]
                              xl:h-[700px]

                    rounded-xl overflow-hidden bg-slate-300 ${
                      isGrabbing ? "cursor-grabbing" : "cursor-grab"
                    }`}>
                  <div className="flex items-center w-[100%] h-[100%]">
                    <div className="flex flex-col absolute w-[100%] h-auto bottom-0 justify-center
                    
                                    
                                    xs:p-5
                                    sm:p-7
                                    md:p-12 md:mb-5
                                    lg:p-6 lg:mb-0
                                    xl:mb-5">
                      <p
                        className="flex text-white gap-3 items-center
                      
                                    xs:text-[12px]
                                    md:text-[20px]
                                    lg:text-[12px]
                                    xl:text-[15px]">
                        Exclusive Offer
                        <span
                          className="rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg bg-primary border-[1px] cursor-pointer border-white text-white px-6 py-[3px] items-center justify-center
                                      hover:bg-transparent hover:scale-110 ease-in-out duration-300
                                            
                                    xs:text-[10px]
                                    md:text-[20px]
                                    lg:text-[10px]
                                    xl:text-[15px]">
                          -20% OFF
                        </span>
                      </p>
                      <h1
                        className="text-white font-camptonBold leading-tight my-3

                                      xs:text-[20px]
                                      sm:text-[35px]
                                      md:text-[60px]
                                      lg:text-[29px]
                                      xl:text-[40px]">
                        {product.title}
                      </h1>
                      <p
                        className="text-white font-camptonLigh
                      
                                     xs:text-[10px]
                                     md:text-[25px]
                                     lg:text-[12px] lg:w-[95%]">
                        {product.description}
                      </p>
                      <div className="w-auto mt-7">
                        <button
                          className=" flex items-center justify-center gap-3 border-[1px] bg-primary border-white text-white px-4 py-2 rounded-br-3xl rounded-tr-3xl rounded-tl-lg rounded-bl-lg
                                      hover:scale-110 hover:border-[1px] hover:bg-transparent ease-in-out duration-300
                                      
                                      xs:gap-2 xs:px-3 xs:py-1
                                      md:gap-3 md:px-4 md:py-2">
                          <p className="
                          
                                      xs:text-[10px]
                                      md:text-[25px]
                                      lg:text-[12px]
                                      2xl:text-[20px]">
                            SHOW NOW</p>
                          <i>
                            <IoIosArrowForward />
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
