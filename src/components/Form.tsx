import { z } from "zod";
import { Path, UseFormReturn } from "react-hook-form";

import { FormConfig } from "@/lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRoot,
} from "./ui/form";
import { Button } from "./ui/button";
import Link from "next/link";

type Props<TSchema extends z.ZodObject<any, any, any>> = {
  config: FormConfig<TSchema>;
  buttonLabel: string;
  className?: React.ComponentProps<"form">["className"];
  onSubmit: (
    data: z.infer<TSchema>,
    form: UseFormReturn<z.infer<TSchema>>
  ) => void;
};

export const Form = <TSchema extends z.ZodObject<any, any, any>>({
  config,
  onSubmit,
  buttonLabel,
}: Props<TSchema>) => {
  const { form, items } = config;

  return (
    <FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data, form))}
        className="space-y-4"
      >
        {Object.entries(items).map(
          ([key, { label, Component, input }], index) => {
            return (
              <FormField
                key={index}
                control={form.control}
                name={key as Path<z.infer<TSchema>>}
                render={({ field }) => (
                  <FormItem className="error:text-red-500">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Component {...input} {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500"/>
                  </FormItem>
                )}
              />
            );
          }
        )}

        <Button
          type="submit"
          disabled={!form.formState.isDirty}
          className="w-full rounded-md"
        >
          {buttonLabel}
        </Button>
      </form>
    </FormRoot>
  );
};
