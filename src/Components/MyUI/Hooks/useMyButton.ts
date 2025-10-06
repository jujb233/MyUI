import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, DEFAULT_STYLES, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import clsx from "clsx"
import { buildHookInteractionClasses } from "./useInteraction"
import { INTERACTION_PRESETS } from "../../../Options/Interactions/interaction"
import type { InteractionPolicy } from "../Interfaces/interaction"

export type UseMyButtonProps = {
    htmlType?: "button" | "submit" | "reset"
    variant?: ComponentVariant
    size?: SizeName
    disabled?: boolean
    className?: string
    glass?: boolean
    shadow?: ShadowName
    interaction?: InteractionPolicy
}

export function useMyButton(props: UseMyButtonProps) {
    const {
        variant: variantProp,
        size = "medium",
        disabled = false,
        className = "",
        glass = true,
        shadow = "sm",
        interaction = 'rich',
    } = props

    // 解析变体与颜色（与 Card/Panel 保持一致）
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    const variant = VARIANT_ROLE_STYLES[role] as any

    // 尺寸样式
    const sizeStyle = SIZE_CONFIG[size]

    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: false,
        shadow,
        elevationKind: "button",
    })

    const buttonStyle: React.CSSProperties = {
        ...themedStyle,
        ...(disabled && {
            background: DEFAULT_STYLES.disabled.background,
            color: DEFAULT_STYLES.disabled.color,
        }),
    } as React.CSSProperties

    const buttonClasses = clsx(
        sizeStyle.padding,
        sizeStyle.fontSize,
        sizeStyle.minWidth,
        "inline-flex items-center justify-center select-none relative overflow-hidden",
        "rounded-xl font-semibold tracking-wide border border-transparent",
        "transition-all duration-200 ease-out will-change-transform",
        glass
            ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
            : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]',
        'text-[var(--text)]',
        buildHookInteractionClasses(typeof interaction === 'string'
                    ? INTERACTION_PRESETS[interaction]
                    : interaction),
        "disabled:opacity-60 disabled:cursor-not-allowed",
        glass && !disabled && "backdrop-blur-md border",
        className
    )

    return {
        size,
        sizeStyle,
        buttonStyle,
        buttonClasses,
        // 统一命名别名
        rootStyle: buttonStyle,
        rootClasses: buttonClasses,
        disabled,
        glass,
    }
}
