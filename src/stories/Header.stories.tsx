import { Header } from "@/components/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
