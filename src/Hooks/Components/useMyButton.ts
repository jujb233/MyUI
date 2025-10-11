import { styleUtil } from "../../Utils/styleBuilder"
import type { InteractionPolicy } from "../../Interfaces"
import { DEFAULT_COMPONENT_HOOK_PROPS } from "../../Interfaces"
import { type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES, SIZE_CONFIG, DEFAULT_STYLES } from "../../Options"
import type { AnimationProp } from "../../Options"

export type UseMyButtonProps = {
    htmlType?: "button" | "submit" | "reset"
    variant?: ComponentVariant
    size?: SizeName
    disabled?: boolean
    className?: string
    glass?: boolean
    shadow?: ShadowName
    interaction?: InteractionPolicy | string
    animation?: AnimationProp
}

export function useMyButton(props: UseMyButtonProps) {
    // 从 props 中解构并提供默认值
    const {
        variant: variantProp,
        size = DEFAULT_COMPONENT_HOOK_PROPS.size,
        disabled = DEFAULT_COMPONENT_HOOK_PROPS.disabled,
        className = "",
        glass = DEFAULT_COMPONENT_HOOK_PROPS.glass,
        shadow = DEFAULT_COMPONENT_HOOK_PROPS.shadow,
        interaction = DEFAULT_COMPONENT_HOOK_PROPS.interaction,
        animation,
    } = props

    // 基于传入的 variant 计算角色与颜色（与 Card/Panel 保持一致）
    // role: 用于选择一组预置样式（例如 primary/secondary）
    const role = variantProp?.role || 'primary'
    // color: 主题色（如 blue/green）
    const color = variantProp?.color || 'blue'
    // 角色 -> 强度（intensity）
    const intensity = VARIANT_ROLE_STYLES[role]

    // 根据 size 读取预定义的尺寸样式（padding、fontSize、minWidth 等）
    const sizeStyle = SIZE_CONFIG[size]

    // 主题类（纯 class）
    // 通过 myui-color-* 与 myui-variant-* 静态类落地 CSS 变量，避免 JIT 丢失
    const themeColorClass = `myui-color-${color}`
    const themeVariantClass = `myui-variant-${intensity}`

    // 阴影类：
    // - glass: 使用 myui-gs-md（固定玻璃态阴影），并启用 backdrop-blur
    // - 实体: 映射到 Tailwind 的 shadow-*
    const shadowMap: Record<ShadowName, string> = {
        xs: 'shadow-sm',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        '2xl': 'shadow-2xl',
        inner: 'shadow-inner',
        none: 'shadow-none',
    }
    const elevationClass = glass ? 'myui-gs-md' : (shadowMap[shadow] || 'shadow-md')


    // 使用建造者模式构建 className（仅静态类 + 变量引用，不拼接运行时任意值）
    const buttonClasses = new styleUtil.ClassNameBuilder()
        // 主题变量类
        .add(themeColorClass, themeVariantClass)
        .add(sizeStyle.padding, sizeStyle.fontSize, sizeStyle.minWidth)
        .add(
            "inline-flex items-center justify-center select-none relative overflow-hidden",
            "rounded-xl font-semibold tracking-wide border border-transparent",
            "transition-all duration-200 ease-out will-change-transform",
        )
        // 玻璃/实体背景与边框均引用变量
        .add(
            glass
                ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]'
        )
        // 文本色
        .add('text-[var(--text)]')
        // 阴影
        .add(elevationClass)
        .addAnimation(animation)
        .addInteraction(interaction as any)
        .add('disabled:opacity-60 disabled:cursor-not-allowed')
        .addIf(glass && !disabled, "backdrop-blur-md border")
        .addIf(disabled, `[background:${DEFAULT_STYLES.disabled.background}] [color:${DEFAULT_STYLES.disabled.color}]`)
        .add(className)
        .build()

    // 返回统一的接口，移除 style 相关
    return {
        size,
        sizeStyle,
        buttonClasses,
        disabled,
        glass,
    }
}
