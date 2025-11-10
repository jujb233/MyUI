import clsx from "clsx"
import type { JSX } from "solid-js/jsx-runtime"
import type {
    PositionProps,
    SizeProps,
    ComponentVariant,
    ShadowName,
    ComponentHookResult,
    SizeName,
    InteractionPolicy,
    AnimationProp
} from "../../Interfaces"
import {
    createBaseStyle,
    buildSizeStyle,
    getSizeTokens,
    mergeStyles,
    buildPaddingStyle,
    buildVerticalStackStyle
} from "../../Utils"
import { useCardLayout } from "../useCardLayout"
import {createUseMyCardDefaults, COMMON_CLASSES, SLOTS_STYLE } from "@/Design"


export interface UseMyCardProps extends PositionProps, SizeProps {
    variant?: ComponentVariant | undefined
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

export function useMyCard(props: UseMyCardProps): ComponentHookResult<{ size?: SizeName; sizeConfig?: any; isHorizontal: boolean; imagePosition?: string; clickable?: boolean; bordered?: boolean; hasImage?: boolean; }> {
    const mergedProps = createUseMyCardDefaults(props as any) as UseMyCardProps;

    const {
        variant: variantProp,
        size,
        xLength,
        yLength,
        glass,
        clickable,
        className,
        bordered,
        shadow,
        imagePosition,
        direction,
        hover,
        hasImage,
        disabled,
        animation,
        top,
        left,
        // 新增：来自 defaults 的布局偏好
        fillByDefault,
    } = mergedProps as any;

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

    const { builder, sizeConfig } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        class: className,
        disabled,
        animation,
        interaction: interactionPolicy,
    })

    const useFill = fillByDefault ?? false

    const containerClasses = clsx(
        builder.build(), // 修复点：加入基础样式
        COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN,
        COMMON_CLASSES.ROUNDED_2XL,
        // 根据默认配置决定是否占满宽度；若 fillByDefault 为 true 则使用 block flex（占满），否则使用 inline-flex（按内容收缩）
        direction === "horizontal"
            ? (useFill ? "flex flex-row" : "inline-flex flex-row")
            : (useFill ? "flex flex-col" : "inline-flex flex-col"),
        clickable && COMMON_CLASSES.CURSOR_POINTER,
        bordered && COMMON_CLASSES.BORDER,
        className
    )

    const sizeStyle = buildSizeStyle({ xLength, yLength });

    const containerStyle: JSX.CSSProperties | undefined = {
        ...(top !== undefined ? { top: `${Math.max(0, top)}rem` } : {}),
        ...(left !== undefined ? { left: `${Math.max(0, left)}rem` } : {}),
        ...sizeStyle,
    }

    // 将动态尺寸/间距类移至 style，保留结构类
    const bodyClasses = clsx(
        isHorizontal && "flex-1",
        imagePosition === "background" && "relative z-10"
    )
    const tokens = getSizeTokens(size)
    const bodyStyle = mergeStyles(buildPaddingStyle(tokens), buildVerticalStackStyle(tokens))

    // 圆角/字体尺寸等动态类移至 style
    const radius = tokens.borderRadius

    // Safely access `SLOTS_STYLE.image` with a fallback
    const slots = {
        image: imagePosition ? clsx(SLOTS_STYLE.image[imagePosition as keyof typeof SLOTS_STYLE.image]) : '',
        header: clsx(SLOTS_STYLE.cardHeaderBase, SLOTS_STYLE.header),
        title: clsx(SLOTS_STYLE.title),
        content: clsx(SLOTS_STYLE.textMuted, isHorizontal && "flex-1 min-w-0"),
        footer: clsx(SLOTS_STYLE.cardFooterBase, isHorizontal && "w-full"),
        options: SLOTS_STYLE.actions,
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
        rootClass: containerClasses,
        rootStyle: containerStyle,
        // 将 body 作为一个槽位暴露，便于外部渲染结构保持一致
        slots: { body: bodyClasses, ...slots },
        slotStyles: { body: bodyStyle as JSX.CSSProperties, ...slotStyles },
        extras: {
            ...(size !== undefined ? { size: size as SizeName } : {}),
            sizeConfig,
            isHorizontal,
            ...(imagePosition !== undefined ? { imagePosition } : {}),
            ...(clickable !== undefined ? { clickable } : {}),
            ...(bordered !== undefined ? { bordered } : {}),
            ...(hasImage !== undefined ? { hasImage } : {}),
        }
    }
}
