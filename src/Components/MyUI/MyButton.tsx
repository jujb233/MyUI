import React from "react";
import clsx from "clsx";
import {
    SIZE_CONFIG,
    DEFAULT_STYLES,
    SHADOWS,
    VARIANT_BEHAVIORS,
    useComponentTheme,
    buildInteractionClasses,
    type VariantName,
    type ColorPresetName,
    type SizeName,
} from "../../Styles";

/**
 * MyButton 组件的属性
 */
export type MyButtonProps = {
    /** HTML 按钮类型 */
    htmlType?: "button" | "submit" | "reset";
    /**
     * 主题变体
     * @default "normal"
     */
    variant?: VariantName;
    /**
     * 颜色预设或自定义十六进制颜色
     * @default 根据 variant 决定
     */
    color?: ColorPresetName | string;
    /**
     * 尺寸
     * @default "medium"
     */
    size?: SizeName;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /** 点击事件 */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** 按钮内容 */
    children?: React.ReactNode;
    /** 自定义样式类 */
    className?: string;
    /**
     * 是否启用玻璃态效果
     * @default true
     */
    glass?: boolean;
    /**
     * 阴影等级
     * @default "sm"
     */
    shadow?: keyof typeof SHADOWS;
};

/**
 * MyButton - 一个灵活且主题化的按钮组件。
 *
 * 它支持多种变体、颜色、尺寸和视觉效果，如玻璃态和阴影。
 * 样式通过 CSS 自定义属性进行管理，实现了清晰的分离和易于定制。
 */
function MyButton({
    htmlType = "button",
    variant = "normal",
    color,
    size = "medium",
    disabled = false,
    onClick,
    children,
    className = "",
    glass = true,
    shadow = "sm",
}: MyButtonProps) {
    // 1. 获取尺寸样式
    const sizeStyle = SIZE_CONFIG[size];
    // 2. 主题与投影
    const { style: themedStyle } = useComponentTheme({ variant, color, glass, shadow, disabled, elevationKind: 'button' });

    // 3. 合并禁用态覆盖（特定于按钮）
    const buttonStyle: React.CSSProperties = {
        ...themedStyle,
        ...(disabled && {
            background: DEFAULT_STYLES.disabled.background,
            color: DEFAULT_STYLES.disabled.color,
        }),
    };

    // 4. 变体行为额外类
    const variantBehavior = VARIANT_BEHAVIORS[variant]?.button?.classes;

    return (
        <button
            type={htmlType}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                // 基础结构: 尺寸 & 布局
                sizeStyle.padding,
                sizeStyle.fontSize,
                sizeStyle.minWidth,
                // 视觉与交互
                "inline-flex items-center justify-center select-none relative overflow-hidden",
                "rounded-xl font-semibold tracking-wide border border-transparent",
                "transition-all duration-200 ease-out will-change-transform",
                // 主题颜色 (使用自定义属性驱动的渐变/颜色)
                glass
                    ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                    : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]',
                'text-[var(--text)]',
                // 统一交互行为
                buildInteractionClasses({ kind: 'button', enabled: !disabled }),
                // 光标 & 禁用态
                "disabled:opacity-60 disabled:cursor-not-allowed",
                // 焦点环
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                // 玻璃态
                glass && !disabled && "backdrop-blur-md border",
                // 变体行为注入
                variantBehavior,
                className
            )}
            style={buttonStyle}
        >
            {children}
        </button>
    );
}

export default MyButton;
