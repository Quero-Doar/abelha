import { FacebookIcon } from "@/components/icons/Facebook";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: FacebookIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FacebookIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
