# layout 模块接口文档

该模块定义了布局相关的接口，包括容器、布局方式、插槽等，便于实现灵活的组件布局组合。

## 所有 API 列表

### 1. OrientationProps
**文件**：`layout.ts`  
**说明**：布局方向（卡片等）。
```ts
export interface OrientationProps {
    direction?: 'vertical' | 'horizontal'
}
```

### 2. WithIcon
**文件**：`slots/slots.ts`  
**说明**：常用插槽：前置图标。
```ts
export interface WithIcon {
    icon?: React.ReactNode
}
```

### 3. WithOptions
**文件**：`slots/slots.ts`  
**说明**：常用插槽：末尾操作区。
```ts
export interface WithOptions {
    options?: React.ReactNode
}
```

### 4. WithTitle
**文件**：`slots/slots.ts`  
**说明**：常用插槽：标题（统一使用 ReactNode 以兼容 string/元素）。
```ts
export interface WithTitle {
    title?: React.ReactNode
}
```

### 5. WithFooter
**文件**：`slots/slots.ts`  
**说明**：常用插槽：页脚/尾部。
```ts
export interface WithFooter {
    footer?: React.ReactNode
}
```

### 6. WithImage
**文件**：`slots/slots.ts`  
**说明**：图片/背景图能力（Card、Panel 等）。
```ts
export interface WithImage {
    backgroundImage?: string
    imagePosition?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'background'
}
```

## 用法示例
在需要自定义布局或插槽时组合这些接口，例如：Card 同时实现 `OrientationProps` 与 `WithImage`；Nav 实现 `WithTitle` 与 `WithOptions`。

---

详见各接口源码与注释。