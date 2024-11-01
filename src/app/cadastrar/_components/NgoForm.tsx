"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormItems } from "@/lib/props";
import { Form } from "@/components/Form";

import { CreateNgoPayload } from "@/lib/schemas/ngo";
import { ngoFormItems } from "./form-config/ngo";

type Props = {
  categories: Record<string, string>;
};

const getFormItems = (
  formItems: Record<string, FormItems>,
  categories: Record<string, string>
) => ({
  ...formItems,
  category: {
    ...formItems.category,
    data: categories,
  },
});

export const NgoForm: React.FC<Props> = ({ categories }) => {
  const form = useForm<CreateNgoPayload>({
    resolver: zodResolver(CreateNgoPayload),
    defaultValues: {
      name: "",
      category: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(form.getValues());
    console.log("data");
    console.log(data);
  };

  return (
    <Form
      items={getFormItems(ngoFormItems, categories)}
      buttonLabel="Criar Conta"
      form={form}
      onSubmit={onSubmit}
    />
  );
};
