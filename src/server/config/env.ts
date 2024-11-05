import { z } from "zod";

const validateApiUrl = (data: any) => {
  if (data.SERVICE_ENV === "staging") {
    return !!data.API_URL;
  }

  return true;
};

const validateBaseUrl = (data: any) => {
  if (data.SERVICE_ENV === "staging") {
    return !!data.BASE_URL;
  }

  return true;
};

export const env = z
  .object({
    SERVICE_ENV: z.enum(["test", "development", "staging"]),
    API_URL: z.string().optional(),
    BASE_URL: z.string().optional(),
  })
  .refine(validateBaseUrl)
  .refine(validateApiUrl)
  .parse(process.env);
