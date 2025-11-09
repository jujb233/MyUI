import { defineConfig } from "vite";
import solidjs from "vite-plugin-solid";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [solidjs(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyUI",
      fileName: "my-ui",
    },
    rollupOptions: {
      external: ["solid-js"],
      output: {
        globals: {
          "solid-js": "solidjs",
        },
      },
    },
  },
});
