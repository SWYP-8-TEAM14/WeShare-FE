import {
  ImageCarousel,
  ImageCarouselContent,
  ImageCarouselDots,
  ImageCarouselSlide,
} from "@repo/ui/image-carousel";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ImageCarousel",
  component: ImageCarousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-[400px] border border-primary-300">
      <ImageCarousel>
        <ImageCarouselContent>
          {[
            {
              src: "https://placehold.co/600x400/orange/white",
              alt: "Placeholder 1",
            },
            {
              src: "https://placehold.co/600x400/skyblue/white",
              alt: "Placeholder 2",
            },
            {
              src: "https://placehold.co/600x400/green/white",
              alt: "Placeholder 3",
            },
          ].map((image, index) => (
            <ImageCarouselSlide key={index}>
              <img src={image.src} alt={image.alt} width={400} height={400} />
            </ImageCarouselSlide>
          ))}
        </ImageCarouselContent>
        <ImageCarouselDots className="absolute bottom-4 left-1/2 transform -translate-x-1/2" />
      </ImageCarousel>
    </div>
  ),
};
