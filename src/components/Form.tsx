import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadForm,
} from "./ui/form";

import { Button } from "./Button";
import { FormItems } from "@/lib/props";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
  buttonLabel: string;
  form: UseFormReturn<any, any, undefined>;
  items: Record<string, FormItems>;
};

export const Form: React.FC<Props> = ({
  form,
  items,
  buttonLabel,
  onSubmit,
  ...props
}) => {
  return (
    <ShadForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit!)} {...props}>
        <div className={"flex flex-col justify-center space-y-3"}>
          {Object.entries(items).map(
            ([name, { ItemComponent, label, data }]) => (
              <FormField
                key={name}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

                    <FormControl id={name}>
                      <ItemComponent field={field} data={data} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          )}

          <div className="flex justify-center pt-4">
            <Button
              className="self-center"
              label={buttonLabel}
              type="submit"
              disabled={!form.formState.isDirty}
            />
          </div>
        </div>
      </form>
    </ShadForm>
  );
};
