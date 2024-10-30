import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";
import { toast } from "@/hooks/use-toast";
import {Toaster} from "@/components/ui/toaster";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: (Story) => (
    <div>
      <Story />
      <Toaster />
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Clique aqui",
    size: "sm",
  },
  render: () => (
    <Button
      label="Clique aqui"
      size="sm"
      onClick={() =>
        toast({
          variant: "destructive",
          title: "Internal Server Error",
          description: "Error!",
        })
      }
    />
  ),
};
