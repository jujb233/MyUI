
# MyTitle

简短描述：一个轻量的语义标题组件，用于渲染 h1–h6 标签。若没有 children，则不渲染任何内容（返回 null）。

导出：
- 命名导出：`MyTitle`（在 `myTitle.tsx` 中以 `export const MyTitle` 导出）
- 默认导出：`default` （`export default MyTitle`）

源码位置：`src/Components/Parts/myTitle/myTitle.tsx`

注意：目前 `src/Components/Parts/myTitle/index.ts` 文件是空的，所以直接从目录的 barrel 导出可能不可用。你可以按项目路径导入组件，例如：

```tsx
// 调整导入路径以匹配你的别名/构建配置
import MyTitle from 'src/Components/Parts/myTitle/myTitle'
// 或者
import { MyTitle } from 'src/Components/Parts/mytitle/myTitle' // 注意大小写需与文件系统一致
```

## 用法概览

这个组件会根据 `level` 属性选择对应的语义标签（h1..h6），默认 level 为 3（渲染为 `<h3>`）。组件接收 `children`（要显示的标题文本或节点）以及可选的 `className` 用于样式扩展。

### Props

- `children?: React.ReactNode` — 标题内容；若为空（falsy）组件将返回 `null`。
- `level?: 1 | 2 | 3 | 4 | 5 | 6` — 标题等级，默认 `3`。
- `className?: string` — 附加的 class 名称，会与默认样式类 `myui-title` 一起合并（使用 `clsx`）。

示例 TypeScript 类型定义（来自源码）：

```ts
export type MyTitleProps = {
	children?: React.ReactNode
	/** Heading level 1-6 (defaults to 3) */
	level?: 1 | 2 | 3 | 4 | 5 | 6
	className?: string
}
```

## 示例

基本示例：

```tsx
import React from 'react'
import MyTitle from 'src/Components/Parts/myTitle/myTitle'

export default function Example() {
	return (
		<div>
			<MyTitle level={1}>主标题</MyTitle>
			<MyTitle level={2} className="accent">章节标题</MyTitle>
			<MyTitle>默认三级标题（h3）</MyTitle>
		</div>
	)
}
```

条件渲染（空 children 不渲染）：

```tsx
// 下面不会在 DOM 中输出任何标题
<MyTitle>{null}</MyTitle>
```

## 可访问性（A11y）建议

- 请维护页面语义：不要在页面中乱用不同等级的标题，保持层次结构（例如不要直接从 `h1` 跳到 `h4`）。
- 每个页面建议只使用一个 `h1`，其余为章节标题使用 `h2`–`h6`。
- 标题文本尽量使用纯文本或带有简单内联元素的节点，避免把复杂交互放在标题内部。

## 样式与类名

组件会自动添加 `myui-title` 基本类名，你可以通过 `className` 追加更多类用于自定义样式。项目中的全局样式（如 `styles/myui`）可能已经为 `myui-title` 提供了默认样式。

## 注意事项与边界情况

- 如果需要动态控制标题等级（例如从 API 获取），请确保传入的值限制在 1..6 之间，否则组件会回退到 `h3`（源码中使用 `tagMap[level] ?? 'h3'`）。
- 在 SSR 场景中，返回 `null` 时不会输出占位节点，确保上层布局不会依赖标题节点的存在来计算高度或焦点流程。

## 建议的改进（可选）

- 在 `src/Components/Parts/myTitle/index.ts` 添加导出，以便通过 `import { MyTitle } from 'src/Components/Parts/myTitle'` 更方便地引用：

```ts
export { MyTitle } from './myTitle'
export { default } from './myTitle'
```

---

文档结束：如果你想，我可以把组件的简单 Storybook 示例、测试用例（渲染/快照/可访问性检查）或在 `index.ts` 中添加默认导出一并提交。 
