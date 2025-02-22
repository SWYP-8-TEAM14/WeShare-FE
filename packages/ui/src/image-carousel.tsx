"use client";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";
import { cn } from "./utils";

type ImageCarouselProps = {
  slides: Array<{
    src: string;
    alt?: string;
  }>;
  showDots?: boolean;
  options?: EmblaOptionsType;
};

export const ImageCarousel = ({
  slides,
  options,
  showDots = true,
}: ImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="ui:relative">
      <div ref={emblaRef} className="ui:overflow-hidden ui:w-full">
        <div className="ui:flex">
          {slides.map((slide, index) => (
            <div
              className="ui:grow-0 ui:shrink-0 ui:basis-full  ui:aspect-square"
              key={index}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="ui:w-full ui:h-full ui:object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {showDots && (
        <div className="ui:absolute ui:flex ui:justify-center ui:bottom-4 ui:left-1/2 ui:transform ui:-translate-x-1/2 ui:space-x-1.5">
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
      )}
    </section>
  );
};

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

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
