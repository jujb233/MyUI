import { styleUtil } from "../../Utils/styleBuilder"
import { SIZE_CONFIG, VARIANT_ROLE_STYLES } from "../../Options"
import { SHADOW_CLASS_MAP, BACKGROUND_CLASSES, TEXT_CLASS, GLASS_BACKDROP_CLASS, GLASS_ELEVATION, THEME_CLASS_PREFIX } from "../../Options/Configs"
import type { AnimationProp } from "../../Options"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import type { ComponentVariant, SizeName, ShadowName } from "../../Options"

/**
 * createBaseBuilder
 *
 * 一个通用的 className 构建器工厂，用于统一不同组件 hook 的 className 构建逻辑。
 * 返回一个配置好的 ClassNameBuilder 实例；调用者可以继续链式调用 add/addAnimation/addInteraction/add(className) 然后 build()
 *
 * inputs:
 * - options.variant: ComponentVariant | undefined
 * - options.size: SizeName
 * - options.glass: boolean
 * - options.shadow: ShadowName
 * - options.className: string
 * - options.animation: AnimationProp | undefined
 * - options.interaction: InteractionPolicy | string | undefined
 *
 * 保持最小侵入：不修改外部的 class 语义，仅把常见操作抽取出来。
 */
export function createBaseBuilder(options: {
    variant?: ComponentVariant | undefined
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    animation?: AnimationProp | undefined
    interaction?: InteractionPolicy | string | undefined
}) {
    const {
        variant,
        size = 'medium',
        glass = false,
        shadow = 'none',
        className = '',
        animation,
        interaction,
    } = options

    const role = variant?.role || 'primary'
    const color = variant?.color || 'blue'
    const intensity = VARIANT_ROLE_STYLES[role]

    const themeColorClass = `${THEME_CLASS_PREFIX.color}${color}`
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`

    const baseBuilder: any = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add(TEXT_CLASS)
        .add(glass ? BACKGROUND_CLASSES.glass : BACKGROUND_CLASSES.solid)
        .addAnimation(animation)
        .add(glass, GLASS_BACKDROP_CLASS)
        .addInteraction(interaction as any)
        .add(className)

    return {
        baseBuilder,
        sizeConfig: SIZE_CONFIG[size],
        themeColorClass,
        themeVariantClass,
        elevationClass: glass ? GLASS_ELEVATION : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md)
    } as any
}
