import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import solidjs from "vite-plugin-solid"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), solidjs()],
  build: {
    lib: {
      // 通过多入口同时产出主库与 web components 入口
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "web-components": resolve(__dirname, "src/web-components.tsx"),
      },
      name: "MyUI",
      formats: ["es", "cjs"],
      fileName: (format) => `[name].${format === "es" ? "js" : format}`,
    },
    rollupOptions: {
      external: ["solid-js", "solid-element"],
      input: {
        index: resolve(__dirname, "src/index.ts"),
        "web-components": resolve(__dirname, "src/web-components.tsx"),
      },
      output: {
        globals: {
          "solid-js": "SolidJS",
        },
      },
    },
  },
});
