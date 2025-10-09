import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../Options"
import { styleUtil } from "../../Utils/styleBuilder"
import { useCardLayout } from "../../Hooks/useCardLayout"
import type { AnimationProp } from "../../Options"

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
    const themeColorClass = `myui-color-${color}`
    const themeVariantClass = `myui-variant-${intensity}`
    // 阴影类
    const shadowMap: Record<ShadowName, string> = {
        xs: 'shadow-sm',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        '2xl': 'shadow-2xl',
        inner: 'shadow-inner',
        none: 'shadow-none',
    }
    const elevationClass = glass ? 'myui-gs-lg' : (shadowMap[shadow] || 'shadow-md')

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    // 用建造者模式构建 containerClasses
    const containerClasses = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add('relative overflow-hidden rounded-2xl')
        .addIf(direction === 'horizontal', 'flex flex-row')
        .addIf(direction === 'vertical', 'flex flex-col')
        .add(
            glass
                ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]'
        )
        .add('text-[var(--text)]')
        .add(elevationClass)
        .addAnimation(animation)
        .addIf(glass, 'backdrop-blur-md')
        .addIf(hoverable || clickable, styleUtil.buildInteractionClasses({ enabled: true }))
        .addIf(clickable, 'cursor-pointer')
        .addIf(bordered, 'border')
        .add(className)
        .build()

    const bodyClasses = new styleUtil.ClassNameBuilder()
        .add(sizeConfig.padding, sizeConfig.spacing)
        .addIf(isHorizontal, 'flex-1')
        .addIf(imagePosition === 'background', 'relative z-10')
        .build()

    // 返回对组件渲染有用的值与别名（移除 style 相关）
    return {
        size,
        sizeConfig,
        containerClasses,
        // 统一命名别名
        rootClasses: containerClasses,
        bodyClasses,
        isHorizontal,
        imagePosition,
    }
}
