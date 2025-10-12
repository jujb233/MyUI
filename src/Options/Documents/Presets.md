# 预设

预设是为组件提供快速、一致样式和行为的预定义配置集合。它们简化了在整个应用程序中应用统一样式和交互模式的过程。

预设主要分为两类：

1.  **颜色预设 (`colorPresets.ts`)**
2.  **交互预设 (`interactionPresets.ts`)**

---

## 颜色预设

颜色预设定义了整个 UI 库中可用的标准颜色方案。

### `COLOR_PALETTE`

这是所有主题颜色的单一来源。它是一个对象，其中每个键代表一种颜色名称，值为一个包含 `from` 和 `to` 两个颜色值的对象，用于定义渐变的起止点。

```typescript
export const COLOR_PALETTE = {
    blue: { from: '#3b82f6', to: '#2563eb' },
    indigo: { from: '#4f46e5', to: '#7c3aed' },
    // ... 其他颜色
} as const
```

### `PRESET_THEMES`

基于 `COLOR_PALETTE`，系统为每种预设颜色自动生成了四种不同强度（`light`, `medium`, `dark`, `solid`）的完整主题。这使得可以轻松地为组件应用同一色系但不同深浅的变体。

-   `PRESET_THEMES['blue']['light']` 将返回一个基于蓝色的亮色主题。
-   `PRESET_THEMES['red']['dark']` 将返回一个基于红色的暗色主题。

---

## 交互预设

交互预设定义了组件如何响应用户的操作，例如悬停（hover）、聚焦（focus）和点击（active）。

### `INTERACTION_PRESETS`

这是一个包含多种预定义交互策略的对象：

-   **`none`**: 禁用所有交互效果。
-   **`basic`**: 提供基础的交互反馈，如悬停和聚焦效果。
-   **`rich`**: 提供更丰富的交互效果，包括悬停、聚焦、点击时的缩放动画。
-   **`minimal`**: 只提供最基本的悬停效果。

```typescript
export const INTERACTION_PRESETS = {
  ````markdown
  # 预设

  预设是为组件提供快速、一致样式和行为的预定义配置集合。它们简化了在整个应用程序中应用统一样式和交互模式的过程。

  预设主要分为两类：

  1.  颜色预设（`colorPresets.ts`）
  2.  交互预设（`interactionPresets.ts`）

  ---

  ## 颜色预设

  颜色预设定义了整个 UI 库中可用的标准颜色方案。

  ### `COLOR_PALETTE`

  这是所有主题颜色的单一来源。它是一个对象，其中每个键代表一种颜色名称，值为一个包含 `from` 和 `to` 两个颜色值的对象，用于定义渐变的起止点。

  ```ts
  export const COLOR_PALETTE = {
    blue: { from: '#3b82f6', to: '#2563eb' },
    indigo: { from: '#4f46e5', to: '#7c3aed' },
    // ... 其他颜色
  } as const
  ```

  相关类型：

  ```ts
  export type ColorPresetName = keyof typeof COLOR_PALETTE
  export const COLOR_PRESET_NAMES: ColorPresetName[]
  ```

  ### `PRESET_THEMES`

  基于 `COLOR_PALETTE`，系统为每种预设颜色自动生成四种“强度变体”的完整主题：

  - 强度名称：`solid` | `soft` | `subtle` | `text`
  - 访问方式：`PRESET_THEMES[color][intensity]`

  示例：

  ```ts
  import { PRESET_THEMES } from '../Presets'

  const solidBlue = PRESET_THEMES.blue.solid
  const softRed = PRESET_THEMES.red.soft
  ```

  ---

  ## 交互预设

  交互预设定义了组件如何响应用户的操作，例如悬停（hover）、聚焦（focus）和点击（active）。

  ### `INTERACTION_PRESETS`

  这是一个包含多种预定义交互策略的对象：

  - `none`: 禁用所有交互效果。
  - `basic`: 提供基础的交互反馈，如悬停和聚焦效果。
  - `rich`: 更丰富的交互效果，包括悬停、聚焦、点击时的缩放动画。
  - `minimal`: 仅提供最基本的悬停效果。

  ```ts
  export const INTERACTION_PRESETS = {
    none: { enabled: false },
    basic: {
      enabled: true,
      behavior: {
        hover: true,
        focus: true,
        active: false,
        transition: true,
        disabled: true,
      },
    },
    rich: {
      enabled: true,
      behavior: {
        hover: true,
        focus: true,
        active: true,
        transition: true,
        disabled: true,
      },
      effects: {
        scale: {
          hover: 1.05,
          active: 0.95,
          disabled: 1,
        },
      },
    },
    minimal: {
      enabled: true,
      behavior: {
        hover: true,
        focus: false,
        active: false,
        transition: false,
        disabled: true,
      },
    },
  } as const
  ```

  ### `FOCUS_RING_CLASSES`

  为了确保可访问性（Accessibility），我们还预定义了一组用于聚焦状态的 Tailwind CSS 类。这些类会在组件获得焦点时显示一个清晰的轮廓。

  ```ts
  export const FOCUS_RING_CLASSES = [
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
  ].join(' ')
  ```

  ### 典型用法

  ```ts
  import { INTERACTION_PRESETS, PRESET_THEMES } from '../Presets'

  // 取一个交互策略
  const inter = INTERACTION_PRESETS.rich

  // 取一个颜色主题（蓝色，soft 强度）
  const theme = PRESET_THEMES.blue.soft
  ```

  ````
