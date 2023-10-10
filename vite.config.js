// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        organization: resolve(__dirname, "pages", "organization/index.html"),
        investigacion: resolve(
          __dirname,
          "pages",
          "investigacionDeAplicaciones/index.html"
        ),
        operaciones: resolve(
          __dirname,
          "pages",
          "operacionesPiloto/index.html"
        ),
        procesos: resolve(__dirname, "pages", "procesos/index.html"),
        mantenimiento: resolve(__dirname, "pages", "mantenimiento/index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
