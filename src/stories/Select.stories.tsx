import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/components/Select";

const items = [
  {
    id: "8925dcca-bcb5-4c43-8dc7-c3addd44ef68",
    name: "Idosos",
  },
  {
    id: "10f33c95-ce47-4de6-ab79-9ecc836fb97c",
    name: "Crianças",
  },
  {
    id: "f5a73ac8-72b4-47e7-92ac-01661123f927",
    name: "Adultos",
  },
  {
    id: "fe4b9df7-c369-4bfc-a793-c4832195e451",
    name: "Animais",
  },
  {
    id: "615db0da-65a2-483d-92fb-24e31fba7138",
    name: "LGBTQIA+",
  },
  {
    id: "3b899fb8-da9d-4f14-983c-8db5d7656ab5",
    name: "Eletrodomesticos",
  },
  {
    id: "c98a1ba3-d34d-4293-ba82-b11d569fa604",
    name: "Teste4",
  },
  {
    id: "359d1bf7-8af4-49e3-8dfc-e75996cf0061",
    name: "Teste3",
  },
  {
    id: "2460eac2-8a37-4b9e-9ab8-2e49d3a6634a",
    name: "Teste2",
  },
  {
    id: "6a44f83e-e335-476d-91e2-d6fea2e63bcc",
    name: "Teste",
  },
];

const item = items.reduce<Record<string, string>>((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});
const meta = {
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description:
        "A map of an object where the key would be the value of the selected item and the value of the object would be the value to be displayed.",
    },
    placeholder: {
      description: "String to be showed when there is no item selected",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: item,
    placeholder: "Selecione uma categoria",
    label: "Categoria",
  },
};

export const WithoutLabel: Story = {
  args: {
    items: item,
    placeholder: "Selecione uma categoria",
  },
};
