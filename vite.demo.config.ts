import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import solidjs from 'vite-plugin-solid'
import { resolve } from 'path'

// 专用于 Demo 的构建配置：将 src/Demos 视为根目录，产出可直接部署的 demo-dist
export default defineConfig({
    plugins: [tailwindcss(), solidjs()],
    root: resolve(__dirname, 'src/Demos'),
    base: './',
    publicDir: resolve(__dirname, 'src/Demos/assets'),
    build: {
        outDir: resolve(__dirname, 'demo-dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/Demos/index.html'),
                buttons: resolve(__dirname, 'src/Demos/demos/buttons.html'),
                cards: resolve(__dirname, 'src/Demos/demos/cards.html'),
                navs: resolve(__dirname, 'src/Demos/demos/navs.html'),
                panels: resolve(__dirname, 'src/Demos/demos/panels.html'),
                animations: resolve(__dirname, 'src/Demos/demos/animations.html'),
                interactions: resolve(__dirname, 'src/Demos/demos/interactions.html'),
            },
        },
    },
})
