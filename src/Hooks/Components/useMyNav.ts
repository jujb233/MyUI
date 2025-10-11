import type { AnimationProp } from "../../Options"
import type { ComponentVariant, SizeName, ShadowName } from "../../Options"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import { INTERACTION_PRESETS } from "../../Options/Presets/interactionPresets"
import { SHADOW_CLASS_MAP } from "../../Options/Configs"
import { createBaseBuilder } from "./styleFactory"

export type UseMyNavOptions = {
    variant?: ComponentVariant | undefined
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    interactionEnabled?: boolean | undefined
    focusRing?: boolean
    interaction?: InteractionPolicy | string | undefined
    animation?: AnimationProp | undefined
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
    } = options

    const role = variant?.role || 'primary'
    const color = variant?.color || 'blue'

    const { builder } = createBaseBuilder({
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
    })

    const navClasses = builder
        .add('flex items-center px-4')
        .add(`my-nav-${size}`)
        .add(SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.none)
        .build()

    return {
        nav: navClasses,
        brand: "flex-shrink-0",
        content: "flex-1",
        menu: "flex items-center space-x-4",
        actions: "ml-auto flex items-center",
    }
}
