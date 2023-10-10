// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        organization: resolve(__dirname, "pages", "organization/index.html"),
        investigacion: resolve(__dirname, "pages", "applications/index.html"),
        operaciones: resolve(__dirname, "pages", "pilot/index.html"),
        procesos: resolve(__dirname, "pages", "processes/index.html"),
        mantenimiento: resolve(__dirname, "pages", "maintenance/index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
