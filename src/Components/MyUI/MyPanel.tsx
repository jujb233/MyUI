import React from "react";
import clsx from "clsx";
import {
    SIZE_CONFIG,
    SHADOWS,
    GLASS_SHADOWS,
    resolveTheme,
    type VariantName,
    type ColorPresetName,
    type SizeName,
    type ShadowName,
} from "../../styles";

/**
 * MyPanel 组件的属性
 */
export type MyPanelProps = {
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
     * 是否启用玻璃态效果
     * @default true
     */
    glass?: boolean;
    /**
     * 阴影等级
     * @default "md"
     */
    shadow?: ShadowName;
    /** 自定义样式类 */
    className?: string;
    /** 面板内容 */
    children?: React.ReactNode;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 面板标题
     */
    title?: string;
    /**
     * 背景图片 URL
     */
    backgroundImage?: string;
};

/**
 * MyPanel - 一个通用的内容容器，支持主题化和玻璃态效果。
 *
 * 它使用与 MyButton 和 MyCard 相同的样式系统，确保视觉一致性。
 */
function MyPanel({
    variant = "normal",
    color,
    size = "medium",
    glass = true,
    shadow = "md",
    className = "",
    children,
    disabled = false,
    title,
    backgroundImage,
}: MyPanelProps) {
    // 1. 解析主题
    const theme = resolveTheme({ variant, color });

    // 2. 获取尺寸样式
    const sizeStyle = SIZE_CONFIG[size];

    // 3. 计算内联样式
    const panelStyle: React.CSSProperties = {
        ...theme,
        boxShadow: glass ? GLASS_SHADOWS.md : SHADOWS[shadow],
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    };

    return (
        <div
            className={clsx(
                "my-panel", // 基础类名
                "rounded-2xl transition-all duration-200 ease-out relative overflow-hidden",
                backgroundImage && "bg-cover bg-center",
                sizeStyle.padding,
                sizeStyle.fontSize,
                {
                    "glass-effect": glass,
                    "disabled-state opacity-60 cursor-not-allowed": disabled,
                },
                className
            )}
            style={panelStyle}
        >
            {title && <h2 className={clsx("text-2xl font-bold mb-4", className)}>{title}</h2>}
            {children}
        </div>
    );
}

export default MyPanel;