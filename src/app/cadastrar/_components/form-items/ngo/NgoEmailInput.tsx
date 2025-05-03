import { ControllerRenderProps } from "react-hook-form";

import { Input } from "@/components/Input";

export const NgoEmailInput: React.FC<ControllerRenderProps> = (props) => (
  <Input placeholder="unio@gmail.com" {...props} />
);
