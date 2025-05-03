import { Input } from "@/components/Input";
import { ControllerRenderProps } from "react-hook-form";

export const DonatorNameInput: React.FC<ControllerRenderProps> = (props) => (
  <Input placeholder="Rebeca Gusmão" {...props} />
);
