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

## 用法示例

```tsx
// 简单类型
const cls = useAnimation('fade')

// 详细配置
const cls2 = useAnimation({ type: 'slide-up', duration: 300, delay: 100, easing: 'out' })

return <div className={cls2}>内容</div>
```

## 与交互的配合

- 交互（hover/active）是状态反馈；动画用于入场/强调。
- 可以在同一元素上同时使用：
  - `<button className={clsx(buildHookInteractionClasses({...}), useAnimation('pulse'))}>`。

## 注意

- 需确保项目中存在对应的动画类（如 `animate-fade` 等）。可通过 Tailwind 插件或全局 CSS 定义。
- 若用户设置“减少动态效果（reduce motion）”，建议在业务中对动画进行降级处理。
