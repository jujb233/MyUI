import type { InteractionPolicy, PositionProps } from "../../Interfaces"
import { type ComponentVariant, type SizeName, type ShadowName } from "../../Options"
import { COMMON_CLASSES, TRANSITION_CLASSES } from "../../Options/Configs"
import type { AnimationProp } from "../../Options"
import { createBaseStyle } from "../../Utils/styleFactory"
import type { JSX } from "solid-js"

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
export type UseMyButtonProps = PositionProps & {
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
    rootStyle?: JSX.CSSProperties
    slots: {
        icon: string
        content: string
        options: string
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
    const { builder, sizeConfig } = createBaseStyle({
        variant: variantProp,
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction,
    })

    // 在基础 builder 上补充按钮特有的类
    const buttonClasses = builder
        .add(sizeConfig.padding, sizeConfig.fontSize, sizeConfig.minWidth)
        .add(
            "inline-flex items-center justify-center select-none",
            COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN,
            COMMON_CLASSES.ROUNDED_XL,
            "font-semibold tracking-wide border-transparent",
            TRANSITION_CLASSES.DEFAULT,
        )
        .build()

    // 槽位（子组件）样式：与原有硬编码保持一致，但集中由此 Hook 产出
    const slotClasses = {
        icon: "mr-2 flex items-center",
        content: "flex-1 truncate",
        options: "ml-2 flex items-center",
    }

    // 位置样式（单位 rem）
    const rootStyle: JSX.CSSProperties | undefined =
        props.top !== undefined || props.left !== undefined
            ? {
                ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
                ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
            }
            : undefined

    const result: UseMyButtonResult = { rootClass: buttonClasses, slots: slotClasses }
    if (rootStyle) {
        // 仅在存在位置样式时才添加该属性，避免 exactOptionalPropertyTypes 下的 undefined 赋值
        ; (result as any).rootStyle = rootStyle
    }
    return result
}
