# MyPanel - 面板组件（新版）

用于区域划分与内容承载，支持多主题、玻璃态、尺寸、阴影等现代化视觉效果。

本版变更：主题改为拆分 Props（variant + color），支持强类型与自动补全。

## 特性
- 🎨 主题拆分：`variant`（风格）+ `color`（颜色键）
- 🌟 可选玻璃态：`glassMorphism`
- 📏 尺寸：`small` | `medium` | `large`
- 🕶️ 阴影可选：`shadow`
- 🚫 禁用状态：`disabled`

## 基础用法

```tsx
import { MyPanel } from '@jujb233/myui'

<MyPanel variant="primary" color="indigo" size="large" glassMorphism>
  <h2>标题</h2>
  <p>内容区域，可放任意 React 节点。</p>
</MyPanel>
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'normal'` | `'normal'` | 面板风格 |
| `color` | `ColorPresetName` | 依据 `DEFAULT_VARIANT_PRESET[variant]` | 颜色键（来自 COLORS） |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 尺寸 |
| `glassMorphism` | `boolean` | `true` | 是否启用玻璃态 |
| `shadow` | `boolean` | `true` | 是否显示阴影 |
| `className` | `string` | `''` | 自定义类名 |
| `children` | `React.ReactNode` | - | 面板内容 |
| `disabled` | `boolean` | `false` | 是否禁用 |

相关导出：`VARIANTS`, `COLORS`, `DEFAULT_VARIANT_PRESET`, `resolveUnifiedTheme`

## 进阶用法

```tsx
<MyPanel variant="danger" color="rose" size="small" shadow={false}>
  <span>警告内容</span>
</MyPanel>
```

## 设计理念
- 高级材质与光影，提升区域层次感
- 统一主题来源，增强一致性
- 强类型与自动补全，提升开发体验