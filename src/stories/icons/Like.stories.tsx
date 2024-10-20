import type { Meta, StoryObj } from "@storybook/react";
import { LikeIcon } from "@/components/icons/Like";

const meta = {
  component: LikeIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isFilled: {
      description: "Represent when the component background color is filled",
    },
  },
} satisfies Meta<typeof LikeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = {
  args: {
    isFilled: true,
  },
};
