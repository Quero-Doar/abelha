import { LinkedinIcon } from "@/components/icons/Linkedin";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: LinkedinIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LinkedinIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
