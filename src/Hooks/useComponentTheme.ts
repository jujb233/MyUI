import { useMemo } from 'react';
import type { ThemeOptions, ComponentThemeResult } from '../Utils/componentTheme';
import { resolveTheme } from '../Options/Themes/themeResolver';
import { resolveElevation } from '../Options';
import { SHADOWS } from '../Options/Styles/styleConstants';


/**
 * Hook：对 computeComponentTheme 的结果进行依赖精简与记忆化。
 */
export function useThemeStyles(params: ThemeOptions): ComponentThemeResult {
    // 将会影响 theme 的仅有 variant / color
    const themeKey = `${params.intensity ?? ''}|${params.color ?? ''}`;
    const elevKey = `${params.glass ?? true}|${params.shadow ?? 'md'}|${params.elevationKind ?? ''}`;
    const disabledKey = params.disabled ? '1' : '0';

    // 直接在 useMemo 内实现 computeComponentTheme 的逻辑
    const result = useMemo(() => {
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
    }, [themeKey, elevKey, disabledKey, params.styleOverrides, params.disabledStyle]);
    return result;
}

export type UseComponentThemeParams = ThemeOptions;