import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { NgoCard } from "@/components/NgoCard";

const meta = {
  component: NgoCard,
  parameters: {
    layout: "centered",
  },
  render: ({ ...props }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 10 }, (_, key) => (
        <NgoCard key={key} {...props} />
      ))}
    </div>
  ),
  tags: ["autodocs"],
  argTypes: {
    categories: {
      description: "List of categories that belongs to the given NGO",
    },
    isLiked: {
      description: "Represents if the NGO is liked by the user",
    },
    ngoName: {
      description: "Name to be shown inside the card",
    },
    picture: {
      description: "ImageUrl to be shown as background card",
    },
  },
} satisfies Meta<typeof NgoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ngoName: "Unio",
    categories: Array.from({ length: 10 }, () => "Idosos"),
    isLiked: false,
  },
};

export const Liked: Story = {
  args: {
    ngoName: "Unio",
    categories: ["Animais", "Idosos", "Crianças"],
    isLiked: true,
  },
};

export const WithPicture: Story = {
  args: {
    ngoName: "Unio",
    categories: ["Animais", "Idosos", "Crianças"],
    isLiked: false,
    picture: "https://avatars.githubusercontent.com/u/29904893?v=4",
  },
};

export const WithPictureLiked: Story = {
  args: {
    ngoName: "Unio",
    categories: ["Animais", "Idosos", "Crianças"],
    isLiked: true,
    picture: "https://avatars.githubusercontent.com/u/29904893?v=4",
  },
};
