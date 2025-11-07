import type { AnimationProp } from "../../styles/config/animation";
import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core";
import type { InteractionPolicy } from "../../Interfaces/interaction";
import type { JSX } from "solid-js";
import { INTERACTION_PRESETS } from "../../styles/config/interaction";
import { createBaseStyle } from "../../Utils/styleFactory";
import { COMMON_CLASSES } from "../../Options/Configs/classConfig";
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots";

export interface UseMyNavOptions {
    variant?: ComponentVariant | undefined;
    size?: SizeName | undefined;
    glass?: boolean | undefined;
    shadow?: ShadowName | undefined;
    className?: string | undefined;
    class?: string | undefined;
    id?: string | undefined;
    style?: JSX.CSSProperties | undefined;
    interactionEnabled?: boolean | undefined;
    focusRing?: boolean | undefined;
    interaction?: InteractionPolicy | string | undefined;
    animation?: AnimationProp | undefined;
}

export function useMyNav(options: UseMyNavOptions) {
    const {
        variant,
        size = 'medium',
        glass = false,
        shadow = 'none',
        className = '',
        interactionEnabled = false,
        interaction = 'none',
        animation,
    } = options;

    const role = variant?.role || 'primary';
    const color = variant?.color || 'blue';

    const { builder } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        animation,
        interaction: interactionEnabled
            ? (typeof interaction === 'string'
                ? (INTERACTION_PRESETS as Record<string, any>)[interaction] ?? INTERACTION_PRESETS.none
                : interaction)
            : undefined
    });

    const navClasses = builder
        .add(COMMON_CLASSES.FLEX_CENTER_JUSTIFY)
        // 尺寸 padding 改为内联 style，避免动态类
        .add(`${SLOTS_STYLE.navRootSizePrefix}${size}`)
        .build();

    // 将 padding 移到 style
    const paddingMap: Record<NonNullable<typeof size>, { px: string; py: string }> = {
        small: { px: '0.75rem', py: '0.25rem' },
        medium: { px: '1rem', py: '0.5rem' },
        large: { px: '1.5rem', py: '0.75rem' },
    } as const;
    const navStyle = {
        'padding-left': paddingMap[size].px,
        'padding-right': paddingMap[size].px,
        'padding-top': paddingMap[size].py,
        'padding-bottom': paddingMap[size].py,
    } as const;

    return {
        nav: navClasses,
        navStyle,
        brand: SLOTS_STYLE.brand,
        content: SLOTS_STYLE.content,
        menu: SLOTS_STYLE.menu,
        actions: SLOTS_STYLE.navActions,
    };
}
