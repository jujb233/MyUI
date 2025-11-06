import type { AnimationProp } from "../../styles/config/animation";
import type { ComponentVariant, SizeName, ShadowName } from "../../types";
import type { InteractionPolicy } from "../../styles/config/interaction";
import { INTERACTION_PRESETS } from "../../styles/config/interaction";
import { createBaseStyle } from "../../Utils/styleFactory";

const COMMON_CLASSES = {
    FLEX_CENTER: "flex items-center justify-center",
};

export type UseMyNavOptions = {
    variant?: ComponentVariant;
    size?: SizeName;
    glass?: boolean;
    shadow?: ShadowName;
    className?: string;
    interactionEnabled?: boolean;
    focusRing?: boolean;
    interaction?: InteractionPolicy | string;
    animation?: AnimationProp;
};

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
        .add(COMMON_CLASSES.FLEX_CENTER, 'px-4')
        .add(`my-nav-${size}`)
        .build();

    return {
        nav: navClasses,
        brand: "flex-shrink-0",
        content: "flex-1",
        menu: "flex items-center space-x-4",
        actions: "ml-auto flex items-center",
    };
}
