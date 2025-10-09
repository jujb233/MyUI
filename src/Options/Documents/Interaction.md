# 交互（Interaction）指南

本库统一了交互行为（hover / focus / active / transition / disabled-reset），并允许组件的 Hook 决定开启哪些具体交互和细粒度效果。

## `buildInteractionClasses`

这是一个辅助函数，用于根据传入的选项构建一组 Tailwind CSS 类名，以实现常见的 UI 交互效果。

### 参数 (`BuildInteractionOptions`)

-   `enabled?: boolean`: 交互总开关，默认为 `true`。如果为 `false`，则不生成任何交互类。
-   `hover?: boolean`: 是否启用 `hover` 效果 (放大)，默认为 `true`。
-   `active?: boolean`: 是否启用 `active` 效果 (缩小)，默认为 `true`。
-   `transition?: boolean`: 是否启用过渡动画，默认为 `true`。
-   `disabledReset?: boolean`: 在禁用状态下是否重置 `hover` 和 `active` 时的缩放效果，默认为 `true`。

### 返回值

返回一个包含所有已启用交互效果的 Tailwind CSS 类名的字符串。

### 示例

```typescript
import { buildInteractionClasses } from './interaction';

// 默认交互
const defaultClasses = buildInteractionClasses(); 
// -> "transition-transform hover:scale-[1.02] active:scale-95 disabled:hover:scale-100 disabled:active:scale-100"

// 禁用 active 效果
const noActiveClasses = buildInteractionClasses({ active: false });
// -> "transition-transform hover:scale-[1.02] disabled:hover:scale-100 disabled:active:scale-100"

// 完全禁用交互
const disabledClasses = buildInteractionClasses({ enabled: false });
// -> undefined
```

## 默认配置

为了方便和统一，本库导出了两个默认配置对象。

### `DEFAULT_INTERACTION_BEHAVIOR`

定义了组件默认开启哪些交互行为。

```typescript
export const DEFAULT_INTERACTION_BEHAVIOR: InteractionBehavior = {
  hover: true,      // 开启 hover
  focus: true,      // 开启 focus
  active: true,     // 开启 active
  transition: true, // 开启过渡
  disabled: true,   // 开启禁用状态处理
}
```

### `DEFAULT_INTERACTION_EFFECTS`

定义了各种交互状态下的具体效果值（例如缩放比例、透明度等）。

```typescript
export const DEFAULT_INTERACTION_EFFECTS: InteractionConfig = {
  scale: {
    hover: 1.02,
    active: 0.98,
    disabled: 1,
  },
  opacity: {
    hover: 0.9,
    active: 0.8,
    disabled: 0.6,
  },
}
```

组件的 Hook 可以使用这些默认值，也可以根据自身需要进行覆盖，从而实现灵活且统一的交互设计。