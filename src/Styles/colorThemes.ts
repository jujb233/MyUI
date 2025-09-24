import type { COLOR_PRESET_STOPS } from "./Themes/colorPresets";

/**
 * 定义组件的不同视觉变体
 */
export const VARIANTS = ['primary', 'secondary', 'danger', 'normal', 'link'] as const;
export type VariantName = typeof VARIANTS[number];

/**
 * 每种变体的默认颜色预设
 * 这使得 `variant="primary"` 等同于 `color="indigo"`
 */
export const DEFAULT_VARIANT_COLOR: Record<VariantName, keyof typeof COLOR_PRESET_STOPS> = {
    primary: 'indigo',
    secondary: 'cyanBlue',
    danger: 'danger',
    normal: 'gray',
    link: 'blue',
};
