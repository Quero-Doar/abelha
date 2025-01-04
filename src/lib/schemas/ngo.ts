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
