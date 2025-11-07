import type { SizeName } from "../Interfaces/core";
import type { JSX } from "solid-js";

export interface SizeTokens {
    size: SizeName;
    paddingX: string; // horizontal padding
    paddingY: string; // vertical padding
    fontSizeBase: string; // base/content font size
    fontSizeTitle: string; // title font size
    minWidth: string; // button min-width
    gapY: string; // vertical gap for stacked layouts (card body)
    borderRadius: string; // for image/footer rounding in cards
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
};

export function getSizeTokens(size: SizeName = 'medium'): SizeTokens {
    return SIZE_TOKENS_MAP[size] || SIZE_TOKENS_MAP.medium;
}

// Helper: build padding style object
export function buildPaddingStyle(tokens: SizeTokens): JSX.CSSProperties {
    return {
        'padding-left': tokens.paddingX,
        'padding-right': tokens.paddingX,
        'padding-top': tokens.paddingY,
        'padding-bottom': tokens.paddingY,
    } as const;
}

// Helper: common vertical stack style (replacement for Tailwind space-y-*)
export function buildVerticalStackStyle(tokens: SizeTokens): JSX.CSSProperties {
    return {
        'display': 'flex',
        'flex-direction': 'column',
        'row-gap': tokens.gapY,
    } as const;
}

// Helper: merge two style objects (shallow)
export function mergeStyles<A extends JSX.CSSProperties | undefined, B extends JSX.CSSProperties | undefined>(a: A, b: B): JSX.CSSProperties {
    return { ...(a || {}), ...(b || {}) };
}
