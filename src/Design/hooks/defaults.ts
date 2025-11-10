import { createHookDefaults } from '@/Utils'
import { THEME_DEFAULTS } from '../defaults/themeDefaults'
import { POSITION_DEFAULTS } from '../defaults/defaultGroups'

type WithPosition<T> = T & typeof POSITION_DEFAULTS

const _USE_MY_BUTTON_BASE = {
    htmlType: 'button',
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    disabled: false,
    className: '',
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    interaction: undefined,
    animation: undefined,
}

const _USE_MY_CARD_BASE = {
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
    fillByDefault: false,
}

const _USE_MY_PANEL_BASE = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    className: '',
    disabled: false,
    interaction: undefined,
    animation: undefined,
    backgroundImage: '',
    fillByDefault: true,
}

const _USE_MY_NAV_BASE = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    className: '',
    id: '',
    style: {},
    focusRing: false,
    interaction: undefined,
    animation: undefined,
    fillByDefault: true,
}

const _USE_MY_INPUT_BASE = {
    inputType: 'text',
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    disabled: false,
    className: '',
    hover: true,
    classRootBase: 'relative flex items-center gap-2 rounded-md border bg-white px-3 py-2',
    classRootHover: 'hover:shadow-sm',
    classRootTransition: 'transition-shadow duration-150',
    classRootFocus: 'focus-within:ring-2 focus-within:ring-blue-400',
    inputInnerClass: 'flex-1 bg-transparent outline-none px-1 disabled:opacity-60',
}

export const createUseMyButtonDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_BUTTON_BASE })
export const USE_MY_BUTTON_DEFAULTS = Object.freeze(createUseMyButtonDefaults()) as WithPosition<typeof _USE_MY_BUTTON_BASE>

export const createUseMyCardDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_CARD_BASE })
export const USE_MY_CARD_DEFAULTS = Object.freeze(createUseMyCardDefaults()) as WithPosition<typeof _USE_MY_CARD_BASE>

export const createUseMyPanelDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_PANEL_BASE })
export const USE_MY_PANEL_DEFAULTS = Object.freeze(createUseMyPanelDefaults()) as WithPosition<typeof _USE_MY_PANEL_BASE>

export const createUseMyNavDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_NAV_BASE })
export const USE_MY_NAV_DEFAULTS = Object.freeze(createUseMyNavDefaults()) as WithPosition<typeof _USE_MY_NAV_BASE>

export const createUseMyInputDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_INPUT_BASE })
export const USE_MY_INPUT_DEFAULTS = Object.freeze(createUseMyInputDefaults()) as WithPosition<typeof _USE_MY_INPUT_BASE>
