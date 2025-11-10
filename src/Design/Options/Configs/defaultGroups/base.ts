import { THEME_DEFAULTS } from '../themeDefaults'

export const HTML_BUTTON_DEFAULTS = { buttonType: 'button' } as const
export const STYLE_PROPS_DEFAULTS = { class: '', id: '', style: {} } as const
export const DISABLEABLE_DEFAULTS = { disabled: false } as const
export const POSITION_DEFAULTS = { top: 0, left: 0 } as const
export const SIZE_DEFAULTS = { size: THEME_DEFAULTS.size } as const
export const THEME_PROPS_DEFAULTS = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
} as const
export const THEME_CONTEXT_DEFAULTS = {
    ...THEME_PROPS_DEFAULTS,
    disabled: false,
} as const
export const ANIMATION_DEFAULTS = { animation: undefined } as const
