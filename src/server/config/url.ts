import { z } from "zod";
import { env } from "./env";

const serviceUrl = () => {
  return env.SERVICE_ENV == "development"
    ? "http://localhost:4000"
    : env.API_URL;
};

const UrlConfigSchema = z.object({
  toupeiraUrl: z.string().url(),
});

export const UrlConfig = UrlConfigSchema.parse({
  toupeiraUrl: serviceUrl(),
});
