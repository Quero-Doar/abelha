import { SearchNgoIcon } from "@/components/icons/SearchNgo";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: SearchNgoIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchNgoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {},
};
