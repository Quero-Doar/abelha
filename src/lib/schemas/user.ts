import { z } from "zod";

export const AuthResponse = z.object({
  token: z.string(),
  // user: z.object({
  //   name: z.string(),
  // }),
});
