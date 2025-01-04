import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { FormDataFieldsProps, FormItems } from "@/lib/props";

const NameInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input placeholder="UNIO" {...props} />
);

const CategorySelect: React.FC<FormDataFieldsProps> = ({
  data,
  field,
  ...props
}) => (
  <Select
    placeholder="Selecione uma categoria"
    items={data!}
    onValueChange={field.onChange}
    {...props}
  />
);

const PasswordInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input placeholder="Senha" {...props} />
);

const EmailInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input placeholder="unio@gmail.com" {...props} />
);

export const ngoFormItems: Record<string, FormItems> = {
  name: {
    ItemComponent: NameInput,
    label: "Nome",
  },

  category: {
    ItemComponent: CategorySelect,
    label: "Categoria",
  },

  email: {
    ItemComponent: EmailInput,
    label: "E-mail",
  },

  password: {
    ItemComponent: PasswordInput,
    label: "Senha",
  },
};
