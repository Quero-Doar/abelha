import { KeyboardIcon } from "@/components/icons/Keyboard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: KeyboardIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof KeyboardIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {},
};
