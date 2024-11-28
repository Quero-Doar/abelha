"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchNgoFormPayload } from "@/lib/schemas/ngo";
import { FormDataFieldsProps, FormItems } from "@/lib/props";

import { Form } from "@/components/Form";
import { Input } from "@/components/Input";

export const SearchNgoForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<SearchNgoFormPayload>({
    resolver: zodResolver(SearchNgoFormPayload),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = async (data: any) => {
    const params = new URLSearchParams(searchParams.toString());
    const response = SearchNgoFormPayload.parse(data);

    params.set("search", response.search);

    const route = "/ongs/encontrar?" + params.toString();
    return router.push(route);
  };

  return (
    <Form
      items={formItems}
      buttonLabel="Encontrar ONG"
      form={form}
      onSubmit={onSubmit}
    />
  );
};

const SearchInput: React.FC<FormDataFieldsProps> = ({ ...props }) => (
  <Input placeholder="Pesquisar" className="place-self-center w-80 md:w-full" {...props} />
);

const formItems: Record<string, FormItems> = {
  search: {
    ItemComponent: SearchInput,
  },
};
