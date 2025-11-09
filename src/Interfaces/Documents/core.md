# core 模块接口文档

该模块聚焦于组件的核心能力，如样式、可用颜色/尺寸、变体等，提供基础的类型定义和扩展点。

## 重要类型与接口

### StyleProps
文件位置：`src/Interfaces/core.ts`
```ts
import type { JSX } from "solid-js"

export interface StyleProps {
  class?: string
  id?: string
  style?: JSX.CSSProperties
}
```

### Disableable
```ts
export interface Disableable {
  disabled?: boolean
}
```

### 基础类型
```ts
export type Color = keyof typeof baseColors
export type SizeName = keyof typeof sizeConfig
export type ShadowName = keyof typeof shadows
export type VariantRole = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text'

export interface ComponentVariant {
  role: VariantRole
  color: Color
}
```

说明：Color/SizeName/ShadowName 来源于 `src/Styles/config`，用于统一命名与映射到实际样式。

更多实现细节请参阅 `src/Interfaces/core.ts`。
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