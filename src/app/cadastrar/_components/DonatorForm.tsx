"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/Form";

import { donatorFormItems } from "./form-config/donator";
import { CreateDonatorPayload } from "@/lib/schemas/donator";
import { newDonator } from "@/server/actions/donator/create";

export const DonatorForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<CreateDonatorPayload>({
    resolver: zodResolver(CreateDonatorPayload),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    const response = await newDonator(data);
    if (response.error && response.error.status === 409) {
      form.setError("email", { message: response.error.message });
      return;
    } else if (response.error) {
      // TODO - create a toast component
      alert(response.error.message);
      return;
    }

    return router.push("/");
  };

  return (
    <Form
      items={donatorFormItems}
      buttonLabel="Criar Conta"
      form={form}
      onSubmit={async (data) => onSubmit(data)}
    />
  );
};
