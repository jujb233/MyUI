import {
    sizeConfig,
    THEME_CLASS_PREFIX,
    GLASS_ELEVATION,
    SHADOW_CLASS_MAP,
    TEXT_CLASS,
    BACKGROUND_CLASSES,
    GLASS_BACKDROP_CLASS,
    COMMON_CLASSES
} from "@/Design"
import type { VariantRole, SizeName, ComponentVariant, ShadowName, InteractionProp, AnimationProp } from "../../Interfaces"
import { ensureThemeClass } from "../misc"
import styleBuilder from "./styleBuilder"
import std from "@/Design/Standard"


interface CreateBaseStyleResult {
    builder: ReturnType<typeof styleBuilder.builder>
    sizeConfig: (typeof sizeConfig)[SizeName]
    themeColorClass: string
    themeVariantClass: string
    elevationClass: string
}

export function createBaseStyle(options: {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    class?: string
    disabled?: boolean
    animation?: AnimationProp | undefined
    interaction?: InteractionProp | undefined
}): CreateBaseStyleResult {
    const {
        variant,
        size,
        glass = false,
        shadow = 'none',
        class: className = '',
        disabled = false,
        animation,
        interaction,
    } = options

    const role: VariantRole = variant?.role ?? 'primary'
    const color = variant?.color ?? 'blue'
    const sizeName: SizeName = size ?? 'medium'
    const intensity = std.rolesIntensityMap[role]

    // 始终通过 ensureThemeClass 注入/获取主题类，避免依赖构建期插件
    const themeColorClass = ensureThemeClass(String(color), intensity)
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`
    const elevationClass = glass ? GLASS_ELEVATION : (SHADOW_CLASS_MAP[shadow] ?? SHADOW_CLASS_MAP.md)

    const builder = styleBuilder.builder()
        .add(themeColorClass, themeVariantClass)
        .add(TEXT_CLASS)
        // Keep legacy background utility classes for compatibility
        .add(glass, BACKGROUND_CLASSES.glass, BACKGROUND_CLASSES.traditional)
        // Add a semantic flag class for CSS to switch between glass/traditional backgrounds
        .add(glass, 'myui-glass')
        .add(glass, GLASS_BACKDROP_CLASS)
        .add(elevationClass)
        .add(!!disabled, COMMON_CLASSES.DISABLED_STATE)
        .addAnimation(animation)
        .addInteraction(interaction as any)
        .add(className)

    return {
        builder,
        sizeConfig: sizeConfig[sizeName],
        themeColorClass,
        themeVariantClass,
        elevationClass,
    }
}
