import { Suspense } from "react";
import { ControllerRenderProps } from "react-hook-form";

import { toast } from "@/hooks/use-toast";
import { Select } from "@/components/Select";
import type { ServerResponse } from "@/server/responses";

type Props = ControllerRenderProps & {
  response: ServerResponse<Record<string, string>>;
};

export const NgoCategorySelect: React.FC<Props> = ({
  onChange,
  response,
  ...props
}) => {
  const { data, error } = response;

  if (error) {
    toast({
      title: "Erro ao carregar categorias",
      description: "Tente novamente mais tarde",
      variant: "destructive",
    });
  }

  return (
    <Suspense>
      <Select
        placeholder="Selecione uma categoria"
        items={data || {}}
        onValueChange={onChange}
        {...props}
      />
    </Suspense>
  );
};
