import { type ComponentVariant, type SizeName, type ShadowName } from "../../Interfaces/core"
import type { InteractionPolicy } from "../../Interfaces/interaction"
import type { AnimationProp } from "../../styles/config/animation"
import { COMMON_CLASSES } from "../../Options/Configs/classConfig"
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots"
import { createBaseStyle } from "../../Utils/styleFactory"
import type { PositionProps } from "../../Interfaces"
import type { JSX } from "solid-js"

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
    const titleFontSizeMap: Record<typeof size, string> = {
        small: '1.125rem', // text-lg
        medium: '1.25rem', // text-xl
        large: '1.5rem',   // text-2xl
    }
    const contentFontSizeMap: Record<typeof size, string> = {
        small: '0.875rem', // text-sm
        medium: '1rem',    // text-base
        large: '1.125rem', // text-lg
    }
    const paddingMap: Record<typeof size, { px: string; py: string }> = {
        small: { px: '0.75rem', py: '0.25rem' },
        medium: { px: '1rem', py: '0.5rem' },
        large: { px: '1.5rem', py: '0.75rem' },
    }

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
        'padding-left': paddingMap[size].px,
        'padding-right': paddingMap[size].px,
        'padding-top': paddingMap[size].py,
        'padding-bottom': paddingMap[size].py,
        'font-size': contentFontSizeMap[size],
    }

    const slotStyles = {
        header: { 'font-size': titleFontSizeMap[size] } as JSX.CSSProperties,
        content: { 'font-size': contentFontSizeMap[size] } as JSX.CSSProperties,
    }

    return {
        panel: panelClasses,
        panelStyle,
        slots,
        slotStyles,
    }
}

