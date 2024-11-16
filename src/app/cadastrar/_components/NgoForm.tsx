"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormItems } from "@/lib/props";
import { Form } from "@/components/Form";
import { CreateNgoPayload } from "@/lib/schemas/ngo";

import { toast } from "@/hooks/use-toast";
import { ngoFormItems } from "./form-config/ngo";
import { newNgo } from "@/server/actions/ngo/create";

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
  const router = useRouter();
  const form = useForm<CreateNgoPayload>({
    resolver: zodResolver(CreateNgoPayload),
    defaultValues: {
      name: "",
      category: "",
      email: "",
      password: "",
    },
  });

  const isCategoriesEmpty = Object.keys(categories).length;
  if (!isCategoriesEmpty) {
    toast({
      title: "Erro ao carregar categorias",
      description: "Tente novamente mais tarde",
      variant: "destructive",
    });
  }

  const onSubmit = async (data: any) => {
    const response = await newNgo(data);
    if (response.error && response.error.status === 409) {
      form.setError("email", { message: response.error.message });
      return;
    } else if (response.error) {
      return toast({
        variant: "destructive",
        title: "Erro ao criar a ONG",
        description: response.error.message,
      });
    }

    return router.push("/");
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
