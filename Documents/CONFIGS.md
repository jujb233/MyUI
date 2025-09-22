# 配置文件说明

本目录包含 MyUI 组件库的样式配置，包括通用/卡片的颜色主题、尺寸、样式常量，以及颜色预设与主题构建工具。自 2025-09 起，`colorThemes.ts` 通过 `presets.ts` 的构建器去除了重复的手写渐变定义，保持原有导出与视觉不变。

## 文件结构

- `colorThemes.ts` - 通用与卡片的颜色主题常量（手工定义）
- `sizeConfig.ts` - 通用与卡片的尺寸配置
- `styleConstants.ts` - 样式常量（禁用态、玻璃态文本、阴影等）
- `presets.ts` - 颜色预设与主题构建/解析工具
- `index.ts` - 统一导出入口（导出以上所有内容）

## 快速使用

```typescript
// 常用：从统一入口导出
import {
	COLOR_THEMES,
	CARD_COLOR_THEMES,
	SIZE_CONFIG,
	CARD_SIZE_CONFIG,
	DEFAULT_STYLES,
	SHADOW_EFFECTS,
	COLOR_PRESETS,
	CARD_COLOR_PRESETS,
	resolveColorTheme,
	resolveCardColorTheme
} from '@/Configs'

// 或按需从具体文件导入
import { COLOR_THEMES } from '@/Configs/colorThemes'
import { SIZE_CONFIG } from '@/Configs/sizeConfig'
```

## 颜色主题（常量）

通用颜色主题 `COLOR_THEMES` 支持：
- `primary` | `secondary` | `danger` | `normal` | `link`

卡片颜色主题 `CARD_COLOR_THEMES` 支持：
- `white` | `gray` | `primary` | `secondary`

每个主题字段：
- `bg`：背景渐变
- `hover`：悬停渐变
- `text`：文本颜色
- `glass`：玻璃态背景
- `glassHover`：玻璃态悬停背景
- （仅卡片）`border`：边框颜色

说明（统一来源）：`colorThemes.ts` 通过 `COLOR_PRESETS` / `CARD_COLOR_PRESETS`（来源于 `COLOR_PRESET_STOPS`）统一生成主题，仅对个别字段做最小覆盖以保持既有视觉。新增主题建议：优先在 `COLOR_PRESET_STOPS` 中新增起止色，然后复用预设集合；必要时才在 `colorThemes.ts` 局部覆盖。

## 尺寸配置

通用尺寸 `SIZE_CONFIG`：`small` | `medium` | `large`
- 字段：`padding`、`fontSize`、`minWidth`

卡片尺寸 `CARD_SIZE_CONFIG`：`small` | `medium` | `large`
- 字段：`padding`、`spacing`、`titleSize`、`contentSize`、`borderRadius`、`minHeight`

## 样式常量

- `DEFAULT_STYLES`：`disabled`（禁用态背景/文字）、`glassMorphism.text`（玻璃态文字颜色）
- `SHADOW_EFFECTS`：`normal`、`glass`、`glassHover`

## 颜色预设与主题构建（presets）

`presets.ts` 提供更通用的颜色系统：
- `COLOR_PRESET_STOPS`：语义色系起止色（如 `indigo`、`blue`、`gray` 等）
- `COLOR_PRESETS` / `CARD_COLOR_PRESETS`：基于预设生成的主题集合
- `buildTheme(from, to)` / `buildCardTheme(from, to)`：用起止色构建主题
- `resolveColorTheme(input?)` / `resolveCardColorTheme(input?)`：将预设名或十六进制色值解析为主题
- 工具函数：`isHexColor`、`hexToRgb`、`rgbToHex`、`adjustHex`、`alphaFromHex`、`yiqTextColor`

示例：

```typescript
// 通过预设名解析（按钮）
const { theme, accent } = resolveColorTheme('indigo')
// theme.bg / theme.hover / theme.text / theme.glass / theme.glassHover
// accent 为主色（可用于边框或强调）

// 使用十六进制直接生成主题（卡片）
const { theme: cardTheme } = resolveCardColorTheme('#4f46e5')

// 应用到组件样式（示意）
const style = {
	background: theme.bg,
	color: theme.text
}
```

## 类型导出

- 主题：`ColorTheme`、`ColorThemeName`、`CardColorTheme`、`CardColorThemeName`
- 尺寸：`SizeConfig`、`SizeName`、`CardSizeConfig`、`CardSizeName`

## 扩展指南

- 新增主题：在 `colorThemes.ts` 中添加条目，或在 `presets.ts` 中扩展 `COLOR_PRESET_STOPS` 并使用 `buildTheme` 系列函数。
- 新增尺寸：在 `sizeConfig.ts` 中为通用或卡片部分添加新的尺寸键并配置相应字段。
