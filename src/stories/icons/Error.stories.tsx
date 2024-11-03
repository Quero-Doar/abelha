import { ErrorIcon } from "@/components/icons/Error";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ErrorIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
