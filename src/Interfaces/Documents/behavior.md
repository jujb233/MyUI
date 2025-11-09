# behavior 模块接口文档

该模块定义组件的交互与行为相关类型：交互状态、行为开关、视觉效果、交互策略，以及“可点击”能力等。

## 所有 API 列表（来自 src/Interfaces/interaction.ts）

### InteractionType
```ts
export type InteractionType = 'hover' | 'focus' | 'active' | 'disabled'
```

### InteractionBehavior
```ts
export interface InteractionBehavior {
  hover?: boolean
  focus?: boolean
  active?: boolean
  transition?: boolean
  disabled?: boolean
}
```

### InteractionConfig
```ts
export interface InteractionConfig {
  scale?: { hover?: number | string; active?: number | string; disabled?: number | string }
  opacity?: { hover?: number | string; active?: number | string; disabled?: number | string }
  background?: { hover?: string; active?: string; disabled?: string }
  shadow?: { hover?: string; focus?: string; active?: string }
}
```

### InteractionPolicy / InteractionProp / InteractionProps
```ts
export interface InteractionPolicy {
  enabled?: boolean
  behavior?: typeof DEFAULT_INTERACTION_BEHAVIOR
  effects?: typeof DEFAULT_INTERACTION_EFFECTS
  classes?: { hover?: string; focus?: string; active?: string; disabled?: string }
}

export type InteractionPresetKey = 'none' | 'basic' | 'rich' | 'minimal'
export type InteractionProp = InteractionPolicy | InteractionPresetKey

export interface InteractionProps {
  interaction?: InteractionProp
}
```

### SupportsInteractionPolicy
```ts
export interface SupportsInteractionPolicy { getInteractionPolicy(): InteractionPolicy }
```

### Clickable
注意：库中使用原生 `MouseEvent` 而非 React 事件。
```ts
export interface Clickable {
  clickable?: boolean
  onClick?: (event: MouseEvent) => void
  disabled?: boolean
}
```

说明：以上接口的默认值与具体效果可以在 `src/Styles/config/interaction` 和组件的 Hook 中找到。
# behavior 模块接口文档

该模块定义组件的交互与行为相关类型：交互状态、行为开关、视觉效果、交互策略，以及“可点击”能力等。

## 所有 API 列表

### 1. InteractionType
**文件**：`interaction.ts`  
**说明**：交互状态类型。
```ts
export type InteractionType = 'hover' | 'focus' | 'active' | 'disabled'
```

### 2. InteractionBehavior
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

### 3. InteractionConfig
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

### 4. InteractionPolicy
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

### 5. SupportsInteractionPolicy
**文件**：`interaction.ts`  
**说明**：提供一个“组件可声明交互策略”的接口，供 Hook/组件实现。
```ts
export interface SupportsInteractionPolicy {
    getInteractionPolicy(): InteractionPolicy
}
```

### 6. Clickable
**文件**：`interaction.ts`  
**说明**：“可点击”能力接口，常见于容器类组件；提供统一的 clickable 标记与 onClick 回调签名。
```ts
export interface Clickable<T = HTMLElement> {
    clickable?: boolean
    onClick?: (event: React.MouseEvent<T>) => void
    disabled?: boolean
}
```

## 用法示例
在新组件中按需组合以上接口，例如：为容器添加 `Clickable`，在 Hook 中解析并应用 `InteractionPolicy`。

---

详见各接口源码与注释。