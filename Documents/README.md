
# MyUI 文档

帮助你快速上手 MyUI：优先推荐 Vite + Web Components 的开箱即用方案；同时保留 Solid 组件用法。

## 快速开始（推荐：Vite + Web Components）

1) 安装

```bash
npm install @jujb233/myui
```

2) 在你的 Vite 工程入口引入并直接使用自定义元素（无需安装 solid-js）：

```ts
// main.ts / main.js
import '@jujb233/myui'
// 可选：引入内置样式（如果你没有用 Tailwind 或希望直接使用默认样式）
// import '@jujb233/myui/dist/my-ui.css'
```

然后在页面中使用：

```html
<div id="app"></div>
<script type="module" src="/src/main.ts"></script>
```

```ts
// 示例：动态挂载
document.querySelector('#app')!.innerHTML = `
  <h1>Hello MyUI!</h1>
  <myui-button variant='{"role":"primary","color":"blue"}'>Click Me</myui-button>
`
```

说明：
- 默认入口会自动注册 `<myui-*>` 自定义元素；在浏览器环境下开箱即用。
- `variant` 等复杂属性支持 JSON 字符串；也可以作为子元素拆分写法（详见组件文档）。

## 进阶：使用 Solid 组件版本

如果你的项目本身使用 Solid，并且偏好以组件形式使用：

```tsx
import { MyButton, MyCard } from '@jujb233/myui/solid'

export function Example() {
  return <MyButton variant={{ role: 'primary', color: 'blue' }}>Hello</MyButton>
}
```

注意：`@jujb233/myui/solid` 会将 `solid-js` 作为外部依赖，你需要在项目中安装 `solid-js`。

## 本地演示

```bash
npm run dev
```

## 文档导航

- 组件文档总览与通用 API： [Components README](../src/Components/Documents/README.md)
- 统一接口（Interfaces）指南： [Interfaces README](../src/Interfaces/Documents/README.md)
- 主题配置与定制（Options）： [Options README](../src/Options/Documents/README.md)
- Hooks 说明与使用： [Hooks README](../src/Hooks/Documents/README.md)

备注：导航栏组件 MyNav 的源码位于 `src/Components/MyNav`，可结合该目录下的文档与示例查看。
