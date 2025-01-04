import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";

export default defineConfig({
  test: {
    include: ["./tests/unit/**/*.spec.ts"],
    root: "./",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    environment: "jsdom",
    exclude: ["node_modules"],
  },
});
