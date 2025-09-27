import type { COLOR_PRESET_STOPS } from "./Themes/colorPresets";

/**
 * 强度变体（Intensity Variants）
 * - variant 表达“有多强烈”
 * - color 表达“是什么色调”
 */
export const VARIANTS = ['solid', 'soft', 'subtle', 'text'] as const;
export type VariantName = typeof VARIANTS[number];

/**
 * 默认基色（当未显式提供 color 时使用）
 * 变体与颜色完全解耦：变体=强度，颜色=色调
 */
export const DEFAULT_BASE_COLOR: keyof typeof COLOR_PRESET_STOPS = 'blue';
