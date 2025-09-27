/**
 * 定义组件可用的具体颜色。
 */
export type Color = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray';

/**
 * 定义组件的语义化功能角色。
 */
export type VariantRole = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text';

/**
 * 组件的变体属性，结合了功能角色和具体颜色。
 */
export interface ComponentVariant {
    role: VariantRole;
    color: Color;
}

/**
 * 变体角色到样式的映射。
 * 这定义了每个功能角色（如 'primary'）对应的基础样式。
 * 例如，'primary' 角色可能对应 'filled' 样式，而 'secondary' 对应 'outlined'。
 */
import type { IntensityName } from './colorThemes';

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
};

