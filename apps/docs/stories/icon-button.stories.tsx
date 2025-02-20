import { LikeActiveIcon } from "@repo/icons";
import { IconButton } from "@repo/ui/icon-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: <LikeActiveIcon />,
    disabled: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const allVariants = [
  "transparent",
  "primary",
  "secondary",
  "tertiary",
] as const;
const allSizes = ["large", "medium", "small"] as const;

export const Default: Story = {
  render: (args) => <IconButton {...args} />,
};

export const All: Story = {
  render: () => (
    <div>
      {allVariants.map((variant) => (
        <div key={variant} className="">
          <h2 className="text-heading-1 font-bold mt-4">{variant}</h2>
          <div className="flex gap-4 mt-2">
            {allSizes.map((size) => (
              <div key={size} className="">
                <h3 className="text-heading-3 font-bold">{size}</h3>
                <IconButton variant={variant} size={size}>
                  <LikeActiveIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    disabled: true,
  },
};
