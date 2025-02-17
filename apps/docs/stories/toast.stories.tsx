import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Toaster } from "@repo/ui/toaster";
import { useToast } from "@repo/ui/use-toast";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta = {
  title: "Example/Toast",
  component: Toaster,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultExample = () => {
  const [message, setMessage] = useState("Title");
  const { toast } = useToast();

  return (
    <div className="flex flex-col space-y-4 p-4">
      <Label htmlFor="message">Message</Label>
      <Input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message"
      />
      <Button
        onClick={() => {
          toast({
            title: message,
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DefaultExample />,
};
