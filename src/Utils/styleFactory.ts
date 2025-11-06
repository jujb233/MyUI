import styleBuilder from "./styleBuilder";
import { sizeConfig } from "../styles/config/base";
import type { ComponentVariant, SizeName, ShadowName, VariantRole } from "../Interfaces/core/types";
import type { AnimationProp } from "../styles/config/animation";
import type { InteractionPolicy } from "../styles/config/interaction";
import { isHexColor } from './colorUtils';
import { ensureThemeClass } from './dynamicThemeManager';

// Mappings from semantic names to Tailwind classes
const SHADOW_CLASS_MAP: Record<ShadowName, string> = {
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    inner: 'shadow-inner',
    none: 'shadow-none',
};

const BACKGROUND_CLASSES = {
    glass: "bg-white/30 backdrop-blur-lg",
    traditional: "bg-gradient-to-br",
};

const TEXT_CLASS = "text-white";
const GLASS_BACKDROP_CLASS = "backdrop-filter";
const GLASS_ELEVATION = "shadow-glass-md";
const THEME_CLASS_PREFIX = {
    color: "theme-color-",
    variant: "theme-variant-",
};
const COMMON_CLASSES = {
    DISABLED_STATE: "opacity-50 cursor-not-allowed",
    RELATIVE_OVERFLOW_HIDDEN: "relative overflow-hidden",
    ROUNDED_XL: "rounded-xl",
};

const VARIANT_ROLE_STYLES: Record<VariantRole, 'solid' | 'soft' | 'subtle' | 'text'> = {
    primary: 'solid',
    secondary: 'soft',
    success: 'solid',
    warning: 'solid',
    danger: 'solid',
    text: 'text',
};

interface CreateBaseStyleResult {
    builder: ReturnType<typeof styleBuilder.builder>;
    sizeConfig: typeof sizeConfig[SizeName];
    themeColorClass: string;
    themeVariantClass: string;
    elevationClass: string;
}

export function createBaseStyle(options: {
    variant?: ComponentVariant;
    size?: SizeName;
    glass?: boolean;
    shadow?: ShadowName;
    className?: string;
    disabled?: boolean;
    animation?: AnimationProp | undefined;
    interaction?: string | InteractionPolicy | undefined;
}): CreateBaseStyleResult {
    const {
        variant,
        size = 'medium',
        glass = false,
        shadow = 'none',
        className = '',
        disabled = false,
        animation,
        interaction,
    } = options;

    const role = variant?.role || 'primary';
    const color = variant?.color || 'blue';
    const intensity = VARIANT_ROLE_STYLES[role];

    const themeColorClass = isHexColor(String(color))
        ? ensureThemeClass(String(color), intensity)
        : `${THEME_CLASS_PREFIX.color}${color}`;
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`;
    const elevationClass = glass ? GLASS_ELEVATION : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md);

    const builder = styleBuilder.builder()
        .add(themeColorClass, themeVariantClass)
        .add(TEXT_CLASS)
        .add(glass, BACKGROUND_CLASSES.glass, BACKGROUND_CLASSES.traditional)
        .add(glass, GLASS_BACKDROP_CLASS)
        .add(elevationClass)
        .add(!!disabled, COMMON_CLASSES.DISABLED_STATE)
        .addAnimation(animation)
        .addInteraction(interaction as any)
        .add(className);

    return {
        builder,
        sizeConfig: sizeConfig[size],
        themeColorClass,
        themeVariantClass,
        elevationClass,
    };
}
