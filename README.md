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

本库的默认值和样式现在采用“属性与样式分层”策略，降低 default.ts 的膨胀风险，提升可维护性与类型安全。

### 分层说明

1. 业务/属性默认值：集中在 `src/Options/Configs/default.ts` 的 `defaultValues` 对象中，仅包含行为或语义属性（如 clickable、hover、direction、disabled 等）。
2. 样式/结构默认值：集中在以下配置文件中，不再写死到 `default.ts`：
   - `classConfig.ts`：通用类名、阴影、过渡等。
   - `componentSlots.ts`：组件槽位的结构类名（header/footer/icon 等）。
   - `styleConstants.ts`（如存在）：尺寸、颜色等基础常量。
   - `themeDefaults.ts`：基础主题默认（variant/size/glass/shadow）。

### Hook 使用规范

所有 Hook 使用统一的 `mergeDefaults(defaultValues.XxxProps, props)` 来合并用户输入与默认值，避免在 Hook 内重复硬编码默认值：

```ts
const merged = mergeDefaults(defaultValues.UseMyButtonProps, props)
```

随后再将必要的样式相关值传入 `createBaseStyle` 等工厂函数。仅在属性已定义时才传入，兼容 `exactOptionalPropertyTypes`：

```ts
const { builder } = createBaseStyle({
  size: merged.size,
  ...(merged.glass !== undefined ? { glass: merged.glass } : {}),
  ...(merged.shadow !== undefined ? { shadow: merged.shadow } : {}),
  ...(merged.variant ? { variant: merged.variant } : {}),
});
```

### Nav/Card/Panel 等组件的槽位

组件的槽位类名统一来源于 `SLOTS_STYLE`。Hook 返回的 `slots` 由组件一次性获取并放入 Context，子组件通过 Context 访问，避免重复调用 Hook：

```tsx
const { rootClass, rootStyle, slots } = useMyNav(others)
<NavProvider value={{ ...others, slots }}>
  <nav class={rootClass} style={rootStyle}>...</nav>
</NavProvider>
```

### 新增属性或样式的操作步骤

1. 新增属性：更新对应接口 + 在 `default.ts` 的 `defaultValues` 中添加默认值；Hook 自动获得。
2. 修改样式：只改 `classConfig.ts`、`componentSlots.ts`、`themeDefaults.ts` 等配置；无需修改 Hook。
3. 新增组件：定义 Props 接口 -> 在 `default.ts` 添加 `UseMyXxxProps` 默认项 -> 编写 Hook 使用 `mergeDefaults` -> 在组件内消费 Hook 结果。

### 破坏性更新与类型安全

`mergeDefaults` 支持深度合并与 null 覆盖，类型由 `defaultValues` 的结构决定；接口变更只需同步更新 `default.ts` 与类型声明，Hook 逻辑保持不变。

### 快速检查

执行构建：

```bash
npm run build
```

若出现类型错误，优先检查：

1. 新增属性是否在接口与 `defaultValues` 中同步声明。
2. 是否在 Hook 中遗漏了可选属性传入前的存在性判断。
3. 样式相关是否从配置文件引用而非硬编码。

### 后续可优化方向

* 为 `themeDefaults.ts` 添加按组件差异化的可选映射（如 Button 专属玻璃态策略）。
* 加入单元测试验证 Hook 在缺失 props 时仍返回完整结构。
* 自动生成文档：根据 `defaultValues` 与接口注释生成 Markdown。


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

本库支持在 SolidJS 等现代框架中使用，也支持作为纯 Web Components 在任何 HTML 环境下使用。

### 方式一：在 SolidJS 项目中使用

这是推荐的开发方式，可以获得完整的 TypeScript 支持和最佳的开发体验。

#### 1. 安装

```bash
npm install @jujb233/myui
npm install -D tailwindcss @tailwindcss/vite
```

#### 2. 配置 Tailwind CSS

为了让组件的样式生效，你需要引入本库的 Tailwind 配置。

修改你的 `tailwind.config.ts` 文件：

```ts
import type { Config } from 'tailwindcss'
import myui from '@jujb233/myui/tailwind.config' // 引入 MyUI 配置

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // 如果 MyUI 安装在 node_modules 中，请确保路径正确
    './node_modules/@jujb233/myui/dist/**/*.{js,ts}',
  ],
  presets: [myui], // 作为预设使用
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```

同时，在你的主样式文件（如 `src/index.css`）中引入 Tailwind 的基础指令：

```css
@import 'tailwindcss';
```

#### 3. 使用组件

现在你可以在你的 SolidJS 组件中直接引入和使用 MyUI 组件了。

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

### 方式二：作为纯 Web Components 使用

无需任何前端框架，你可以直接在 HTML 中使用本库的组件。

#### 1. 通过 CDN 引入

这是最快体验的方式。在你的 HTML 文件中加入以下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MyUI Web Components Demo</title>
  <!-- 
    要获得完整的视觉效果，你需要引入 Tailwind CSS 或本库的预构建样式。
    为了快速演示，这里我们直接使用 unpkg 上的预构建 CSS。
    注意：这并非生产环境的最佳实践。
  -->
  <link rel="stylesheet" href="https://unpkg.com/@jujb233/myui/dist/my-ui.css">

  <!-- 引入 Web Components 脚本 -->
  <script type="module">
    // 这个脚本会自动注册 <myui-*> 标签
    import 'https://unpkg.com/@jujb233/myui/dist/my-ui.js';
  </script>
</head>
<body>

  <h3>Web Components 示例</h3>

  <myui-button variant='{"role":"primary","color":"blue"}' onclick="alert('Hello from Web Component!')">
    点我 (Web Component)
  </myui-button>

  <myui-card title="Web Component Card" shadow="lg" style="margin-top: 20px; max-width: 300px;">
    <myui-card-content>
      这是一个通过纯 HTML 标签创建的卡片。
    </myui-card-content>
    <myui-card-footer>
      卡片底部
    </myui-card-footer>
  </myui-card>

</body>
</html>
```

> **属性传递**：
> - 简单属性（字符串、数字）直接写，如 `title="My Card"`。
> - 复杂属性（对象、数组）需要传递 JSON 字符串，如 `variant='{"role":"primary"}'`。

### 方式二：作为 Web Components 在打包项目中使用 (Vite, etc.)

如果你的项目使用 Vite、Webpack 等工具，可以轻松集成 MyUI 的 Web Components。

**步骤 1：安装 MyUI**

```bash
npm install @jujb233/myui
```

**步骤 2：在项目入口文件引入**

打开你的项目主文件（如 `src/main.ts`），引入 Web Components 注册脚本和样式。

```ts
// src/main.ts

// 1. 引入 Web Components 注册脚本
// 这将自动查找并注册所有 <myui-*> 标签
import '@jujb233/myui/web-components';

// 2. 引入 MyUI 的预构建样式
import '@jujb233/myui/dist/my-ui.css';

// 你原有的应用代码可以保留或修改
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello MyUI!</h1>
  <myui-button variant='{"role": "primary", "color": "blue"}'>Click Me</myui-button>
`
```

> **提示**：`@jujb233/myui/web-components` 入口会自动执行注册。如果你需要手动控制注册时机或自定义标签前缀，可以这样做：
> ```ts
> import { registerMyUIWebComponents } from '@jujb233/myui/web-components';
> 
> // 在合适的时机调用
> registerMyUIWebComponents('custom-prefix'); // 将注册 <custom-prefix-button> 等
> ```

**步骤 3：直接在 HTML 中使用**

你可以在 `index.html` 中直接使用组件标签，这是 Web Components 的魅力所在。

```html
<!-- index.html -->
<body>
  <div id="app">
    <h1>Hello MyUI in HTML!</h1>
    <myui-card title="My Awesome Card" shadow="lg">
      <myui-card-content>
        This card is rendered directly in HTML.
      </myui-card-content>
    </myui-card>
  </div>
  <!-- 确保你的 JS 入口文件被加载 -->
  <script type="module" src="/src/main.ts"></script>
</body>
```

**步骤 4：配置 TypeScript 类型提示 (可选但推荐)**

为了在 TypeScript 文件中操作自定义元素（如 `document.querySelector('myui-button')`）时获得正确的类型提示，你可以在 `tsconfig.json` 中进行配置。

首先，在 `src` 目录下创建一个类型声明文件，例如 `src/vite-env.d.ts` (Vite 已默认创建)，并添加以下内容：

```ts
/// <reference types="vite/client" />

// 引入 MyUI 的 Web Components 类型
import type { MyUIWebComponentTagNames } from '@jujb233/myui/web-components';

declare global {
  namespace JSX {
    // 告知 TypeScript JSX 工厂函数如何处理 myui-* 标签
    interface IntrinsicElements extends MyUIWebComponentTagNames {}
  }
}
```

这样配置后，当你在 TSX 文件或通过 `document.createElement` 创建元素时，TypeScript 就能识别这些标签及其属性了。

### 查看所有组件

- **本地快速预览**：
  - 克隆本仓库，运行 `npm install`。
  - 运行 `npm run dev`，浏览器会打开一个包含所有组件示例的页面。

- **在线文档**（TODO）：
  - 未来会上线一个完整的组件文档网站。

## 纯 Web Components 使用（无需任何框架）

本库提供了原生 Web Components 封装，可在不依赖 React/Solid/Vue 的环境直接使用 `<myui-*>` 标签。

### 我怎么看到使用效果？

- 本仓库快速预览（推荐）：
  - 运行开发演示：`npm run dev`，浏览器打开控制台显示的地址（如 http://localhost:5173/ ），即可在导航中切换 Buttons/Cards/Navs/Panels/Animations/Interactions 示例。
  - 或构建纯静态演示：`npm run build:demos`，然后用文件管理器双击打开 `demo-dist/index.html` 即可离线预览。

- 在你的项目里快速试用（CDN/静态 HTML）：
  ```html
  <!-- 引入已打包的 Web Components 入口（包含依赖） -->
  <script type="module" src="https://unpkg.com/@jujb233/myui/dist/my-ui.js"></script>

  <!-- 提示：为获得完整视觉效果，需搭配本库样式。 -->
  <link rel="stylesheet" href="https://unpkg.com/@jujb233/myui/dist/my-ui.css">

  <myui-button variant='{"role":"primary","color":"blue"}' onclick="alert(`Hello`)"
    >Hello MyUI</myui-button>
  ```

### 在打包环境使用（Node/npm 项目）

```ts
// 引入注册脚本，它会查找并注册所有组件
import '@jujb233/myui'

// 引入样式
import '@jujb233/myui/dist/my-ui.css'
```

然后在 HTML 中直接写标签：

```html
<myui-button variant='{"role":"primary","color":"blue"}'>点我</myui-button>
```

> 样式说明：组件样式基于 Tailwind CSS 4 构建。若你的项目未集成 Tailwind，可直接复用本仓库 `dist/my-ui.css` 产物，或参考 `tailwind.config.ts` 的写法在你的 Tailwind 配置中引入。

### 可用标签（默认前缀 myui）

| 元素 | 对应 Solid 组件 |
|------|------------------|
| `<myui-button>` | `MyButton` |
| `<myui-card>` | `MyCard` |
| `<myui-nav>` | `MyNav` |
| `<myui-panel>` | `MyPanel` |

属性传递：将原组件的 props 使用 kebab-case 属性或 JSON 字符串传入；JSON 字符串会自动尝试解析（如 `variant='{"role":"primary"}'`）。

事件绑定：可直接使用原生事件，如 `onclick`，或通过脚本：

```js
document.querySelector('myui-button')?.addEventListener('click', () => console.log('clicked'))
```

如果需要避免自动注册（默认在浏览器检测到 window 会立即注册），可以从特定入口导入注册函数：

```ts
import { registerMyUIWebComponents } from '@jujb233/myui/web-components'
registerMyUIWebComponents('x') // 生成 <x-button> 等
```
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
