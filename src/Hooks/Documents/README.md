# Hooks 文档

欢迎来到 MyUI 的 Hooks 文档。本部分包含了所有用于支持组件库功能的自定义 React Hooks。这些 Hooks 旨在封装和重用组件逻辑，特别是关于样式、主题和状态管理的部分，从而使组件代码更加简洁和可维护。

我们的 Hooks 主要分为两类：

-   [Component Hooks](./components.md): 与特定组件紧密耦合的 Hooks，例如 `useMyButton` 或 `useMyCard`。它们处理该组件独有的样式和行为逻辑。
-   [Other Hooks](./other.md): 通用的、可在多个组件之间共享的 Hooks。例如，`useComponentStyle` 用于根据主题和变体计算样式，而 `useComponentClasses` 则用于动态构建 CSS 类名。

通过浏览这些文档，您可以了解每个 Hook 的用途、参数和返回值，从而更好地理解组件的内部工作原理。

