import { ControllerRenderProps } from "react-hook-form";

import { Input } from "@/components/Input";

export const NgoPasswordInput: React.FC<ControllerRenderProps> = (props) => (
  <Input placeholder="Senha" {...props} />
);
