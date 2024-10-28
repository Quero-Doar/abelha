import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerMenuIcon } from "@/components/icons/HamburgerMenu";

const meta = {
  component: HamburgerMenuIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HamburgerMenuIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
