# 动画（Animation）指南

本库为组件提供轻量的动画属性与 Hook，基于 Tailwind CSS 动画类或自定义类实现。

## 动画类型与配置

- 定义位置：`src/Options/Animations/Animation.ts`
- 类型：
	- `AnimationType`: `fade` | `slide-up` | `slide-down` | `scale-in` | `pulse` | `spin`
	- `AnimationConfig`: `{ type, duration?, delay?, easing? }`
	- `AnimationProp`: `AnimationType | AnimationConfig`
	- 常量：`animationMap`（类型到类名映射）、`easingValueMap`（缓动关键字到 timing-function 值）

> 说明：目前库中未提供内置的 `useAnimation` Hook；请直接使用上述类型与常量在组件中生成需要的类名。

## 在组件中使用（示例）

下面是一个小工具函数示例，展示如何将 `AnimationProp` 转为可拼接到 `className` 的类名字符串：

```ts
import type { AnimationProp } from '../Animations';
import { animationMap, easingValueMap } from '../Animations';

export function toAnimationClasses(animation?: AnimationProp): string | undefined {
	if (!animation) return undefined;

	const cfg = typeof animation === 'string' ? { type: animation } : animation;
	const classes: string[] = [];

	// 1) 类型到类名
	const typeClass = animationMap[cfg.type];
	if (typeClass) classes.push(typeClass);

	// 2) 可选参数映射到 CSS 任意属性类
	if (cfg.duration != null) classes.push(`[animation-duration:${cfg.duration}ms]`);
	if (cfg.delay != null) classes.push(`[animation-delay:${cfg.delay}ms]`);
	if (cfg.easing) classes.push(`[animation-timing-function:${easingValueMap[cfg.easing]}]`);

	return classes.join(' ');
}
```

使用示例：

```tsx
// 简单类型
const a1 = toAnimationClasses('fade');

// 详细配置
const a2 = toAnimationClasses({
	type: 'slide-up',
	duration: 300,
	delay: 50,
	easing: 'in-out',
});

// <div className={a2}> ... </div>
```