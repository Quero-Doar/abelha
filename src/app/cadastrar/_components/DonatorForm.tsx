"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";

import { Form } from "@/components/Form";

import { FormConfig } from "@/lib/types";
import { toast } from "@/hooks/use-toast";
import { newDonator } from "@/server/actions/donator/create";
import { CreateDonatorPayload } from "@/lib/schemas/donator";
import { DonatorNameInput } from "./form-items/donator/DonatorNameInput";
import { DonatorEmailInput } from "./form-items/donator/DonatorEmailInput";
import { DonatorPasswordInput } from "./form-items/donator/DonatorPasswordInput";
import { useRouter } from "next/router";

export const DonatorForm: React.FC = () => {
  const router = useRouter();
  const config: FormConfig<typeof CreateDonatorPayload> = {
    form: useForm<CreateDonatorPayload>({
      resolver: zodResolver(CreateDonatorPayload),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    }),

    items: {
      name: {
        Component: DonatorNameInput,
        label: "Nome",
      },
      email: {
        Component: DonatorEmailInput,
        label: "E-mail",
      },
      password: {
        Component: DonatorPasswordInput,
        label: "Senha",
      },
    },
  };

  const handleSubmit = async (
    data: any,
    form: UseFormReturn<CreateDonatorPayload, any, CreateDonatorPayload>
  ) => {
    const response = await newDonator(data);

    if (response.error && response.error.status === 409) {
      return form.setError("email", { message: response.error.message });
    } else if (response.error) {
      return toast({
        variant: "destructive",
        title: "Erro ao criar o doador",
        description: response.error.message,
      });
    }

    return router.push("/");
  };

  return (
    <Form config={config} buttonLabel="Criar Conta" onSubmit={handleSubmit} />
  );
};
