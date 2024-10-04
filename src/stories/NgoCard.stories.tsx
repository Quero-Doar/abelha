import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { NgoCard } from "@/components/NgoCard";

const meta = {
  component: NgoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NgoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    ngoName: "Unio",
    category: "Animais",
    isLiked: false
  },
};
