"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/Form";

import { formItems } from "./form-items";
import { toast } from "@/hooks/use-toast";
import { LoginPayload } from "@/lib/schemas/user";
import { login } from "@/server/actions/user/login";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<LoginPayload>({
    resolver: zodResolver(LoginPayload),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (input: any) => {
    const { error } = await login(input);
    if (error && error.status === 403) {
      return toast({
        variant: "destructive",
        title: "Erro ao executar o login!",
        description: error.message,
      });
    } else if (error) {
      return toast({
        variant: "destructive",
        title: "Tivemos um erro inesperado!",
        description: error.message,
      });
    }

    return router.push("/");
  };

  return (
    <Form
      items={formItems}
      buttonLabel="Entrar"
      form={form}
      onSubmit={onSubmit}
      className="md:w-96 place-self-center"
    />
  );
};
