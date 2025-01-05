import { z } from "zod";

import { IsEmail, IsName, IsPassword } from "./shared";
import { CategoryResponse } from "./category";

export const CreateNgoPayload = z.object({
  name: IsName,
  email: IsEmail,
  category: z.string().uuid({ message: "Este campo é obrigatório" }),
  password: IsPassword,
});
export type CreateNgoPayload = z.infer<typeof CreateNgoPayload>;

export const SearchNgoFormPayload = z.object({
  search: z.string().min(1, { message: "Este campo é obrigatório" }),
});
export type SearchNgoFormPayload = z.infer<typeof SearchNgoFormPayload>;

export const ListNgosQuery = z.object({
  page: z.number(),
  limit: z.number(),
});
export type ListNgosQuery = z.infer<typeof ListNgosQuery>;

export const SearchNgosQuery = ListNgosQuery.extend(
  z.object({ search: z.string() }).shape
);
export type SearchNgosQuery = z.infer<typeof SearchNgosQuery>;

export const NgoResponse = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  categories: CategoryResponse.array(),
  description: z.string().optional(),
  role: z.literal("ngo"),
  youtube: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  phone: z.string().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export type NgoResponse = z.infer<typeof NgoResponse>;

export const ListNgosPaginatedResponse = z.object({
  users: NgoResponse.array(),
  totalPages: z.number(),
});
export type ListNgosPaginatedResponse = z.infer<typeof ListNgosPaginatedResponse>;
