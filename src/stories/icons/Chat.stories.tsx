import { ChatIcon } from "@/components/icons/Chat";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ChatIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {},
};
