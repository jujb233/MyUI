import React from "react";
import clsx from "clsx";
import {
    SIZE_CONFIG,
    DEFAULT_STYLES,
    SHADOWS,
    GLASS_SHADOWS,
    resolveTheme,
    type VariantName,
    type ColorPresetName,
    type SizeName,
} from "../../styles";

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
    // 1. 解析主题
    const theme = resolveTheme({ variant, color });

    // 2. 获取尺寸样式
    const sizeStyle = SIZE_CONFIG[size];

    // 3. 计算内联样式
    const buttonStyle: React.CSSProperties = {
        ...theme, // 应用主题变量
        boxShadow: glass ? GLASS_SHADOWS.md : SHADOWS[shadow],
        ...(disabled && {
            background: DEFAULT_STYLES.disabled.background,
            color: DEFAULT_STYLES.disabled.color,
            boxShadow: SHADOWS.none,
        }),
    };

    return (
        <button
            type={htmlType}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                "my-button", // 基础类名
                sizeStyle.padding,
                sizeStyle.fontSize,
                sizeStyle.minWidth,
                {
                    "glass-effect": glass && !disabled,
                    "link-style": variant === "link",
                    "disabled-state": disabled,
                },
                className
            )}
            style={buttonStyle}
        >
            {children}
        </button>
    );
}

export default MyButton;
