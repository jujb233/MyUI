// src/styles/config/tailwind.ts

import { baseColors, spacing, fontSizes, fontWeights, borderRadius, shadows } from './base';

/**
 * @description Configuration for Tailwind CSS.
 * This file translates the base design system variables into a format
 * that Tailwind can understand.
 */

export const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                ...baseColors,
            },
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
        // Example of a custom plugin
        function ({ addBase, theme }: any) {
            addBase({
                ':root': {
                    '--primary-color': theme('colors.primary'),
                    '--background-color': theme('colors.background'),
                    '--text-color': theme('colors.text'),
                },
                // Example for dark mode
                '.dark': {
                    '--primary-color': theme('colors.primary'),
                    '--background-color': theme('colors.dark'),
                    '--text-color': theme('colors.light'),
                }
            });
        }
    ],
};
