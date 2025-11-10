import { defineConfig } from 'vite'
import solidjs from 'vite-plugin-solid'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// 主配置：构建 Solid 组件库版本 (external solid-js)
// Web Components 版本在单独的 vite.wc.config.ts 中构建，以便区分 external 行为。
export default defineConfig({
  plugins: [solidjs(), tailwindcss()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyUI',
      fileName: 'my-ui'
    },
    rollupOptions: {
      external: ['solid-js'],
      output: {
        globals: { 'solid-js': 'solidjs' }
      }
    }
  }
})
