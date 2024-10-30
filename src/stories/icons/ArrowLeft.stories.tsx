import type { Meta, StoryObj } from "@storybook/react";

import { ArrowLeftIcon } from "@/components/icons/ArrowLeft";

const meta = {
  component: ArrowLeftIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArrowLeftIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
