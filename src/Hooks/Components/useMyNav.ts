import type { JSX } from "solid-js/jsx-runtime"
import type { ComponentVariant, SizeName, ShadowName, InteractionProp, ComponentHookResult, AnimationProp } from "@/Interfaces"
import { mergeDefaults, createBaseStyle, getSizeTokens, buildPaddingStyle } from "@/Utils"
import { COMMON_CLASSES, createUseMyNavDefaults, INTERACTION_PRESETS, SLOTS_STYLE } from "@/Design"

export interface UseMyNavOptions {
    variant?: ComponentVariant | undefined
    size?: SizeName | undefined
    glass?: boolean | undefined
    shadow?: ShadowName | undefined
    className?: string | undefined
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
        className,
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
        class: className,
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
        // 如果显式传入 size，则按旧的前缀类拼接（仅在 size 可用时），否则不添加无效的类名
        .add(!!size, `${SLOTS_STYLE.navRootSizePrefix}${size}`)
        .build()

    // 统一校验 size/xLength/yLength（Nav 只支持 size，暂不支持 xLength/yLength）
    const tokens = getSizeTokens(size)
    let navStyle: JSX.CSSProperties = {}
    try {
        navStyle = buildPaddingStyle(tokens)
    } catch (e) {
        console.warn(`[MYUI] Nav: 尺寸参数错误`, e)
    }

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
