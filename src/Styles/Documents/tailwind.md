# tailwind.ts（Tailwind 集成）

位置：`src/Styles/config/tailwind.ts`

说明

- 该脚本/模块用于把设计系统的基础变量（例如 `baseColors`, `spacing`, `fontSizes`, `shadows` 等）映射或注入到 Tailwind 配置中，方便在构建时生成自定义的 Tailwind 扩展。

常见用途

- 生成 `theme.extend.colors` 的映射，或根据 `baseColors` 动态生成 CSS 变量。
- 在项目的构建流程中（例如在 vite/rollup 插件或自定义脚本中）使用该模块来保持 Tailwind 与设计系统变量一致。

示例（伪代码）

```ts
import { baseColors, spacing } from './base'

// 在构建 Tailwind 配置时使用
const tailwindTheme = {
  colors: Object.fromEntries(Object.entries(baseColors).map(([k, v]) => [k, (v as any).from ?? v])),
  spacing: spacing,
}
```

注意

- 该模块更偏向于构建时工具，组件运行时并不直接依赖它的复杂逻辑；如果你希望在运行时读取颜色，请使用 `baseColors` + `resolveTheme`（在 `Options/Themes/themeResolver.ts`）。