import { Input } from "@/components/Input";
import { ControllerRenderProps } from "react-hook-form";

export const PasswordLoginInput: React.FC<ControllerRenderProps> = ({
  ...props
}) => (
  <div className="space-y-2">
    <Input type="password" placeholder="Senha" {...props} />
    <p className="text-xs text-pink-dark underline underline-offset-1 cursor-pointer opacity-80">
      Esqueci minha senha
    </p>
  </div>
);
