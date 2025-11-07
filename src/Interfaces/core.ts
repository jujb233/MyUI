import type { JSX } from "solid-js";
import { baseColors, sizeConfig, shadows } from "../styles/config/base";

/** 样式与通用 DOM 属性 */
export interface StyleProps {
    // Tailwind CSS 类名
    class?: string
    id?: string
    // 内联样式
    style?: JSX.CSSProperties
}

/** 可禁用能力（交互组件或可点击容器） */
export interface Disableable {
    disabled?: boolean
}

export type Color = keyof typeof baseColors;
export type SizeName = keyof typeof sizeConfig;
export type ShadowName = keyof typeof shadows;

export type VariantRole = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text';

export interface ComponentVariant {
    role: VariantRole;
    color: Color;
}
