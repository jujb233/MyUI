import type { JSX } from "solid-js/jsx-runtime"
import type { ComponentVariant, SizeName, ShadowName, InteractionProp, ComponentHookResult } from "../../Interfaces"
import { defaultValues, INTERACTION_PRESETS, COMMON_CLASSES, SLOTS_STYLE } from "../../Options"
import { createUseMyNavDefaults } from "../../Utils/styles"
import type { AnimationProp } from "../../Styles"
import { mergeDefaults, createBaseStyle, getSizeTokens, buildPaddingStyle } from "../../Utils"

export interface UseMyNavOptions {
    variant?: ComponentVariant | undefined
    size?: SizeName | undefined
    glass?: boolean | undefined
    shadow?: ShadowName | undefined
    className?: string | undefined
    class?: string | undefined
    id?: string | undefined
    style?: JSX.CSSProperties | undefined
    focusRing?: boolean | undefined
    interaction?: InteractionProp | undefined
    animation?: AnimationProp | undefined
}

export function useMyNav(options: UseMyNavOptions): ComponentHookResult {
    const merged = createUseMyNavDefaults(options as any)
    const {
        variant,
        size,
        glass,
        shadow,
        class: className,
        interaction,
        animation,
    } = merged as any

    const role = variant?.role || 'primary'
    const color = variant?.color || 'blue'

    const { builder } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        animation,
        interaction: typeof interaction === 'string'
            ? (INTERACTION_PRESETS as Record<string, any>)[interaction] ?? INTERACTION_PRESETS.none
            : interaction
    })

    const navFill = (merged as any).fillByDefault ?? true

    const navClasses = builder
        .add(COMMON_CLASSES.FLEX_CENTER_JUSTIFY)
        // 根据默认配置决定是否撑满宽度
        .add(navFill, 'w-full')
        // 尺寸 padding 改为内联 style，避免动态类
        .add(`${SLOTS_STYLE.navRootSizePrefix}${size}`)
        .build()

    // 将 padding 移到 style
    const tokens = getSizeTokens(size)
    const navStyle = buildPaddingStyle(tokens)

    return {
        rootClass: navClasses,
        rootStyle: navStyle,
        slots: {
            brand: SLOTS_STYLE.brand,
            content: SLOTS_STYLE.content,
            menu: SLOTS_STYLE.menu,
            options: SLOTS_STYLE.navActions,
        },
    }
}
