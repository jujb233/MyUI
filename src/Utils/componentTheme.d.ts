import type React from 'react';
import type { ShadowName, ElevationKind } from '../Options';
import type { ComponentTheme } from '../Options/Themes/themeBuilder';
import type { ThemeResolverParams } from '../Options/Themes/themeResolver';

export interface ThemeOptions extends ThemeResolverParams {
    glass?: boolean;
    shadow?: ShadowName;
    disabled?: boolean;
    elevationKind?: ElevationKind;
    styleOverrides?: React.CSSProperties;
    disabledStyle?: React.CSSProperties;
}

export interface ComponentThemeResult {
    theme: ComponentTheme;
    elevation: string;
    style: React.CSSProperties;
}