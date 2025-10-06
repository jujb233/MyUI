import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import clsx from "clsx"
import type { InteractionPolicy } from "../Interfaces/interaction"
import { buildHookInteractionClasses } from "./useInteraction"
import { INTERACTION_PRESETS } from "../../../Options/Interactions/interaction"

export type UseMyPanelProps = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    title?: string
    backgroundImage?: string
    interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS
};

export function useMyPanel(props: UseMyPanelProps) {
    const {
        variant: variantProp,
        size = "medium",
        glass = true,
        shadow = "md",
        className = "",
        disabled = false,
        title,
        backgroundImage,
        interaction = 'rich',
    } = props

    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    const variant = VARIANT_ROLE_STYLES[role] as any

    const sizeStyle = SIZE_CONFIG[size]

    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: true,
        shadow,
        elevationKind: 'panel',
    })

    const panelStyle: React.CSSProperties = {
        ...themedStyle,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    } as React.CSSProperties

    const panelClasses = clsx(
        "relative overflow-hidden rounded-2xl",
        sizeStyle.padding,
        sizeStyle.fontSize,
        glass
            ? "[background:var(--glass-bg)] text-[var(--text)]"
            : "[background:var(--bg)] text-[var(--text)]",
        glass && "backdrop-blur-md",
        backgroundImage && "bg-cover bg-center",
        disabled && "opacity-60 cursor-not-allowed",
        buildHookInteractionClasses(typeof interaction === 'string'
            ? INTERACTION_PRESETS[interaction]
            : interaction),
        className
    )

    return {
        size,
        sizeStyle,
        panelStyle,
        panelClasses,
        // 统一命名别名
        rootStyle: panelStyle,
        rootClasses: panelClasses,
        disabled,
        title,
        backgroundImage,
        glass,
    }
}
