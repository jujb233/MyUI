import type { ShadowName, SizeName, ComponentVariant } from "../core"

/**
 * 主题默认配置的类型定义（供 Design 模块与组件使用）
 */
export interface ThemeDefaultConfig {
    /** 组件变体（角色 + 颜色），可为 null/undefined 表示不指定 */
    variant?: ComponentVariant | null
    /** 组件尺寸名称，映射到 `sizeConfig` */
    size: SizeName
    /** 是否启用玻璃效果 */
    glass: boolean
    /** 阴影等级名称 */
    shadow: ShadowName
}

export type ThemeDefaultKeys = keyof ThemeDefaultConfig

/** 动画相关通用类型 */
export type EasingType = 'linear' | 'in' | 'out' | 'in-out'

export interface AnimationConfig {
    type: string
    duration?: number
    delay?: number
    easing?: EasingType
}

export type AnimationProp = string | AnimationConfig

/** 组件主题（CSS 变量映射） */
export type ComponentTheme = Record<string, string>

/** 颜色强度枚举类型占位（与 Design 中的 INTENSITY 常量对应） */
export type IntensityName = 'solid' | 'soft' | 'subtle' | 'text'

export { }
