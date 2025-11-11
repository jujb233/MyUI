import { animationMap, easingValueMap, INTENSITY } from "@/Design"
import type { ShadowName, SizeName, ComponentVariant, Color } from "../core"
import std from "@/Design/Standard"

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

export interface AnimationConfig {
    type: string
    duration?: number
    delay?: number
    easing?: EasingType
}

export type AnimationProp = AnimationType | AnimationConfig

export type AnimationType = keyof typeof animationMap
export type EasingType = keyof typeof easingValueMap

/** 组件主题（CSS 变量映射） */
export type ComponentTheme = Record<string, string>

export type ThemeResolverParams = {
    intensity?: IntensityName
    color?: Color | string
}

export type IntensityName = typeof INTENSITY[number]