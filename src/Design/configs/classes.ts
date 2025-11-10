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
}

export const BACKGROUND_CLASSES = {
    glass: '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]',
    traditional: '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]',
} as const

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
