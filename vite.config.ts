import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/kfc-gc-vault/",
  plugins: [react()],
});
