import { THEME_DEFAULTS } from '../themeDefaults'
import { POSITION_DEFAULTS } from './base'
import createHookDefaults from '../../../Utils/configs/createHookDefaults'

type WithPosition<T> = T & typeof POSITION_DEFAULTS

// 以下仍然导出常量以保证对现有代码的兼容性，但它们由工厂生成以减少重复和便于维护。
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
    // 是否默认横向占满父容器（卡片通常不占满，默认 false）
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
    // Panel 默认应该占满可用宽度
    fillByDefault: true,
}

const _USE_MY_NAV_BASE = {
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    glass: THEME_DEFAULTS.glass,
    shadow: THEME_DEFAULTS.shadow,
    // 注意：保留原始属性名（如 `class`），以避免破坏外部依赖；在 hook 层可以映射到 className
    class: '',
    id: '',
    style: {},
    focusRing: false,
    interaction: undefined,
    animation: undefined,
    // Nav 默认应该占满可用宽度
    fillByDefault: true,
}


export const createUseMyButtonDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_BUTTON_BASE })
export const USE_MY_BUTTON_DEFAULTS = Object.freeze(createUseMyButtonDefaults()) as WithPosition<typeof _USE_MY_BUTTON_BASE>

export const createUseMyCardDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_CARD_BASE })
export const USE_MY_CARD_DEFAULTS = Object.freeze(createUseMyCardDefaults()) as WithPosition<typeof _USE_MY_CARD_BASE>

export const createUseMyPanelDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_PANEL_BASE })
export const USE_MY_PANEL_DEFAULTS = Object.freeze(createUseMyPanelDefaults()) as WithPosition<typeof _USE_MY_PANEL_BASE>

export const createUseMyNavDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_NAV_BASE })
export const USE_MY_NAV_DEFAULTS = Object.freeze(createUseMyNavDefaults()) as WithPosition<typeof _USE_MY_NAV_BASE>

// MyInput 默认配置（结构化以便更好地组合样式）
const _USE_MY_INPUT_BASE = {
    inputType: 'text',
    variant: THEME_DEFAULTS.variant,
    size: THEME_DEFAULTS.size,
    disabled: false,
    className: '',
    hover: true,
    // 展平后的 class 片段，便于 hook 层直接读取
    classRootBase: 'relative flex items-center gap-2 rounded-md border bg-white px-3 py-2',
    classRootHover: 'hover:shadow-sm',
    classRootTransition: 'transition-shadow duration-150',
    classRootFocus: 'focus-within:ring-2 focus-within:ring-blue-400',
    // 内部 input 的类也可配置
    inputInnerClass: 'flex-1 bg-transparent outline-none px-1 disabled:opacity-60',
}

export const createUseMyInputDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_INPUT_BASE })
export const USE_MY_INPUT_DEFAULTS = Object.freeze(createUseMyInputDefaults()) as WithPosition<typeof _USE_MY_INPUT_BASE>

// 备用：导出一个通用运行时合并器，hook 可以按需使用 createUseMyXDefaults(overrides) 来获取合并后的配置
