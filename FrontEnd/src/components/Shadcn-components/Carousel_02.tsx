import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { carousel_02 } from "../../components/ProductSection/ProductSection";
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

// React Icons
// import { IoIosArrowForward } from "react-icons/io";

export function Carousel_02() {
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
          {carousel_02.map((product, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none">
                <CardContent
                  className={`flex aspect-square items-center justify-center m-0 p-0
                    rounded-xl overflow-hidden bg-slate-300
                    
                    xs:h-auto
                    md:h-[400px]
                    2xl:h-[600px]

                    ${isGrabbing ? "cursor-grabbing" : "cursor-grab"
                    }`}
                >
                  <div className="flex items-center justify-center w-[100%] h-[100%]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      src={product.image}
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
