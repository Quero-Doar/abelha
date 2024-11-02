import { SpinnerIcon } from "@/components/icons/Spinner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: SpinnerIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpinnerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {},
};
