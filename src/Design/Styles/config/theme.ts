// src/styles/config/theme.ts

import { baseColors } from './base';

/**
 * @description Defines the application's themes.
 * A theme maps semantic color names to the base color palette.
 */

export const lightTheme = {
    primary: baseColors.blue.from,
    secondary: baseColors.gray.from,
    background: baseColors.white.from,
    text: baseColors.neutral.to,
    accent: baseColors.blue.from,
    muted: baseColors.gray.from,
    // ... other semantic colors
};

export const darkTheme = {
    primary: baseColors.blue.from,
    secondary: baseColors.gray.to,
    background: baseColors.neutral.to,
    text: baseColors.white.from,
    accent: baseColors.blue.from,
    muted: baseColors.gray.to,
    // ... other semantic colors
}; export const themes = {
    light: lightTheme,
    dark: darkTheme,
};
