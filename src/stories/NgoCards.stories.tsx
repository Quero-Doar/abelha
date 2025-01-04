import type { Meta, StoryObj } from "@storybook/react";

import { NgoCards } from "@/components/NgoCards";

const meta = {
  component: NgoCards,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ngos: { description: "List of NGOs to be displayed" },
  },
} satisfies Meta<typeof NgoCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ngos: new Array(6).fill({ length: 6 }).map((_, index) => ({
      id: "2679e89d-2e77-4095-9e6a-fe657ab35d2b",
      name: `Ngo ${index + 1}`,
      categories: [
        {
          id: "9614fc63-38be-479d-8098-160b54f3ecd9",
          name: `Category ${index + 1}`,
        },
        {
          id: "ec5d4621-f890-4eb4-a203-6d381b6cc811",
          name: `Category ${index + 2}`,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      email: "anyemail@someemail.com",
      role: "ngo",
      description: "This is a description",
    })),
  },
};
