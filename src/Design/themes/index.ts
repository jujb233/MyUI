import { ColorPresetName, IntensityName, ThemeResolverParams } from '@/Interfaces'
import { baseColors } from '../tokens/base'
import { adjustColorBrightness, isHexColor } from '@/Utils'

export const lightTheme = {
    primary: baseColors.blue.from,
    secondary: baseColors.gray.from,
    background: baseColors.white.from,
    text: baseColors.neutral.to,
    accent: baseColors.blue.from,
    muted: baseColors.gray.from,
}

export const darkTheme = {
    primary: baseColors.blue.from,
    secondary: baseColors.gray.to,
    background: baseColors.neutral.to,
    text: baseColors.white.from,
    accent: baseColors.blue.from,
    muted: baseColors.gray.to,
}

export const themes = { light: lightTheme, dark: darkTheme }

export const INTENSITY = ['solid', 'soft', 'subtle', 'text'] as const
export const DEFAULT_BASE_COLOR: keyof typeof baseColors = 'blue'

export type ComponentTheme = Record<string, string>

function buildThemeByIntensity(from: string, to: string, intensity: IntensityName): ComponentTheme {
    switch (intensity) {
        case 'solid':
            return {
                '--bg': from,
                '--bg-hover': to,
                '--text': '#ffffff',
                '--border': to,
                '--glass-bg': `${from}80`,
                '--glass-bg-hover': `${to}80`,
                '--glass-border': `${to}40`,
                '--disabled-bg': adjustColorBrightness(from, -20),
                '--disabled-text': '#cccccc',
            }
        case 'soft':
            return {
                '--bg': adjustColorBrightness(from, 80),
                '--bg-hover': adjustColorBrightness(from, 70),
                '--text': from,
                '--border': adjustColorBrightness(from, 60),
                '--glass-bg': `${adjustColorBrightness(from, 80)}80`,
                '--glass-bg-hover': `${adjustColorBrightness(from, 70)}80`,
                '--glass-border': `${adjustColorBrightness(from, 60)}40`,
                '--disabled-bg': adjustColorBrightness(from, 90),
                '--disabled-text': adjustColorBrightness(from, -30),
            }
        case 'subtle':
            return {
                '--bg': adjustColorBrightness(from, 90),
                '--bg-hover': adjustColorBrightness(from, 85),
                '--text': from,
                '--border': adjustColorBrightness(from, 80),
                '--glass-bg': `${adjustColorBrightness(from, 90)}80`,
                '--glass-bg-hover': `${adjustColorBrightness(from, 85)}80`,
                '--glass-border': `${adjustColorBrightness(from, 80)}40`,
                '--disabled-bg': adjustColorBrightness(from, 95),
                '--disabled-text': adjustColorBrightness(from, -20),
            }
        case 'text':
            return {
                '--bg': 'transparent',
                '--bg-hover': adjustColorBrightness(from, 95),
                '--text': from,
                '--border': 'transparent',
                '--glass-bg': 'transparent',
                '--glass-bg-hover': `${adjustColorBrightness(from, 95)}80`,
                '--glass-border': 'transparent',
                '--disabled-bg': 'transparent',
                '--disabled-text': adjustColorBrightness(from, -40),
            }
        default:
            throw new Error(`Unknown intensity: ${intensity}`)
    }
}

export const resolveTheme = (params: ThemeResolverParams): ComponentTheme => {
    const { intensity: intensity = 'solid', color } = params
    const COLOR_PRESET_NAMES = Object.keys(baseColors) as ColorPresetName[]
    const presetThemes: Record<ColorPresetName, Record<IntensityName, ComponentTheme>> = COLOR_PRESET_NAMES.reduce(
        (acc, name) => {
            const val = baseColors[name as ColorPresetName] as { from: string; to: string } | string
            if (!val || typeof val === 'string' || !('from' in val && 'to' in val)) return acc
            const { from, to } = val as { from: string; to: string }
            acc[name] = {
                solid: buildThemeByIntensity(from, to, 'solid'),
                soft: buildThemeByIntensity(from, to, 'soft'),
                subtle: buildThemeByIntensity(from, to, 'subtle'),
                text: buildThemeByIntensity(from, to, 'text'),
            }
            return acc
        },
        {} as Record<ColorPresetName, Record<IntensityName, ComponentTheme>>
    )

    let themeColor: ColorPresetName | string | undefined = (color ?? DEFAULT_BASE_COLOR)

    if (themeColor && typeof themeColor === 'string' && themeColor in presetThemes) {
        return presetThemes[themeColor as ColorPresetName][intensity]
    }

    if (typeof themeColor === 'string' && isHexColor(themeColor)) {
        const from = themeColor
        const to = adjustColorBrightness(themeColor, -12)
        return buildThemeByIntensity(from, to, intensity)
    }

    return presetThemes[DEFAULT_BASE_COLOR][intensity]
}
