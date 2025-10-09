# 动画（Animation）指南

本库为组件提供轻量的动画属性与 Hook，基于 Tailwind CSS 动画类或自定义类实现。

## 动画类型与配置

- 定义位置：`src/Options/Animations/Animation.ts`
- 类型：
	- `AnimationType`: `fade` | `slide-up` | `slide-down` | `scale-in` | `pulse` | `spin`
	- `AnimationConfig`: `{ type, duration?, delay?, easing? }`
	- `AnimationProp`: `AnimationType | AnimationConfig`

## Hook：useAnimation

- 位置：`src/Components/MyUI/Hooks/useAnimation.ts`
- 输入：`animation?: AnimationProp`
- 输出：`string`（可直接拼到 className）
- 行为：
	- 映射 `type` 到对应类（如 `animate-fade`）
	- 映射 `duration` / `delay` / `easing` 到 CSS 任意属性类：
		- `[animation-duration:...]` / `[animation-delay:...]` / `[animation-timing-function:...]`