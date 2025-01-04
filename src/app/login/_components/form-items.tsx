import { Input } from "@/components/Input";
import { FormDataFieldsProps, FormItems } from "@/lib/props";

const EmailInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input placeholder="rebecagusmao@gmail.com" {...props} />
);

const PasswordInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <div className="space-y-2">
    <Input type="password" placeholder="Senha" {...props} />
    <p className="text-xs text-pink-dark underline underline-offset-1 cursor-pointer opacity-80">
      Esqueci minha senha
    </p>
  </div>
);

export const formItems: Record<string, FormItems> = {
  email: {
    ItemComponent: EmailInput,
    label: "Email",
  },

  password: {
    ItemComponent: PasswordInput,
    label: "Senha",
  },
};
