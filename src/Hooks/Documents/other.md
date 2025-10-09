# Other Hooks

此文档记录了通用或非特定于单个组件的 Hooks。这些 Hooks 提供了在多个组件之间共享的通用逻辑，例如样式计算、类名生成和布局管理。

## `useCardLayout`

这是一个非常简单的 Hook，专门用于 `MyCard` 组件内部，以确定其布局方式。

-   根据 `direction` 和 `imagePosition` 属性，计算出卡片是否应采用水平布局 (`isHorizontal`)。
-   它将布局逻辑从 `useMyCard` 中分离出来，使代码更清晰。

## `useComponentClasses`

这是一个更通用的 Hook，用于根据一系列属性动态生成 CSS 类名。

-   它接收 `baseClass`, `direction`, `sizeConfig`, `glass`, `hoverable`, `clickable` 等属性。
-   使用 `styleUtil.ClassNameBuilder` 来构建一个完整的 CSS 类字符串。
-   主要用于需要复杂类名组合的组件，以保持组件代码的整洁。

## `useComponentStyle`

此 Hook 用于根据组件的属性（如 `variant`, `color`, `glass`, `shadow`）动态生成内联样式对象。

-   它内部调用 `useComponentTheme` 来获取主题变量。
-   将主题变量与 `bordered` 等其他属性结合，生成最终的 `style` 对象。
-   这使得组件的样式逻辑与主题系统紧密集成。

## `useComponentTheme` / `useThemeStyles`

这是主题系统的核心 Hook。`useComponentTheme` 是 `useThemeStyles` 的别名。

-   它接收 `intensity` (variant), `color`, `glass`, `shadow` 等主题相关选项。
-   调用 `resolveTheme` 和 `resolveElevation` 来计算最终的 CSS 变量和样式。
-   使用 `useMemo` 进行性能优化，只有在关键参数（如 `variant`, `color`, `glass`）变化时才重新计算样式。
-   返回一个包含 `theme` (CSS 变量) 和 `style` (最终样式对象) 的结果。

