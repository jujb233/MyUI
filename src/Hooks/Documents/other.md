# Other Hooks

这里记录与具体组件无强绑定的 Hook。

## useCardLayout

服务于 `MyCard` 的基础布局推导。

签名：

```ts
export type UseCardLayoutProps = {
	direction?: 'vertical' | 'horizontal'
	imagePosition?: 'top' | 'left' | 'right' | 'background' | 'bottom' | 'center'
	hasImage?: boolean
}

export function useCardLayout(props: UseCardLayoutProps): {
	isHorizontal: boolean
	imagePosition: UseCardLayoutProps['imagePosition']
}
```

规则：
- 当 `direction === 'horizontal' && hasImage && imagePosition !== 'top'` 时，`isHorizontal` 为 true；否则为 false。

示例：

```ts
const { isHorizontal } = useCardLayout({ direction: 'horizontal', imagePosition: 'left', hasImage: true })
```

备注：目前仓库中仅导出了本 Hook（见 `src/Hooks/index.ts`）。文档中曾出现的 `useComponentClasses`、`useComponentStyle`、`useComponentTheme` 等 Hook 并不存在于本仓库导出，已移除以避免误导。

