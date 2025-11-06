/**
 * 定义组件可用的具体颜色。
 */
// 统一类型定义，使用 src/types.ts 的 ComponentVariant
import type { ComponentVariant, VariantRole, Color } from '../../Interfaces/core/types'

/**
 * 变体角色到样式的映射。
 * 这定义了每个功能角色（如 'primary'）对应的基础样式。
 * 例如，'primary' 角色可能对应 'filled' 样式，而 'secondary' 对应 'outlined'。
 */
import type { IntensityName } from './colorThemes'

/**
 * 角色 -> 强度变体 映射
 * 主题系统支持的变体为: 'solid' | 'soft' | 'subtle' | 'text'
 */
export const VARIANT_ROLE_STYLES: Record<VariantRole, IntensityName> = {
    primary: 'solid',
    secondary: 'soft',
    success: 'solid',
    warning: 'solid',
    danger: 'solid',
    text: 'text',
}

