import { type ComponentVariant, type ShadowName } from "../../Interfaces/core"
import type { InteractionProp } from "../../Interfaces/interaction"
import type { AnimationProp } from "../../styles/config/animation"
import { COMMON_CLASSES } from "../../Options/Configs/classConfig"
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots"
import { createBaseStyle } from "../../Utils/styleFactory"
import type { PositionProps, SizeProps } from "../../Interfaces"
import type { JSX } from "solid-js"
import { getSizeTokens, buildPaddingStyle, buildSizeStyle } from "../../Utils/sizeStyles"
import { defaultValues } from "../../Options/Configs/default"
import { mergeDefaults } from "../../Utils/defaultResolver"

export type UseMyPanelProps = PositionProps & SizeProps & {
    variant?: ComponentVariant | undefined
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    interaction?: InteractionProp | undefined
    animation?: AnimationProp | undefined
}

export function useMyPanel(props: UseMyPanelProps & { backgroundImage?: string }) {
    const mergedProps = mergeDefaults(defaultValues.UseMyPanelProps as any, props) as UseMyPanelProps & { backgroundImage?: string };

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
    } = mergedProps;

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
    };

    const panelClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .build()

    const sizeStyle = buildSizeStyle({
        ...(xLength !== undefined ? { xLength } : {}),
        ...(yLength !== undefined ? { yLength } : {}),
    });

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
        panel: panelClasses,
        panelStyle,
        slots,
        slotStyles,
    }
}

