// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        organization: resolve(__dirname, "organization/index.html"),
        investigacion: resolve(
          __dirname,
          "investigacionDeAplicaciones/index.html"
        ),
        operaciones: resolve(__dirname, "operacionesPiloto/index.html"),
        procesos: resolve(__dirname, "procesos/index.html"),
        mantenimiento: resolve(__dirname, "mantenimiento/index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
