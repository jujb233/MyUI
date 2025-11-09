# 组件工具

这些工具用于简化复合组件的创建和管理组件 Hooks 的返回结果。

## `componentFactory.ts`

### `createSubcomponentContext<T>(displayName: string)`

为复合组件创建上下文（Context）和提供者（Provider）。

此函数旨在解决在热模块重载（HMR）或存在多个库版本时可能出现的 Provider 类型不匹配问题。它通过在全局对象上注册 Context 来确保在任何时候都使用唯一的 Context 实例。

-   **参数**:
    -   `displayName: string`: 用于调试的组件显示名称。
-   **返回**: `[useContext, Provider, Context]`
    -   `useComponentContext`: 一个 Hook，用于在子组件中安全地访问上下文值。如果未在 Provider 内部使用，将抛出错误。
    -   `Provider`: 上下文的提供者组件。
    -   `Context`: 上下文对象本身。

**示例**:

```typescript
// 在 MyButton/ButtonContext.tsx 中
import { createSubcomponentContext } from '../../Utils/components';

export const [useButtonContext, ButtonProvider, ButtonContext] = createSubcomponentContext<{
  size: 'small' | 'medium' | 'large';
}>('Button');
```

## `componentHookUtils.ts`

### `getSlotClass(result: ComponentHookResult<any>, slotName: string)`

安全地从组件 Hook 的返回结果中获取指定槽位（slot）的 CSS 类名。

-   **参数**:
    -   `result: ComponentHookResult<any>`: 组件 Hook 的返回结果。
    -   `slotName: string`: 要获取的槽位名称。
-   **返回**: `string | undefined` - 如果槽位存在，则返回其类名，否则返回 `undefined`。

### `withExtras<Extras, Added>(result: ComponentHookResult<Extras>, added: Added)`

将额外的属性（extras）合并到组件 Hook 的返回结果中，同时保持不可变性。

-   **参数**:
    -   `result: ComponentHookResult<Extras>`: 原始的组件 Hook 返回结果。
    -   `added: Added`: 要添加的新属性。
-   **返回**: `ComponentHookResult<Extras & Added>` - 一个新的、合并了额外属性的 Hook 结果。
