# core 模块接口文档

该模块聚焦于组件的核心能力，如事件、状态、样式等，提供基础的类型定义和扩展点。

## 所有 API 列表

### 1. Pressable<T extends HTMLElement = HTMLElement>
**文件**：events.ts  
**说明**：按压/点击事件接口，定义 `onClick` 事件。
```ts
export interface Pressable<T extends HTMLElement = HTMLElement> {
	onClick?: React.MouseEventHandler<T>
}
```

### 2. Disableable
**文件**：state.ts  
**说明**：可禁用能力接口，定义 `disabled` 属性。
```ts
export interface Disableable {
	disabled?: boolean
}
```

### 3. StyleProps
**文件**：style.ts  
**说明**：样式与通用 DOM 属性接口，定义 `className`、`id` 属性。
```ts
export interface StyleProps {
	className?: string
	id?: string
}
```

## 用法示例
可在组件开发中直接复用这些接口，实现事件、状态、样式的统一处理。

---

详见各接口源码与注释。