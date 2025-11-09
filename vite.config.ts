import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import solidjs from "vite-plugin-solid";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(
  ({ command, mode }) => {
    const isBuildLib = command === "build" && mode !== "demo";
    const isBuildDemo = command === "build" && mode === "demo";
    const isDev = command === "serve";

    const commonConfig = {
      plugins: [tailwindcss(), solidjs()],
      server: {
        watch: {
          ignored: ["**/myui-demos/**"],
        },
      },
      resolve: {
        alias: {
          "@": resolve(__dirname, "src"),
        },
      },
    };

    if (isBuildLib) {
      // --- 库构建配置 ---
      return {
        ...commonConfig,
        build: {
          lib: {
            entry: resolve(__dirname, "src/web-components.tsx"),
            name: "MyUI",
            fileName: (format) => `my-ui.${format}.js`,
          },
          rollupOptions: {
            external: [],
            output: {
              globals: {},
            },
          },
        },
      };
    } else {
      // --- Demo 开发或构建配置 ---
      return {
        ...commonConfig,
        root: resolve(__dirname, "src/Demos"),
        base: "./",
        publicDir: resolve(__dirname, "src/Demos/assets"),
        build: {
          outDir: resolve(__dirname, "demo-dist"),
          emptyOutDir: true,
          rollupOptions: {
            input: {
              index: resolve(__dirname, "src/Demos/index.html"),
              buttons: resolve(__dirname, "src/Demos/demos/buttons.html"),
              cards: resolve(__dirname, "src/Demos/demos/cards.html"),
              navs: resolve(__dirname, "src/Demos/demos/navs.html"),
              panels: resolve(__dirname, "src/Demos/demos/panels.html"),
              animations: resolve(__dirname, "src/Demos/demos/animations.html"),
              interactions: resolve(__dirname, "src/Demos/demos/interactions.html"),
            },
          },
        }
      };
    }
  });
