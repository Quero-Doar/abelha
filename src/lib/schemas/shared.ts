import { z } from "zod";

export const IsString = z.string({ message: "Este campo é obrigatorio" });

export const IsName = z
  .string()
  .min(3, "O nome deve ter no mínimo 3 caracteres");

export const IsEmail = z
  .string()
  .email("E-mail inserido não corresponde a um email válido");

export const IsPassword = z
  .string({ message: "A senha deve ter no mínimo 6 caracteres" })
  .min(6, "A senha deve ter no mínimo 6 caracteres");
