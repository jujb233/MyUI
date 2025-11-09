# 交互（Interaction）指南

交互构建相关代码位于：`src/Options/Interactions/interaction.ts`。

主要导出：

- `buildInteractionClasses(options?: BuildInteractionOptions): string | undefined` — 根据选项返回一串 Tailwind 类名（或在禁用时返回 undefined）。
- `DEFAULT_INTERACTION_BEHAVIOR` — 默认的行为开关集合（hover/focus/active/transition/disabled）。
- `DEFAULT_INTERACTION_EFFECTS` — 默认的效果值（scale / opacity 等）。

BuildInteractionOptions 概要：

- `enabled?: boolean` — 总开关，默认 true；为 false 时返回 undefined。
- `hover?: boolean` — 是否启用 hover，默认 true。
- `active?: boolean` — 是否启用 active，默认 true。
- `transition?: boolean` — 是否包含过渡，默认 true（会加入 `transition-transform`）。
- `disabledReset?: boolean` — 禁用态是否重置 hover/active 的 scale，默认 true。

示例：

```ts
import { buildInteractionClasses } from '../../Options/Interactions/interaction'

buildInteractionClasses() // -> 'transition-transform hover:scale-[1.02] active:scale-95 disabled:hover:scale-100 disabled:active:scale-100'

buildInteractionClasses({ active: false }) // -> 'transition-transform hover:scale-[1.02] disabled:hover:scale-100 disabled:active:scale-100'

buildInteractionClasses({ enabled: false }) // -> undefined
```

默认值（来自 `DEFAULT_INTERACTION_BEHAVIOR` / `DEFAULT_INTERACTION_EFFECTS`）：

- 行为默认开启 hover / focus / active / transition / disabled。
- 缩放相关默认：hover 约 1.02，active 约 0.98，disabled 为 1。
- 不同的交互预设（见 `src/Options/Presets/interactionPresets.ts`）会覆盖这些默认项以实现 `basic`、`rich`、`minimal` 等策略。

组件或 Hook 应使用这些导出以便统一交互样式，也可以在组件层面做覆盖以实现自定义反馈。