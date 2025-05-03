import { ControllerRenderProps } from "react-hook-form";

import { Input } from "@/components/Input";

export const NgoNameInput: React.FC<ControllerRenderProps> = ({ ...props }) => (
  <Input placeholder="UNIO" {...props} />
);
