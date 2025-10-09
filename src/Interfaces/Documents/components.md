# components 模块接口文档

该模块定义了各类组件的通用接口，包括按钮、通用属性、多态能力等，便于实现一致的 Props 结构和类型约束。

## 所有 API 列表

### 1. HtmlButtonType
**文件**：`button.ts`  
**说明**：按钮专有属性，定义 `buttonType`。
```ts
export interface HtmlButtonType {
    buttonType?: 'button' | 'submit' | 'reset'
}
```

### 2. ComponentBaseProps
**文件**：`common.ts`  
**说明**：组件共有的基础 Props 定义，用于 Button/Card/Panel 等。
```ts
export interface ComponentBaseProps {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    style?: React.CSSProperties
    disabled?: boolean
    /** 统一的动画属性，支持 string 或详细对象 */
    animation?: AnimationProp
    /** 交互策略：可以传 InteractionPolicy 或预设 key（'rich'|'basic' 等） */
    interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS
}
```

### 3. DEFAULT_COMPONENT_PROPS
**文件**：`common.ts`  
**说明**：`ComponentBaseProps` 的默认值，便于在 Hook 中复用。
```ts
export const DEFAULT_COMPONENT_PROPS = {
    size: 'medium' as SizeName,
    glass: true,
    shadow: 'md' as ShadowName,
    disabled: false,
    interaction: 'rich' as keyof typeof INTERACTION_PRESETS,
}
```

### 4. AsComponent<E extends React.ElementType>
**文件**：`polymorphic.ts`  
**说明**：多态组件 `as` 属性支持。
```ts
export type AsComponent<E extends React.ElementType> = {
    as?: E
}
```

### 5. PolymorphicComponentProps<E extends React.ElementType, P>
**文件**：`polymorphic.ts`  
**说明**：多态组件的通用泛型类型，支持 `as` 属性并合并组件自身 props。
```ts
export type PolymorphicComponentProps<E extends React.ElementType, P> =
    P &
    AsComponent<E> &
    Omit<React.ComponentPropsWithRef<E>, keyof P | 'as'>
```

## 用法示例
在自定义组件时继承或组合这些接口，保证 API 统一。

---

详见各接口源码与注释。