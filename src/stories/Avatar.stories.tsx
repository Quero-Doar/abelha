import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/Avatar";

const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fallback: {
        description: "Name to be shown in case image source is not rendered",
    },
    image: {
        description: "Image source url to be rendered"
    },
    size: {
        description: "Avatar radius size",
        control: { type: "select" },
        options: ["sm", "md", "lg"],
        table: {
            type: { summary: "string" }
        }
    }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: "LD",
    image: "",
    size: "sm"
  },
};
