
# MyUI 文档

帮助你快速上手 MyUI：了解组件、主题配置与项目内置演示。

## 快速开始

1) 安装

```bash
npm install @jujb233/myui
```

2) 使用

```tsx
import { MyButton, MyCard } from '@jujb233/myui';

export function Example() {
  return <MyButton variant={{ role: 'primary', color: 'blue' }}>Hello</MyButton>;
}
```

3) 本地演示

```bash
npm run dev
```

## 文档导航

- [COMPONENTS.md](./COMPONENTS.md)：组件总览与通用 API
- [CONFIGS.md](./CONFIGS.md)：主题与配置
- [DEMOS.md](./DEMOS.md)：项目内演示说明
- [MyButton.md](./MyButton.md)：按钮组件
- [MyCard.md](./MyCard.md)：卡片组件
- [MyPanel.md](./MyPanel.md)：面板组件（注意：当前包顶层暂未导出 MyPanel，仓库内演示通过相对路径使用）
 - [MyNav.md](./MyNav.md)：导航栏组件（当前包顶层未导出 MyNav，仓库内请用相对路径）

备注：源码中的导航栏组件 MyNav 尚未在文档中单列说明，可参考 `src/Components/MyUI/MyNav` 源码与 `src/Demos/NavBar.tsx` 用法。
