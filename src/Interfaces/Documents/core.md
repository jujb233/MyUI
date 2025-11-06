# core 模块接口文档

该模块聚焦于组件的核心能力，如事件、状态、样式等，提供基础的类型定义和扩展点。

## 所有 API 列表

### 1. Disableable
**文件**：state.ts  
**说明**：可禁用能力接口，定义 `disabled` 属性。
```ts
export interface Disableable {
	disabled?: boolean
}
```

### 2. StyleProps
**文件**：style.ts  
**说明**：样式与通用 DOM 属性接口，定义 `class`、`id` 属性。
```ts
export interface StyleProps {
	class?: string
	id?: string
}
```

### 3. Borderable
**文件**：style.ts  
**说明**：边框能力（容器类组件常用）。
```ts
export interface Borderable {
    bordered?: boolean
}
```

## 用法示例
在组件开发中直接复用这些接口，实现状态、样式与边框开关的统一处理。

---

详见各接口源码与注释。