import { InstagramIcon } from "@/components/icons/Instagram";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: InstagramIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InstagramIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
