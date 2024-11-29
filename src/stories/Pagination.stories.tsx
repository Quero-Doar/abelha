import {Pagination} from "@/components/Pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "/search?page=",
    pagesLength: 10,
    currentPage: 6,
  }
};
