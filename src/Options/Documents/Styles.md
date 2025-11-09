# 样式（Styles）

样式相关的基础数据与常量散布在 `src/Styles/config` 下，Options 层通过 `src/Options/Styles/index.ts` 暴露给上层使用。

核心文件：

- 原始颜色与基础变量：`src/Styles/config/base.ts`（导出 `baseColors`, `spacing`, `fontSizes`, `fontWeights`, `borderRadius`, `shadows`, `glassShadows`, `sizeConfig` 等）
- 样式常量聚合：`src/Options/Styles/index.ts`

主要可用项（摘选并以实际导出名为准）：

- `baseColors`：颜色预设（每项通常包含 `{ from, to }`），用于主题生成。
- `shadows`：标准 box-shadow 值集合（键如 `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `inner`, `none`）。
- `glassShadows`：用于“玻璃态”控件的特殊阴影。
- `sizeConfig`：small / medium / large 三个尺寸配置（包含 padding、fontSize、minWidth、spacing、titleSize、contentSize、borderRadius、minHeight 等字符串，便于拼接 Tailwind 类）。

示例：

```ts
import { baseColors, shadows, glassShadows, sizeConfig } from '../../Styles/config/base'

// 取一个阴影
const s = shadows.md

// 取一个尺寸配置
const small = sizeConfig.small
```

使用建议：

- 颜色：通过 `baseColors` + `resolveTheme`（主题解析器）组合出组件的 CSS 变量（见 `src/Options/Themes`）。
- 阴影：直接从 `shadows` / `glassShadows` 取值并用于内联样式或样式构建器（如 `style={{ boxShadow: shadows.md }}`）。
- 尺寸：`sizeConfig` 中的字符串可直接拼接到组件的 class 列表，或在构建器中按需解析为 Tailwind 类。

注意：仓库中并未强制用某一模式来解析所有阴影（没有统一的 `resolveElevation` 在 Options 内），可以根据组件需要在 Utils 或组件层做集中解析。

