import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@repo/ui/segmented-control";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <SegmentedControl defaultValue="1" {...args}>
        <SegmentedControlList>
          <SegmentedControlTrigger value="1">대여</SegmentedControlTrigger>
          <SegmentedControlTrigger value="2">반납</SegmentedControlTrigger>
        </SegmentedControlList>
        <SegmentedControlContent value="1">
          <div>대여</div>
        </SegmentedControlContent>
        <SegmentedControlContent value="2">
          <div>반납</div>
        </SegmentedControlContent>
      </SegmentedControl>
    </div>
  ),
};
// 최대 아이템 수는 4개이다
export const MaxItems: Story = {
  render: (args) => (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <SegmentedControl defaultValue="1" {...args}>
        <SegmentedControlList>
          <SegmentedControlTrigger value="1">Label</SegmentedControlTrigger>
          <SegmentedControlTrigger value="2">Label</SegmentedControlTrigger>
          <SegmentedControlTrigger value="3">Label</SegmentedControlTrigger>
          <SegmentedControlTrigger value="4">Label</SegmentedControlTrigger>
        </SegmentedControlList>
      </SegmentedControl>
    </div>
  ),
};
