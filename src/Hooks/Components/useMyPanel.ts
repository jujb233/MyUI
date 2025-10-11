import { type ComponentVariant, type SizeName, type ShadowName } from "../../Options"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import type { AnimationProp } from "../../Options"
import { SHADOW_CLASS_MAP, GLASS_ELEVATION } from "../../Options/Configs"
import { createBaseBuilder } from "./styleFactory"

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

export function useMyPanel(props: UseMyPanelProps): string {
    const {
        variant: variantProp,
        size = 'medium',
        glass = true,
        shadow = 'md',
        className = "",
        disabled = false,
        interaction = 'rich',
        animation,
    } = props

    // 解析 variant 与 color，并从预设获取具体 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'

    // 使用工厂创建基础 builder
    const { builder, sizeConfig } = createBaseBuilder({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        animation,
        interaction,
    })

    const elevationClass = glass ? GLASS_ELEVATION : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md)

    const panelClasses = builder
        .add("relative overflow-hidden rounded-2xl")
        .add(sizeConfig.padding, sizeConfig.fontSize)
        .add(elevationClass)
        .add(!!disabled, "opacity-60 cursor-not-allowed")
        .build()

    return panelClasses
}
