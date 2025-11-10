import { THEME_DEFAULTS } from './themeDefaults'

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

export const WITH_ICON_DEFAULTS = { icon: null } as const
export const WITH_OPTIONS_DEFAULTS = { options: null } as const
export const WITH_TITLE_DEFAULTS = { title: null } as const
export const WITH_FOOTER_DEFAULTS = { footer: null } as const
export const WITH_IMAGE_DEFAULTS = { backgroundImage: '', imagePosition: 'center' } as const

export const CLICKABLE_DEFAULTS = { clickable: false, onClick: () => { }, disabled: false } as const
export const BORDERABLE_DEFAULTS = { bordered: false } as const
export const FOCUSABLE_DEFAULTS = { clickFocusable: false, hover: false } as const
export const ORIENTATION_DEFAULTS = { direction: 'vertical' } as const
