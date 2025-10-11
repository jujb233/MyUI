import { type ComponentVariant, type SizeName, type ShadowName } from "../../Options"
import { styleUtil } from "../../Utils/styleBuilder"
import { useCardLayout } from "../../Hooks/useCardLayout"
import type { AnimationProp } from "../../Options"
import { SHADOW_CLASS_MAP, GLASS_ELEVATION } from "../../Options/Configs"
import { createBaseBuilder } from "./styleFactory"

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
    const { builder, sizeConfig } = createBaseBuilder({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        animation,
        interaction: (hoverable || clickable) ? { enabled: true } : undefined,
    })

    const containerClasses = builder
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

    // 返回对组件渲染有用的值与别名（移除 style 相关）
    return {
        size,
        sizeConfig,
        containerClasses,
        bodyClasses,
        isHorizontal,
        imagePosition,
    }
}
