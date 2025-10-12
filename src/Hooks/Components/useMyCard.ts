import { type ComponentVariant, type SizeName, type ShadowName } from "../../Options"
import { styleUtil } from "../../Utils/styleBuilder"
import { useCardLayout } from "../../Hooks/useCardLayout"
import type { AnimationProp } from "../../Options"
import { COMMON_CLASSES } from "../../Options/Configs"
import { createBaseStyle } from "../../Utils/styleFactory"
import clsx from "clsx"

export type UseMyCardProps = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    clickable?: boolean
    className?: string
    bordered?: boolean
    shadow?: ShadowName
    imagePosition?: "top" | "left" | "right" | "background"
    direction?: "vertical" | "horizontal"
    hoverable?: boolean
    hasImage?: boolean
    disabled?: boolean
    animation?: AnimationProp
}

export function useMyCard(props: UseMyCardProps) {
    // 解构 props 并提供合理默认值
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
        hoverable = true,
        hasImage = false,
        disabled = false,
        animation,
    } = props

    // 解析 variant -> role/color，并从预设中取到实际的 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    // intensity not needed here because factory handles variant intensity mapping

    // 尺寸相关配置（由工厂返回）

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    // 使用共享工厂创建基础 builder，再补充 card 特有类
    const { builder, sizeConfig } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction: (hoverable || clickable) ? { enabled: true } : undefined,
    })

    const containerClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .add(direction === 'horizontal', 'flex flex-row')
        .add(direction === 'vertical', 'flex flex-col')
        .add(clickable, COMMON_CLASSES.CURSOR_POINTER)
        .add(bordered, COMMON_CLASSES.BORDER)
        .build()

    const bodyClasses = new styleUtil.ClassNameBuilder()
        .add(sizeConfig.padding, sizeConfig.spacing)
        .add(isHorizontal, 'flex-1')
        .add(imagePosition === 'background', 'relative z-10')
        .build()

    // Sub-component classes
    const imageClasses = clsx(
        "object-cover",
        imagePosition === "top" && "w-full h-48",
        imagePosition === "left" && "w-32 h-full",
        imagePosition === "right" && "w-32 h-full",
        imagePosition === "background" && "absolute inset-0 h-full w-full object-cover opacity-10",
        sizeConfig.borderRadius
    )

    const headerClasses = "card-header flex items-center"
    const titleClasses = clsx('font-bold text-[var(--text)]', sizeConfig.titleSize)
    const contentClasses = clsx(
        'text-[var(--text)]/85',
        sizeConfig.contentSize,
        isHorizontal ? 'flex-1 min-w-0' : ''
    )
    const footerClasses = clsx(
        "card-footer mt-auto",
        sizeConfig.borderRadius.replace('rounded-', 'rounded-b-'),
        isHorizontal ? 'w-full' : ''
    )
    const actionsClasses = "flex gap-2 mt-4"
    const tagsContainerClasses = "flex flex-wrap gap-2 mb-3"
    const tagClasses = "px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"


    // 返回对组件渲染有用的值与别名（移除 style 相关）
    return {
        size,
        sizeConfig,
        containerClasses,
        bodyClasses,
        isHorizontal,
        imagePosition,
        // sub-component classes
        imageClasses,
        headerClasses,
        titleClasses,
        contentClasses,
        footerClasses,
        actionsClasses,
        tagsContainerClasses,
        tagClasses,
    }
}
