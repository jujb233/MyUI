# 新版 MyButton（2025-09）
# MyButton 组件（新版）
一个功能丰富的按钮组件，支持多种样式和状态。

本版变更：合并 token 风格至拆分 Props（variant + color），提供更好自动补全与类型安全。

## 特性

- 🎨 主题拆分：`variant`（风格）+ `color`（颜色键）
- 🧠 自动补全：`variant` 来自 VARIANTS，`color` 来自 COLORS
- 📏 三种尺寸：`small` | `medium` | `large`
- 🌟 可切换玻璃态：`glassMorphism`
- ⚡ 流畅交互动画与状态反馈

## Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'normal' \| 'link'` | `'normal'` | 按钮风格 |
| `color` | `ColorPresetName` | 依据 `DEFAULT_VARIANT_PRESET[variant]` | 颜色键（来自 COLORS） |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 尺寸 |
| `htmlType` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML 按钮类型 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `glassMorphism` | `boolean` | `true` | 玻璃态开关 |
| `onClick` | `(e: MouseEvent) => void` | - | 点击事件 |
| `children` | `ReactNode` | - | 内容 |
| `className` | `string` | `''` | 自定义类名 |

相关导出（在 `Configs/presets` 中）：`VARIANTS`, `COLORS`, `DEFAULT_VARIANT_PRESET`, `resolveUnifiedTheme`

## 基础用法

```tsx
import { MyButton } from '@jujb233/myui'

function App() {
  return (
    <MyButton variant="primary" color="indigo">
      提交
    </MyButton>
  )
}
```

## 尺寸与材质

```tsx
<MyButton size="small" variant="primary" color="indigo">Small</MyButton>
<MyButton size="medium" variant="primary" color="indigo">Medium</MyButton>
<MyButton size="large" variant="primary" color="indigo">Large</MyButton>

<MyButton variant="primary" color="teal" glassMorphism={false}>传统材质</MyButton>
```

## 链接风格

```tsx
<MyButton variant="link" color="blue">跳转</MyButton>
```

## 状态与事件

```tsx
<MyButton variant="primary" color="indigo" disabled>禁用</MyButton>

<MyButton variant="primary" color="orange" onClick={() => alert('clicked!')}>
  点击
</MyButton>
```

## 设计理念
- 统一主题来源，简化心智模型
- 强类型与自动提示，减少误用
- 渐进增强：玻璃态与传统材质可自由切换
