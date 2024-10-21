import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Label to be shown inside the button",
    },
    size: {
      description: "Button size variations",
    },
    variant: {
      description:
        "Button background variant. If is not set, button background color is filled",
    },
    rounded: {
      description:
        "Indicate if border should be rounded full. When not set returns border rounded large",
    },
  },
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
