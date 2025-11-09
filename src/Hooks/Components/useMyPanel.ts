import type { JSX } from "solid-js/jsx-runtime"
import type {
    ComponentHookResult,
    ComponentVariant,
    InteractionProp,
    PositionProps,
    ShadowName,
    SizeProps
} from "../../Interfaces"
import { COMMON_CLASSES, defaultValues, SLOTS_STYLE } from "../../Options"
import type { AnimationProp } from "../../styles"
import { buildPaddingStyle, buildSizeStyle, createBaseStyle, getSizeTokens, mergeDefaults } from "../../Utils"

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
    const mergedProps = mergeDefaults(
        defaultValues.UseMyPanelProps as any,
        props
    ) as UseMyPanelProps & { backgroundImage?: string }

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
    } = mergedProps

    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'

    // 仅在属性已定义时才传入，满足 exactOptionalPropertyTypes 下的严格可选类型要求
    const { builder } = createBaseStyle({
        variant: { role, color },
        size: size || 'medium',
        ...(glass !== undefined ? { glass } : {}),
        ...(shadow !== undefined ? { shadow } : {}),
        ...(className !== undefined ? { className } : {}),
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

    const panelClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .build()

    const sizeStyle = buildSizeStyle({
        ...(xLength !== undefined ? { xLength } : {}),
        ...(yLength !== undefined ? { yLength } : {}),
    })

    const panelStyle: JSX.CSSProperties = {
        ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
        ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
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

