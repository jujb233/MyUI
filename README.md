# MyUI

一个面向未来的现代化的 Web UI 组件库，基于 Tailwind CSS 构建，提供类型安全的组件支持。

本项目绝大部分是由AI生成的且完成度较低重构比较频繁,所以下载时请务必小心注意。本项目可能存在各种设计风格不统一，代码质量参差不齐,文档与实际实现不符合等问题。若您有兴趣，可以参与贡献，帮助我们改进这个项目,在此感谢。  

注意: 19.0.0版本依赖于 React 19 ,而0.0.0版本依赖于 Solid-js,预计在1.0.0版本使用Web Components标准以支持更多框架,请根据需要选择合适的版本。

## 特性

- 🎨 基于 Tailwind CSS 的现代化设计
- 📦 完整的 TypeScript 支持
- 🚀 开箱即用，零配置
- 🎯 Tree-shaking 友好
- 📱 响应式设计

## 设计理念

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

## 安装

```bash
npm install @jujb233/myui
```

```bash
yarn add @jujb233/myui
```

```bash
pnpm add @jujb233/myui
```

## 快速开始

### 1. 引入组件

```tsx
import { MyButton } from '@jujb233/myui'

function App() {
  return (
    <div>
      <MyButton variant={{ role: 'primary', color: 'blue' }} onClick={() => alert('Hello!')}>
        点击我
      </MyButton>
    </div>
  )
}
```

### 2. 引入样式 (可选)

如果你的项目没有使用 Tailwind CSS，可以引入我们的预构建样式：

```tsx
import '@jujb233/myui/styles'
```

## 组件文档

详细的使用说明请查看 [使用文档](./Documents/README.md)。

## TypeScript 支持

本库完全使用 TypeScript 编写，提供完整的类型定义：

```tsx
import { MyButton, MyButtonProps } from '@jujb233/myui'

// 使用组件类型
const buttonProps: MyButtonProps = {
  variant: { role: 'primary', color: 'blue' },
  onClick: () => console.log('clicked')
}

<MyButton {...buttonProps}>
  TypeScript 按钮
</MyButton>
```

## 开发指南

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/jujb233/MyUI.git
cd MyUI

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建库
npm run build

# 类型检查
npm run build:types
```

### 项目结构

```
src/
├── Components/
│   └── MyButton/
│       └── MyButton.tsx    # 按钮组件
└── index.ts                # 主入口文件
```

## 参与贡献

我们欢迎社区贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解更多信息。

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目基于 MIT 许可证开源。查看 [LICENSE](LICENSE) 文件了解更多信息。

## 支持

如果你喜欢这个项目，请给我们一个 ⭐️！

如果你遇到任何问题，请[创建一个 issue](https://github.com/jujb233/MyUI/issues)。
