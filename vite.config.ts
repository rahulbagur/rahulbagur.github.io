import { copyFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { port: 3000, host: "0.0.0.0" },
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "github-pages-spa",
      closeBundle() {
        copyFileSync(path.resolve("dist/index.html"), path.resolve("dist/404.html"));
      },
    },
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
