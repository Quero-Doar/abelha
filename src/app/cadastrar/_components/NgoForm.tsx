"use client";

import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/Form";
import { FormConfig } from "@/lib/types";
import { toast } from "@/hooks/use-toast";
import { newNgo } from "@/server/actions/ngo/create";
import { CreateNgoPayload } from "@/lib/schemas/ngo";
import { NgoNameInput } from "./form-items/ngo/NgoNameInput";
import { NgoEmailInput } from "./form-items/ngo/NgoEmailInput";
import { NgoPasswordInput } from "./form-items/ngo/NgoPasswordInput";
import { NgoCategorySelect } from "./form-items/ngo/NgoCategorySelect";
import { ServerResponse } from "@/server/responses";
import { useRouter } from "next/router";

type Props = {
  response: ServerResponse<Record<string, string>>;
};

export const NgoForm: React.FC<Props> = ({ response }) => {
  const router = useRouter();
  const config: FormConfig<typeof CreateNgoPayload> = {
    form: useForm<CreateNgoPayload>({
      resolver: zodResolver(CreateNgoPayload),
      defaultValues: {
        name: "",
        category: "",
        email: "",
        password: "",
      },
    }),
    items: {
      category: {
        Component: NgoCategorySelect,
        label: "Categorias",
        input: { response },
      },
      email: {
        Component: NgoEmailInput,
        label: "E-mail",
      },
      name: {
        Component: NgoNameInput,
        label: "Nome",
      },
      password: {
        Component: NgoPasswordInput,
        label: "Senha",
      },
    },
  };

  const handleSubmit = async (
    data: CreateNgoPayload,
    form: UseFormReturn<CreateNgoPayload>
  ) => {
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
    <Form config={config} buttonLabel="Criar Conta" onSubmit={handleSubmit} />
  );
};
