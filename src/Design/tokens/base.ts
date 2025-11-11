// Design tokens: colors, spacing, typography, radius, shadows, sizes

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
}

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
}

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
}

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
}

export const shadows = {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
}

export const glassShadows = {
    md: `0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)`,
    lg: `0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)`,
}

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
} as const
