// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: resolve(__dirname, "website"),
  build: {
    outDir: resolve(__dirname, "dist"),
  },
});
