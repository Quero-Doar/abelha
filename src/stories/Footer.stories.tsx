import { Footer } from "@/components/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
