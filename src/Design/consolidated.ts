// Centralized inlined design configuration
// 本文件将原先分散在 Options/Configs、Options/Themes、Styles/config 下的实现
// 合并为单个文件以减少文件数量和目录嵌套（保持 Design 根导出不变）。

/* ----------------------------- Styles / base ----------------------------- */
/**
 * Base variables for the design system.
 */
export const baseColors = {
    blue: { from: '#3b82f6', to: '#2563eb' },
    indigo: { from: '#4f46e5', to: '#7c3aed' },
    violet: { from: '#8b5cf6', to: '#7c3aed' },
    purple: { from: '#a855f7', to: '#7c3aed' },
    cyan: { from: '#06b6d4', to: '#0891b2' },
    skyBlue: { from: '#06b6d4', to: '#3b82f6' },
    teal: { from: '#14b8a6', to: '#0d9488' },
    emerald: { from: '#10b981', to: '#059669' },
    green: { from: '#22c55e', to: '#16a34a' },
    lime: { from: '#84cc16', to: '#65a30d' },
    amber: { from: '#f59e0b', to: '#d97706' },
    orange: { from: '#f97316', to: '#ea580c' },
    red: { from: '#ef4444', to: '#dc2626' },
    danger: { from: '#dc2626', to: '#991b1b' },
    rose: { from: '#f43f5e', to: '#e11d48' },
    pink: { from: '#ec4899', to: '#db2777' },
    slate: { from: '#64748b', to: '#475569' },
    gray: { from: '#6b7280', to: '#4b5563' },
    neutral: { from: '#737373', to: '#525252' },
    white: { from: '#ffffff', to: '#f8fafc' },
    grayLight: { from: '#f8fafc', to: '#e2e8f0' },
    transparent: 'transparent',
    yellow: { from: '#facc15', to: '#eab308' },
};

export const spacing = {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
};

export const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
};

export const fontWeights = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
};

export const borderRadius = {
    none: '0',
    sm: '0.125rem',
    '': '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
};

export const shadows = {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
};

export const glassShadows = {
    md: `0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)`,
    lg: `0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)`,
};

export const sizeConfig = {
    small: {
        padding: 'px-3 py-1',
        fontSize: 'text-sm',
        minWidth: 'min-w-16',
        spacing: 'space-y-2',
        titleSize: 'text-lg',
        contentSize: 'text-sm',
        borderRadius: 'rounded-lg',
        minHeight: 'min-h-32',
    },
    medium: {
        padding: 'px-4 py-2',
        fontSize: 'text-base',
        minWidth: 'min-w-20',
        spacing: 'space-y-3',
        titleSize: 'text-xl',
        contentSize: 'text-base',
        borderRadius: 'rounded-xl',
        minHeight: 'min-h-40',
    },
    large: {
        padding: 'px-6 py-3',
        fontSize: 'text-lg',
        minWidth: 'min-w-24',
        spacing: 'space-y-4',
        titleSize: 'text-2xl',
        contentSize: 'text-lg',
        borderRadius: 'rounded-2xl',
        minHeight: 'min-h-48',
    },
};

/* --------------------------- Styles / animation -------------------------- */
export const animationMap = {
    'fade-in': 'animate-fade',
    fade: 'animate-fade',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
};

export const easingValueMap = {
    linear: 'linear',
    in: 'ease-in',
    out: 'ease-out',
    'in-out': 'ease-in-out',
};

export type AnimationType = keyof typeof animationMap;
export type EasingType = keyof typeof easingValueMap;

import type { AnimationConfig } from '@/Interfaces/types'

export type AnimationProp = AnimationType | AnimationConfig;

/* -------------------------- Styles / interaction ------------------------- */
export const DEFAULT_INTERACTION_BEHAVIOR = {
    hover: true,
    focus: true,
    active: true,
    disabled: true,
    transition: true,
};

export const DEFAULT_INTERACTION_EFFECTS = {
    scale: {
        hover: 1.05,
        active: 0.95,
        disabled: 1,
    },
    opacity: {
        hover: 1,
        active: 0.8,
        disabled: 0.5,
    },
};

export const INTERACTION_PRESETS = {
    gentle: {
        effects: {
            scale: { hover: 1.02, active: 0.98 },
            opacity: { hover: 0.9, active: 0.7 },
        },
    },
    none: {
        enabled: false,
    },
};

/* ------------------------- Styles / theme exports ------------------------ */
export const lightTheme = {
    primary: baseColors.blue.from,
    secondary: baseColors.gray.from,
    background: baseColors.white.from,
    text: baseColors.neutral.to,
    accent: baseColors.blue.from,
    muted: baseColors.gray.from,
};

export const darkTheme = {
    primary: baseColors.blue.from,
    secondary: baseColors.gray.to,
    background: baseColors.neutral.to,
    text: baseColors.white.from,
    accent: baseColors.blue.from,
    muted: baseColors.gray.to,
};

export const themes = {
    light: lightTheme,
    dark: darkTheme,
};

/* ------------------------ Options / Configs (class) ---------------------- */
import type { ShadowName } from '@/Interfaces'

export const SHADOW_CLASS_MAP: Record<ShadowName, string> = {
    xs: 'shadow-sm',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    inner: 'shadow-inner',
    none: 'shadow-none',
};

export const BACKGROUND_CLASSES = {
    glass:
        '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]',
    traditional: '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]',
} as const;

export const TEXT_CLASS = 'text-[var(--text)]'
export const GLASS_BACKDROP_CLASS = 'backdrop-blur-md'
export const GLASS_ELEVATION = 'myui-glass-md' as const

export const THEME_CLASS_PREFIX = {
    color: 'myui-color-',
    variant: 'myui-variant-',
} as const

export const COMMON_CLASSES = {
    FLEX_CENTER: 'flex items-center',
    FLEX_CENTER_JUSTIFY: 'flex items-center justify-center',
    RELATIVE_OVERFLOW_HIDDEN: 'relative overflow-hidden',
    DISABLED_STATE: 'opacity-60 cursor-not-allowed',
    DISABLED_STATE_RAW: '[background:var(--disabled-bg)] [color:var(--disabled-text)]',
    BORDER: 'border',
    CURSOR_POINTER: 'cursor-pointer',
    ROUNDED_XL: 'rounded-xl',
    ROUNDED_2XL: 'rounded-2xl',
} as const

export const TRANSITION_CLASSES = {
    DEFAULT: 'transition-all duration-200 ease-out will-change-transform',
} as const

/* ---------------------- Options / Configs (component slots) ---------------------- */
export const SLOTS_STYLE = {
    container: 'flex',
    content: '',
    header: 'flex items-center',
    footer: 'mt-auto',
    actions: 'flex gap-2 mt-4',
    tagsContainer: 'flex flex-wrap gap-2 mb-3',
    tag: 'px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full',
    title: 'font-bold text-[var(--text)]',
    textMuted: 'text-[var(--text)]/85',
    brand: 'flex-shrink-0',
    menu: 'flex items-center space-x-4',
    navActions: 'ml-auto flex items-center',
    buttonIcon: 'mr-2 flex items-center',
    buttonContent: 'flex-1 truncate',
    buttonOptions: 'ml-2 flex items-center',
    inputRoot: 'relative flex items-center gap-2',
    inputIcon: 'mr-2 flex items-center',
    inputOptions: 'ml-2 flex items-center',
    panelHeaderExtra: 'mb-4',
    panelFooter: 'mt-4',
    cardFooterBase: 'card-footer mt-auto',
    cardHeaderBase: 'card-header',
    navRootSizePrefix: 'my-nav-',
    image: {
        top: 'object-cover w-full h-48',
        left: 'object-cover w-32 h-full',
        right: 'object-cover w-32 h-full',
        background: 'object-cover absolute inset-0 h-full w-full opacity-10',
        center: 'object-cover absolute inset-0 h-full w-full opacity-10',
        bottom: 'object-cover w-full h-48',
    },
} as const

/* ----------------------- Options / Configs (theme defaults) ----------------------- */
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

/* ----------------------- Options / Configs / defaultGroups (base) ----------------------- */
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

/* ----------------------- Options / Configs / defaultGroups (componentExtras) ----------------------- */
export const WITH_ICON_DEFAULTS = { icon: null } as const
export const WITH_OPTIONS_DEFAULTS = { options: null } as const
export const WITH_TITLE_DEFAULTS = { title: null } as const
export const WITH_FOOTER_DEFAULTS = { footer: null } as const
export const WITH_IMAGE_DEFAULTS = { backgroundImage: '', imagePosition: 'center' } as const

export const CLICKABLE_DEFAULTS = { clickable: false, onClick: () => { }, disabled: false } as const
export const BORDERABLE_DEFAULTS = { bordered: false } as const
export const FOCUSABLE_DEFAULTS = { clickFocusable: false, hover: false } as const
export const ORIENTATION_DEFAULTS = { direction: 'vertical' } as const

/* ----------------------- Options / Configs / defaultGroups (componentHooks) ----------------------- */
import { createHookDefaults } from '@/Utils'

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

export const createUseMyButtonDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_BUTTON_BASE })
export const USE_MY_BUTTON_DEFAULTS = Object.freeze(createUseMyButtonDefaults()) as WithPosition<typeof _USE_MY_BUTTON_BASE>

export const createUseMyCardDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_CARD_BASE })
export const USE_MY_CARD_DEFAULTS = Object.freeze(createUseMyCardDefaults()) as WithPosition<typeof _USE_MY_CARD_BASE>

export const createUseMyPanelDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_PANEL_BASE })
export const USE_MY_PANEL_DEFAULTS = Object.freeze(createUseMyPanelDefaults()) as WithPosition<typeof _USE_MY_PANEL_BASE>

export const createUseMyNavDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_NAV_BASE })
export const USE_MY_NAV_DEFAULTS = Object.freeze(createUseMyNavDefaults()) as WithPosition<typeof _USE_MY_NAV_BASE>

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

export const createUseMyInputDefaults = createHookDefaults({ ...POSITION_DEFAULTS, ..._USE_MY_INPUT_BASE })
export const USE_MY_INPUT_DEFAULTS = Object.freeze(createUseMyInputDefaults()) as WithPosition<typeof _USE_MY_INPUT_BASE>

/* ----------------------- Options / Configs / defaultGroups (interaction) ----------------------- */
export const INTERACTION_BEHAVIOR_DEFAULTS = {
    hover: false,
    focus: false,
    active: false,
    transition: false,
    disabled: false,
} as const

export const INTERACTION_CONFIG_DEFAULTS = {
    scale: {},
    opacity: {},
    background: {},
    shadow: {},
} as const

export const INTERACTION_POLICY_DEFAULTS = {
    enabled: true,
    behavior: DEFAULT_INTERACTION_BEHAVIOR,
    effects: DEFAULT_INTERACTION_EFFECTS,
    classes: {},
} as const

/* ----------------------- Options / Configs / aggregated defaultValues ----------------------- */
export const defaultValues = {
    HtmlButtonType: HTML_BUTTON_DEFAULTS,
    WithIcon: WITH_ICON_DEFAULTS,
    WithOptions: WITH_OPTIONS_DEFAULTS,
    WithTitle: WITH_TITLE_DEFAULTS,
    WithFooter: WITH_FOOTER_DEFAULTS,
    WithImage: WITH_IMAGE_DEFAULTS,
    StyleProps: STYLE_PROPS_DEFAULTS,
    Disableable: DISABLEABLE_DEFAULTS,
    InteractionBehavior: INTERACTION_BEHAVIOR_DEFAULTS,
    InteractionConfig: INTERACTION_CONFIG_DEFAULTS,
    InteractionPolicy: INTERACTION_POLICY_DEFAULTS,
    Clickable: CLICKABLE_DEFAULTS,
    Borderable: BORDERABLE_DEFAULTS,
    Focusable: FOCUSABLE_DEFAULTS,
    OrientationProps: ORIENTATION_DEFAULTS,
    PositionProps: POSITION_DEFAULTS,
    SizeProps: SIZE_DEFAULTS,
    ThemeProps: THEME_PROPS_DEFAULTS,
    ThemeContextValue: THEME_CONTEXT_DEFAULTS,
    AnimationProps: ANIMATION_DEFAULTS,
    UseMyButtonProps: USE_MY_BUTTON_DEFAULTS,
    UseMyCardProps: USE_MY_CARD_DEFAULTS,
    UseMyPanelProps: USE_MY_PANEL_DEFAULTS,
    UseMyNavProps: USE_MY_NAV_DEFAULTS,
    UseMyInputProps: USE_MY_INPUT_DEFAULTS,
} as const

/* ----------------------- Options / Themes (color themes) ----------------------- */
export const INTENSITY = ['solid', 'soft', 'subtle', 'text'] as const
export type IntensityName = typeof INTENSITY[number]

export const DEFAULT_BASE_COLOR: keyof typeof baseColors = 'blue'

/* ----------------------- Options / Themes (variant roles) ----------------------- */
import type { VariantRole } from '@/Interfaces'
export const VARIANT_ROLE_STYLES: Record<VariantRole, IntensityName> = {
    primary: 'solid',
    secondary: 'soft',
    success: 'solid',
    warning: 'solid',
    danger: 'solid',
    text: 'text',
}

/* ----------------------- Options / Themes (theme resolver) ----------------------- */
import { isHexColor, adjustColorBrightness } from '@/Utils'

export type ColorPresetName = keyof typeof baseColors

export type ThemeResolverParams = {
    intensity?: IntensityName
    color?: ColorPresetName | string
}

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

/* ----------------------- Convenience aggregation object ----------------------- */
export const DESIGN_AGGREGATION = {
    // styles
    baseColors,
    spacing,
    fontSizes,
    fontWeights,
    borderRadius,
    shadows,
    glassShadows,
    sizeConfig,
    animationMap,
    easingValueMap,
    DEFAULT_INTERACTION_BEHAVIOR,
    DEFAULT_INTERACTION_EFFECTS,
    INTERACTION_PRESETS,
    lightTheme,
    darkTheme,
    themes,
    // configs
    SHADOW_CLASS_MAP,
    BACKGROUND_CLASSES,
    TEXT_CLASS,
    GLASS_BACKDROP_CLASS,
    GLASS_ELEVATION,
    THEME_CLASS_PREFIX,
    COMMON_CLASSES,
    TRANSITION_CLASSES,
    SLOTS_STYLE,
    THEME_DEFAULTS,
    pickThemeDefaults,
    // default groups
    HTML_BUTTON_DEFAULTS,
    STYLE_PROPS_DEFAULTS,
    DISABLEABLE_DEFAULTS,
    POSITION_DEFAULTS,
    SIZE_DEFAULTS,
    THEME_PROPS_DEFAULTS,
    THEME_CONTEXT_DEFAULTS,
    ANIMATION_DEFAULTS,
    WITH_ICON_DEFAULTS,
    WITH_OPTIONS_DEFAULTS,
    WITH_TITLE_DEFAULTS,
    WITH_FOOTER_DEFAULTS,
    WITH_IMAGE_DEFAULTS,
    CLICKABLE_DEFAULTS,
    BORDERABLE_DEFAULTS,
    FOCUSABLE_DEFAULTS,
    ORIENTATION_DEFAULTS,
    USE_MY_BUTTON_DEFAULTS,
    USE_MY_CARD_DEFAULTS,
    USE_MY_PANEL_DEFAULTS,
    USE_MY_NAV_DEFAULTS,
    USE_MY_INPUT_DEFAULTS,
    INTERACTION_BEHAVIOR_DEFAULTS,
    INTERACTION_CONFIG_DEFAULTS,
    INTERACTION_POLICY_DEFAULTS,
    defaultValues,
    // themes
    INTENSITY,
    DEFAULT_BASE_COLOR,
    VARIANT_ROLE_STYLES,
    resolveTheme,
} as const

export type DesignAggregation = typeof DESIGN_AGGREGATION
