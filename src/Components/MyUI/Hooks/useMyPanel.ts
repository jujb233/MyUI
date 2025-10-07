/**
 * useMyPanel
 * 简要：为 Panel 组件处理尺寸、主题、背景图与交互类，返回可直接用于渲染的 style 与 class
 * 返回：{ size, sizeStyle, panelStyle, panelClasses, rootStyle, rootClasses, disabled, title, backgroundImage, glass }
 */
import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import clsx from "clsx"
import type { InteractionPolicy } from "../Interfaces/behavior/interaction"
import { buildHookInteractionClasses } from "./useInteraction"
import { INTERACTION_PRESETS } from "../../../Options/Interactions/presets"

export type UseMyPanelProps = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    title?: string
    backgroundImage?: string
    interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS
}

export function useMyPanel(props: UseMyPanelProps) {
    const {
        variant: variantProp,
        size = "medium",
        glass = true,
        shadow = "md",
        className = "",
        disabled = false,
        title,
        backgroundImage,
        interaction = 'rich',
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
    const panelClasses = clsx(
        "relative overflow-hidden rounded-2xl",
        sizeStyle.padding,
        sizeStyle.fontSize,
        glass
            ? "[background:var(--glass-bg)] text-[var(--text)]"
            : "[background:var(--bg)] text-[var(--text)]",
        glass && "backdrop-blur-md",
        backgroundImage && "bg-cover bg-center",
        disabled && "opacity-60 cursor-not-allowed",
        buildHookInteractionClasses(typeof interaction === 'string'
            ? INTERACTION_PRESETS[interaction]
            : interaction),
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
