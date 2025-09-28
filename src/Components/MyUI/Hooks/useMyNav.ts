import { useComponentTheme, VARIANT_ROLE_STYLES } from "../../../Options";
import type { ComponentVariant, SizeName, ShadowName } from "../../../Options";
import clsx from "clsx";

export type UseMyNavOptions = {
    variant?: ComponentVariant;
    size?: SizeName;
    glass?: boolean;
    shadow?: ShadowName;
    className?: string;
};

export function useMyNav(options: UseMyNavOptions) {
    const {
        variant,
        size = 'medium',
        glass = false,
        shadow = 'none',
        className = '',
    } = options;

    const { theme, style: navStyle } = useComponentTheme({
        intensity: variant ? VARIANT_ROLE_STYLES[variant.role] : undefined,
        color: variant?.color,
        glass,
        shadow,
    });

    const navClasses = clsx(
        'my-nav',
        `my-nav-${size}`,
        theme,
        className
    );

    return { navStyle, navClasses, rootStyle: navStyle, rootClasses: navClasses };
}
