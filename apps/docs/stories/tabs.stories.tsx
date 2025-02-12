import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Secondary: Story = {
  render: (args) => (
    <Tabs defaultValue="1" {...args}>
      <TabsList>
        <TabsTrigger value="1">전체</TabsTrigger>
        <TabsTrigger value="2">예약/픽업</TabsTrigger>
        <TabsTrigger value="3">대여 중</TabsTrigger>
        <TabsTrigger value="4">반납</TabsTrigger>
      </TabsList>
      <TabsContent value="1">전체 컨텐츠</TabsContent>
      <TabsContent value="2">예약/픽업 컨텐츠</TabsContent>
      <TabsContent value="3">대여 중 컨텐츠</TabsContent>
      <TabsContent value="4">반납 컨텐츠</TabsContent>
    </Tabs>
  ),
};
