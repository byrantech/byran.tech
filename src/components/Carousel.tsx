import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface InteractiveCarouselProps {
    imagePaths: string[];
}

const InteractiveCarousel: React.FC<InteractiveCarouselProps> = ({ imagePaths }) => {
    return (
        <Carousel className="w-full max-w-[600px] select-none">
            <CarouselContent>
            {imagePaths.map((path, index) => (
                <CarouselItem key={index}>
                <div className="p-1">
                    <Card className="border-none">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                        <img
                            src={path}
                            alt={`Project image ${index + 1}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            className="object-cover w-full h-full -z-10 rounded-lg"
                        />
                    </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default InteractiveCarousel;
