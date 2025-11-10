import type { ThemeDefaultConfig, ThemeDefaultKeys } from '@/Interfaces/types'

export const THEME_DEFAULTS: ThemeDefaultConfig = {
    variant: undefined,
    size: 'medium',
    glass: true,
    shadow: 'none',
}

export function pickThemeDefaults(keys: ThemeDefaultKeys[]): Partial<ThemeDefaultConfig> {
    const out: Partial<ThemeDefaultConfig> = {}
    for (const k of keys) {
        const key = k as keyof ThemeDefaultConfig
            ; (out as any)[key] = THEME_DEFAULTS[key]
    }
    return out
}
