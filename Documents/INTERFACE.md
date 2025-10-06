# Interfase 统一接口指南

本文档详细说明本库的“统一 API 接口（Interfase）”体系：它将组件的通用能力拆分为职责单一的小接口，以便在新组件中按需组合，保持一致的 Props、主题、交互与可访问性体验。

## 为什么使用 Interfase

- **统一**：新组件通过组合相同的小接口，天然获得一致的 Props 命名与行为。
- **可维护**：职责单一、清晰边界，类型与文档更易演进。
- **低心智**：在开发与使用组件时，能快速预期 API 形状与默认值。

## 核心 API 属性

以下是可在大多数组件中通用的核心属性，它们由不同的接口模块提供。

### 主题与样式 (`theme.ts`, `style.ts`)

这些是构建组件视觉表现的基础。

- `variant`: `ComponentVariant` - 对象形式的主题配置，结构为 `{ role, color }`。
  - `role`: `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text'`
  - `color`: `'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray'` (更多颜色见 `colorPresets.ts`)
- `size`: `'small' | 'medium' | 'large'` (默认 `'medium'`)
- `glass`: `boolean` - 是否启用玻璃态效果 (默认 `true`)
- `shadow`: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'` - 阴影等级。
- `className`: `string` - 自定义 CSS 类名。
- `style`: `React.CSSProperties` - 自定义内联样式。
- `id`: `string` - DOM 元素的 ID。

**示例：**
```tsx
import { MyButton, MyCard } from '@jujb233/myui';

// 语义为主操作（primary），色调为 blue
<MyButton variant={{ role: 'primary', color: 'blue' }} size="large" />

// 柔和风格的容器，带自定义阴影
<MyCard variant={{ role: 'secondary', color: 'green' }} shadow="lg" />
```

### 状态与事件 (`state.ts`, `events.ts`)

控制组件的交互状态和响应。

- `disabled`: `boolean` - 禁用组件，阻止所有交互。
- `onClick`: `React.MouseEventHandler<T>` - 点击事件回调。

### 容器专属 (`container.ts`)

用于卡片、面板等容器类组件。

- `bordered`: `boolean` - 是否显示边框。
- `clickable`: `boolean` - 使容器可点击，通常会附带 `role='button'` 和 `tabIndex=0` 以保证可访问性。
- `hoverable`: `boolean` - 是否在鼠标悬停时显示反馈效果。

### 布局 (`layout.ts`)

控制内容和媒体的排列方式。

- `direction`: `'vertical' | 'horizontal'` - 内部元素的布局方向。
- `imagePosition`: `'top' | 'left' | 'right' | 'background'` - 图片相对于内容的位置。

### 插槽 (`slot/slots.ts`)

为组件提供灵活的内容注入点。

- `icon`: `React.ReactNode` - 在组件前方（或指定位置）渲染图标。
- `actions`: `React.ReactNode` - 在组件末尾（或指定位置）渲染操作按钮或元素。
- `title`: `React.ReactNode` - 组件的标题。
- `footer`: `React.ReactNode` - 组件的页脚区域。
- `backgroundImage`: `string` - 设置容器的背景图片 URL。

### 其他 (`button.ts`, `polymorphic.ts`)

- `buttonType`: `'button' | 'submit' | 'reset'` - 仅用于按钮，指定其 `type` 属性。
- `as`: `React.ElementType` - 多态支持，允许将组件渲染为不同的 HTML 标签，如 `as="a"`。

## 接口定义与导出

大多数对外可用的接口定义位于 `src/Components/MyUI/Interfaces/` 目录，并通过该目录的 `index.ts` 聚合导出（可以从包中直接导入）。该目录下的常用接口包括：

- `theme.ts`: `ThemeProps`, `ThemeContextValue`
- `style.ts`: `StyleProps`
- `state.ts`: `Disableable`
- `container.ts`: `Borderable`, `Clickable`
- `layout.ts`: `OrientationProps`, `MediaPlacementProps`
- `slot/slots.ts`: `WithIcon`, `WithActions`, `WithTitle`, `WithFooter`, `WithBackgroundImage`
- `events.ts`: `Pressable<T>`
- `button.ts`: `HtmlButtonType` (包含 `buttonType?: 'button'|'submit'|'reset'`)
- `polymorphic.ts`: `AsComponent`, `PolymorphicComponentProps`
- `hook.ts`: `UseComponentBaseResult`（库内 Hooks 的标准返回字段）
- `animation.ts`: `AnimationProps`

注意：一些内部/可选的交互构建工具位于 `src/Components/MyUI/Interfaces/interaction.ts` （交互策略的类型定义），以及 `src/Options/Interactions/interaction.ts`（提供 `buildInteractionClasses`、`INTERACTION_PRESETS` 等实用函数和预设）。

**顶层导入示例：**
```ts
import type {
  ThemeProps,
  StyleProps,
  Disableable,
  Borderable,
  Clickable,
  OrientationProps,
  MediaPlacementProps,
  WithIcon,
  WithActions,
  WithTitle,
  WithFooter,
  WithBackgroundImage,
  Pressable,
  HtmlButtonType,
  UseComponentBaseResult,
  AnimationProps,
} from '@jujb233/myui';
```

## 新组件组合示例

通过组合这些标准接口，可以快速定义新组件的 Props。

- **交互型组件 (如按钮):**
```ts
export type MyActionProps =
  ThemeProps &
  StyleProps &
  Disableable &
  Pressable<HTMLButtonElement> &
  WithIcon &
  WithActions &
  HtmlButtonType & {
    children?: React.ReactNode;
  };
```

- **容器型组件 (如卡片/面板):**
```ts
export type MyContainerProps =
  ThemeProps &
  StyleProps &
  Borderable &
  Clickable &
  OrientationProps &
  MediaPlacementProps &
  Pressable<HTMLDivElement> & {
    children?: React.ReactNode;
  };
```

## 内部实现约定

- **Hooks 返回值**: 库内 Hooks 使用 `rootStyle` 和 `rootClasses` 作为标准返回字段，以统一不同组件的样式和类名输出。
- **Context**: 每个组件的 Context 至少应包含 `ThemeContextValue` 的字段，确保主题和状态能正确传递给子组件。
- **可访问性 (A11y)**: `clickable` 的容器应添加 `role='button'` 和 `tabIndex=0`，并支持键盘交互和焦点环。

通过遵循此 Interfase 指南，我们可以确保整个组件库的 API 设计保持高度一致和可预测。
