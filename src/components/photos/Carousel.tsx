import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMGS } from "@/data/Carousel";

const Gallery1 = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {IMGS.map((color, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className={`${color.color}`}>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold"></span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery1;
