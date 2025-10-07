import { useComponentTheme, VARIANT_ROLE_STYLES } from "../../../Options"
import type { ComponentVariant, SizeName, ShadowName } from "../../../Options"
import clsx from "clsx"
import { buildHookInteractionClasses } from "./useInteraction"
import type { InteractionPolicy } from "../Interfaces/behavior/interaction"
import { INTERACTION_PRESETS } from "../../../Options/Interactions/interaction"

export type UseMyNavOptions = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    /** 是否启用容器交互（默认关闭，避免导航栏整体 hover/active） */
    interactionEnabled?: boolean
    /** 容器是否显示 focus ring（默认关闭） */
    focusRing?: boolean
    interaction?: InteractionPolicy
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
    } = options

    const { theme, style: navStyle } = useComponentTheme({
        intensity: variant ? VARIANT_ROLE_STYLES[variant.role] : undefined,
        color: variant?.color,
        glass,
        shadow,
    })

    const interactionClasses = interactionEnabled
        ? buildHookInteractionClasses(typeof interaction === 'string'
            ? INTERACTION_PRESETS[interaction]
            : interaction)
        : ''

    const navClasses = clsx(
        'my-nav',
        `my-nav-${size}`,
        theme,
        interactionClasses,
        className
    )

    return { navStyle, navClasses, rootStyle: navStyle, rootClasses: navClasses }
}
