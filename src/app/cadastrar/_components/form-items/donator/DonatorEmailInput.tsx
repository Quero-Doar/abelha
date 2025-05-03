import { Input } from "@/components/Input";
import { ControllerRenderProps } from "react-hook-form";

export const DonatorEmailInput: React.FC<ControllerRenderProps> = (props) => (
  <Input placeholder="rebecagusmao@gmail.com" {...props} />
);
