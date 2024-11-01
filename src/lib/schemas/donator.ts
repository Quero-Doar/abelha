import { z } from "zod";

import { IsEmail, IsName, IsPassword } from "./shared";

export const CreateDonatorPayload = z.object({
  name: IsName,
  email: IsEmail,
  password: IsPassword,
});
export type CreateDonatorPayload = z.infer<typeof CreateDonatorPayload>;
