import { Input } from "@/components/Input";
import { FormDataFieldsProps, FormItems } from "@/lib/props";

const NameInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input id="name" placeholder="Rebeca Gusmão" {...props} />
);

const EmailInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input type="email" placeholder="rebecagusmao@gmail.com" {...props} />
);

const PasswordInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input type="password" placeholder="Senha" {...props} />
);

export const donatorFormItems: Record<string, FormItems> = {
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
