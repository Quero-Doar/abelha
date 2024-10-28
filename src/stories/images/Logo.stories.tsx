import {LogoImage} from "@/components/images/Logo";
import type { Meta, StoryObj } from "@storybook/react";


const meta = {
  component: LogoImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LogoImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};
