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
import { getSizeTokens, buildPaddingStyle, buildVerticalStackStyle, mergeStyles } from "../../Utils/sizeStyles"
import { defaultValues } from "../../Options/Configs/default"
import type { OrientationProps, WithImage } from "../../Interfaces"

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
        size = defaultValues.SizeProps.size as SizeName,
        glass = defaultValues.ThemeProps.glass,
        clickable = defaultValues.Clickable.clickable,
        className = defaultValues.StyleProps.class,
        bordered = defaultValues.Borderable.bordered,
        shadow = defaultValues.ThemeProps.shadow as ShadowName,
        imagePosition = defaultValues.WithImage.imagePosition as WithImage["imagePosition"],
        direction = defaultValues.OrientationProps.direction as OrientationProps["direction"],
        hover = defaultValues.InteractionBehavior.hover,
        hasImage = false,
        disabled = defaultValues.Disableable.disabled,
        animation,
    } = props

    const role = variantProp?.role || "primary"
    const color = variantProp?.color || "blue"

    // Ensure `useCardLayout` receives valid parameters
    const { isHorizontal } = useCardLayout({
        direction: direction ?? "vertical",
        imagePosition: imagePosition ?? "top",
        hasImage,
    })

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
    const tokens = getSizeTokens(size)
    const bodyStyle = mergeStyles(buildPaddingStyle(tokens), buildVerticalStackStyle(tokens))

    // 圆角/字体尺寸等动态类移至 style
    const radius = tokens.borderRadius

    // Safely access `SLOTS_STYLE.image` with a fallback
    const slots = {
        image: imagePosition ? clsx(SLOTS_STYLE.image[imagePosition]) : undefined,
        header: clsx(SLOTS_STYLE.cardHeaderBase, SLOTS_STYLE.header),
        title: clsx(SLOTS_STYLE.title),
        content: clsx(SLOTS_STYLE.textMuted, isHorizontal && "flex-1 min-w-0"),
        footer: clsx(SLOTS_STYLE.cardFooterBase, isHorizontal && "w-full"),
        actions: SLOTS_STYLE.actions,
        tagsContainer: SLOTS_STYLE.tagsContainer,
        tag: SLOTS_STYLE.tag,
    }

    const slotStyles = {
        title: { 'font-size': tokens.fontSizeTitle } as JSX.CSSProperties,
        content: { 'font-size': tokens.fontSizeBase } as JSX.CSSProperties,
        footer: { 'border-bottom-left-radius': radius, 'border-bottom-right-radius': radius } as JSX.CSSProperties,
        image: { 'border-radius': radius } as JSX.CSSProperties,
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
