
# MyUI 文档

帮助你快速上手 MyUI：了解组件、主题配置与项目内置演示。

## 快速开始

1) 安装

```bash
npm install @jujb233/myui
```

2) 使用

```tsx
import { MyButton, MyCard } from '@jujb233/myui'

export function Example() {
  return <MyButton variant={{ role: 'primary', color: 'blue' }}>Hello</MyButton>
}
```

3) 本地演示

```bash
npm run dev
```

## 文档导航

- [COMPONENTS.md](../src/Components/Documents/README.md)：组件总览与通用 API
- [INTERFASE.md](../src/Interfaces/Documents/README.md)：统一 API 接口（Interfase）指南
- [OPTIONS.md](../src/Options/Documents/README.md)：主题配置与定制
- [HOOKS.md](../src/Hooks/Documents/README.md)：Hooks 说明与使用

备注：源码中的导航栏组件 MyNav 尚未在文档中单列说明，可参考 `src/Components/MyUI/MyNav` 源码与 `src/Demos/NavBar.tsx` 用法。
