"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/Form";

import { toast } from "@/hooks/use-toast";
import { LoginPayload } from "@/lib/schemas/user";
import { login } from "@/server/actions/user/login";
import { FormConfig } from "@/lib/types";
import { EmailLoginInput } from "./form-items/EmailInput";
import { PasswordLoginInput } from "./form-items/PasswordInput";

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const config: FormConfig<typeof LoginPayload> = {
    form: useForm<LoginPayload>({
      resolver: zodResolver(LoginPayload),
      defaultValues: {
        email: "",
        password: "",
      },
    }),
    items: {
      email: {
        Component: EmailLoginInput,
        label: "E-mail",
      },
      password: {
        Component: PasswordLoginInput,
        label: "Senha",
      },
    },
  };

  const handleSubmit = async (data: LoginPayload) => {
    const { error } = await login(data);

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
      config={config}
      onSubmit={handleSubmit}
      className="md:w-96 place-self-center"
      buttonLabel="Entrar"
    />
  );
};
