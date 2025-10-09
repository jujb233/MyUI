# behavior 模块接口文档

该模块定义了组件行为相关的接口，如 Hook 能力、交互行为等，便于为组件添加统一的行为扩展。

## 所有 API 列表

### 1. UseComponentBaseResult
**文件**：`hook.ts`  
**说明**：定义与行为钩子（hooks）相关的类型与契约，用于组件行为复用。Hook 返回值约定（基础）：统一命名 rootStyle/rootClasses。
```ts
export interface UseComponentBaseResult {
    rootStyle: React.CSSProperties
    rootClasses: string
}
```

### 2. InteractionType
**文件**：`interaction.ts`  
**说明**：交互状态类型。
```ts
export type InteractionType = 'hover' | 'focus' | 'active' | 'disabled'
```

### 3. InteractionBehavior
**文件**：`interaction.ts`  
**说明**：用于描述组件在不同交互状态下（hover/focus/active/disabled）是否启用以及是否启用过渡等通用行为。此接口用于在组件级别声明哪些交互能力应该被开启并由 Hook/主题层去实际应用。
```ts
export interface InteractionBehavior {
    /** 是否启用悬停效果（hover） */
    hover?: boolean
    /** 是否启用聚焦效果（focus） */
    focus?: boolean
    /** 是否启用激活效果（active） */
    active?: boolean
    /** 是否启用过渡动画（transition） */
    transition?: boolean
    /** 当组件被禁用时，是否禁用交互行为 */
    disabled?: boolean
}
```

### 4. InteractionConfig
**文件**：`interaction.ts`  
**说明**：定义在不同交互状态下的视觉变换细节（缩放、透明度、背景、阴影等）。
```ts
export interface InteractionConfig {
    /** 缩放（scale）配置 */
    scale?: {
        hover?: number | string
        active?: number | string
        disabled?: number | string
    }
    /** 透明度（opacity）配置 */
    opacity?: {
        hover?: number | string
        active?: number | string
        disabled?: number | string
    }
    /** 背景色变化配置 */
    background?: {
        hover?: string
        active?: string
        disabled?: string
    }
    /** 阴影效果配置 */
    shadow?: {
        hover?: string
        focus?: string
        active?: string
    }
}
```

### 5. InteractionPolicy
**文件**：`interaction.ts`  
**说明**：组件交互策略，由各组件的 Hook 决定开启哪些具体交互能力。
```ts
export interface InteractionPolicy {
    /** 总开关 */
    enabled?: boolean
    /** 具体交互行为配置 */
    behavior?: InteractionBehavior
    /** 视觉反馈配置 */
    effects?: InteractionConfig
    /** 自定义类名 */
    classes?: {
        [key in InteractionType]?: string
    }
}
```

### 6. SupportsInteractionPolicy
**文件**：`interaction.ts`  
**说明**：提供一个“组件可声明交互策略”的接口，供 Hook/组件实现。
```ts
export interface SupportsInteractionPolicy {
    getInteractionPolicy(): InteractionPolicy
}
```

## 用法示例
可在新组件中按需组合这些接口，实现一致的行为扩展。

---

详见各接口源码与注释。