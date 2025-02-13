import {
  BottomSheet,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHandle,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@repo/ui/bottom-sheet";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Example/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <BottomSheet {...args}>
      <BottomSheetTrigger>Open</BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>제목</BottomSheetTitle>
          <BottomSheetDescription>설명입니다.</BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetFooter>
          <button>제출하기</button>
          <BottomSheetClose>
            <button>닫기</button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  ),
};

export const WithHandle: Story = {
  render: (args) => (
    <BottomSheet {...args}>
      <BottomSheetTrigger>Open</BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHandle />
        <BottomSheetHeader>
          <BottomSheetTitle>제목</BottomSheetTitle>
          <BottomSheetDescription>설명입니다.</BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetFooter>
          <button>제출하기</button>
          <BottomSheetClose>
            <button>닫기</button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  ),
};

const NonDismissibleRender = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet dismissible={false} open={open} onOpenChange={setOpen}>
        <BottomSheetContent>
          <BottomSheetHeader>
            <button onClick={() => setOpen(false)}>여기를 눌러 닫으세요</button>
            <BottomSheetTitle>제목</BottomSheetTitle>
            <BottomSheetDescription>설명입니다.</BottomSheetDescription>
          </BottomSheetHeader>
          <BottomSheetFooter>
            <button>제출하기</button>
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>
    </>
  );
};

export const NonDismissible: Story = {
  render: (args) => <NonDismissibleRender />,
};

const ScrollableContentRender = () => {
  const [open, setOpen] = useState(false);
  return (
    <BottomSheet open={open} onOpenChange={setOpen} dismissible={false}>
      <BottomSheetTrigger>Open</BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>제목</BottomSheetTitle>
          <BottomSheetDescription>
            스크롤이 가능한 컨텐츠입니다.
          </BottomSheetDescription>
        </BottomSheetHeader>
        <div style={{ height: "400px", overflowY: "auto" }}>
          {[...Array(10)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <BottomSheetFooter>
          <button>제출하기</button>
          <BottomSheetClose>
            <button onClick={() => setOpen(false)}>닫기</button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
};

export const ScrollableContent: Story = {
  render: () => <ScrollableContentRender />,
};
