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
        // 纯样式入口：让 Vite + Tailwind v4 生成 dist/style.css 供直接引用
        style: resolve(__dirname, "src/index.css"),
      },
      name: "MyUI",
      formats: ["es", "cjs"],
      fileName: (format) => `[name].${format === "es" ? "js" : format}`,
    },
    rollupOptions: {
      // 对库入口保持 external（减少重复依赖），但对 web-components 入口内联 solid 以实现“无框架依赖”的使用体验
      external: (id: string, importer?: string) => {
        const isSolid = id === 'solid-js' || id === 'solid-element'
        if (isSolid) {
          // 当由 web-components 入口引入时不要 external（打包进产物）
          if (importer && /\/src\/web-components(\.tsx|\.ts)?$/.test(importer)) return false
          return true
        }
        return false
      },
      input: {
        index: resolve(__dirname, "src/index.ts"),
        "web-components": resolve(__dirname, "src/web-components.tsx"),
        style: resolve(__dirname, "src/index.css"),
      },
      output: {
        globals: {
          "solid-js": "SolidJS",
        },
      },
    },
  },
});
