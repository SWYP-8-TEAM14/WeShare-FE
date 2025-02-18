import { Button } from "@repo/ui/button";
import {
  FullScreenDialog,
  FullScreenDialogClose,
  FullScreenDialogContent,
  FullScreenDialogTitle,
  FullScreenDialogTrigger,
} from "@repo/ui/full-screen-dialog";
import {
  TopNavigation,
  TopNavigationLeft,
  TopNavigationRight,
  TopNavigationTitle,
} from "@repo/ui/top-navigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/FullScreenDialog",
  component: FullScreenDialog,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FullScreenDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FullScreenDialog>
      <FullScreenDialogTrigger asChild>
        <Button>Open Dialog</Button>
      </FullScreenDialogTrigger>
      <FullScreenDialogContent>
        <TopNavigation>
          <TopNavigationLeft>Left</TopNavigationLeft>
          <TopNavigationTitle>
            <FullScreenDialogTitle>Dialog Title</FullScreenDialogTitle>
          </TopNavigationTitle>
          <TopNavigationRight>
            <FullScreenDialogClose>Close</FullScreenDialogClose>
          </TopNavigationRight>
        </TopNavigation>
      </FullScreenDialogContent>
    </FullScreenDialog>
  ),
};
