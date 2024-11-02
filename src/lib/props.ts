import { ControllerRenderProps, FieldValues } from "react-hook-form";

export type FormDataFieldsProps = ControllerRenderProps<FieldValues, string> & {
  data?: Record<string, string>;
  onValueChange?: (e: any) => void;
  error?: boolean;
};

export type FormItems = {
  ItemComponent: React.FC<FormDataFieldsProps>;
  label: string;
  data?: Record<string, string>;
  hasOnValueChangeHook?: boolean;
};

export type SvgProps = React.SVGProps<SVGSVGElement>;
