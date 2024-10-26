import { Input } from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    type: "email",
    label: "Email",
    placeholder: "exemplo@exemplo.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    label: "Senha",
    placeholder: "Senha",
  },
};

export const FormSimulation = {
  render: () => (
    <div className="space-y-4">
      <Input label="Email" type="email" />
      <Input label="Senha" type="password" />
    </div>
  ),
};
