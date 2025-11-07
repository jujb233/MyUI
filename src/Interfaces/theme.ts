import type { ComponentVariant, SizeName, ShadowName } from './core'
import type { AnimationProp } from '../Options'

/** 主题与尺寸（所有主题相关组件可选实现） */
export interface ThemeProps {
    /** { role, color }，role 经 VARIANT_ROLE_STYLES 映射到 intensity */
    variant?: ComponentVariant | undefined
    /** 'small' | 'medium' | 'large' */
    size?: SizeName
    /** 是否启用玻璃态（默认值由组件内部决定，通常为 true） */
    glass?: boolean
    /** 阴影等级（默认值由组件内部决定） */
    shadow?: ShadowName
}

/** Context 约定：各组件 Context 至少提供这些主题字段（可扩展组件自有字段） */
export interface ThemeContextValue {
    variant?: ComponentVariant
    size: SizeName
    glass: boolean
    shadow: ShadowName
    disabled?: boolean
    // ...component-specific
}

/**
 * 为组件提供动画能力的接口。
 */
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
