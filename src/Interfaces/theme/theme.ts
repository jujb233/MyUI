/**
 * Theme - theme 类型
 * 简要：定义主题对象结构、主题解析器（resolver）所需类型与变体配置接口。
 */

import type { ComponentVariant } from '../../Options'
import type { SizeName, ShadowName } from '../../types'

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
