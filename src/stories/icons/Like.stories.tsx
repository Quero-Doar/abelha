import type { Meta, StoryObj } from "@storybook/react";
import { LikeIcon } from "@/components/icons/Like";

const meta = {
  component: LikeIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LikeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = {
    args: {
        isFilled: true
    }
};
