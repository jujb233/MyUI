import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../Options"
import { styleUtil } from "../../Utils/styleBuilder"
import { useCardLayout } from "../../Hooks/useCardLayout"
import type { AnimationProp } from "../../Options"
import { SHADOW_CLASS_MAP, BACKGROUND_CLASSES, TEXT_CLASS, GLASS_BACKDROP_CLASS, GLASS_ELEVATION, THEME_CLASS_PREFIX } from "../../Options/Configs"

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
    const intensity = VARIANT_ROLE_STYLES[role]

    // 尺寸相关配置（padding/spacing/fontSize 等）
    const sizeConfig = SIZE_CONFIG[size]

    // 主题类
    const themeColorClass = `${THEME_CLASS_PREFIX.color}${color}`
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`
    // 阴影类
    const elevationClass = glass ? GLASS_ELEVATION.card : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md)

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    // 用建造者模式构建 containerClasses
    const containerClasses = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add('relative overflow-hidden rounded-2xl')
        .add(direction === 'horizontal', 'flex flex-row')
        .add(direction === 'vertical', 'flex flex-col')
        .add(glass ? BACKGROUND_CLASSES.glass : BACKGROUND_CLASSES.solid)
        .add(TEXT_CLASS)
        .add(elevationClass)
        .addAnimation(animation)
        .add(glass, GLASS_BACKDROP_CLASS)
        .addInteraction((hoverable || clickable) ? { enabled: true } : undefined)
        .add(clickable, 'cursor-pointer')
        .add(bordered, 'border')
        .add(className)
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
