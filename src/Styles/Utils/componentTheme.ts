import type React from 'react';
import { resolveTheme, type ThemeResolverParams } from '../Themes/themeResolver';
import { SHADOWS, type ShadowName } from '../styleConstants';
import { resolveElevation, type ElevationKind } from '../elevation';
import type { ComponentTheme } from '../Themes/themeBuilder';

export interface ThemeOptions extends ThemeResolverParams {
    glass?: boolean;
    shadow?: ShadowName;
    disabled?: boolean;
    elevationKind?: ElevationKind;
    /** 额外样式覆盖（始终应用在最后） */
    styleOverrides?: React.CSSProperties;
    /** 禁用态下追加的样式覆盖（在禁用态时应用在最后） */
    disabledStyle?: React.CSSProperties;
}

export interface ComponentThemeResult {
    theme: ComponentTheme;
    elevation: string;
    style: React.CSSProperties;
}

/**
 * 纯函数：根据入参计算 theme、elevation 与最终 style（支持禁用与样式覆盖）。
 */
export function computeComponentTheme(params: ThemeOptions): ComponentThemeResult {
    const {
        glass = true,
        shadow = 'md',
        disabled = false,
        elevationKind,
        styleOverrides,
        disabledStyle,
        ...themeParams
    } = params;

    const theme = resolveTheme(themeParams);
    const elevation = resolveElevation({ glass, shadow, kind: elevationKind });

    const base: React.CSSProperties = { ...(theme as unknown as React.CSSProperties), boxShadow: disabled ? SHADOWS.none : elevation };

    // 合并通用覆盖
    if (styleOverrides) Object.assign(base, styleOverrides);

    // 禁用态覆盖（优先级最高）
    if (disabled && disabledStyle) Object.assign(base, disabledStyle);

    return { theme, elevation, style: base };
}
