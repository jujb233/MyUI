import type { JSX } from "solid-js/jsx-runtime"
import type {
    AnimationProp,
    ComponentHookResult,
    ComponentVariant,
    InteractionProp,
    PositionProps,
    ShadowName,
    SizeProps
} from "@/Interfaces"
import { buildPaddingStyle, buildSizeStyle, createBaseStyle, getSizeTokens, mergeDefaults } from "@/Utils"
import { createUseMyPanelDefaults, SLOTS_STYLE, COMMON_CLASSES } from "@/Design"

export type UseMyPanelProps = PositionProps & SizeProps & {
    variant?: ComponentVariant | undefined
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    interaction?: InteractionProp | undefined
    animation?: AnimationProp | undefined
}

export function useMyPanel(props: UseMyPanelProps & { backgroundImage?: string }): ComponentHookResult {
    const mergedProps = createUseMyPanelDefaults(props as any) as UseMyPanelProps & { backgroundImage?: string }

    const {
        variant: variantProp,
        size,
        xLength,
        yLength,
        glass,
        shadow,
        className,
        disabled,
        interaction,
        animation,
        backgroundImage,
        // 来自 defaults 的布局偏好（通过 any 访问以避免类型约束）
    } = mergedProps

    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'

    // 仅在属性已定义时才传入，满足 exactOptionalPropertyTypes 下的严格可选类型要求
    const { builder } = createBaseStyle({
        variant: { role, color },
        size: size || 'medium',
        ...(glass !== undefined ? { glass } : {}),
        ...(shadow !== undefined ? { shadow } : {}),
        ...(className !== undefined ? { class: className } : {}),
        ...(disabled !== undefined ? { disabled } : {}),
        ...(animation !== undefined ? { animation } : {}),
        ...(interaction !== undefined ? { interaction } : {}),
    })

    // 动态尺寸类移动为内联样式
    const tokens = getSizeTokens(size)

    const slots = {
        background: backgroundImage
            ? "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 select-none"
            : undefined,
        header: `${SLOTS_STYLE.header} ${SLOTS_STYLE.panelHeaderExtra}`.trim(),
        content: `${SLOTS_STYLE.content}`.trim(),
        footer: SLOTS_STYLE.panelFooter,
    }

    const normalizedSlots = {
        ...slots,
        background: slots.background || "",
    }

    const panelFill = ((mergedProps as any).fillByDefault ?? true) as boolean

    const panelClasses = builder
        // Panel 默认应该铺满水平空间，除非配置覆盖
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL, panelFill && 'w-full')
        .build()

    // 统一校验 size/xLength/yLength
    let sizeStyle: JSX.CSSProperties = {}
    try {
        sizeStyle = buildSizeStyle({ xLength, yLength })
    } catch (e) {
        console.warn(`[MYUI] Panel: 尺寸参数错误`, e)
    }
    const panelStyle: JSX.CSSProperties = {
        ...(mergedProps.top !== undefined ? { top: `${Math.max(0, mergedProps.top)}rem` } : {}),
        ...(mergedProps.left !== undefined ? { left: `${Math.max(0, mergedProps.left)}rem` } : {}),
        ...buildPaddingStyle(tokens),
        'font-size': tokens.fontSizeBase,
        ...sizeStyle,
    }

    const slotStyles = {
        header: { 'font-size': tokens.fontSizeTitle } as JSX.CSSProperties,
        content: { 'font-size': tokens.fontSizeBase } as JSX.CSSProperties,
    }

    return {
        rootClass: panelClasses,
        rootStyle: panelStyle,
        slots: normalizedSlots,
        slotStyles,
    }
}

