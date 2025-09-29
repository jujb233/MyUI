# 交互（Interaction）指南

本库统一了交互行为（hover/active/transition/disabled-reset），并允许组件的 Hook 决定开启哪些具体交互。

## 基础 API

- `buildInteractionClasses(options?: BuildInteractionOptions): string | undefined`
  - 位置：`src/Options/Interactions/interaction.ts`（对外通过 `Options` 导出）
  - 默认效果：
    - `transition-transform`
    - `hover:scale-[1.02]`
    - `active:scale-95`
    - 禁用态重置：`disabled:hover:scale-100 disabled:active:scale-100`
  - 可选开关：
    - `enabled`（总开关，默认 true）
    - `hover`（默认 true）
    - `active`（默认 true）
    - `transition`（默认 true）
    - `disabledReset`（默认 true）

## Hook 辅助（建议在组件内部使用）

- `buildHookInteractionClasses(policy: InteractionPolicy): string | undefined`
  - 位置：`src/Components/MyUI/Interfaces/Interaction.ts`
  - 在基础交互的基础上，可选追加焦点 ring（`focus-visible`）：
    - 默认 ring 类：`focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`
  - 策略（`InteractionPolicy`）字段：
    - `enabled`, `hover`, `active`, `transition`, `disabledReset`, `focusRing`

## 组件默认策略示例

- Button：开启 hover/active/transition/focusRing；禁用时关闭。
- Card 容器：默认开启 hover/active/transition，`focusRing` 由 `useComponentClasses` 的 `focusRing` 决定（默认 false）。
- Panel：开启 hover/active/transition，`focusRing` 关闭。
- Nav：默认关闭交互（避免整个导航条 hover/active）；可通过 `interactionEnabled` 打开。

## 使用示例

```tsx
// Button 内部
const classes = buildHookInteractionClasses({ enabled: !disabled, focusRing: !disabled })

// 容器类 Hook（useComponentClasses）
const classes = buildHookInteractionClasses({ enabled: hoverable || clickable, focusRing })

// Nav（默认关闭，可手动启用）
const classes = buildHookInteractionClasses({ enabled: true, focusRing: false })
```

## 注意事项

- 统一交互仅通过 className 实现，安全、无副作用。
- 需要更复杂的交互（如 ripple），建议作为可选插件在组件内实现，以免全局副作用。
