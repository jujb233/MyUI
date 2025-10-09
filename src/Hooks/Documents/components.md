# Component Hooks

此文档记录了与特定组件相关的 Hooks。这些 Hooks 封装了组件的样式、状态和行为逻辑，使得组件本身更专注于渲染。

## `useMyButton`

`useMyButton` 是为 `MyButton` 组件设计的 Hook。它负责处理按钮的所有样式逻辑，包括：

-   根据 `variant` (如 `primary`, `secondary`) 和 `color` 生成主题样式。
-   处理 `size` 属性，应用不同的内边距和字体大小。
-   管理 `disabled`, `glass`, `shadow` 等状态的样式。
-   使用 `styleUtil.ClassNameBuilder` 构建最终的 CSS 类名字符串，以优化性能和可读性。

## `useMyCard`

`useMyCard` 用于 `MyCard` 组件，处理卡片的布局和样式。

-   根据 `variant`, `color`, `glass`, `bordered`, `shadow` 等属性生成卡片容器的样式。
-   通过 `useCardLayout` Hook 计算布局属性，例如判断是水平还是垂直布局。
-   管理 `clickable` 和 `hoverable` 状态，并应用相应的交互样式。
-   构建容器 (`containerClasses`) 和内容区域 (`bodyClasses`) 的 CSS 类。

## `useMyNav`

`useMyNav` 用于 `MyNav` 导航栏组件。

-   基于 `variant` 和 `color` 应用主题。
-   处理 `glass` 和 `shadow` 效果。
-   提供 `interactionEnabled` 选项来控制是否对整个导航栏容器应用交互样式。
-   生成最终的 `navClasses` 以供组件使用。

## `useMyPanel`

`useMyPanel` 是为 `MyPanel` 面板组件设计的 Hook。

-   处理面板的背景、尺寸和主题样式。
-   支持 `backgroundImage` 属性。
-   管理 `disabled` 状态。
-   根据 `variant`, `size`, `glass`, `shadow` 等属性生成样式。

