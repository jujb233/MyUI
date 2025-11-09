# base.ts（基础变量）

位置：`src/Styles/config/base.ts`

主要导出

- `baseColors`：颜色预设集合。大多数颜色项为 `{ from: string, to: string }`，用于生成渐变与主题色。
  - 示例：`baseColors.blue = { from: '#3b82f6', to: '#2563eb' }`。
- `spacing`：设计系统的间距单位（字符串形式，方便拼接 Tailwind 类）。
- `fontSizes`：常用字号映射（例如 `sm`, `base`, `lg` 等）。
- `fontWeights`：字体粗细映射（如 `normal`, `bold` 等）。
- `borderRadius`：圆角配置。
- `shadows`：标准 `box-shadow` 值集合（键如 `xs`, `sm`, `md` 等）。
- `glassShadows`：用于玻璃态组件的特殊阴影集合。
- `sizeConfig`：`small|medium|large` 三档尺寸配置，包含便于直接拼接的 Tailwind 类字符串（如 `padding`, `fontSize`, `minWidth`, `spacing`, `titleSize`, `contentSize`, `borderRadius`, `minHeight`）。

常见用法

```ts
import { baseColors, shadows, sizeConfig } from '../../Styles/config/base'

const blue = baseColors.blue // { from, to }
const cardShadow = shadows.md
const btnSmall = sizeConfig.small
```

说明与建议

- `baseColors` 是主题系统的单一来源（Theme resolver 会基于它动态生成不同强度的主题）。
- `sizeConfig` 中的值可直接拼接到组件的 `className` 中（项目使用字符串而非原始数值以便于 Tailwind 友好组合）。
- 如果需要扩展颜色，请在 `baseColors` 中添加新键并确保值包含 `from`/`to`，以便主题生成器正确工作。