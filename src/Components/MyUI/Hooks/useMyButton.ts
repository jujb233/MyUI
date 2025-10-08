import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, DEFAULT_STYLES, VARIANT_ROLE_STYLES } from "../../../Options"
import { useComponentStyle } from "../../../Hooks/useComponentStyle"
import { styleUtil } from "../Utils/styleBuilder"
import type { InteractionPolicy } from "../Interfaces/behavior/interaction"
import { DEFAULT_COMPONENT_PROPS } from "../Interfaces/components/common"

export type UseMyButtonProps = {
    htmlType?: "button" | "submit" | "reset"
    variant?: ComponentVariant
    size?: SizeName
    disabled?: boolean
    className?: string
    glass?: boolean
    shadow?: ShadowName
    interaction?: InteractionPolicy | string
}

export function useMyButton(props: UseMyButtonProps) {
    // 从 props 中解构并提供默认值
    const {
        variant: variantProp,
        size = DEFAULT_COMPONENT_PROPS.size,
        disabled = DEFAULT_COMPONENT_PROPS.disabled,
        className = "",
        glass = DEFAULT_COMPONENT_PROPS.glass,
        shadow = DEFAULT_COMPONENT_PROPS.shadow,
        interaction = DEFAULT_COMPONENT_PROPS.interaction,
    } = props

    // 基于传入的 variant 计算角色与颜色（与 Card/Panel 保持一致）
    // role: 用于选择一组预置样式（例如 primary/secondary）
    const role = variantProp?.role || 'primary'
    // color: 主题色（如 blue/green）
    const color = variantProp?.color || 'blue'
    // 从预置中取到具体的 variant 配置
    const variant = VARIANT_ROLE_STYLES[role] as any

    // 根据 size 读取预定义的尺寸样式（padding、fontSize、minWidth 等）
    const sizeStyle = SIZE_CONFIG[size]

    // 通过 useComponentStyle 获取基于 variant/color/glass 的主题样式（仅用于生成 className，不再返回 style）
    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: false,
        shadow,
        elevationKind: "button",
    })


    // 使用建造者模式构建 className
    const buttonClasses = new styleUtil.ClassNameBuilder()
        .add(sizeStyle.padding, sizeStyle.fontSize, sizeStyle.minWidth)
        .add(
            "inline-flex items-center justify-center select-none relative overflow-hidden",
            "rounded-xl font-semibold tracking-wide border border-transparent",
            "transition-all duration-200 ease-out will-change-transform"
        )
        .add(
            glass
                ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]'
        )
        .add('text-[var(--text)]')
        .addInteraction(interaction as any)
        .add('disabled:opacity-60 disabled:cursor-not-allowed')
        .addIf(glass && !disabled, "backdrop-blur-md border")
        .add(
            Object.entries(themedStyle || {})
                .map(([k, v]) => v !== undefined ? `[${k}:${v}]` : null)
                .filter(Boolean)
                .join(' ')
        )
        .addIf(disabled, `[background:${DEFAULT_STYLES.disabled.background}] [color:${DEFAULT_STYLES.disabled.color}]`)
        .add(className)
        .build()

    // 返回统一的接口，移除 style 相关
    return {
        size,
        sizeStyle,
        buttonClasses,
        // 统一命名别名
        rootClasses: buttonClasses,
        disabled,
        glass,
    }
}
