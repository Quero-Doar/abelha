import { z } from "zod";
import { env } from "./env";

const apiUrl = () => {
  switch (env.SERVICE_ENV) {
    case "test":
      return "http://localhost:3000/api/mocks";
    case "development":
      return "http://localhost:4000";
    default:
      return env.API_URL;
  }
};

const nextUrl = () => {
  switch (env.SERVICE_ENV) {
    case "test":
      return "http://localhost:3000/api/mocks";
    case "development":
      return "http://localhost:3000";
    default:
      return env.BASE_URL;
  }
};

const UrlConfigSchema = z.object({
  toupeiraUrl: z.string().url(),
  nextUrl: z.string().url(),
});

export const UrlConfig = UrlConfigSchema.parse({
  toupeiraUrl: apiUrl(),
  nextUrl: nextUrl(),
});
