import type { InteractionPolicy } from "../../Interfaces"
import { type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES, DEFAULT_STYLES } from "../../Options"
import { SHADOW_CLASS_MAP, BACKGROUND_CLASSES, GLASS_BACKDROP_CLASS, GLASS_ELEVATION, THEME_CLASS_PREFIX } from "../../Options/Configs"
import type { AnimationProp } from "../../Options"
import { createBaseBuilder } from "./styleFactory"

/**
 * 输入 props 类型说明
 *
 * htmlType - 原生 button 的 type 属性（'button' | 'submit' | 'reset'）
 * variant - 组件变体（颜色/角色）
 * size - 预设尺寸名称（映射到 SIZE_CONFIG）
 * disabled - 是否禁用，会影响生成 class
 * className - 额外自定义 class 会被追加到最终字符串
 * glass - 是否使用玻璃（glass）风格
 * shadow - 阴影等级名称（映射到 SHADOW_CLASS_MAP）
 * interaction - 交互策略（传给 .addInteraction）
 * animation - 动画配置（传给 .addAnimation）
 */
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

export type UseMyButtonResult = {
    rootClass: string
    slots: {
        icon: string
        content: string
        actions: string
    }
}

/**
 * 根据 props 构建按钮 className
 *
 * 返回值：string — 最终的 className
 * 错误模式：不抛异常；当 props 缺失时使用内置默认值。
 */
export function useMyButton(props: UseMyButtonProps): UseMyButtonResult {
    // 从 props 中解构并提供默认值（保证后续使用不会出现 undefined）
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

    // 使用共享工厂创建基础 builder
    const { builder, sizeConfig } = createBaseBuilder({
        variant: variantProp,
        size,
        glass,
        shadow,
        className,
        animation,
        interaction,
    })

    // 在基础 builder 上补充按钮特有的类
    const buttonClasses = builder
        .add(`${THEME_CLASS_PREFIX.color}${variantProp?.color || 'blue'}`,
            `${THEME_CLASS_PREFIX.variant}${VARIANT_ROLE_STYLES[variantProp?.role || 'primary']}`
        )
        .add(sizeConfig.padding, sizeConfig.fontSize, sizeConfig.minWidth)
        .add(
            "inline-flex items-center justify-center select-none relative overflow-hidden",
            "rounded-xl font-semibold tracking-wide border border-transparent",
            "transition-all duration-200 ease-out will-change-transform",
        )
        .add(glass, BACKGROUND_CLASSES.glass, BACKGROUND_CLASSES.solid)
        .add(!glass,
            SHADOW_CLASS_MAP[shadow] || SHADOW_CLASS_MAP.md,
            GLASS_ELEVATION
        )
        .add(`disabled:opacity-60 `, `disabled:cursor-not-allowed`)
        .add(glass && !disabled, `${GLASS_BACKDROP_CLASS} border`)
        .add(disabled, [
            `[background:${DEFAULT_STYLES.disabled.background}]`,
            `[color:${DEFAULT_STYLES.disabled.color}]`
        ])
        .build()

    // 槽位（子组件）样式：与原有硬编码保持一致，但集中由此 Hook 产出
    const slotClasses = {
        icon: "mr-2 flex items-center",
        content: "flex-1 truncate",
        actions: "ml-2 flex items-center",
    }

    return { rootClass: buttonClasses, slots: slotClasses }
}
