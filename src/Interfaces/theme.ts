import type { ComponentVariant, SizeName, ShadowName } from './core'
import type { AnimationProp } from '../Options'

/**
 * @description 定义了所有主题相关组件可选择实现的主题和尺寸属性。
 * @interface ThemeProps
 * @property {ComponentVariant} [variant] - 组件的变体，包括角色和颜色。
 * @property {SizeName} [size] - 组件的尺寸。
 * @property {boolean} [glass] - 是否启用玻璃拟态效果。
 * @property {ShadowName} [shadow] - 组件的阴影级别。
 */
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

/**
 * @description 定义了组件 Context 至少应提供的主题相关字段。
 * @interface ThemeContextValue
 * @property {ComponentVariant} [variant] - 组件的变体。
 * @property {SizeName} size - 组件的尺寸。
 * @property {boolean} glass - 是否启用玻璃拟态效果。
 * @property {ShadowName} shadow - 组件的阴影级别。
 * @property {boolean} [disabled] - 组件是否被禁用。
 */
export interface ThemeContextValue {
    variant?: ComponentVariant
    size: SizeName
    glass: boolean
    shadow: ShadowName
    disabled?: boolean
    // ...component-specific
}

/**
 * @description 为组件提供动画能力的接口。
 * @interface AnimationProps
 * @property {AnimationProp} [animation] - 控制组件的动画效果。
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
