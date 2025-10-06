# 交互（Interaction）指南

本库统一了交互行为（hover / focus / active / transition / disabled-reset），并允许组件的 Hook 决定开启哪些具体交互和细粒度效果。

## 基础 API

- `buildInteractionClasses(options?: BuildInteractionOptions): string | undefined`
  - 位置：`src/Options/Interactions/interaction.ts`（也通过 `Options` 聚合导出）
  - 返回：当 `enabled` 为 false 时返回 `undefined`，否则返回由若干 Tailwind 类拼接的字符串。
  - 默认生成（示例）类：
    - `transition-transform`
    - `hover:scale-[1.02]`
    - `active:scale-95`
    - 禁用态重置：`disabled:hover:scale-100`、`disabled:active:scale-100`
  - 可选开关（`BuildInteractionOptions`）：
    - `enabled`（总开关，默认 true）
    - `hover`（默认 true）
    - `active`（默认 true）
    - `transition`（默认 true）
    - `disabledReset`（默认 true）

  - 其它导出：`INTERACTION_PRESETS`（预设策略，例如 `none`, `basic`, `rich`, `minimal`）

## Hook 辅助（建议在组件内部使用）

- `buildHookInteractionClasses(policy?: InteractionPolicy): string`
  - 位置：`src/Components/MyUI/Hooks/useInteraction.ts`
  - 返回：始终返回字符串（当 `enabled` 为 false 时返回空字符串 `''`）。
  - 目的：比 `buildInteractionClasses` 提供更细粒度的控制，允许传入行为、视觉效果和自定义类名映射。适合组件内部根据 props/状态生成最终 className。
  - 使用到的默认常量（在同文件中）：
    - `DEFAULT_INTERACTION_BEHAVIOR`（默认行为开关集合，例如 hover/focus/active/transition/disabled）
    - `DEFAULT_INTERACTION_EFFECTS`（默认视觉效果，如 scale/opacity 的值）

  - 策略（`InteractionPolicy`，定义在 `src/Components/MyUI/Interfaces/interaction.ts`）主要字段：
    - `enabled?: boolean` — 总开关
    - `behavior?: InteractionBehavior` — 行为开关（`hover`, `focus`, `active`, `transition`, `disabled`）
    - `effects?: InteractionConfig` — 视觉反馈配置（`scale`, `opacity`, `background`, `shadow` 等，可为数字或字符串）
    - `classes?: { hover?: string; focus?: string; active?: string; disabled?: string }` — 为各交互态附加/替换类名

  - 焦点 ring：`buildHookInteractionClasses` 在 `behavior.focus` 为 true 时会添加一组 focus ring 类（实现来源于 `FOCUS_RING_CLASSES`，定义在 `src/Components/MyUI/Interfaces/interaction.ts`），并支持通过 `classes.focus` 覆写或追加。

## 组件默认策略示例（实现建议）

- Button：通常开启 `hover` / `active` / `transition` / `focus`（即 focus ring），对 `disabled` 状态关闭视觉交互。
- Card（容器类）：默认开启 `hover` / `active` / `transition`，是否显示 focus ring 可由外部 Hook（例如 `useComponentClasses`）决定。
- Panel：开启 `hover` / `active` / `transition`，默认不启用 focus ring。
- Nav：通常在根级别禁用交互（避免整个导航条产生 hover/active），需要则按需开启。

## 使用示例（与代码一致的写法）

```tsx
// Button 内部（根据 disabled 控制）
const classes = buildHookInteractionClasses({
  enabled: !disabled,
  behavior: { focus: true, hover: true, active: true },
  // 可通过 classes.focus 自定义 focus 样式
  classes: { focus: 'focus-visible:ring-2 focus-visible:ring-offset-2' }
})

// 容器类 Hook（useComponentClasses）
const classesForContainer = buildHookInteractionClasses({
  enabled: hoverable || clickable,
  behavior: { hover: hoverable, focus: false },
})

// 使用 Options 的简易类构建（适用于简单场景）
const simple = buildInteractionClasses({ enabled: true, hover: true, active: true })
```

## 注意事项

- `buildInteractionClasses` 更适合在样式层面直接拼接固定交互类（当你只需要开启/关闭某些全局交互策略时）。当需要按组件状态或要注入自定义类名、不同的 scale/opacity 值时，优先使用 `buildHookInteractionClasses`。
- `buildHookInteractionClasses` 返回字符串（可能为空），请直接拼接到组件的 `className`。
- 交互仅通过 CSS 类（Tailwind）实现，无需额外的 JS 副作用；需要复杂交互（如 ripple）时建议在组件内作为可选功能实现。

## 参考位置

- 策略类型和 FOCUS_RING_CLASSES：`src/Components/MyUI/Interfaces/interaction.ts`
- Hook 实现与默认常量：`src/Components/MyUI/Hooks/useInteraction.ts`
- 简化类构建与预设：`src/Options/Interactions/interaction.ts`

