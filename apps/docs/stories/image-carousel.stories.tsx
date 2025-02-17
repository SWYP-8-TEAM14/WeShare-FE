import { ImageCarousel } from "@repo/ui/image-carousel";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ImageCarousel",
  component: ImageCarousel,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    slides: [
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
    ],
    options: {
      loop: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-[600px] border border-primary-300">
      <ImageCarousel {...args} />
    </div>
  ),
};
