import { useMemo } from 'react';
import { resolveTheme, type ThemeResolverParams } from './Themes/themeResolver';
import { SHADOWS, type ShadowName } from './styleConstants';
import { resolveElevation, type ElevationKind } from './elevation';

export interface UseComponentThemeParams extends ThemeResolverParams {
    glass?: boolean;
    shadow?: ShadowName;
    disabled?: boolean;
    elevationKind?: ElevationKind;
}

/**
 * 统一处理主题与投影/elevation 计算。
 * - 缓存 theme 与 style 对象，减少重复对象创建。
 */
export function useComponentTheme(params: UseComponentThemeParams) {
    const { glass = true, shadow = 'md', disabled = false, elevationKind, ...themeParams } = params;

    const theme = useMemo(() => resolveTheme(themeParams), [themeParams.variant, themeParams.color, themeParams.isCard]);

    const elevation = useMemo(() => resolveElevation({ glass, shadow, kind: elevationKind }), [glass, shadow, elevationKind]);

    const style = useMemo(() => {
        const base: Record<string, string> = { ...theme };
        base.boxShadow = elevation;
        if (disabled) {
            // 组件内部仍可追加自己的禁用覆盖
            base.boxShadow = SHADOWS.none;
        }
        return base as React.CSSProperties;
    }, [theme, elevation, disabled]);

    return { theme, elevation, style };
}
