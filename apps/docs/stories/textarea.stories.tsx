import { Description, ErrorMessage, InputLength } from "@repo/ui/form";
import { Label } from "@repo/ui/label";
import { Textarea } from "@repo/ui/textarea";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
  parameters: {
    layout: "fullscreen",
    docs: {
      subtitle: "텍스트를 입력할 수 있는 다중 행 입력 필드입니다.",
      description: {
        component:
          "두 줄 이상의 텍스트 입력에 사용하며, 한 줄 입력에는 Input을 사용합니다.",
      },
    },
  },
  args: {
    placeholder: "텍스트를 입력해 주세요",
    resize: false,
  },
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
};

export const WithLabel: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <Label htmlFor="textarea">라벨</Label>
        <InputLength maxLength={100} currentLength={0} />
      </div>
      <Textarea {...args} id="textarea" />
      <Description>설명입니다</Description>
    </div>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <Label htmlFor="input">라벨</Label>
        <InputLength maxLength={50} currentLength={4} />
      </div>
      <Textarea id="input" value="abcd" {...args} />
      <ErrorMessage>최소 5자 이상 입력해 주세요.</ErrorMessage>
    </div>
  ),
};
