import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../Options"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import { styleUtil } from "../../Utils/styleBuilder"
import type { AnimationProp } from "../../Options"
import { SHADOW_CLASS_MAP, BACKGROUND_CLASSES, TEXT_CLASS, GLASS_BACKDROP_CLASS, GLASS_ELEVATION, THEME_CLASS_PREFIX } from "../../Options/Configs"

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
    const intensity = VARIANT_ROLE_STYLES[role]

    // 获取尺寸样式（padding / fontSize 等）
    const sizeStyle = SIZE_CONFIG[size as keyof typeof SIZE_CONFIG]

    // 主题类与阴影类
    const themeColorClass = `${THEME_CLASS_PREFIX.color}${color}`
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`
    const elevationClass = glass ? GLASS_ELEVATION.panel : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md)
    const panelClasses = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add("relative overflow-hidden rounded-2xl")
        .add(sizeStyle.padding, sizeStyle.fontSize)
        .add(glass ? BACKGROUND_CLASSES.glass : BACKGROUND_CLASSES.solid)
        .add(TEXT_CLASS)
        .add(elevationClass)
        .addAnimation(animation)
        .add(!!glass, GLASS_BACKDROP_CLASS)
        .add(!!disabled, "opacity-60 cursor-not-allowed")
        .addInteraction(interaction as any)
        .add(className)
        .build()

    return panelClasses
}
