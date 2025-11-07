import { type ComponentVariant, type SizeName, type ShadowName } from "../../Interfaces/core"
import type { InteractionPolicy } from "../../Interfaces/interaction"
import type { AnimationProp } from "../../styles/config/animation"
import { COMMON_CLASSES } from "../../Options/Configs/classConfig"
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots"
import { createBaseStyle } from "../../Utils/styleFactory"
import type { PositionProps } from "../../Interfaces"
import type { JSX } from "solid-js"
import { getSizeTokens, buildPaddingStyle } from "../../Utils/sizeStyles"

export type UseMyPanelProps = PositionProps & {
    variant?: ComponentVariant | undefined
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    interaction?: InteractionPolicy | string | undefined
    animation?: AnimationProp | undefined
}

export function useMyPanel(props: UseMyPanelProps & { backgroundImage?: string }) {
    const {
        variant: variantProp,
        size = 'medium',
        glass = true,
        shadow = 'md',
        className = "",
        disabled = false,
        interaction = 'rich',
        animation,
        backgroundImage,
    } = props

    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'

    const { builder } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction,
    })

    // 动态尺寸类移动为内联样式
    const tokens = getSizeTokens(size)

    const slots = {
        background: backgroundImage
            ? "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 select-none"
            : undefined,
        header: `${SLOTS_STYLE.header} ${SLOTS_STYLE.panelHeaderExtra}`.trim(),
        content: `${SLOTS_STYLE.content}`.trim(),
        footer: SLOTS_STYLE.panelFooter,
    };

    const panelClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .build()

    const panelStyle: JSX.CSSProperties = {
        ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
        ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
        ...buildPaddingStyle(tokens),
        'font-size': tokens.fontSizeBase,
    }

    const slotStyles = {
        header: { 'font-size': tokens.fontSizeTitle } as JSX.CSSProperties,
        content: { 'font-size': tokens.fontSizeBase } as JSX.CSSProperties,
    }

    return {
        panel: panelClasses,
        panelStyle,
        slots,
        slotStyles,
    }
}

