# MyUI 组件文档

欢迎使用 MyUI 组件库！这是一个现代化的 React UI 组件库，基于 Tailwind CSS 构建，提供类型安全的组件支持。

## 🎨 设计理念

### 核心理念
创造**超越功能的美学体验**，将数字界面转化为情感共鸣的艺术形式。

### 设计原则

#### 1. 感官精致
- 高级材质效果（玻璃态、微质感）
- 精妙的光影变化和过渡动画
- 像素级细节打磨
- 使用莫奈取色方案

#### 2. 优雅表达  
- 直观的功能交互模式
- 清晰的视觉层次引导
- 统一的设计节奏和语言

#### 3. 现代适应
- 响应多场景的动态美学
- 可扩展的设计系统架构
- 跨设备的一致性体验

#### 4. 人性交互
- 有温度的情感化反馈
- 包容性的无障碍设计
- 低认知负荷的直觉引导

## 🧩 组件列表

### 基础组件

#### [MyButton - 按钮组件](./MyButton.md)
功能丰富的按钮组件，支持多种样式和状态。

**特性预览：**
- 🎨 5种样式类型：primary、secondary、danger、normal、link
- 📏 3种尺寸配置：small、medium、large  
- 🌟 可切换的玻璃态效果
- ⚡ 流畅的交互动画

**基础用法：**
```tsx
import { MyButton } from '@jujb233/myui'

<MyButton styleType="primary">
  主要按钮
</MyButton>
```

---

#### [MyCard - 卡片组件](./MyCard.md)
现代化的卡片组件，支持多种布局和交互效果。

**特性预览：**
- 🎴 完整的内容区域（标题、内容、图片、标签）
- 🔄 多种布局方向（垂直、水平）
- 📍 灵活的图片位置
- 🎨 4种样式主题

**基础用法：**
```tsx
import { MyCard } from '@jujb233/myui'

<MyCard
  title="卡片标题"
  content="卡片内容描述"
  variant="white"
/>
```

## 🚀 快速开始

### 安装

```bash
npm install @jujb233/myui
```

```bash
yarn add @jujb233/myui
```

```bash
pnpm add @jujb233/myui
```

### 基础使用

```tsx
import React from 'react'
import { MyButton, MyCard } from '@jujb233/myui'

function App() {
  return (
    <div className="p-8 space-y-6">
      {/* 按钮示例 */}
      <div className="flex gap-4">
        <MyButton styleType="primary">Primary</MyButton>
        <MyButton styleType="secondary">Secondary</MyButton>
        <MyButton styleType="danger">Danger</MyButton>
      </div>

      {/* 卡片示例 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MyCard
          title="示例卡片"
          content="这是一个基础的卡片组件示例。"
          actions={
            <MyButton styleType="primary">
              了解更多
            </MyButton>
          }
        />
        
        <MyCard
          title="带图片卡片"
          content="这个卡片包含了图片展示。"
          image="/example.jpg"
          variant="primary"
        />
      </div>
    </div>
  )
}

export default App
```

### 样式引入

如果你的项目没有使用 Tailwind CSS，可以引入我们的预构建样式：

```tsx
import '@jujb233/myui/styles'
```

## 📋 组件对比表

| 组件 | 用途 | 主要特性 | 适用场景 |
|------|------|----------|----------|
| **MyButton** | 交互操作 | 多样式、多尺寸、玻璃态效果 | 表单提交、页面跳转、功能操作 |
| **MyCard** | 内容展示 | 灵活布局、丰富内容、交互支持 | 产品展示、信息卡片、内容容器 |

## 🎯 使用场景

### 电商应用
```tsx
// 产品卡片 + 操作按钮
<MyCard
  title="iPhone 15 Pro"
  content="最新的 iPhone，搭载 A17 Pro 芯片"
  image="/iphone15.jpg"
  tags={["新品", "热销"]}
  actions={
    <div className="flex gap-2">
      <MyButton styleType="primary">立即购买</MyButton>
      <MyButton styleType="secondary">加入购物车</MyButton>
    </div>
  }
  footer={
    <div className="flex justify-between">
      <span className="text-2xl font-bold">¥7999</span>
      <span className="text-green-600">现货</span>
    </div>
  }
/>
```

### 管理后台
```tsx
// 数据统计卡片
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  <MyCard
    title="总用户数"
    content="12,345"
    variant="primary"
    size="small"
  />
  <MyCard
    title="今日访问"
    content="1,234"
    variant="secondary"
    size="small"
  />
  <MyCard
    title="转化率"
    content="23.5%"
    variant="white"
    size="small"
  />
  <MyCard
    title="收入"
    content="¥456,789"
    variant="gray"
    size="small"
  />
</div>
```

### 内容展示
```tsx
// 文章卡片
<MyCard
  title="MyUI 设计系统介绍"
  content="深入了解 MyUI 组件库的设计理念和技术实现。"
  image="/article-cover.jpg"
  imagePosition="top"
  tags={["设计系统", "React", "TypeScript"]}
  actions={
    <div className="flex gap-2">
      <MyButton styleType="primary">阅读全文</MyButton>
      <MyButton styleType="link">收藏</MyButton>
    </div>
  }
  footer={
    <div className="flex justify-between text-sm text-gray-600">
      <span>发布时间：2024-01-15</span>
      <span>阅读量：1,234</span>
    </div>
  }
/>
```

## 🛠️ 开发指南

### TypeScript 支持

MyUI 完全使用 TypeScript 编写，提供完整的类型定义：

```tsx
import { MyButtonProps, MyCardProps } from '@jujb233/myui'

// 使用组件类型
const buttonProps: MyButtonProps = {
  styleType: 'primary',
  size: 'large',
  onClick: () => console.log('clicked')
}

const cardProps: MyCardProps = {
  title: 'TypeScript 卡片',
  content: '完整的类型支持',
  variant: 'primary'
}
```

### 自定义主题

通过 CSS 变量自定义主题色彩：

```css
:root {
  --myui-primary-start: #4f46e5;
  --myui-primary-end: #7c3aed;
  --myui-secondary-start: #06b6d4;
  --myui-secondary-end: #3b82f6;
}
```

### 响应式设计

所有组件都支持响应式设计：

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <MyCard title="响应式卡片 1" />
  <MyCard title="响应式卡片 2" />
  <MyCard title="响应式卡片 3" />
</div>
```

## 🔗 相关链接

- [组件演示](../src/Demo.tsx) - 查看所有组件的实际效果
- [项目仓库](https://github.com/jujb233/MyUI) - GitHub 源码
- [问题反馈](https://github.com/jujb233/MyUI/issues) - 报告 Bug 或提出建议
- [更新日志](../CHANGELOG.md) - 版本更新记录

## ⚡ 性能特性

- **Tree-shaking 友好**：只打包使用的组件
- **零外部依赖**：除 React 和 clsx 外无其他依赖
- **现代浏览器优化**：使用最新的 CSS 特性
- **服务端渲染支持**：完全兼容 SSR/SSG
- **响应式设计**：移动端友好

## 🎨 设计资源

### 色彩系统
- **Primary**：紫蓝渐变 (#4f46e5 → #7c3aed)
- **Secondary**：青蓝渐变 (#06b6d4 → #3b82f6)
- **Danger**：红色渐变 (#dc2626 → #991b1b)
- **Normal**：灰色渐变 (#6b7280 → #4b5563)

### 尺寸规范
- **Small**：紧凑设计，适用于工具栏和次要内容
- **Medium**：标准尺寸，适用于大多数场景
- **Large**：突出显示，适用于重要操作和内容

### 动画效果
- **过渡时间**：200-300ms
- **缓动函数**：ease-out
- **变换效果**：scale、translateY、opacity

---

**MyUI** - 现代化的 React UI 组件库  
用心打造，为开发者提供优雅的用户界面解决方案。
