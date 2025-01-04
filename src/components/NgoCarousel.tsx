"use client";

import { useEffect, useRef, useState } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import { NgoResponse } from "@/lib/schemas/ngo";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

import { NgoCards } from "./NgoCards";

type Props = {
  ngos: NgoResponse[];
};

export const divideNgos = (ngos: NgoResponse[], chunkSize: number, limit: number) => {
  const arr = ngos.slice(0, limit);

  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
    arr.slice(index * chunkSize, index * chunkSize + chunkSize)
  );
};

export const NgoCarousel: React.FC<Props> = ({ ngos }) => {
  const dividedNgos = divideNgos(ngos, 6, 18);
  const dividedNgosMobile = divideNgos(ngos, 4, 12);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [apiMobile, setApiMobile] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [currentMobile, setCurrentMobile] = useState(1);

  useEffect(() => {
    if (!api || !apiMobile) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    setCurrentMobile(apiMobile.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    apiMobile.on("select", () => {
      setCurrentMobile(apiMobile.selectedScrollSnap() + 1);
    });
  }, [api, apiMobile]);

  return (
    <div>
      <div className="hidden md:block">
        <ResponsiveCarousel
          dividedNgos={dividedNgos}
          plugin={plugin}
          setApi={setApi}
          current={current}
        />
      </div>

      <div className="md:hidden">
        <ResponsiveCarousel
          dividedNgos={dividedNgosMobile}
          plugin={plugin}
          setApi={setApiMobile}
          current={currentMobile}
        />
      </div>
    </div>
  );
};

type ResponsiveCarouselProps = {
  dividedNgos: NgoResponse[][];
  plugin: React.MutableRefObject<AutoplayType>;
  setApi: (api: CarouselApi) => void;
  current: number;
};

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({
  dividedNgos,
  plugin,
  setApi,
  current,
}) => (
  <div className="space-y-6 md:space-y-4">
    <Carousel
      plugins={[plugin.current]}
      setApi={setApi}
      className="w-full md:px-52"
    >
      <CarouselContent>
        {dividedNgos.map((ngos, index) => (
          <CarouselItem key={index}>
            <NgoCards ngos={ngos} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

    <PageIndicator current={current} size={dividedNgos.length} />
  </div>
);

const PageIndicator: React.FC<{ current: number; size: number }> = ({
  current,
  size,
}) => (
  <div className="flex space-x-1 place-self-center">
    {Array.from({ length: size }, (_, index) => (
      <div
        key={index}
        className={cn("p-1 border border-pink-darklight rounded-full", {
          "bg-pink-darklight": index + 1 == current,
        })}
      />
    ))}
  </div>
);
