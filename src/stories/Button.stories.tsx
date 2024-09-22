import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    label: "Encontrar ONG",
    size: "sm",
  },
};

export const Default: Story = {
  args: {
    label: "Encontrar ONG",
  },
};

export const Large: Story = {
  args: {
    label: "Encontrar ONG",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    label: "Encontrar ONG",
    variant: "outline",
  },
};

export const Rounded: Story = {
  args: {
    label: "Encontrar ONG",
    rounded: "full",
  },
};
