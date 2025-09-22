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
    // 自定义组合：保持现有 secondary 的视觉（青 -> 蓝）
    cyanBlue: { from: '#06b6d4', to: '#3b82f6' },
    teal: { from: '#14b8a6', to: '#0d9488' },
    emerald: { from: '#10b981', to: '#059669' },
    green: { from: '#22c55e', to: '#16a34a' },
    lime: { from: '#84cc16', to: '#65a30d' },
    amber: { from: '#f59e0b', to: '#d97706' },
    orange: { from: '#f97316', to: '#ea580c' },
    red: { from: '#ef4444', to: '#dc2626' },
    // 自定义危险色：保持现有 danger 的更深对比
    danger: { from: '#dc2626', to: '#991b1b' },
    rose: { from: '#f43f5e', to: '#e11d48' },
    pink: { from: '#ec4899', to: '#db2777' },
    slate: { from: '#64748b', to: '#475569' },
    gray: { from: '#6b7280', to: '#4b5563' },
    neutral: { from: '#737373', to: '#525252' },
    white: { from: '#ffffff', to: '#f8fafc' },
    // 卡片灰底用的更浅灰白渐变
    grayLight: { from: '#f8fafc', to: '#e2e8f0' }
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

// ---- 统一 token 解析（variant.color）----

export type VariantName = 'primary' | 'secondary' | 'danger' | 'normal' | 'link'
export const VARIANTS: readonly VariantName[] = ['primary', 'secondary', 'danger', 'normal', 'link'] as const

// 主题 Token：形如 "primary.indigo"，提供编辑器自动提示
export type ThemeToken = `${VariantName}.${ColorPresetName}`

export const DEFAULT_VARIANT_PRESET: Record<VariantName, ColorPresetName> = {
    primary: 'indigo',
    secondary: 'cyanBlue',
    danger: 'danger',
    normal: 'gray',
    link: 'blue',
}

export const COLORS: readonly ColorPresetName[] = Object.keys(COLOR_PRESET_STOPS) as ColorPresetName[]
export const getDefaultColorForVariant = (variant: VariantName): ColorPresetName => DEFAULT_VARIANT_PRESET[variant]

const splitToken = (token?: ThemeToken): { variant: VariantName; colorKey: ColorPresetName } => {
    const safe = (token || '').trim()
    if (!safe) return { variant: 'normal', colorKey: DEFAULT_VARIANT_PRESET.normal }
    const [v, c] = safe.split('.') as [VariantName | string, ColorPresetName | string]
    const variant = (['primary', 'secondary', 'danger', 'normal', 'link'].includes(v)
        ? (v as VariantName)
        : 'normal')
    const colorKey = (c && c in COLOR_PRESET_STOPS
        ? (c as ColorPresetName)
        : DEFAULT_VARIANT_PRESET[variant])
    return { variant, colorKey }
}

export const resolveUnifiedThemeByToken = (token?: ThemeToken): {
    variant: VariantName
    colorKey: ColorPresetName
    theme: UnifiedTheme
    accent: string
} => {
    const { variant, colorKey } = splitToken(token)
    const { from } = COLOR_PRESET_STOPS[colorKey]
    return { variant, colorKey, theme: COLOR_PRESETS[colorKey], accent: from }
}

export const resolveUnifiedCardThemeByToken = (token?: ThemeToken): {
    variant: VariantName
    colorKey: ColorPresetName
    theme: CardUnifiedTheme
    accent: string
} => {
    const { variant, colorKey } = splitToken(token)
    const { from } = COLOR_PRESET_STOPS[colorKey]
    return { variant, colorKey, theme: CARD_COLOR_PRESETS[colorKey], accent: from }
}

// ---- 新的拆分参数解析器（推荐 API）----
export const resolveUnifiedTheme = (variant: VariantName = 'normal', color?: ColorPresetName) => {
    const colorKey = color ?? DEFAULT_VARIANT_PRESET[variant]
    const { from } = COLOR_PRESET_STOPS[colorKey]
    return { variant, colorKey, theme: COLOR_PRESETS[colorKey], accent: from }
}

export const resolveUnifiedCardTheme = (variant: VariantName = 'normal', color?: ColorPresetName) => {
    const colorKey = color ?? DEFAULT_VARIANT_PRESET[variant]
    const { from } = COLOR_PRESET_STOPS[colorKey]
    return { variant, colorKey, theme: CARD_COLOR_PRESETS[colorKey], accent: from }
}
