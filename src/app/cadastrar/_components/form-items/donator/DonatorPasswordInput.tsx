import { Input } from "@/components/Input";
import { ControllerRenderProps } from "react-hook-form";

export const DonatorPasswordInput: React.FC<ControllerRenderProps> = (
  props
) => <Input placeholder="Senha" {...props} />;
