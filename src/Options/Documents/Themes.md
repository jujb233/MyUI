# 主题系统

`Themes` 目录是 MyUI 库样式系统的核心，它负责动态生成和解析组件的颜色主题。这套系统非常灵活，允许开发者通过简单的属性组合来创建丰富多样的视觉效果。

其核心思想是 **将颜色的“强度”与“色调”分离**。

-   **强度 (Intensity)**: 定义了颜色的表现形式，例如是实心填充、柔和背景还是仅文本颜色。
-   **色调 (Color)**: 定义了具体使用哪种颜色，例如蓝色、红色或绿色。

---

## 核心文件概览

1.  **`colorThemes.ts`**: 定义了强度的基本类型。
2.  **`themeBuilder.ts`**: 核心的“主题构造器”，根据输入颜色和强度生成一套完整的 CSS 变量。
3.  **`variantThemes.ts`**: 将语义化角色（如 `primary`, `secondary`）映射到具体的强度。
4.  **`themeResolver.ts`**: 最终的“主题解析器”，根据组件的 `color` 和 `intensity` 属性，决定使用哪个主题。

导出入口：`src/Options/Themes/index.ts`（可通过 `../Themes` 聚合导入）。

---

## 1. 颜色主题 (`colorThemes.ts`)

-   **`INTENSITY`**（常量，导出）: 定义了四种可用的强度变体：
    -   `solid`: 实心填充，对比度最强。
    -   `soft`: 柔和的背景色，通常带有半透明效果。
    -   `subtle`: 更微妙的背景色，对比度较低。
    -   `text`: 无背景，仅将颜色应用于文本。
-   **`IntensityName`**（类型，导出）: `'solid' | 'soft' | 'subtle' | 'text'`。
-   **`DEFAULT_BASE_COLOR`**（常量，导出）: 当用户未指定颜色时，默认使用的色调（例如 `'blue'`）。

---

## 2. 主题构造器 (`themeBuilder.ts`)

这是主题系统的引擎。

### `ComponentTheme` 接口

定义了一个主题对象应包含的所有 CSS 自定义属性（CSS Variables），例如：

-   `--bg`: 背景色（可以是渐变）
-   `--bg-hover`: 悬停时的背景色
-   `--text`: 文本颜色
-   `--border`: 边框颜色
-   `--focus-ring`: 焦点环颜色
-   以及用于“玻璃态”的 `--glass-*` 变体。

### `buildThemeByIntensity` 函数

这是最重要的函数。它接收 **色调**（通过 `from` 和 `to` 两个颜色值定义渐变）和 **强度** (`variant`)，然后为每种强度生成一套不同的 `ComponentTheme`。

例如，对于同样的蓝色：

-   `solid` 强度会生成一个不透明的蓝色渐变背景。
-   `soft` 强度会生成一个半透明的蓝色背景，并将主色调应用于文本。
-   `text` 强度会生成透明背景，仅将蓝色应用于文本。

相关导出：

- `buildTheme(from, to, text?)`
- `buildThemeByIntensity(from, to, variant)`
- `ComponentTheme`（类型）
- `IntensityVariant`（类型：与 `IntensityName` 等价范围）

---

## 3. 变体主题 (`variantThemes.ts`)

为了方便使用，我们将常见的组件角色（如“主要”、“次要”）映射到预设的 **强度**。

-   **`VARIANT_ROLE_STYLES`**:
    -   `primary` 角色 -> `solid` 强度
    -   `secondary` 角色 -> `soft` 强度
    -   `danger` 角色 -> `solid` 强度
    -   `text` 角色 -> `text` 强度

这允许开发者通过更具语义的 `variant="primary"` 来代替 `intensity="solid"`。

---

## 4. 主题解析器 (`themeResolver.ts`)

这是最终将所有部分组合在一起的工具。

### `resolveTheme(params)` 函数

该函数接收组件的属性（`color` 和 `intensity`），并遵循以下逻辑来返回最终的 `ComponentTheme` 对象：

1.  **直接指定十六进制颜色**:
    -   如果 `color` 是一个有效的十六进制颜色值（如 `#ff0000`），`resolveTheme` 会调用 `buildThemeByIntensity` 动态生成一个主题。
    -   **示例**: `color="#eab308"` `intensity="soft"` -> 生成一个柔和的黄色主题。

2.  **使用颜色预设**:
    -   如果 `color` 是一个预设名称（如 `'red'`），它会从 `PRESET_THEMES` (定义在 `Options/Presets/colorPresets.ts`) 中查找对应的主题。
    -   **示例**: `color="red"` `intensity="solid"` -> 返回预生成的红色 `solid` 主题。

3.  **仅指定强度**:
    -   如果只提供了 `intensity`，则使用 `DEFAULT_BASE_COLOR`（蓝色）和指定的强度。
    -   **示例**: `intensity="subtle"` -> 返回蓝色的 `subtle` 主题。

4.  **无任何参数**:
    -   默认返回 `DEFAULT_BASE_COLOR` 的 `solid` 强度主题。

这个强大的解析器使得 MyUI 的主题系统既能提供一致的预设选项，又具备高度的灵活性和可定制性。

示例：

```ts
import { resolveTheme } from '../Themes'

// 指定预设颜色 + 强度
const t1 = resolveTheme({ color: 'red', intensity: 'soft' })

// 使用十六进制色值 + 强度
const t2 = resolveTheme({ color: '#06b6d4', intensity: 'solid' })

// 仅强度，使用默认色（blue）
const t3 = resolveTheme({ intensity: 'text' })
```
