import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core"
import { useCardLayout } from "../../Hooks/useCardLayout"
import type { AnimationProp } from "../../styles/config/animation"
import { createBaseStyle } from "../../Utils/styleFactory"
import clsx from "clsx"
import type { PositionProps } from "../../Interfaces"
import type { InteractionPolicy } from "../../Interfaces/interaction"
import type { JSX } from "solid-js"
import { COMMON_CLASSES } from "../../Options/Configs/classConfig"
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots"

export interface UseMyCardProps extends PositionProps {
    variant?: ComponentVariant | undefined
    size?: SizeName
    glass?: boolean
    clickable?: boolean
    className?: string
    bordered?: boolean
    shadow?: ShadowName
    imagePosition?: "top" | "left" | "right" | "background" | "bottom" | "center"
    direction?: "vertical" | "horizontal"
    hover?: boolean
    hasImage?: boolean
    disabled?: boolean
    animation?: AnimationProp
}

export function useMyCard(props: UseMyCardProps) {
    const {
        variant: variantProp,
        size = "medium",
        glass = true,
        clickable = false,
        className = "",
        bordered = true,
        shadow = "md",
        imagePosition = "top",
        direction = "vertical",
        hover = true,
        hasImage = false,
        disabled = false,
        animation,
    } = props

    const role = variantProp?.role || "primary"
    const color = variantProp?.color || "blue"

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    const interactionPolicy: InteractionPolicy | undefined = hover || clickable
        ? { enabled: true, behavior: { hover: !!hover, focus: false, active: false, disabled: false, transition: true } }
        : undefined

    const { sizeConfig } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction: interactionPolicy,
    })

    const containerClasses = clsx(
        COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN,
        COMMON_CLASSES.ROUNDED_2XL,
        direction === "horizontal" ? "flex flex-row" : "flex flex-col",
        clickable && COMMON_CLASSES.CURSOR_POINTER,
        bordered && COMMON_CLASSES.BORDER,
        className
    )

    const containerStyle: JSX.CSSProperties | undefined = {
        ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
        ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
    }

    // 将动态尺寸/间距类移至 style，保留结构类
    const bodyBaseClasses = clsx(
        isHorizontal && "flex-1",
        imagePosition === "background" && "relative z-10"
    )

    const paddingMap: Record<typeof size, { px: string; py: string; spacingY: string }> = {
        small: { px: '0.75rem', py: '0.25rem', spacingY: '0.5rem' }, // px-3 py-1 space-y-2
        medium: { px: '1rem', py: '0.5rem', spacingY: '0.75rem' },   // px-4 py-2 space-y-3
        large: { px: '1.5rem', py: '0.75rem', spacingY: '1rem' },    // px-6 py-3 space-y-4
    }

    const bodyStyle: JSX.CSSProperties = {
        'padding-left': paddingMap[size].px,
        'padding-right': paddingMap[size].px,
        'padding-top': paddingMap[size].py,
        'padding-bottom': paddingMap[size].py,
        // 纵向间距通过 gap 模拟 space-y
        'display': 'flex',
        'flex-direction': 'column',
        'row-gap': paddingMap[size].spacingY,
    }

    // 圆角/字体尺寸等动态类移至 style
    const radiusMap: Record<typeof size, string> = {
        small: '0.5rem',    // rounded-lg
        medium: '0.75rem',  // rounded-xl
        large: '1rem',      // rounded-2xl
    }
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

    const slots = {
        image: clsx(SLOTS_STYLE.image[imagePosition]),
        header: clsx(SLOTS_STYLE.cardHeaderBase, SLOTS_STYLE.header),
        title: clsx(SLOTS_STYLE.title),
        content: clsx(SLOTS_STYLE.textMuted, isHorizontal && "flex-1 min-w-0"),
        footer: clsx(SLOTS_STYLE.cardFooterBase, isHorizontal && "w-full"),
        actions: SLOTS_STYLE.actions,
        tagsContainer: SLOTS_STYLE.tagsContainer,
        tag: SLOTS_STYLE.tag,
    }

    const slotStyles = {
        title: { 'font-size': titleFontSizeMap[size] } as JSX.CSSProperties,
        content: { 'font-size': contentFontSizeMap[size] } as JSX.CSSProperties,
        footer: { 'border-bottom-left-radius': radiusMap[size], 'border-bottom-right-radius': radiusMap[size] } as JSX.CSSProperties,
        image: { 'border-radius': radiusMap[size] } as JSX.CSSProperties,
    }

    return {
        size,
        sizeConfig,
        containerClasses,
        containerStyle,
        bodyClasses: bodyBaseClasses,
        bodyStyle,
        isHorizontal,
        imagePosition,
        slots,
        slotStyles,
    }
}
