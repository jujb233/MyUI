import type { JSX } from "solid-js"
import type { SizeName } from "../../Interfaces"

export interface SizeTokens {
    size: SizeName
    paddingX: string // horizontal padding
    paddingY: string // vertical padding
    fontSizeBase: string // base/content font size
    fontSizeTitle: string // title font size
    minWidth: string // button min-width
    gapY: string // vertical gap for stacked layouts (card body)
    borderRadius: string // for image/footer rounding in cards
}

const SIZE_TOKENS_MAP: Record<SizeName, SizeTokens> = {
    small: {
        size: 'small',
        paddingX: '0.75rem', // px-3
        paddingY: '0.25rem', // py-1
        fontSizeBase: '0.875rem', // text-sm
        fontSizeTitle: '1.125rem', // text-lg
        minWidth: '4rem', // min-w-16
        gapY: '0.5rem', // space-y-2
        borderRadius: '0.5rem', // rounded-lg
    },
    medium: {
        size: 'medium',
        paddingX: '1rem', // px-4
        paddingY: '0.5rem', // py-2
        fontSizeBase: '1rem', // text-base
        fontSizeTitle: '1.25rem', // text-xl
        minWidth: '5rem', // min-w-20
        gapY: '0.75rem', // space-y-3
        borderRadius: '0.75rem', // rounded-xl
    },
    large: {
        size: 'large',
        paddingX: '1.5rem', // px-6
        paddingY: '0.75rem', // py-3
        fontSizeBase: '1.125rem', // text-lg
        fontSizeTitle: '1.5rem', // text-2xl
        minWidth: '6rem', // min-w-24
        gapY: '1rem', // space-y-4
        borderRadius: '1rem', // rounded-2xl
    },
}

export function getSizeTokens(size: SizeName = 'medium'): SizeTokens {
    return SIZE_TOKENS_MAP[size] || SIZE_TOKENS_MAP.medium
}

// Helper: build padding style object
export function buildPaddingStyle(tokens: SizeTokens): JSX.CSSProperties {
    return {
        'padding-left': tokens.paddingX,
        'padding-right': tokens.paddingX,
        'padding-top': tokens.paddingY,
        'padding-bottom': tokens.paddingY,
    } as const
}

// Helper: common vertical stack style (replacement for Tailwind space-y-*)
export function buildVerticalStackStyle(tokens: SizeTokens): JSX.CSSProperties {
    return {
        'display': 'flex',
        'flex-direction': 'column',
        'row-gap': tokens.gapY,
    } as const
}

// Helper: merge two style objects (shallow)
export function mergeStyles<A extends JSX.CSSProperties | undefined, B extends JSX.CSSProperties | undefined>(a: A, b: B): JSX.CSSProperties {
    return { ...(a || {}), ...(b || {}) }
}

export const X_LENGTH_PRESETS: Record<SizeName, string> = {
    small: '16rem', // w-64
    medium: '24rem', // w-96
    large: '32rem', // w-128
}

export const Y_LENGTH_PRESETS: Record<SizeName, string> = {
    small: 'auto',
    medium: 'auto',
    large: 'auto',
}

type LengthValue = SizeName | number | string

/**
 * Resolves a length value (SizeName, number, or string) into a valid CSS string.
 * @param value - The length value to resolve.
 * @param presets - The map of presets to use if the value is a SizeName.
 * @returns A CSS length string (e.g., '16rem', '100px', '50%').
 */
function getLengthValue(value: LengthValue | undefined, presets: Record<SizeName, string>): string | undefined {
    if (value === undefined) return undefined

    if (typeof value === 'number') {
        return `${value}rem`
    }
    if (typeof value === 'string') {
        if (presets[value as SizeName]) {
            return presets[value as SizeName]
        }
        return value // Assume it's a valid CSS value like '50%' or '100px'
    }
    return undefined
}

/**
 * Builds a style object for width and height based on xLength and yLength props.
 * @param props - An object containing optional xLength and yLength.
 * @returns A JSX.CSSProperties object with width and/or height.
 */
export function buildSizeStyle(props: { xLength?: LengthValue; yLength?: LengthValue }): JSX.CSSProperties {
    const style: JSX.CSSProperties = {}
    const width = getLengthValue(props.xLength, X_LENGTH_PRESETS)
    const height = getLengthValue(props.yLength, Y_LENGTH_PRESETS)

    if (width !== undefined) {
        style.width = width
    }
    if (height !== undefined) {
        style.height = height
    }
    return style
}
