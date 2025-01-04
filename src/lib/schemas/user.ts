import { z } from "zod";

import { IsEmail } from "./shared";

export const AuthResponse = z.object({
  token: z.string(),
});

export const LoginPayload = z.object({
  email: IsEmail,
  password: z.string().min(1, "Este campo não pode ser vazio"),
});
export type LoginPayload = z.infer<typeof LoginPayload>;
