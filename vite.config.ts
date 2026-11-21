import { copyFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  base: "/",
  plugins: [
    react(),
    {
      name: "github-pages-spa",
      closeBundle() {
        copyFileSync(resolve("dist/index.html"), resolve("dist/404.html"));
      },
    },
  ],
});
