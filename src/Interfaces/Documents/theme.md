# theme 模块接口文档

该模块聚焦于主题与动画相关的接口，支持组件的主题定制、动画扩展等能力。

## 所有 API 列表

### 1. AnimationProps
**文件**：`animation.ts`  
**说明**：为组件提供动画能力的接口。
```ts
export interface AnimationProps {
    /**
     * 控制组件的动画效果。
     *
     * - **字符串形式**: 直接指定一个预设的动画名称。
     *   @example `animation="fade"`
     *
     * - **对象形式**: 提供更详细的动画配置，如持续时间、延迟等。
     *   @example `animation={{ type: 'slide-up', duration: 500, delay: 100 }}`
     */
    animation?: AnimationProp
}
```

### 2. ThemeProps
**文件**：`theme.ts`  
**说明**：主题与尺寸（所有主题相关组件可选实现）。
```ts
export interface ThemeProps {
    /** { role, color }，role 经 VARIANT_ROLE_STYLES 映射到 intensity */
    variant?: ComponentVariant
    /** 'small' | 'medium' | 'large' */
    size?: SizeName
    /** 是否启用玻璃态（默认值由组件内部决定，通常为 true） */
    glass?: boolean
    /** 阴影等级（默认值由组件内部决定） */
    shadow?: ShadowName
}
```

### 3. ThemeContextValue
**文件**：`theme.ts`  
**说明**：Context 约定：各组件 Context 至少提供这些主题字段（可扩展组件自有字段）。
```ts
export interface ThemeContextValue {
    variant?: ComponentVariant
    size: SizeName
    glass: boolean
    shadow: ShadowName
    disabled?: boolean
    // ...component-specific
}
```

注：`ComponentVariant`、`SizeName`、`ShadowName` 均来自 `src/Options`，用于统一组件主题、尺寸与阴影的命名空间。

## 用法示例
可在组件开发中引入这些接口，实现主题切换、动画扩展等高级特性。

---

详见各接口源码与注释。