import { defineConfig } from 'vitest/config'
import tsconfigPaths from "vite-tsconfig-paths" 
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["./tests/unit/**/*.spec.ts"],
    root: "./",
    alias: {},
    environment: 'jsdom',
  },
})
