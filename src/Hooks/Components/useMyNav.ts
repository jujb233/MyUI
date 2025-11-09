import type { AnimationProp } from "../../styles/config/animation";
import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core";
import type { InteractionProp } from "../../Interfaces/interaction";
import type { JSX } from "solid-js";
import { INTERACTION_PRESETS } from "../../styles/config/interaction";
import { createBaseStyle } from "../../Utils/styleFactory";
import { COMMON_CLASSES } from "../../Options/Configs/classConfig";
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots";
import { getSizeTokens, buildPaddingStyle } from "../../Utils/sizeStyles";
import { defaultValues } from "../../Options/Configs/default";
import { mergeDefaults } from "../../Utils/defaultResolver";
import type { ComponentHookResult } from "../../Interfaces/types/ComponentHookResult";

export interface UseMyNavOptions {
    variant?: ComponentVariant | undefined;
    size?: SizeName | undefined;
    glass?: boolean | undefined;
    shadow?: ShadowName | undefined;
    className?: string | undefined;
    class?: string | undefined;
    id?: string | undefined;
    style?: JSX.CSSProperties | undefined;
    focusRing?: boolean | undefined;
    interaction?: InteractionProp | undefined;
    animation?: AnimationProp | undefined;
}

export function useMyNav(options: UseMyNavOptions): ComponentHookResult {
    const merged = mergeDefaults(defaultValues.UseMyNavProps as any, options as any)
    const {
        variant,
        size,
        glass,
        shadow,
        class: className,
        interaction,
        animation,
    } = merged as any;

    const role = variant?.role || 'primary';
    const color = variant?.color || 'blue';

    const { builder } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        animation,
        interaction: typeof interaction === 'string'
            ? (INTERACTION_PRESETS as Record<string, any>)[interaction] ?? INTERACTION_PRESETS.none
            : interaction
    });

    const navClasses = builder
        .add(COMMON_CLASSES.FLEX_CENTER_JUSTIFY)
        // 尺寸 padding 改为内联 style，避免动态类
        .add(`${SLOTS_STYLE.navRootSizePrefix}${size}`)
        .build();

    // 将 padding 移到 style
    const tokens = getSizeTokens(size)
    const navStyle = buildPaddingStyle(tokens)

    return {
        rootClass: navClasses,
        rootStyle: navStyle,
        slots: {
            brand: SLOTS_STYLE.brand,
            content: SLOTS_STYLE.content,
            menu: SLOTS_STYLE.menu,
            options: SLOTS_STYLE.navActions,
        },
    };
}
