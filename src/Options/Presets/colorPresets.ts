import { buildThemeByIntensity, type ComponentTheme } from "../Themes/themeBuilder"

// 本地定义强度变体，避免与 colorThemes 的双向依赖导致初始化顺序问题
const INTENSITY = ['solid', 'soft', 'subtle', 'text'] as const
type IntensityName = typeof INTENSITY[number]

/**
 * 定义颜色预设的渐变起止点
 * 这是所有主题颜色的单一来源
 */
export const COLOR_PALETTE = {
    blue: { from: '#3b82f6', to: '#2563eb' },
    indigo: { from: '#4f46e5', to: '#7c3aed' },
    violet: { from: '#8b5cf6', to: '#7c3aed' },
    purple: { from: '#a855f7', to: '#7c3aed' },
    cyan: { from: '#06b6d4', to: '#0891b2' },
    skyBlue: { from: '#06b6d4', to: '#3b82f6' },
    teal: { from: '#14b8a6', to: '#0d9488' },
    emerald: { from: '#10b981', to: '#059669' },
    green: { from: '#22c55e', to: '#16a34a' },
    lime: { from: '#84cc16', to: '#65a30d' },
    amber: { from: '#f59e0b', to: '#d97706' },
    orange: { from: '#f97316', to: '#ea580c' },
    red: { from: '#ef4444', to: '#dc2626' },
    danger: { from: '#dc2626', to: '#991b1b' },
    rose: { from: '#f43f5e', to: '#e11d48' },
    pink: { from: '#ec4899', to: '#db2777' },
    slate: { from: '#64748b', to: '#475569' },
    gray: { from: '#6b7280', to: '#4b5563' },
    neutral: { from: '#737373', to: '#525252' },
    white: { from: '#ffffff', to: '#f8fafc' },
    grayLight: { from: '#f8fafc', to: '#e2e8f0' },
} as const

export type ColorPresetName = keyof typeof COLOR_PALETTE
export const COLOR_PRESET_NAMES = Object.keys(COLOR_PALETTE) as ColorPresetName[]

/**
 * 嵌套预设：每个颜色拥有四种强度变体的完整主题。
 * PRESET_THEMES[color][variant]
 * 
 * 使用函数进行延迟初始化，以避免循环依赖问题。
 */
export function getPresetThemes(): Record<ColorPresetName, Record<IntensityName, ComponentTheme>> {
    return Object.fromEntries(
        Object.entries(COLOR_PALETTE).map(([color, stop]) => [
            color,
            Object.fromEntries(
                (Array.from(INTENSITY) as IntensityName[]).map((v) => [
                    v,
                    buildThemeByIntensity(stop.from, stop.to, v),
                ])
            ) as Record<IntensityName, ComponentTheme>,
        ])
    ) as Record<ColorPresetName, Record<IntensityName, ComponentTheme>>
}

export const PRESET_THEMES = getPresetThemes()

