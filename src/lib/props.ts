import { ControllerRenderProps, FieldValues } from "react-hook-form";

export type FormDataFieldsProps = ControllerRenderProps<FieldValues, string> & {
  data?: Record<string, string>;
  field: ControllerRenderProps<FieldValues, string>
  error?: boolean;
};

export type FormItems = {
  ItemComponent: React.FC<FormDataFieldsProps>;
  label: string;
  data?: Record<string, string>;
};
