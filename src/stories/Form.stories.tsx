"use client";

import { z } from "zod";
import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { FormDataFieldsProps, FormItems } from "@/lib/props";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormConfig } from "@/lib/types";

const NameInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input id="name" placeholder="Rebeca Gusmão" {...props} />
);

const EmailInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input type="email" placeholder="rebecagusmao@gmail.com" {...props} />
);

const PasswordInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input type="password" placeholder="Senha" {...props} />
);

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
    config: {} as any,
    onSubmit: () => {},
    buttonLabel: "Criar Conta",
  },
  render: () => {
    const config: FormConfig<typeof Schema> = {
      form: useForm<Schema>({
        resolver: zodResolver(Schema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      }),
      items: {
        name: {
          Component: NameInput,
          label: "Nome",
        },

        email: {
          Component: EmailInput,
          label: "Email",
        },

        password: {
          Component: PasswordInput,
          label: "Senha",
        },
      },
    };

    return (
      <Form
        config={config}
        onSubmit={() => alert("Conta criada!")}
        buttonLabel="Criar Conta"
      />
    );
  },
};
