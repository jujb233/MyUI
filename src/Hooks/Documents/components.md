# Component Hooks

这里记录与具体组件配套的 Hooks：useMyButton、useMyCard、useMyNav、useMyPanel。文档基于源码的实际 TypeScript 签名整理，包含参数、返回值与简要示例。

---

## useMyButton

为 `MyButton` 计算样式与插槽类名。

签名：

```ts
export type UseMyButtonProps = {
	htmlType?: 'button' | 'submit' | 'reset'
	variant?: ComponentVariant
	size?: SizeName
	disabled?: boolean
	className?: string
	glass?: boolean
	shadow?: ShadowName
	interaction?: InteractionPolicy | string
	animation?: AnimationProp
}

export type UseMyButtonResult = {
	rootClass: string
	slots: { icon: string; content: string; options: string }
}

export function useMyButton(props: UseMyButtonProps): UseMyButtonResult
```

要点：
- `htmlType` 仅描述原生 `<button>` 的类型，本 Hook 内不参与类名计算。
- `interaction` 可为预设 key 或完整 `InteractionPolicy` 对象，将影响交互类名的开启与强度。

示例：

```tsx
const { rootClass, slots } = useMyButton({
	variant: { role: 'primary', color: 'blue' },
	size: 'medium', glass: true, shadow: 'md', interaction: 'rich'
})

return (
	<button className={rootClass} type="button">
		<span className={slots.icon}>{/* icon */}</span>
		<span className={slots.content}>提交</span>
		<span className={slots.options}>{/* trailing */}</span>
	</button>
)
```

---

## useMyCard

为 `MyCard` 计算容器/内容与子区域类名，并基于图片与方向推导布局。

签名：

```ts
export type UseMyCardProps = {
	variant?: ComponentVariant
	size?: SizeName
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

export function useMyCard(props: UseMyCardProps): {
	size: SizeName
	sizeConfig: { spacing: string; titleSize: string; contentSize: string; borderRadius: string; minHeight: string }
	containerClasses: string
	bodyClasses: string
	isHorizontal: boolean
	imagePosition: UseMyCardProps['imagePosition']
	// sub-components
	imageClasses: string
	headerClasses: string
	titleClasses: string
	contentClasses: string
	footerClasses: string
	actionsClasses: string
	tagsContainerClasses: string
	tagClasses: string
}
```

要点：
- 交互策略由 `hover` 与 `clickable` 推导（内置开启/关闭 hover 反馈），无需显式传入 `InteractionPolicy`。
- `useCardLayout({ direction, imagePosition, hasImage })` 用于计算 `isHorizontal`。

示例：

```tsx
const card = useMyCard({ clickable: true, hover: true, hasImage: true, imagePosition: 'left' })
return (
	<div className={card.containerClasses}>
		{/* 可选图片区域 */}
		<img className={card.imageClasses} src="/cover.jpg" />
		<div className={card.bodyClasses}>
			<header className={card.headerClasses}><h3 className={card.titleClasses}>标题</h3></header>
			<div className={card.contentClasses}>内容</div>
			<footer className={card.footerClasses}><div className={card.actionsClasses}>{/* actions */}</div></footer>
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
	className?: string
	interactionEnabled?: boolean
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

要点：
- 当 `interactionEnabled` 为 true 时，`interaction` 可使用预设（如 `'none'|'basic'|'rich'`）或完整策略对象。
- 默认 `glass=false`、`shadow='none'`。

示例（在自定义导航中独立使用 Hook）：

```tsx
const cls = useMyNav({ size: 'medium', interactionEnabled: true, interaction: 'basic' })
return (
	<nav className={cls.nav}>
		<div className={cls.brand}>Brand</div>
		<div className={cls.content}>
			<div className={cls.menu}>{/* menu items */}</div>
		</div>
		<div className={cls.actions}>{/* actions */}</div>
	</nav>
)
```

---

## useMyPanel

为 `MyPanel` 计算容器与各区域类名，支持交互策略与背景图。

签名：

```ts
export type UseMyPanelProps = {
	variant?: ComponentVariant
	size?: SizeName
	glass?: boolean
	shadow?: ShadowName
	className?: string
	disabled?: boolean
	interaction?: InteractionPolicy | string
	animation?: AnimationProp
}

export function useMyPanel(
	props: UseMyPanelProps & { backgroundImage?: string }
): { panel: string; background?: string; header: string; content: string; footer: string }
```

要点：
- 传入 `backgroundImage` 时会返回 `background` 类名，可配合一张覆盖式 `<img>` 或 `<div>` 背景层一起使用；Hook 本身不创建元素。
- 默认 `interaction='rich'`，可传字符串预设或完整策略对象。

示例：

```tsx
const cls = useMyPanel({ backgroundImage: '/bg.jpg', size: 'large' })
return (
	<section className={cls.panel}>
		{/* 背景层： */}
		<img src="/bg.jpg" className={cls.background} aria-hidden />
		<header className={cls.header}>标题</header>
		<div className={cls.content}>内容</div>
		<footer className={cls.footer}>页脚</footer>
	</section>
)
```

