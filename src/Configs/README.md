# 配置文件说明

本目录包含了 MyUI 组件库的所有配置文件，用于统一管理样式、主题和尺寸等配置。

## 文件结构

- `colorThemes.ts` - 颜色主题配置
- `sizeConfig.ts` - 尺寸配置  
- `styleConstants.ts` - 样式常量（默认样式、阴影效果等）
- `index.ts` - 统一导出文件

## 使用方式

```typescript
// 导入所有配置
import { COLOR_THEMES, SIZE_CONFIG, DEFAULT_STYLES, SHADOW_EFFECTS } from '@/Configs'

// 或者导入特定配置
import { COLOR_THEMES } from '@/Configs/colorThemes'
import { SIZE_CONFIG } from '@/Configs/sizeConfig'
```

## 颜色主题

支持四种主题：
- `primary` - 主要按钮（紫色渐变）
- `secondary` - 次要按钮（蓝色渐变）
- `danger` - 危险操作（红色渐变）
- `normal` - 普通按钮（灰色渐变）

每个主题包含：
- `bg` - 背景渐变
- `hover` - 悬停状态渐变
- `text` - 文本颜色
- `glass` - 玻璃态背景
- `glassHover` - 玻璃态悬停背景

## 尺寸配置

支持三种尺寸：
- `small` - 小尺寸
- `medium` - 中等尺寸（默认）
- `large` - 大尺寸

每个尺寸包含：
- `padding` - 内边距
- `fontSize` - 字体大小
- `minWidth` - 最小宽度

## 扩展配置

如需添加新的主题或尺寸，只需在对应的配置文件中添加即可，所有使用该配置的组件都会自动支持新的选项。
