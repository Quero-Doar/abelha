import { z } from "zod";

const validateApiUrl = (data: any) => {
  if (data.SERVICE_ENV === "staging") {
    return !!data.API_URL;
  }

  return true;
};

export const env = z
  .object({
    SERVICE_ENV: z.enum(["development", "staging"]),
    API_URL: z.string().optional(),
  })
  .refine(validateApiUrl)
  .parse(process.env);
