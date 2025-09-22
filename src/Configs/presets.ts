/**
 * 更通用的颜色系统：颜色预设 + 主题构建器
 *
 * 提供：
 * - COLOR_PRESETS / CARD_COLOR_PRESETS：可复用的颜色预设
 * - buildTheme / buildCardTheme：从颜色生成主题
 * - resolveColorTheme / resolveCardColorTheme：从字符串(预设名或十六进制色值)解析主题
 */

export type UnifiedTheme = {
    bg: string
    hover: string
    text: string
    glass: string
    glassHover: string
}

export type CardUnifiedTheme = UnifiedTheme & { border: string }

// ---- 颜色工具 ----

const clamp = (n: number, min = 0, max = 255) => Math.min(max, Math.max(min, n))

export const isHexColor = (v: string) => /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(v)

export const hexToRgb = (hex: string) => {
    let h = hex.replace('#', '')
    if (h.length === 3) {
        h = h.split('').map(c => c + c).join('')
    }
    const num = parseInt(h, 16)
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

export const rgbToHex = (r: number, g: number, b: number) => {
    const toHex = (n: number) => clamp(Math.round(n)).toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const adjustHex = (hex: string, amount: number) => {
    const { r, g, b } = hexToRgb(hex)
    const k = amount / 100
    // 简单线性亮度调整（向白或向黑混合）
    const mix = (c: number) => (k >= 0 ? c + (255 - c) * k : c * (1 + k))
    return rgbToHex(mix(r), mix(g), mix(b))
}

export const alphaFromHex = (hex: string, a: number) => {
    const { r, g, b } = hexToRgb(hex)
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

export const yiqTextColor = (hex: string) => {
    const { r, g, b } = hexToRgb(hex)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 150 ? '#1f2937' : '#ffffff'
}

const gradient = (from: string, to: string) => `linear-gradient(135deg, ${from} 0%, ${to} 100%)`

// ---- 主题构建 ----

export const buildTheme = (from: string, to: string, text?: string): UnifiedTheme => {
    const hoverFrom = adjustHex(from, -12)
    const hoverTo = adjustHex(to, -12)
    const txt = text ?? yiqTextColor(to)
    return {
        bg: gradient(from, to),
        hover: gradient(hoverFrom, hoverTo),
        text: txt,
        glass: gradient(alphaFromHex(from, 0.15), alphaFromHex(to, 0.15)),
        glassHover: gradient(alphaFromHex(from, 0.25), alphaFromHex(to, 0.25))
    }
}

export const buildCardTheme = (from: string, to: string, text?: string): CardUnifiedTheme => {
    const base = buildTheme(from, to, text)
    // 边框为主色(起始色)的 0.2 透明度
    return { ...base, border: alphaFromHex(from, 0.2) }
}

// ---- 颜色预设（Tailwind 语义色系）----

export const COLOR_PRESET_STOPS = {
    blue: { from: '#3b82f6', to: '#2563eb' },
    indigo: { from: '#4f46e5', to: '#7c3aed' },
    violet: { from: '#8b5cf6', to: '#7c3aed' },
    purple: { from: '#a855f7', to: '#7c3aed' },
    cyan: { from: '#06b6d4', to: '#0891b2' },
    teal: { from: '#14b8a6', to: '#0d9488' },
    emerald: { from: '#10b981', to: '#059669' },
    green: { from: '#22c55e', to: '#16a34a' },
    lime: { from: '#84cc16', to: '#65a30d' },
    amber: { from: '#f59e0b', to: '#d97706' },
    orange: { from: '#f97316', to: '#ea580c' },
    red: { from: '#ef4444', to: '#dc2626' },
    rose: { from: '#f43f5e', to: '#e11d48' },
    pink: { from: '#ec4899', to: '#db2777' },
    slate: { from: '#64748b', to: '#475569' },
    gray: { from: '#6b7280', to: '#4b5563' },
    neutral: { from: '#737373', to: '#525252' },
    white: { from: '#ffffff', to: '#f8fafc' }
} as const

export type ColorPresetName = keyof typeof COLOR_PRESET_STOPS

export const COLOR_PRESETS: Record<ColorPresetName, UnifiedTheme> = Object.fromEntries(
    Object.entries(COLOR_PRESET_STOPS).map(([k, v]) => [k, buildTheme(v.from, v.to)])
) as Record<ColorPresetName, UnifiedTheme>

export const CARD_COLOR_PRESETS: Record<ColorPresetName, CardUnifiedTheme> = Object.fromEntries(
    Object.entries(COLOR_PRESET_STOPS).map(([k, v]) => [k, buildCardTheme(v.from, v.to)])
) as Record<ColorPresetName, CardUnifiedTheme>

// ---- 解析器 ----

export const resolveColorTheme = (input?: string): { theme: UnifiedTheme; accent: string } => {
    if (!input) {
        const { from } = COLOR_PRESET_STOPS.gray
        return { theme: COLOR_PRESETS.gray, accent: from }
    }
    const key = input as ColorPresetName
    if (key in COLOR_PRESET_STOPS) {
        const { from } = COLOR_PRESET_STOPS[key]
        return { theme: COLOR_PRESETS[key], accent: from }
    }
    const v = input.trim()
    if (isHexColor(v)) {
        const from = v
        const to = adjustHex(v, -12)
        return { theme: buildTheme(from, to), accent: from }
    }
    // 兜底：灰色
    const { from } = COLOR_PRESET_STOPS.gray
    return { theme: COLOR_PRESETS.gray, accent: from }
}

export const resolveCardColorTheme = (input?: string): { theme: CardUnifiedTheme; accent: string } => {
    if (!input) {
        const { from } = COLOR_PRESET_STOPS.white
        return { theme: CARD_COLOR_PRESETS.white, accent: from }
    }
    const key = input as ColorPresetName
    if (key in COLOR_PRESET_STOPS) {
        const { from } = COLOR_PRESET_STOPS[key]
        return { theme: CARD_COLOR_PRESETS[key], accent: from }
    }
    const v = input.trim()
    if (isHexColor(v)) {
        const from = v
        const to = adjustHex(v, -12)
        return { theme: buildCardTheme(from, to), accent: from }
    }
    const { from } = COLOR_PRESET_STOPS.white
    return { theme: CARD_COLOR_PRESETS.white, accent: from }
}
