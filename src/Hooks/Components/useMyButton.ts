import type { InteractionPolicy } from "../../Interfaces/interaction";
import type { PositionProps } from "../../Interfaces";
import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core";
import type { AnimationProp } from "../../styles/config/animation";
import { createBaseStyle } from "../../Utils/styleFactory";
import type { JSX } from "solid-js";
import { COMMON_CLASSES, TRANSITION_CLASSES } from "../../Options/Configs/classConfig";
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots";

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
    htmlType?: "button" | "submit" | "reset";
    variant?: ComponentVariant;
    size?: SizeName;
    disabled?: boolean;
    className?: string;
    glass?: boolean;
    shadow?: ShadowName;
    interaction?: InteractionPolicy | string;
    animation?: AnimationProp;
};

export type UseMyButtonResult = {
    rootClass: string;
    rootStyle?: JSX.CSSProperties;
    slots: {
        icon: string;
        content: string;
        options: string;
    };
};

/**
 * 根据 props 构建按钮 className
 *
 * 返回值：string — 最终的 className
 * 错误模式：不抛异常；当 props 缺失时使用内置默认值。
 */
export function useMyButton(props: UseMyButtonProps): UseMyButtonResult {
    // 从 props 中解构并提供默认值（保证后续使用不会出现 undefined）
    const {
        variant,
        size = 'medium',
        disabled = false,
        className = "",
        glass = true,
        shadow = 'md',
        interaction = 'rich',
        animation,
    } = props;

    // 使用共享工厂创建基础 builder
    const { builder } = createBaseStyle({
        variant: variant ?? { role: 'primary', color: 'blue' },
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction,
    });

    // 在基础 builder 上补充按钮特有的类（将尺寸相关从 class 转为 style）
    const buttonClasses = builder
        .add(
            "inline-flex items-center justify-center select-none",
            COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN,
            COMMON_CLASSES.ROUNDED_XL,
            "font-semibold tracking-wide border-transparent",
            TRANSITION_CLASSES.DEFAULT,
        )
        .build();

    // 槽位（子组件）样式来自集中配置
    const slotClasses = {
        icon: SLOTS_STYLE.buttonIcon,
        content: SLOTS_STYLE.buttonContent,
        options: SLOTS_STYLE.buttonOptions,
    };

    // 尺寸映射：将动态 class 转为内联 style，避免 JIT 类爆炸
    const sizePaddingMap: Record<NonNullable<typeof size>, { px: string; py: string }> = {
        small: { px: '0.75rem', py: '0.25rem' }, // px-3 py-1
        medium: { px: '1rem', py: '0.5rem' },    // px-4 py-2
        large: { px: '1.5rem', py: '0.75rem' },  // px-6 py-3
    } as const;
    const sizeFontMap: Record<NonNullable<typeof size>, string> = {
        small: '0.875rem',  // text-sm
        medium: '1rem',     // text-base
        large: '1.125rem',  // text-lg
    } as const;
    const sizeMinWidthMap: Record<NonNullable<typeof size>, string> = {
        small: '4rem',  // min-w-16
        medium: '5rem', // min-w-20
        large: '6rem',  // min-w-24
    } as const;

    const rootStyle: JSX.CSSProperties = {
        // 位置样式（单位 rem）
        ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
        ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
        // 尺寸相关（动态类替换为内联样式）
        'padding-left': sizePaddingMap[size].px,
        'padding-right': sizePaddingMap[size].px,
        'padding-top': sizePaddingMap[size].py,
        'padding-bottom': sizePaddingMap[size].py,
        'font-size': sizeFontMap[size],
        'min-width': sizeMinWidthMap[size],
    };

    const result: UseMyButtonResult = { rootClass: buttonClasses, slots: slotClasses };
    (result as any).rootStyle = rootStyle;
    return result;
}
