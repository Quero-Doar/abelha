import { z } from "zod";

import { IsEmail, IsName, IsPassword } from "./shared";

export const CreateNgoPayload = z.object({
  name: IsName,
  email: IsEmail,
  category: z.string().uuid({ message: "Este campo é obrigatório" }),
  password: IsPassword,
});
export type CreateNgoPayload = z.infer<typeof CreateNgoPayload>;
