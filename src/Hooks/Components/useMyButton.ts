import { styleUtil } from "../../Utils/styleBuilder"
import type { InteractionPolicy } from "../../Interfaces"
import { type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES, SIZE_CONFIG, DEFAULT_STYLES } from "../../Options"
import { SHADOW_CLASS_MAP, BACKGROUND_CLASSES, TEXT_CLASS, GLASS_BACKDROP_CLASS, GLASS_ELEVATION, THEME_CLASS_PREFIX } from "../../Options/Configs"
import type { AnimationProp } from "../../Options"

export type UseMyButtonProps = {
    htmlType?: "button" | "submit" | "reset"
    variant?: ComponentVariant | undefined
    size?: SizeName
    disabled?: boolean
    className?: string
    glass?: boolean
    shadow?: ShadowName
    interaction?: InteractionPolicy | string
    animation?: AnimationProp | undefined
}

export function useMyButton(props: UseMyButtonProps): string {
    // 从 props 中解构并提供默认值
    const {
        variant: variantProp,
        size = 'medium',
        disabled = false,
        className = "",
        glass = true,
        shadow = 'md',
        interaction = 'rich',
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
    const themeColorClass = `${THEME_CLASS_PREFIX.color}${color}`
    const themeVariantClass = `${THEME_CLASS_PREFIX.variant}${intensity}`

    // 阴影类：
    // - glass: 使用 myui-gs-md（固定玻璃态阴影），并启用 backdrop-blur
    // - 实体: 映射到 Tailwind 的 shadow-*
    const elevationClass = glass ? GLASS_ELEVATION.button : (SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md)


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
        .add(glass ? BACKGROUND_CLASSES.glass : BACKGROUND_CLASSES.solid)
        // 文本色
        .add(TEXT_CLASS)
        // 阴影
        .add(elevationClass)
        .addAnimation(animation)
        .addInteraction(interaction as any)
        .add('disabled:opacity-60 disabled:cursor-not-allowed')
        .add(glass && !disabled, `${GLASS_BACKDROP_CLASS} border`)
        .add(disabled, `[background:${DEFAULT_STYLES.disabled.background}] [color:${DEFAULT_STYLES.disabled.color}]`)
        .add(className)
        .build()

    return buttonClasses
}
