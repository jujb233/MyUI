import { COLOR_PRESETS, CARD_COLOR_PRESETS, COLOR_PRESET_STOPS, alphaFromHex } from './presets'

const gradient = (from: string, to: string) => `linear-gradient(135deg, ${from} 0%, ${to} 100%)`

// 按钮主题统一来源：COLOR_PRESETS
export const COLOR_THEMES = {
    primary: { ...COLOR_PRESETS.indigo, text: '#fff' },
    secondary: { ...COLOR_PRESETS.cyanBlue, text: '#fff' },
    danger: { ...COLOR_PRESETS.danger, text: '#fff' },
    normal: {
        ...COLOR_PRESETS.gray,
        text: '#fff',
        glass: gradient(alphaFromHex(COLOR_PRESET_STOPS.gray.from, 0.08), alphaFromHex(COLOR_PRESET_STOPS.gray.to, 0.08)),
        glassHover: gradient(alphaFromHex(COLOR_PRESET_STOPS.gray.from, 0.15), alphaFromHex(COLOR_PRESET_STOPS.gray.to, 0.15))
    },
    link: {
        bg: gradient(alphaFromHex(COLOR_PRESET_STOPS.blue.from, 0.08), alphaFromHex(COLOR_PRESET_STOPS.blue.to, 0.08)),
        hover: gradient(alphaFromHex(COLOR_PRESET_STOPS.blue.from, 0.15), alphaFromHex(COLOR_PRESET_STOPS.blue.to, 0.15)),
        text: COLOR_PRESET_STOPS.blue.to,
        glass: gradient(alphaFromHex(COLOR_PRESET_STOPS.blue.from, 0.12), alphaFromHex(COLOR_PRESET_STOPS.blue.to, 0.12)),
        glassHover: gradient(alphaFromHex(COLOR_PRESET_STOPS.blue.from, 0.2), alphaFromHex(COLOR_PRESET_STOPS.blue.to, 0.2))
    }
} as const

// 卡片主题统一来源：CARD_COLOR_PRESETS
export const CARD_COLOR_THEMES = {
    white: {
        ...CARD_COLOR_PRESETS.white,
        text: '#1f2937',
        glass: gradient(alphaFromHex(COLOR_PRESET_STOPS.white.from, 0.9), alphaFromHex(COLOR_PRESET_STOPS.white.to, 0.9)),
        glassHover: gradient(alphaFromHex(COLOR_PRESET_STOPS.white.from, 0.95), alphaFromHex(COLOR_PRESET_STOPS.white.to, 0.95)),
        border: 'rgba(226, 232, 240, 0.8)'
    },
    gray: {
        ...CARD_COLOR_PRESETS.grayLight,
        text: '#334155',
        glass: gradient(alphaFromHex('#f8fafc', 0.8), alphaFromHex('#e2e8f0', 0.8)),
        glassHover: gradient(alphaFromHex('#f8fafc', 0.9), alphaFromHex('#e2e8f0', 0.9)),
        border: 'rgba(203, 213, 225, 0.8)'
    },
    primary: {
        // 采用轻着色风格
        bg: gradient(alphaFromHex(COLOR_PRESET_STOPS.indigo.from, 0.05), alphaFromHex(COLOR_PRESET_STOPS.indigo.to, 0.05)),
        hover: gradient(alphaFromHex(COLOR_PRESET_STOPS.indigo.from, 0.1), alphaFromHex(COLOR_PRESET_STOPS.indigo.to, 0.1)),
        text: '#1f2937',
        border: 'rgba(79, 70, 229, 0.2)',
        glass: gradient(alphaFromHex(COLOR_PRESET_STOPS.indigo.from, 0.1), alphaFromHex(COLOR_PRESET_STOPS.indigo.to, 0.1)),
        glassHover: gradient(alphaFromHex(COLOR_PRESET_STOPS.indigo.from, 0.15), alphaFromHex(COLOR_PRESET_STOPS.indigo.to, 0.15))
    },
    secondary: {
        bg: gradient(alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.from, 0.05), alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.to, 0.05)),
        hover: gradient(alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.from, 0.1), alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.to, 0.1)),
        text: '#1f2937',
        border: 'rgba(6, 182, 212, 0.2)',
        glass: gradient(alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.from, 0.1), alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.to, 0.1)),
        glassHover: gradient(alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.from, 0.15), alphaFromHex(COLOR_PRESET_STOPS.cyanBlue.to, 0.15))
    }
} as const

/**
 * 颜色主题类型
 */
export type ColorTheme = typeof COLOR_THEMES[keyof typeof COLOR_THEMES]
export type ColorThemeName = keyof typeof COLOR_THEMES
export type CardColorTheme = typeof CARD_COLOR_THEMES[keyof typeof CARD_COLOR_THEMES]
export type CardColorThemeName = keyof typeof CARD_COLOR_THEMES
