# 主题系统（Themes）

主题相关实现位于：`src/Options/Themes`，核心文件包括：

- `colorThemes.ts`（导出强度常量与 `DEFAULT_BASE_COLOR`）
- `themeBuilder.ts`（构建 `ComponentTheme` 的函数：`buildTheme`、`buildThemeByIntensity`）
- `variantThemes.ts`（`VARIANT_ROLE_STYLES`：语义角色到强度的映射）
- `themeResolver.ts`（`resolveTheme`：将 color/intensity 解析为 `ComponentTheme`）

导出入口：`src/Options/Themes/index.ts`。

核心概念：

- 强度（Intensity）：由 `colorThemes` 定义，取值集合为 `solid` | `soft` | `subtle` | `text`（`IntensityName`）。
- 色调（Color）：来自 `src/Styles/config/base.ts` 中的 `baseColors`（每项通常具有 `{ from, to }`），用于生成渐变与主题变量。

主题构建器（`themeBuilder`）导出：

- `ComponentTheme`（类型）—— 主题对象包含一组 CSS 变量（`--bg`, `--bg-hover`, `--text`, `--border`, `--focus-ring`, 以及 `--glass-*` 变体）。
- `buildTheme(from, to, text?)` / `buildThemeByIntensity(from, to, variant)` —— 从颜色对生成主题。

变体映射（`variantThemes`）：

- `VARIANT_ROLE_STYLES` 将组件语义角色（`primary`, `secondary`, `success`, `warning`, `danger`, `text` 等）映射为强度变体（如 `primary -> solid`, `secondary -> soft`），方便组件通过 `variant` 使用语义化风格。

主题解析器（`resolveTheme`）行为：

1. 如果 `color` 是一个 `baseColors` 中的预设名（例如 `'red'`），返回该预设对应强度的主题（由 `buildThemeByIntensity` 构建）。
2. 如果 `color` 是合法的十六进制颜色字符串（如 `#06b6d4`），则动态以该颜色为基色构建主题。
3. 如果仅提供 `intensity`，使用 `DEFAULT_BASE_COLOR`（通常为 `blue`）并返回该强度的主题。
4. 如果没有参数，回退到 `DEFAULT_BASE_COLOR` 的 `solid` 强度主题。

示例：

```ts
import { resolveTheme } from '../../Options/Themes/themeResolver'

// 预设名 + 强度
const t1 = resolveTheme({ color: 'red', intensity: 'soft' })

// 十六进制颜色 + 强度
const t2 = resolveTheme({ color: '#06b6d4', intensity: 'solid' })

// 仅强度 -> 使用默认基色
const t3 = resolveTheme({ intensity: 'text' })
```

备注：项目并不会在一个静态对象中预先展开所有 `PRESET_THEMES`，而是在解析时基于 `baseColors` 动态构建，以节省重复数据并保持一致的生成逻辑。
