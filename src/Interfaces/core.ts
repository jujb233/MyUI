import { sizeConfig, shadows } from "@/Design"
import std from "@/Design/Standard"
import type { JSX } from "solid-js"


/**
 * @description 定义了组件的基本样式和 DOM 属性。
 * @interface StyleProps
 * @property {string} [class] - Tailwind CSS 类名。
 * @property {string} [id] - 组件的 DOM `id`。
 * @property {JSX.CSSProperties} [style] - 内联样式对象。
 */
export interface StyleProps {
    // Tailwind CSS 类名
    class?: string
    id?: string
    // 内联样式
    style?: JSX.CSSProperties
}

/**
 * @description 为可交互组件或容器提供“禁用”状态的能力。
 * @interface Disableable
 * @property {boolean} [disabled] - 如果为 `true`，组件将被禁用。
 */
export interface Disableable {
    disabled?: boolean
}

/**
 * @description 定义了可用的基础颜色类型。
 * @type Color
 */
export type Color = keyof typeof std.colors

/**
 * @description 定义了可用的尺寸名称。
 * @type SizeName
 */
export type SizeName = keyof typeof sizeConfig

/**
 * @description 定义了可用的阴影级别名称。
 * @type ShadowName
 */
export type ShadowName = keyof typeof shadows

/**
 * @description 定义了组件的变体角色，用于表示不同的状态或意图。
 * @type VariantRole
 */
export type VariantRole = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text'

/**
 * @description 定义了组件的变体，结合了角色和颜色。
 * @interface ComponentVariant
 * @property {VariantRole} role - 组件的变体角色。
 * @property {Color} color - 组件的基础颜色。
 */
export interface ComponentVariant {
    role: VariantRole
    color: Color
}
