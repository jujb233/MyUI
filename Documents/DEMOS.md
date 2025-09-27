
# 演示指南

项目内置示例用于演示组件搭配与主题能力。

## 位置与入口

- 代码位于 `src/Demos`：`Demo.tsx`（总入口）、`NavBar.tsx`、`ButtonsDemo.tsx`、`CardsDemo.tsx`、`PanelsDemo.tsx`。
- 启动开发服务器后访问本地地址即可查看。

## 启动

```bash
npm run dev
```

## 示例中的 API 要点

- 组件主题通过 `variant={{ role, color }}` 传入，而不是字符串变体。
- `MyCard.Tags` 需传入 `tags` 数组：`<MyCard.Tags tags={["React", "TS"]} />`
- 大多数组件支持 `glass` 与 `shadow` 组合，阴影可选 `'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'inner'|'none'`。

## 导入路径说明

- 在演示代码中多为相对路径导入，例如：
  - `import MyCard from "../Components/MyUI/MyCard"`
  - `import MyButton from "../Components/MyUI/MyButton/MyButton"`
- 在应用中作为依赖使用时，建议：
  - `import { MyButton, MyCard, MyPanel } from '@jujb233/myui'`

以上与示例代码略有差异，属项目内外使用场景不同所致。
