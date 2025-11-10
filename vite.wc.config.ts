import { defineConfig } from 'vite'
import solidjs from 'vite-plugin-solid'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// 专用于构建 Web Components 打包版本：内联 solid-js
export default defineConfig({
    plugins: [solidjs(), tailwindcss()],
    resolve: {
        alias: { '@': resolve(__dirname, 'src') }
    },
    build: {
        emptyOutDir: false,
        lib: {
            entry: resolve(__dirname, 'src/web-components.tsx'),
            name: 'MyUIWeb',
            fileName: 'web-components'
        },
        // 不 external solid-js
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    }
})
