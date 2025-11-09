# Component Hooks

这里记录与具体组件配套的 Hooks：useMyButton、useMyCard、useMyNav、useMyPanel。文档基于源码的实际 TypeScript 签名整理，包含参数、返回值与简要示例。

---

## useMyButton

为 `MyButton` 计算样式与插槽类名。

签名：
```ts
export type UseMyButtonProps = PositionProps & {
	htmlType?: 'button' | 'submit' | 'reset'
	variant?: ComponentVariant | null
	size?: SizeName
	disabled?: boolean
	className?: string
	glass?: boolean
	shadow?: ShadowName
	interaction?: InteractionProp
	animation?: AnimationProp
}

export type UseMyButtonResult = ComponentHookResult

export function useMyButton(props: UseMyButtonProps): UseMyButtonResult
```

要点：
- `htmlType` 仅描述原生 `<button>` 的 type，不参与 class 计算。
- 属性名为 `className`（非 `class`）。
- `interaction` 的类型为 `InteractionProp`（可以是预设 key 或完整策略对象）。
- 返回的 `ComponentHookResult` 包含 `rootClass: string`、`slots: Record<string,string>`（槽位类名），以及 `rootStyle?: JSX.CSSProperties`（尺寸/定位等内联样式）。

示例：

```tsx
const { rootClass, slots, rootStyle } = useMyButton({
	variant: { role: 'primary', color: 'blue' },
	size: 'medium',
	glass: true,
	shadow: 'md',
	interaction: 'rich',
})

return (
	<button class={rootClass} style={rootStyle} type="button">
		<span class={slots.icon}>{/* icon */}</span>
		<span class={slots.content}>提交</span>
		<span class={slots.options}>{/* trailing */}</span>
	</button>
)
```

---

## useMyCard

为 `MyCard` 计算容器/内容与子区域类名，并基于图片与方向推导布局。

签名：
```ts
export interface UseMyCardProps extends PositionProps, SizeProps {
	variant?: ComponentVariant | undefined
	glass?: boolean
	clickable?: boolean
	className?: string
	bordered?: boolean
	shadow?: ShadowName
	imagePosition?: 'top' | 'left' | 'right' | 'background' | 'bottom' | 'center'
	direction?: 'vertical' | 'horizontal'
	hover?: boolean
	hasImage?: boolean
	disabled?: boolean
	animation?: AnimationProp
}

export function useMyCard(props: UseMyCardProps): ComponentHookResult<{
	size?: SizeName
	sizeConfig?: any
	isHorizontal: boolean
	imagePosition?: string
	clickable?: boolean
	bordered?: boolean
	hasImage?: boolean
}>
```

要点：
- 使用 `className` 字段（非 `class`）。
- 当 `hover` 或 `clickable` 为真时，Hook 会在内部生成一个简单的 `InteractionPolicy`（`enabled: true`）并传入样式构建器；无需手动传入 `InteractionPolicy`。
- 返回的 `ComponentHookResult` 包含：
	- `rootClass` / `rootStyle`（容器类与内联样式）
	- `slots`（image/header/title/content/footer/options/tags 等槽位类名）
	- `slotStyles`（部分槽位的内联样式，如 title/content font-size、image border-radius 等）
	- `extras`（可选的额外元信息：`size`, `sizeConfig`, `isHorizontal`, `imagePosition`, `clickable`, `bordered`, `hasImage`）

示例：

```tsx
const card = useMyCard({ clickable: true, hover: true, hasImage: true, imagePosition: 'left' })

return (
	<div class={card.rootClass} style={card.rootStyle}>
		<img class={card.slots.image} src="/cover.jpg" />
		<div class={card.slots.body} style={card.slotStyles?.body}>
			<header class={card.slots.header}><h3 class={card.slots.title} style={card.slotStyles?.title}>标题</h3></header>
			<div class={card.slots.content}>内容</div>
			<footer class={card.slots.footer}><div class={card.slots.options}>{/* actions */}</div></footer>
		</div>
	</div>
)
```

---

## useMyNav

为 `MyNav` 计算导航、品牌、内容、菜单与操作区的类名；支持可选交互策略。

签名：

```ts
export type UseMyNavOptions = {
	variant?: ComponentVariant
	size?: SizeName
	glass?: boolean
	shadow?: ShadowName
	class?: string
\- 已移除：使用 `interaction={{ enabled: true }}` 或传入预设 key 启用。
	focusRing?: boolean // 当前实现未使用，预留
	interaction?: InteractionPolicy | string
	animation?: AnimationProp
}

export function useMyNav(options: UseMyNavOptions): {
	nav: string
	brand: string
	content: string
	menu: string
	actions: string
}
```
	```ts
	export interface UseMyNavOptions {
	  variant?: ComponentVariant | undefined
	  size?: SizeName | undefined
	  glass?: boolean | undefined
	  shadow?: ShadowName | undefined
	  className?: string | undefined
	  class?: string | undefined
	  id?: string | undefined
	  style?: JSX.CSSProperties | undefined
	  focusRing?: boolean | undefined
	  interaction?: InteractionProp | undefined
	  animation?: AnimationProp | undefined
	}

	export function useMyNav(options: UseMyNavOptions): ComponentHookResult
	```

	要点：
	- 接口包含同时支持 `className` 与 `class` 字段（历史兼容），推荐使用 `className`。
	- `interaction` 可以是字符串预设（如 `'none'|'basic'|'rich'`）或完整对象；当传入字符串时，内部会用 `INTERACTION_PRESETS` 做映射。
	- 返回值包含 `rootClass`, `rootStyle`（padding 被移到 style）和 `slots: { brand, content, menu, options }`。

	示例：

	```tsx
	const nav = useMyNav({ size: 'medium', interaction: 'basic' })

	return (
	  <nav class={nav.rootClass} style={nav.rootStyle}>
	    <div class={nav.slots.brand}>Brand</div>
	    <div class={nav.slots.content}><div class={nav.slots.menu}>{/* menu */}</div></div>
	    <div class={nav.slots.options}>{/* actions */}</div>
	  </nav>
	)
	```
export function useMyPanel(
	props: UseMyPanelProps & { backgroundImage?: string }
): { panel: string; background?: string; header: string; content: string; footer: string }
```

要点：
- 传入 `backgroundImage` 时会返回 `background` 类名，可配合一张覆盖式 `<img>` 或 `<div>` 背景层一起使用；Hook 本身不创建元素。
- 默认 `interaction='rich'`，可传字符串预设或完整策略对象。
```ts
export type UseMyPanelProps = PositionProps & SizeProps & {
  variant?: ComponentVariant | undefined
  glass?: boolean
  shadow?: ShadowName
  className?: string
  disabled?: boolean
  interaction?: InteractionProp | undefined
  animation?: AnimationProp | undefined
}

export function useMyPanel(props: UseMyPanelProps & { backgroundImage?: string }): ComponentHookResult
```

要点：
- 使用 `className`（非 `class`）。
- 如果传入 `backgroundImage`，返回的 `slots.background` 为一个可用于渲染背景元素的类字符串（Hook 不创建 DOM 元素）。
- 默认值来自 `defaultValues.UseMyPanelProps`（在 `src/Options/Configs/defaultGroups/componentHooks.ts` 中定义，默认 `interaction` 为 `undefined`）。
- 返回值包含 `rootClass`, `rootStyle`, `slots` 与 `slotStyles`（例如 header/content 的字体尺寸）。

示例：

```tsx
const panel = useMyPanel({ backgroundImage: '/bg.jpg', size: 'large' })

return (
  <section class={panel.rootClass} style={panel.rootStyle}>
    {panel.slots.background && <img src="/bg.jpg" class={panel.slots.background} aria-hidden />}
    <header class={panel.slots.header} style={panel.slotStyles?.header}>标题</header>
    <div class={panel.slots.content} style={panel.slotStyles?.content}>内容</div>
    <footer class={panel.slots.footer}>页脚</footer>
  </section>
)
```

