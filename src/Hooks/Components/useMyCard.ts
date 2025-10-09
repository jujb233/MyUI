import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../Options"
import { useComponentStyle } from "../../Hooks/useComponentStyle"
import { styleUtil } from "../../Utils/styleBuilder"
import { useCardLayout } from "../../Hooks/useCardLayout"

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

    // 获取基于主题的行内样式（card 专用），合并为 className
    const { style: cardStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered,
        shadow,
        elevationKind: "card",
    })

    const themedClass = Object.entries(cardStyle || {})
        .map(([k, v]) => v !== undefined ? `[${k}:${v}]` : null)
        .filter(Boolean)
        .join(' ')

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage })

    // 用建造者模式构建 containerClasses
    const containerClasses = new styleUtil.ClassNameBuilder()
        .add('my-card')
        .addIf(direction === 'horizontal', 'flex-row')
        .addIf(direction === 'vertical', 'flex-col')
        .addIf(!!glass, 'glass')
        .addIf(!!hoverable, 'hoverable')
        .addIf(!!clickable, 'clickable')
        .addIf(!!bordered, 'bordered')
        .add(themedClass)
        .add(className)
        .build()

    const bodyClasses = new styleUtil.ClassNameBuilder()
        .add('my-card-body')
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
