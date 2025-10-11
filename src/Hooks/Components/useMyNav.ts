import { VARIANT_ROLE_STYLES } from "../../Options"
import type { AnimationProp } from "../../Options"
import type { ComponentVariant, SizeName, ShadowName } from "../../Options"
import { styleUtil } from "../../Utils/styleBuilder"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import { INTERACTION_PRESETS } from "../../Options/Presets/interactionPresets"
import { SHADOW_CLASS_MAP, BACKGROUND_CLASSES, TEXT_CLASS, GLASS_BACKDROP_CLASS, GLASS_ELEVATION, THEME_CLASS_PREFIX } from "../../Options/Configs"

export type UseMyNavOptions = {
    variant?: ComponentVariant | undefined
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    interactionEnabled?: boolean | undefined
    focusRing?: boolean
    interaction?: InteractionPolicy | string | undefined
    animation?: AnimationProp | undefined
}

export function useMyNav(options: UseMyNavOptions): string {
    const {
        variant,
        size = 'medium',
        glass = false,
        shadow = 'none',
        className = '',
        interactionEnabled = false,
        interaction = 'none',
        animation,
    } = options

    // 解构 options 并使用默认值

    // 通过主题 hook 获取对应的 theme 类与行内样式，合并 style 为 className
    const role = variant?.role || 'primary'
    const color = variant?.color || 'blue'
    const intensity = VARIANT_ROLE_STYLES[role]
    const themeColorClass = `${THEME_CLASS_PREFIX.color}${color}`
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`
    const elevationClass = glass ? GLASS_ELEVATION.nav : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.none)

    const navClasses = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add(`my-nav-${size}`)
        .add(glass ? BACKGROUND_CLASSES.glass : BACKGROUND_CLASSES.solid)
        .add(TEXT_CLASS)
        .add(elevationClass)
        .addAnimation(animation)
        .add(glass, GLASS_BACKDROP_CLASS)
        .addInteraction(
            interactionEnabled
                ? (typeof interaction === 'string'
                    ? (INTERACTION_PRESETS as Record<string, any>)[interaction] ?? INTERACTION_PRESETS.none
                    : interaction)
                : undefined
        )
        .add(className)
        .build()

    return navClasses
}
