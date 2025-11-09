# animation.ts（动画配置）

位置：`src/Styles/config/animation.ts`

主要导出

- `animationMap`：动画名称到类名的映射，例如 `{ 'fade': 'animate-fade', 'slide-up': 'animate-slide-up', ... }`。
- `easingValueMap`：缓动关键字到 CSS timing-function 的映射（`linear`, `in`, `out`, `in-out`）。
- `AnimationType`：`keyof typeof animationMap`。
- `EasingType`：`keyof typeof easingValueMap`。
- `AnimationConfig`：详细配置接口：
  - `type: AnimationType`
  - `duration?: number`（ms）
  - `delay?: number`（ms）
  - `easing?: EasingType`
- `AnimationProp = AnimationType | AnimationConfig`。

使用建议

- 在组件中将 `AnimationProp` 解析为 CSS 类或内联样式：推荐结合项目的类名构建器（如 `toAnimationClasses`）把 `animationMap` 与任意属性（duration/delay/easing）拼接为最终 class 字符串或样式。

示例

```ts
import { animationMap, easingValueMap, type AnimationProp } from '../../Styles/config/animation'

function toAnimationClasses(a?: AnimationProp) {
  if (!a) return undefined
  const cfg = typeof a === 'string' ? { type: a } : a
  const parts: string[] = []
  const c = animationMap[cfg.type]
  if (c) parts.push(c)
  if (cfg.duration != null) parts.push(`[animation-duration:${cfg.duration}ms]`)
  if (cfg.delay != null) parts.push(`[animation-delay:${cfg.delay}ms]`)
  if (cfg.easing) parts.push(`[animation-timing-function:${easingValueMap[cfg.easing]}]`)
  return parts.join(' ')
}
```
