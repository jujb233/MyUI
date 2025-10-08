import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import type { InteractionPolicy } from "../Interfaces/behavior/interaction"
import { styleUtil } from "../Utils/styleBuilder"
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

    // 通过 useComponentStyle 获取面板的主题样式（行内 style），合并为 className
    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: true,
        shadow,
        elevationKind: 'panel',
    })
    const themedClass = Object.entries(themedStyle || {})
        .map(([k, v]) => v !== undefined ? `[${k}:${v}]` : null)
        .filter(Boolean)
        .join(' ')
    // 合并背景图到 className
    const bgClass = backgroundImage ? `[background-image:url(${backgroundImage})]` : ''
    // 组合 class
    const interactionClasses = styleUtil.buildInteractionClassesFromProp(interaction as any)
    const panelClasses = styleUtil.mergeClasses(
        "relative overflow-hidden rounded-2xl",
        sizeStyle.padding,
        sizeStyle.fontSize,
        glass
            ? "[background:var(--glass-bg)] text-[var(--text)]"
            : "[background:var(--bg)] text-[var(--text)]",
        glass && "backdrop-blur-md",
        backgroundImage && "bg-cover bg-center",
        bgClass,
        disabled && "opacity-60 cursor-not-allowed",
        interactionClasses,
        themedClass,
        className
    )
    // 返回可直接用于渲染的类名，以及一些常用属性
    return {
        size,
        sizeStyle,
        panelClasses,
        // 统一命名别名
        rootClasses: panelClasses,
        disabled,
        title,
        backgroundImage,
        glass,
    }
}
