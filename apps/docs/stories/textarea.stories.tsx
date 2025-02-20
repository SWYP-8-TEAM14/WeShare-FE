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
    placeholder: "텍스트를 입력해 주세요.",
    label: "라벨",
    description: "텍스트를 입력해 주세요.",
    maxLength: 100,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
};

export const ErrorMessage: Story = {
  render: (args) => <Textarea {...args} errorMessage="에러 메시지입니다." />,
};
