import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export function Carousel_05() {
  const [api, setApi] = React.useState<CarouselApi>();
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
        api.scrollTo(0); // Scroll to the first item
      } else {
        api.scrollNext();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [api, count]);

  return (
    <div className="mx-auto w-[40%]">
      <Carousel
        setApi={setApi}
        className="w-full"
        onMouseDown={() => setIsGrabbing(true)}
        onMouseUp={() => setIsGrabbing(false)}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none bg-slate-100">
                <CardContent
                  className={`flex aspect-square items-center justify-center p-6 h-[700px] ${
                    isGrabbing ? "cursor-grabbing" : "cursor-grab"
                  }`}
                >
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
