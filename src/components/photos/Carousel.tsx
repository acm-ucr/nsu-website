"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { IMGS } from "@/data/Carousel";

const Gallery1 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!api) return;


    api.on("select", () => {
      setActive(api.selectedScrollSnap());
    });


  }, [api]);
  

  // useEffect(()=> {
  //   if(!api) return;

  //   const handleSelect = () => {
  //   const lastSlide = api.scrollSnapList().length - 1;
  //   const isLoopingToStart = api.selectedScrollSnap() === 0 && api.previousScrollSnap() === lastSlide;
  //   const isLoopingToEnd = api.selectedScrollSnap() === lastSlide && api.previousScrollSnap() === 0;

  //   // if (isLoopingToStart || isGoingForward) {
  //   //   setTimeout(() => api.reInit);
  //   // } else if (isLoopingToEnd || isGoingBackwards) {
  //   //   setTimeout(() => api.reInit);
  //   // }
  //   if (isLoopingToStart || isLoopingToEnd) {
  //     setTimeout(() => api.reInit());
  //   }
  //   };

  //   api.on("select", handleSelect);
    
  // }, [api, active]);




  return (
    <div className="flex w-full items-center justify-center">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
          containScroll: "keepSnaps",
          duration: 20, // make scroll physics a bit snappier
          skipSnaps: true, // never skip a snap even on a hard swipe
        }}
      >
        <CarouselContent>
          {IMGS.map((color, index) => {
            const isActive = index === active;
            return (
              <CarouselItem
                key={index}
                className={`basis-1/3 pl-4 transition-transform duration-300 ${isActive ? "z-10 opacity-100 scale-120" : "opacity-60"} `}
    
              >
                <Card className={`${color.color}`} >
                  <CardContent className="flex aspect-square items-center justify-center p-6" >
                    <span className="text-4xl font-semibold"></span>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
})}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery1;
