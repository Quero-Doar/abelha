import { z } from "zod";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";


export type FormItemConfig = {
  Component: React.FC<ControllerRenderProps & any>;
  label?: string;
  input?: Record<string, any>;
};

export type FormConfig<TSchema extends z.ZodObject<any, any, any>> = {
  form: UseFormReturn<z.infer<TSchema>>;
  items: Record<keyof z.infer<TSchema>, FormItemConfig>;
};
