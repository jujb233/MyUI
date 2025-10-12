import { type ComponentVariant, type SizeName, type ShadowName } from "../../Options"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import type { AnimationProp } from "../../Options"
import { COMMON_CLASSES } from "../../Options/Configs"
import { createBaseStyle } from "../../Utils/styleFactory"

export type UseMyPanelProps = {
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
        : undefined;

    const panelClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .add(sizeConfig.padding, sizeConfig.fontSize)
        .build()

    return {
        panel: panelClasses,
        background: backgroundClass,
        header: "text-2xl font-bold mb-4",
        content: "flex-1",
        footer: "mt-4",
    }
}

