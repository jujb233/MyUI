# 通用工具

这些是通用的辅助函数，用于处理数据、管理动态主题和错误处理。

## `defaultResolver.ts`

此模块提供了类型安全的默认值合并和空值处理功能。

-   `isNullish(value: unknown)`: 检查值是否为 `null` 或 `undefined`。
-   `mergeDefaults<T>(defaults: T, overrides: Partial<T> | undefined | null)`: 深度合并默认值和覆盖值。如果覆盖值为 `null`，它会覆盖默认值（破坏性更新）。
-   `withDefaults<T>(defaults: T, overrides?: Partial<T> | null)`: `mergeDefaults` 的类型安全包装器，确保类型兼容性。
-   `safeGet<T, K>(obj, key, defaultValue?)`: 安全地访问嵌套属性，避免 `null` 或 `undefined` 错误。
-   `coalesce<T>(value, defaultValue)`: 如果值是 `null` 或 `undefined`，返回默认值，否则返回原值。
-   `hasRequiredKeys<T>(obj, requiredKeys)`: 类型谓词，用于检查对象是否具有所有必需的属性。

## `dynamicThemeManager.ts`

此模块用于在运行时动态注入 CSS 规则，以支持任意颜色主题。

### `ensureThemeClass(colorOrPreset: string, intensity: string)`

为给定的颜色值和强度注入运行时 CSS，并返回一个唯一的 CSS 类名。

它通过将颜色和强度解析为一组 CSS 变量，然后将这些变量注入到 `<style>` 标签中来实现。为了性能，它会缓存已注入的样式。

-   **参数**:
    -   `colorOrPreset: string`: 颜色值（如 `'#ff0000'`）或预设名称（如 `'blue'`）。
    -   `intensity: string`: 强度级别，如 `'solid'`, `'soft'`, `'subtle'`, `'text'`。
-   **返回**: `string` - 生成的 CSS 类名。

## `ErrorCheck.tsx`

一个类似于 `react-error-boundary` 的组件，用于捕获 SolidJS 组件树中的运行时错误。

### `<ErrorCheck {...props} />`

一个组件，用于包裹可能抛出错误的子组件。

-   **Props**:
    -   `children`: 要渲染的子组件。
    -   `fallback`: 发生错误时渲染的 JSX 元素。
    -   `FallbackComponent`: 发生错误时渲染的组件。
    -   `fallbackRender`: 一个渲染函数，用于自定义错误时的显示。
    -   `onError`: 捕获到错误时的回调。
    -   `onReset`: 重置错误状态时的回调。
    -   `resetKeys`: 一个数组，当其内容变化时会自动重置错误状态。

### `useErrorBoundary()`

一个 Hook，用于在 `ErrorCheck` 的子组件中访问错误状态和控制函数。

-   **返回**:
    -   `hasError()`: 是否存在错误。
    -   `error()`: 当前的错误对象。
    -   `resetError()`: 重置错误状态的函数。
    -   `throwError(e)`: 手动触发错误边界的函数。

### `useErrorHandler()`

一个 Hook，返回一个稳定的函数，用于向最近的错误边界报告错误。

### `withErrorBoundary(Component, boundaryProps)`

一个高阶组件（HOC），用于将组件包裹在 `ErrorCheck` 中。
