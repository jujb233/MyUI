import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import { useComponentClasses } from "../../../Hooks/useComponentClasses"
import { useCardLayout } from "../../../Hooks/useCardLayout"

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
    } = props

    // 解析 variant -> role/color，并从预设中取到实际的 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    const variant = VARIANT_ROLE_STYLES[role] as any

    // 尺寸相关配置（padding/spacing/fontSize 等）
    const sizeConfig = SIZE_CONFIG[size]

    // 获取基于主题的行内样式（card 专用）
    const { style: cardStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered,
        shadow,
        elevationKind: "card",
    })

    // 根据方向与图片位置判断布局是否为水平布局
    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    // 组合容器级别的类（包含交互、size、imagePosition、user class 等）
    const { containerClasses } = useComponentClasses({
        baseClass: "my-card",
        direction,
        imagePosition,
        sizeConfig,
        glass,
        hoverable,
        clickable,
        className,
        bordered,
        interactionEnabled: true,
    })

    // 构建 body 的类名（内部内容区），考虑 spacing 与 横向伸展
    const bodyClasses = [
        "my-card-body",
        sizeConfig.padding,
        sizeConfig.spacing,
        isHorizontal ? "flex-1" : "",
        imagePosition === "background" ? "relative z-10" : ""
    ].filter(Boolean).join(" ")

    // 返回对组件渲染有用的值与别名
    return {
        size,
        sizeConfig,
        cardStyle,
        containerClasses,
        // 统一命名别名
        rootStyle: cardStyle,
        rootClasses: containerClasses,
        bodyClasses,
        isHorizontal,
        imagePosition,
    }
}
