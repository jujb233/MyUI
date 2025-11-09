import { THEME_DEFAULTS } from '../themeDefaults'
import { POSITION_DEFAULTS } from './base'

export const USE_MY_BUTTON_DEFAULTS = {
    htmlType: 'button',
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    disabled: false,
    className: '',
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    interaction: undefined,
    animation: undefined,
    ...POSITION_DEFAULTS,
} as const

export const USE_MY_CARD_DEFAULTS = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    clickable: false,
    className: '',
    bordered: false,
    shadow: THEME_DEFAULTS.shadow,
    imagePosition: 'center',
    direction: 'vertical',
    hover: false,
    hasImage: false,
    disabled: false,
    animation: undefined,
    ...POSITION_DEFAULTS,
} as const

export const USE_MY_PANEL_DEFAULTS = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    className: '',
    disabled: false,
    interaction: undefined,
    animation: undefined,
    backgroundImage: '',
    ...POSITION_DEFAULTS,
} as const

export const USE_MY_NAV_DEFAULTS = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    class: '',
    id: '',
    style: {},
    focusRing: false,
    interaction: undefined,
    animation: undefined,
} as const
