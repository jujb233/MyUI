import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import { mergeClasses, buildInteractionClassesFromProp } from "../Utils/classUtils"
import type { InteractionPolicy } from "../Interfaces/behavior/interaction"
import { DEFAULT_COMPONENT_PROPS } from "../Interfaces/components/common"

export type UseMyPanelProps = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    title?: string
    backgroundImage?: string
    interaction?: InteractionPolicy | string
}

export function useMyPanel(props: UseMyPanelProps) {
    const {
        variant: variantProp,
        size = DEFAULT_COMPONENT_PROPS.size,
        glass = DEFAULT_COMPONENT_PROPS.glass,
        shadow = DEFAULT_COMPONENT_PROPS.shadow,
        className = "",
        disabled = DEFAULT_COMPONENT_PROPS.disabled,
        title,
        backgroundImage,
        interaction = DEFAULT_COMPONENT_PROPS.interaction as any,
    } = props

    // 解析 variant 与 color，并从预设获取具体 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    const variant = VARIANT_ROLE_STYLES[role] as any

    // 获取尺寸样式（padding / fontSize 等）
    const sizeStyle = SIZE_CONFIG[size]

    // 通过 useComponentStyle 获取面板的主题样式（行内 style）
    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: true,
        shadow,
        elevationKind: 'panel',
    })

    // 合并背景图到行内样式（若提供 backgroundImage）
    const panelStyle: React.CSSProperties = {
        ...themedStyle,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    } as React.CSSProperties

    // 组合 class：基础布局 + size + 主题背景 (glass/normal) + 可选 backdrop / bg-cover / disabled / 交互类
    const interactionClasses = buildInteractionClassesFromProp(interaction as any)

    const panelClasses = mergeClasses(
        "relative overflow-hidden rounded-2xl",
        sizeStyle.padding,
        sizeStyle.fontSize,
        glass
            ? "[background:var(--glass-bg)] text-[var(--text)]"
            : "[background:var(--bg)] text-[var(--text)]",
        glass && "backdrop-blur-md",
        backgroundImage && "bg-cover bg-center",
        disabled && "opacity-60 cursor-not-allowed",
        interactionClasses,
        className
    )

    // 返回可直接用于渲染的样式与类名，以及一些常用属性
    return {
        size,
        sizeStyle,
        panelStyle,
        panelClasses,
        // 统一命名别名
        rootStyle: panelStyle,
        rootClasses: panelClasses,
        disabled,
        title,
        backgroundImage,
        glass,
    }
}
