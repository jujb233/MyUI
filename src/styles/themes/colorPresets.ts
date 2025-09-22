import { buildCardTheme, buildTheme, type ComponentTheme } from "./themeBuilder";

/**
 * 定义颜色预设的渐变起止点
 * 这是所有主题颜色的单一来源
 */
export const COLOR_PRESET_STOPS = {
    blue: { from: '#3b82f6', to: '#2563eb' },
    indigo: { from: '#4f46e5', to: '#7c3aed' },
    violet: { from: '#8b5cf6', to: '#7c3aed' },
    purple: { from: '#a855f7', to: '#7c3aed' },
    cyan: { from: '#06b6d4', to: '#0891b2' },
    cyanBlue: { from: '#06b6d4', to: '#3b82f6' }, // 自定义组合
    teal: { from: '#14b8a6', to: '#0d9488' },
    emerald: { from: '#10b981', to: '#059669' },
    green: { from: '#22c55e', to: '#16a34a' },
    lime: { from: '#84cc16', to: '#65a30d' },
    amber: { from: '#f59e0b', to: '#d97706' },
    orange: { from: '#f97316', to: '#ea580c' },
    red: { from: '#ef4444', to: '#dc2626' },
    danger: { from: '#dc2626', to: '#991b1b' }, // 自定义组合
    rose: { from: '#f43f5e', to: '#e11d48' },
    pink: { from: '#ec4899', to: '#db2777' },
    slate: { from: '#64748b', to: '#475569' },
    gray: { from: '#6b7280', to: '#4b5563' },
    neutral: { from: '#737373', to: '#525252' },
    white: { from: '#ffffff', to: '#f8fafc' },
    grayLight: { from: '#f8fafc', to: '#e2e8f0' }, // 卡片专用
} as const;

export type ColorPresetName = keyof typeof COLOR_PRESET_STOPS;
export const COLOR_PRESET_NAMES = Object.keys(COLOR_PRESET_STOPS) as ColorPresetName[];

/**
 * 从预设的起止点构建标准组件主题
 */
export const PRESET_THEMES: Record<ColorPresetName, ComponentTheme> =
    Object.fromEntries(
        Object.entries(COLOR_PRESET_STOPS).map(([k, v]) => [k, buildTheme(v.from, v.to)])
    ) as Record<ColorPresetName, ComponentTheme>;

/**
 * 从预设的起止点构建卡片专用主题
 */
export const PRESET_CARD_THEMES: Record<ColorPresetName, ComponentTheme> =
    Object.fromEntries(
        Object.entries(COLOR_PRESET_STOPS).map(([k, v]) => [k, buildCardTheme(v.from, v.to)])
    ) as Record<ColorPresetName, ComponentTheme>;
