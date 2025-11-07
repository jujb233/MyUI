import type { InteractionPolicy } from "../../Interfaces/interaction";
import type { PositionProps } from "../../Interfaces";
import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core";
import type { AnimationProp } from "../../styles/config/animation";
import { createBaseStyle } from "../../Utils/styleFactory";
import type { JSX } from "solid-js";
import { COMMON_CLASSES, TRANSITION_CLASSES } from "../../Options/Configs/classConfig";
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots";
import { getSizeTokens } from "../../Utils/sizeStyles";
import { defaultValues } from "../../Options/Configs/default";

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
        size = defaultValues.SizeProps.size as SizeName,
        disabled = defaultValues.Disableable.disabled,
        className = defaultValues.StyleProps.class,
        glass = defaultValues.ThemeProps.glass,
        shadow = defaultValues.ThemeProps.shadow as ShadowName,
        interaction = defaultValues.InteractionPolicy.behavior as InteractionPolicy,
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

    const tokens = getSizeTokens(size as SizeName);

    const rootStyle: JSX.CSSProperties = {
        // 位置样式（单位 rem）
        ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
        ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
        // 尺寸相关（动态类替换为内联样式）
        'padding-left': tokens.paddingX,
        'padding-right': tokens.paddingX,
        'padding-top': tokens.paddingY,
        'padding-bottom': tokens.paddingY,
        'font-size': tokens.fontSizeBase,
        'min-width': tokens.minWidth,
    };

    const result: UseMyButtonResult = { rootClass: buttonClasses, slots: slotClasses };
    (result as any).rootStyle = rootStyle;
    return result;
}
