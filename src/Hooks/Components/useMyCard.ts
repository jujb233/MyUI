import { type ComponentVariant, type SizeName, type ShadowName } from "../../Options"
import { styleUtil } from "../../Utils/styleBuilder"
import { useCardLayout } from "../../Hooks/useCardLayout"
import type { AnimationProp } from "../../Options"
import { SHADOW_CLASS_MAP, GLASS_ELEVATION } from "../../Options/Configs"
import { createBaseBuilder } from "./styleFactory"
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
        animation,
    } = props

    // 解析 variant -> role/color，并从预设中取到实际的 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    // intensity not needed here because factory handles variant intensity mapping

    // 尺寸相关配置（由工厂返回）
    // 阴影类
    const elevationClass = glass ? GLASS_ELEVATION : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md)

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    // 使用共享工厂创建基础 builder，再补充 card 特有类
    const { baseBuilder, sizeConfig } = createBaseBuilder({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        animation,
        interaction: (hoverable || clickable) ? { enabled: true } : undefined,
    })

    const containerClasses = baseBuilder
        .add('relative overflow-hidden rounded-2xl')
        .add(direction === 'horizontal', 'flex flex-row')
        .add(direction === 'vertical', 'flex flex-col')
        .add(elevationClass)
        .add(clickable, 'cursor-pointer')
        .add(bordered, 'border')
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
