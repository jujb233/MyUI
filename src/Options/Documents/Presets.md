# 预设

预设是为组件提供快速、一致样式和行为的预定义配置集合。它们简化了在整个应用程序中应用统一样式和交互模式的过程。

# 预设（Presets）

预设分为两类：颜色预设与交互预设。本仓库的实现方式是把颜色原始数据放在样式配置中，然后在解析阶段按需构建主题；交互预设则集中在 `src/Options/Presets/interactionPresets.ts`。

## 颜色预设（Color Presets）

- 原始颜色定义在：`src/Styles/config/base.ts`，导出名为 `baseColors`。每个颜色项通常包含 `{ from, to }` 用于生成渐变。
- 没有全局静态的 `PRESET_THEMES` 常量；相反，主题解析器会基于 `baseColors` 动态构建不同强度的主题（见 `src/Options/Themes/themeResolver.ts`）。

示例：

```ts
import { baseColors } from '../../Styles/config/base'
// baseColors.blue => { from: '#3b82f6', to: '#2563eb' }
```

要把某个预设颜色转换为具体的组件主题，请使用 `resolveTheme`（`src/Options/Themes/themeResolver.ts`）并传入 `color` 与 `intensity`。

```ts
import { resolveTheme } from '../../Options/Themes/themeResolver'

// 使用预设名 + 强度
const t = resolveTheme({ color: 'blue', intensity: 'soft' })
```

## 交互预设（Interaction Presets）

交互预设集中在：`src/Options/Presets/interactionPresets.ts`。主要导出：

- `INTERACTION_PRESETS`：包含 `none`、`basic`、`rich`、`minimal` 等策略（见文件内定义）。
- `FOCUS_RING_CLASSES`：一串可复用的 Tailwind focus ring 类名，用于提升无障碍体验。

典型用法：

```ts
import { INTERACTION_PRESETS, FOCUS_RING_CLASSES } from '../../Options/Presets/interactionPresets'

const preset = INTERACTION_PRESETS.rich
// preset.behavior / preset.effects / preset.classes 可用于组件构建
```

交互预设可以与主题、样式常量（如 `sizeConfig`、`shadows`）组合使用，以在组件中快速应用一致的视觉和行为规范。
-   **`rich`**: 提供更丰富的交互效果，包括悬停、聚焦、点击时的缩放动画。
