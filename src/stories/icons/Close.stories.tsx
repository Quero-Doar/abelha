import type { Meta, StoryObj } from "@storybook/react";

import { CloseIcon } from "@/components/icons/Close";

const meta = {
  component: CloseIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
