import type { Meta, StoryObj } from "@storybook/react";

import { EyeNone } from "@/components/icons/EyeNone";

const meta = {
  component: EyeNone,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EyeNone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
