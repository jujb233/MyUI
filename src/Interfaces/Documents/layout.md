# layout 模块接口文档

该模块定义了布局相关的接口，包括容器、布局方式、插槽等，便于实现灵活的组件布局组合。

## 所有 API 列表

### 1. Borderable
**文件**：`container.ts`  
**说明**：容器边框能力（容器类组件常用）。
```ts
export interface Borderable {
    bordered?: boolean
}
```

### 2. Clickable
**文件**：`container.ts`  
**说明**：可点击/可悬停能力（容器类组件常用）。
```ts
export interface Clickable {
    clickable?: boolean
    /** 是否允许 hover 反馈（默认通常为 true） */
    hoverable?: boolean
}
```

### 3. OrientationProps
**文件**：`layout.ts`  
**说明**：布局方向（卡片等）。
```ts
export interface OrientationProps {
    direction?: 'vertical' | 'horizontal'
}
```

### 4. MediaPlacementProps
**文件**：`layout.ts`  
**说明**：媒体放置位置（卡片/媒体类）。
```ts
export interface MediaPlacementProps {
    imagePosition?: 'top' | 'left' | 'right' | 'background'
}
```

### 5. WithIcon
**文件**：`slots/slots.ts`  
**说明**：常用插槽：前置图标。
```ts
export interface WithIcon {
    icon?: React.ReactNode
}
```

### 6. WithActions
**文件**：`slots/slots.ts`  
**说明**：常用插槽：末尾操作区。
```ts
export interface WithActions {
    actions?: React.ReactNode
}
```

### 7. WithTitle
**文件**：`slots/slots.ts`  
**说明**：常用插槽：标题（统一使用 ReactNode 以兼容 string/元素）。
```ts
export interface WithTitle {
    title?: React.ReactNode
}
```

### 8. WithFooter
**文件**：`slots/slots.ts`  
**说明**：常用插槽：页脚/尾部。
```ts
export interface WithFooter {
    footer?: React.ReactNode
}
```

### 9. WithBackgroundImage
**文件**：`slots/slots.ts`  
**说明**：背景图能力（Panel 等）。
```ts
export interface WithBackgroundImage {
    backgroundImage?: string
}
```

## 用法示例
在需要自定义布局或插槽时组合这些接口，提升组件的灵活性。

---

详见各接口源码与注释。