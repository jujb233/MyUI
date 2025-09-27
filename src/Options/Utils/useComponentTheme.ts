import { useMemo } from 'react';
import type { ThemeOptions, ComponentThemeResult } from './componentTheme';
import { computeComponentTheme } from './componentTheme';

/**
 * Hook：对 computeComponentTheme 的结果进行依赖精简与记忆化。
 */
export function useThemeStyles(params: ThemeOptions): ComponentThemeResult {
    // 将会影响 theme 的仅有 variant / color
    const themeKey = `${params.intensity ?? ''}|${params.color ?? ''}`;
    const elevKey = `${params.glass ?? true}|${params.shadow ?? 'md'}|${params.elevationKind ?? ''}`;
    const disabledKey = params.disabled ? '1' : '0';

    // 对非对象的 key 单独拆出，避免每次传对象导致引用变化
    const result = useMemo(() => computeComponentTheme(params), [themeKey, elevKey, disabledKey, params.styleOverrides, params.disabledStyle]);
    return result;
}

export type { ThemeOptions as UseComponentThemeParams } from './componentTheme';