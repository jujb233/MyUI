import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import solidjs from "vite-plugin-solid"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), solidjs()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : format}`,
    },
    rollupOptions: {
      external: ["solid-js"],
      output: {
        globals: {
          "solid-js": "SolidJS",
        },
      },
    },
  },
});
