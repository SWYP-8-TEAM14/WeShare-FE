"use client";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import * as React from "react";
import { cn } from "./utils";

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  options?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

export type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
} & CarouselProps;

export const CarouselContext = React.createContext<CarouselContextProps | null>(
  null
);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <ImageCarousel />");
  }

  return context;
}

export const ImageCarousel = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithRef<"div"> & CarouselProps
>(({ setApi, className, children, ...props }, ref) => {
  const [emblaRef, api] = useEmblaCarousel(props.options);

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);
  return (
    <CarouselContext.Provider
      value={{
        carouselRef: emblaRef,
        api,
        ...props,
      }}
    >
      <div
        className={cn("ui:relative", className)}
        ref={ref}
        role="region"
        aria-roledescription="carousel"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
ImageCarousel.displayName = "ImageCarousel";

export const ImageCarouselContent = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithRef<"div">
>(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="ui:overflow-hidden ui:w-full">
      <div className={cn("ui:flex", className)} {...props}></div>
    </div>
  );
});

export const ImageCarouselSlide = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("ui:grow-0 ui:shrink-0 ui:basis-full", className)}
      ref={ref}
      role="group"
      aria-roledescription="slide"
      {...props}
    />
  );
});

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = React.ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export const ImageCarouselDots = React.forwardRef<
  React.ComponentRef<"div">,
  React.ComponentPropsWithRef<"div">
>(({ className, ...props }, ref) => {
  const { api } = useCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  return (
    <div
      className={cn("ui:flex ui:justify-center ui:space-x-1.5", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <DotButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={cn(
            "ui:w-[7px] ui:h-[7px] ui:rounded-full",
            index === selectedIndex ? "ui:bg-gray-800" : "ui:bg-gray-400"
          )}
        />
      ))}
    </div>
  );
});
