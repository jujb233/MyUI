# MyButton 组件

一个功能丰富的按钮组件，支持多种样式和状态。

## 特性

- 🎨 支持5种样式类型：primary、secondary、danger、normal、link
- 📏 三种尺寸配置：small、medium、large
- 🌟 可切换的玻璃态效果
- ⚡ 流畅的交互动画
- 🔧 完整的事件处理支持
- ♿ 完善的可访问性支持

## Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `styleType` | `'primary' \| 'secondary' \| 'danger' \| 'normal' \| 'link'` | `'normal'` | 按钮样式类型 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| `htmlType` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML 按钮类型 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `glassMorphism` | `boolean` | `true` | 是否启用玻璃态效果 |
| `onClick` | `(e: MouseEvent) => void` | - | 点击事件处理器 |
| `children` | `ReactNode` | - | 按钮内容 |
| `className` | `string` | `''` | 自定义样式类名 |

## 基础用法

```tsx
import { MyButton } from '@jujb233/myui'

function App() {
  return (
    <MyButton styleType="primary">
      基础按钮
    </MyButton>
  )
}
```

## 样式类型

### Primary（主要）
```tsx
<MyButton styleType="primary">
  主要操作
</MyButton>
```

### Secondary（次要）
```tsx
<MyButton styleType="secondary">
  次要操作
</MyButton>
```

### Danger（危险）
```tsx
<MyButton styleType="danger">
  危险操作
</MyButton>
```

### Normal（普通）
```tsx
<MyButton styleType="normal">
  普通按钮
</MyButton>
```

### Link（链接）
```tsx
<MyButton styleType="link">
  链接样式
</MyButton>
```

## 尺寸配置

```tsx
// 小尺寸
<MyButton size="small" styleType="primary">
  小按钮
</MyButton>

// 中等尺寸（默认）
<MyButton size="medium" styleType="primary">
  中按钮
</MyButton>

// 大尺寸
<MyButton size="large" styleType="primary">
  大按钮
</MyButton>
```

## 玻璃态效果

```tsx
// 启用玻璃态效果（默认）
<MyButton styleType="primary" glassMorphism={true}>
  玻璃态按钮
</MyButton>

// 禁用玻璃态效果
<MyButton styleType="primary" glassMorphism={false}>
  传统样式按钮
</MyButton>
```

## 状态控制

### 禁用状态
```tsx
<MyButton styleType="primary" disabled>
  禁用按钮
</MyButton>
```

### 表单按钮
```tsx
// 提交按钮
<MyButton styleType="primary" htmlType="submit">
  提交表单
</MyButton>

// 重置按钮
<MyButton styleType="normal" htmlType="reset">
  重置表单
</MyButton>
```

## 事件处理

```tsx
<MyButton 
  styleType="primary"
  onClick={() => {
    console.log('按钮被点击了!')
    // 处理点击事件
  }}
>
  点击我
</MyButton>
```

## 自定义样式

```tsx
<MyButton 
  styleType="primary" 
  className="my-4 px-8 shadow-lg"
>
  自定义样式按钮
</MyButton>
```

## 完整示例

```tsx
import React from 'react'
import { MyButton } from '@jujb233/myui'

function ButtonDemo() {
  const handleClick = () => {
    alert('按钮被点击了!')
  }

  return (
    <div className="space-y-4">
      {/* 基础样式组合 */}
      <div className="flex gap-4">
        <MyButton styleType="primary">Primary</MyButton>
        <MyButton styleType="secondary">Secondary</MyButton>
        <MyButton styleType="danger">Danger</MyButton>
        <MyButton styleType="normal">Normal</MyButton>
        <MyButton styleType="link">Link</MyButton>
      </div>

      {/* 不同尺寸 */}
      <div className="flex gap-4 items-center">
        <MyButton size="small" styleType="primary">Small</MyButton>
        <MyButton size="medium" styleType="primary">Medium</MyButton>
        <MyButton size="large" styleType="primary">Large</MyButton>
      </div>

      {/* 玻璃态对比 */}
      <div className="flex gap-4">
        <MyButton styleType="primary" glassMorphism={true}>
          玻璃态效果
        </MyButton>
        <MyButton styleType="primary" glassMorphism={false}>
          传统样式
        </MyButton>
      </div>

      {/* 交互示例 */}
      <div className="flex gap-4">
        <MyButton styleType="primary" onClick={handleClick}>
          点击测试
        </MyButton>
        <MyButton styleType="secondary" disabled>
          禁用状态
        </MyButton>
      </div>
    </div>
  )
}

export default ButtonDemo
```

## 设计理念

### 视觉设计
- **现代美学**：采用玻璃态设计和精美渐变
- **一致性**：统一的视觉语言和交互模式
- **层次感**：通过阴影和透明度营造深度感

### 交互体验
- **流畅动画**：200ms的缓动过渡效果
- **即时反馈**：悬停和点击状态的视觉反馈
- **触感模拟**：缩放动画提供触觉感受

### 可访问性
- **键盘导航**：完整的Tab键导航支持
- **语义化**：正确的HTML语义和ARIA属性
- **色彩对比**：符合WCAG标准的颜色对比度

## 技术特性

- ✅ TypeScript 完整类型支持
- ✅ Tree-shaking 友好
- ✅ 响应式设计
- ✅ 零外部依赖（除React和clsx）
- ✅ 现代浏览器兼容
- ✅ 服务端渲染支持
