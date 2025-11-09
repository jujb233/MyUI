# components 模块接口文档

该模块定义了各类组件的通用接口，包括按钮、通用属性、多态功能等，便于实现一致的 Props 结构和类型约束。

## 所有 API 列表

### 1. HtmlButtonType
**文件**：`button.ts`  
**说明**：按钮专有属性，定义 `buttonType`。
```ts
```ts
export interface HtmlButtonType {
    buttonType?: 'button' | 'submit' | 'reset'
}
```

### 插槽与通用小接口
```ts
import type { JSX } from 'solid-js'

export interface WithIcon { icon?: JSX.Element }
export interface WithOptions { options?: JSX.Element }
export interface WithTitle { title?: JSX.Element }
export interface WithFooter { footer?: JSX.Element }
export interface WithImage {
    backgroundImage?: string
    imagePosition?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'background'
}
```

说明：这里的 `JSX.Element` 使用的是 Solid 的 JSX 类型（库内组件使用 Solid）。

更多接口与细节请参见源码注释（`src/Interfaces/*.ts`）。