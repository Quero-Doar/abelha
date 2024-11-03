import { z } from "zod";
import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { FormDataFieldsProps, FormItems } from "@/lib/props";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const NameInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input id="name" placeholder="Rebeca Gusmão" {...props} />
);

const EmailInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input type="email" placeholder="rebecagusmao@gmail.com" {...props} />
);

const PasswordInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input type="password" placeholder="Senha" {...props} />
);

const formItems: Record<string, FormItems> = {
  name: {
    ItemComponent: NameInput,
    label: "Nome",
  },

  email: {
    ItemComponent: EmailInput,
    label: "Email",
  },

  password: {
    ItemComponent: PasswordInput,
    label: "Senha",
  },
};

const Schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
type Schema = z.infer<typeof Schema>;

const meta = {
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLabel: "Criar Conta",
    items: formItems,
    form: "" as unknown as any,
  },
  render: () => {
    const form = useForm<Schema>({
      resolver: zodResolver(Schema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

    return (
      <Form
        form={form}
        items={formItems}
        buttonLabel="Criar Conta"
        onSubmit={() => alert("Conta criada!")}
      />
    );
  },
};
