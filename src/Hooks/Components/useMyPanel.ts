import { type ComponentVariant, type SizeName, type ShadowName } from "../../Interfaces/core/types"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import type { AnimationProp } from "../../styles/config/animation"
import { COMMON_CLASSES } from "../../Options/Configs/classConfig"
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots"
import { createBaseStyle } from "../../Utils/styleFactory"
import type { PositionProps } from "../../Interfaces"
import type { JSX } from "solid-js"

export type UseMyPanelProps = PositionProps & {
    variant?: ComponentVariant | undefined
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    interaction?: InteractionPolicy | string | undefined
    animation?: AnimationProp | undefined
}

export function useMyPanel(props: UseMyPanelProps & { backgroundImage?: string }) {
    const {
        variant: variantProp,
        size = 'medium',
        glass = true,
        shadow = 'md',
        className = "",
        disabled = false,
        interaction = 'rich',
        animation,
        backgroundImage,
    } = props

    // 解析 variant 与 color，并从预设获取具体 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'

    // 使用工厂创建基础 builder
    const { builder, sizeConfig } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction,
    })

    // 背景图样式
    const backgroundClass = backgroundImage
        ? "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 select-none"
        : undefined

    const panelClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .add(sizeConfig.padding, sizeConfig.fontSize)
        .build()

    // 位置样式（单位 rem）
    const panelStyle: JSX.CSSProperties | undefined =
        props.top !== undefined || props.left !== undefined
            ? {
                ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
                ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
            }
            : undefined

    return {
        panel: panelClasses,
        panelStyle,
        background: backgroundClass,
        // 使用集中配置 + sizeConfig 的语义尺寸
        header: `${SLOTS_STYLE.header} ${SLOTS_STYLE.panelHeaderExtra} ${sizeConfig.titleSize}`.trim(),
        content: `${SLOTS_STYLE.content} ${sizeConfig.contentSize}`.trim(),
        footer: SLOTS_STYLE.panelFooter,
    }
}

