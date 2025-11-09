# 动画（Animation）指南

动画相关的定义位于：

- 类型与常量：`src/Styles/config/animation.ts`
- Options 层的导出聚合：`src/Options/Animations/Animation.ts`

主要导出（可直接导入并在组件中使用）：

- `AnimationType`：可用动画名称（由 `animationMap` 的键定义，例如 `fade`、`slide-up`、`scale-in` 等）。
- `AnimationConfig`：详细配置对象，包含 `type`, `duration?`, `delay?`, `easing?`。
- `AnimationProp`：`AnimationType | AnimationConfig`。
- `animationMap`：把动画类型映射为 Tailwind / 自定义类名的对象。
- `easingValueMap`：把自定义缓动关键字映射为 CSS timing-function 的对象。

注意：项目中并没有复杂的内置 Hook 来管理动画；通常的做法是在组件内部或 `ClassName` 构建器里使用上面的常量将配置转为类名或内联样式。

示例工具（把 `AnimationProp` 转为 class 字符串）：

```ts
import type { AnimationProp } from '../../Styles/config/animation'
import { animationMap, easingValueMap } from '../../Styles/config/animation'

export function toAnimationClasses(animation?: AnimationProp): string | undefined {
	if (!animation) return undefined
	const cfg = typeof animation === 'string' ? { type: animation } : animation
	const classes: string[] = []

	const typeClass = animationMap[cfg.type]
	if (typeClass) classes.push(typeClass)

	if (cfg.duration != null) classes.push(`[animation-duration:${cfg.duration}ms]`)
	if (cfg.delay != null) classes.push(`[animation-delay:${cfg.delay}ms]`)
	if (cfg.easing) classes.push(`[animation-timing-function:${easingValueMap[cfg.easing]}]`)

	return classes.join(' ')
}
```

示例用法：

```tsx
const cls = toAnimationClasses({ type: 'slide-up', duration: 300, easing: 'in-out' })
// <div className={cls}>...</div>
```