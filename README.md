# MyUI

一个面向未来的现代化的 React UI 组件库，基于 Tailwind CSS 构建，提供类型安全的组件支持。

## 特性

- 🎨 基于 Tailwind CSS 的现代化设计
- 📦 完整的 TypeScript 支持
- 🚀 开箱即用，零配置
- 🎯 Tree-shaking 友好
- 📱 响应式设计

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
      <MyButton styleType="primary" onClick={() => alert('Hello!')}>
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

### MyButton

一个功能丰富的按钮组件，支持多种样式和状态。

#### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `styleType` | `'primary' \| 'secondary' \| 'danger'` | - | 按钮样式类型 (必填) |
| `htmlType` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML 按钮类型 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `onClick` | `(e: MouseEvent) => void` | - | 点击事件处理器 |
| `children` | `ReactNode` | - | 按钮内容 |
| `className` | `string` | `''` | 自定义样式类名 |

#### 示例

```tsx
import { MyButton } from '@jujb233/myui'

// 基础用法
<MyButton styleType="primary">
  主要按钮
</MyButton>

// 不同样式
<MyButton styleType="secondary">
  次要按钮
</MyButton>

<MyButton styleType="danger">
  危险操作
</MyButton>

// 禁用状态
<MyButton styleType="primary" disabled>
  禁用按钮
</MyButton>

// 表单提交
<MyButton styleType="primary" htmlType="submit">
  提交表单
</MyButton>

// 自定义样式
<MyButton 
  styleType="primary" 
  className="my-4 px-8"
  onClick={() => console.log('Clicked!')}
>
  自定义按钮
</MyButton>
```

## TypeScript 支持

本库完全使用 TypeScript 编写，提供完整的类型定义：

```tsx
import { MyButton, MyButtonProps } from '@jujb233/myui'

// 使用组件类型
const buttonProps: MyButtonProps = {
  styleType: 'primary',
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
│   └── MyUI/
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

## 更新日志

### v0.19.0-1

- 🎉 首次发布
- ✨ 添加 MyButton 组件
- 📦 支持 ES 模块和 CommonJS
- 🎯 完整的 TypeScript 支持

## 支持

如果你喜欢这个项目，请给我们一个 ⭐️！

如果你遇到任何问题，请[创建一个 issue](https://github.com/jujb233/MyUI/issues)。
