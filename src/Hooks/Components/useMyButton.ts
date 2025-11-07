import type { InteractionPolicy } from "../../Interfaces/interaction"
import type { PositionProps } from "../../Interfaces"
import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core"
import type { AnimationProp } from "../../styles/config/animation"
import { createBaseStyle } from "../../Utils/styleFactory"
import type { JSX } from "solid-js"
import { COMMON_CLASSES, TRANSITION_CLASSES } from "../../Options/Configs/classConfig"
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots"
import { getSizeTokens, buildPaddingStyle } from "../../Utils/sizeStyles"
// mergeDefaults 暂不使用：手动解构默认值以避免精确可选属性类型带来的推断冲突

/**
 * 输入 props 类型说明
 *
 * htmlType - 原生 button 的 type 属性（'button' | 'submit' | 'reset'）
 * variant - 组件变体（颜色/角色）
 * size - 预设尺寸名称（映射到 sizeConfig）
 * disabled - 是否禁用，会影响生成 class
 * className - 额外自定义 class 会被追加到最终字符串
 * glass - 是否使用玻璃（glass）风格
 * shadow - 阴影等级名称（映射到 SHADOW_CLASS_MAP）
 * interaction - 交互策略（传给 .addInteraction）
 * animation - 动画配置（传给 .addAnimation）
 */
export type UseMyButtonProps = PositionProps & {
    htmlType?: "button" | "submit" | "reset"
    variant?: ComponentVariant | null
    size?: SizeName
    disabled?: boolean
    className?: string
    glass?: boolean
    shadow?: ShadowName
    interaction?: InteractionPolicy | string
    animation?: AnimationProp
}

export type UseMyButtonResult = {
    rootClass: string
    rootStyle: JSX.CSSProperties
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
    // 手动应用默认值（与 defaultValues.UseMyButtonProps 保持一致）
    const {
        variant,
        size = 'medium',
        disabled = false,
        className = '',
        glass = true,
        shadow = 'none',
        interaction,
        animation,
        top = 0,
        left = 0,
    } = props

    // 使用共享工厂创建基础 builder
    // 构造基础样式参数（避免向函数传入显式 undefined 导致 exactOptionalPropertyTypes 报错）
    const baseStyleOptions: Parameters<typeof createBaseStyle>[0] = {
        size,
        glass,
        shadow,
        className,
        disabled,
        ...(animation !== undefined ? { animation } : {}),
        ...(interaction !== undefined ? { interaction } : {}),
        ...(variant ? { variant } : {}),
    }
    const { builder } = createBaseStyle(baseStyleOptions)

    // 在基础 builder 上补充按钮特有的类（将尺寸相关从 class 转为 style）
    const buttonClasses = builder
        .add(
            "inline-flex items-center justify-center select-none",
            COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN,
            COMMON_CLASSES.ROUNDED_XL,
            "font-semibold tracking-wide border-transparent",
            TRANSITION_CLASSES.DEFAULT,
        )
        .build()

    // 槽位（子组件）样式来自集中配置
    const slotClasses = {
        icon: SLOTS_STYLE.buttonIcon,
        content: SLOTS_STYLE.buttonContent,
        options: SLOTS_STYLE.buttonOptions,
    }

    // 尺寸 token（保证有兜底）
    const tokens = getSizeTokens(size as SizeName)

    // 构建内联样式：位置 + 尺寸。使用 camelCase 以获得更好的类型提示。
    const paddingStyle = buildPaddingStyle(tokens)
    const rootStyle: JSX.CSSProperties = {
        ...(top !== undefined ? { top: `${Math.max(0, top)}rem` } : {}),
        ...(left !== undefined ? { left: `${Math.max(0, left)}rem` } : {}),
        ...paddingStyle,
        'font-size': tokens.fontSizeBase,
        'min-width': tokens.minWidth,
    }

    const result: UseMyButtonResult = { rootClass: buttonClasses, slots: slotClasses, rootStyle }
    return result
}
