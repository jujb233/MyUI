// src/styles/config/tailwind.ts

import { baseColors, spacing, fontSizes, fontWeights, borderRadius, shadows, glassShadows } from './base';

/**
 * @description Configuration for Tailwind CSS.
 * This file translates the base design system variables into a format
 * that Tailwind can understand.
 */

export const tailwindConfig = {
    theme: {
        extend: {
            // Avoid overriding Tailwind's default color palette to keep classes like bg-emerald-400 working
            spacing: {
                ...spacing,
            },
            fontSize: {
                ...fontSizes,
            },
            fontWeight: {
                ...fontWeights,
            },
            borderRadius: {
                ...borderRadius,
            },
            boxShadow: {
                ...shadows,
            },
            // Example of adding custom animations
            keyframes: {
                'fade-in': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
            },
            animation: {
                'fade': 'fade-in 0.3s ease-out',
            },
        },
    },
    plugins: [
        // Utilities for MyUI theme color classes and glass elevation
        function ({ addUtilities }: any) {
            const colorUtilities: Record<string, any> = {};
            for (const [name, val] of Object.entries(baseColors)) {
                if (typeof val === 'object' && 'from' in val && 'to' in val) {
                    colorUtilities[`.myui-color-${name}`] = {
                        '--from': (val as any).from,
                        '--to': (val as any).to,
                    };
                }
            }
            const glassUtilities = {
                '.myui-glass-md': {
                    boxShadow: glassShadows.md,
                },
                '.myui-glass-lg': {
                    boxShadow: glassShadows.lg,
                },
            } as const;
            addUtilities({
                ...colorUtilities,
                ...glassUtilities,
            });
        },
    ],
};
