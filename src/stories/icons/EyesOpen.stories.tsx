import type { Meta, StoryObj } from "@storybook/react";

import { EyeOpen } from "@/components/icons/EyeOpen";

const meta = {
  component: EyeOpen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EyeOpen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
