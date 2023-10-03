// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        organization: resolve(__dirname, "organization/index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
