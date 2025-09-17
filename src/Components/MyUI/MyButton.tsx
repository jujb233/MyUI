import React from "react"
import clsx from "clsx"
import { COLOR_THEMES, SIZE_CONFIG, DEFAULT_STYLES, SHADOW_EFFECTS, type ColorTheme } from "../../Configs"

/**
 * MyButton 组件的属性类型定义
 */
export type MyButtonProps = {
    /** HTML 按钮类型 */
    htmlType?: "button" | "submit" | "reset"
    /** 按钮样式类型 */
    styleType?: "primary" | "secondary" | "danger" | "normal" | "link"
    /** 按钮尺寸 */
    size?: "small" | "medium" | "large"
    /** 是否禁用 */
    disabled?: boolean
    /** 点击事件处理函数 */
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
    /** 按钮内容 */
    children?: React.ReactNode
    /** 自定义样式类名 */
    className?: string
    /** 是否启用玻璃态效果 */
    glassMorphism?: boolean
}

/**
 * 按钮样式类型
 */
export type StyleType = MyButtonProps["styleType"]
export type SizeType = MyButtonProps["size"]


/**
 * 获取按钮基础样式
 * @param theme - 颜色主题
 * @param glassMorphism - 是否启用玻璃态效果
 * @param disabled - 是否禁用状态
 * @param styleType - 按钮样式类型
 * @returns 按钮的基础样式对象
 */
const getButtonBaseStyle = (
    theme: ColorTheme,
    glassMorphism: boolean,
    disabled: boolean,
    styleType: StyleType
) => {
    if (disabled) {
        return {
            background: DEFAULT_STYLES.disabled.background,
            boxShadow: styleType === "link" ? "none" : SHADOW_EFFECTS.normal,
            border: "none",
        }
    }

    // link 类型的特殊处理
    if (styleType === "link") {
        if (glassMorphism) {
            return {
                background: theme.glass,
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(37, 99, 235, 0.3)",
                boxShadow: "0 2px 8px rgba(37, 99, 235, 0.1)",
            }
        }
        return {
            background: theme.bg,
            boxShadow: "0 1px 3px rgba(37, 99, 235, 0.1)",
            border: "1px solid rgba(37, 99, 235, 0.2)",
        }
    }

    if (glassMorphism) {
        return {
            background: theme.glass,
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: SHADOW_EFFECTS.glass,
        }
    }

    return {
        background: theme.bg,
        boxShadow: SHADOW_EFFECTS.normal,
        border: "none",
    }
}

/**
 * 获取按钮文本颜色
 * @param theme - 颜色主题
 * @param glassMorphism - 是否启用玻璃态效果
 * @param disabled - 是否禁用状态
 * @returns 文本颜色值
 */
const getTextColor = (
    theme: ColorTheme,
    glassMorphism: boolean,
    disabled: boolean
): string => {
    if (disabled) return DEFAULT_STYLES.disabled.color
    if (glassMorphism) return DEFAULT_STYLES.glassMorphism.text
    return theme.text
}

/**
 * 处理鼠标悬停事件
 * @param event - 鼠标事件
 * @param theme - 颜色主题
 * @param glassMorphism - 是否启用玻璃态效果
 * @param disabled - 是否禁用状态
 * @param styleType - 按钮样式类型
 */
const handleMouseOver = (
    event: React.MouseEvent<HTMLButtonElement>,
    theme: ColorTheme,
    glassMorphism: boolean,
    disabled: boolean,
    styleType: StyleType
) => {
    if (disabled) return

    const target = event.currentTarget

    if (styleType === "link") {
        target.style.background = theme.hover
        target.style.transform = "translateY(-1px)"
        target.style.textDecoration = "underline"
        target.style.borderColor = "rgba(37, 99, 235, 0.4)"
        if (glassMorphism) {
            target.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.15)"
        } else {
            target.style.boxShadow = "0 2px 6px rgba(37, 99, 235, 0.15)"
        }
        return
    }

    if (glassMorphism) {
        target.style.background = theme.glassHover
        target.style.transform = "scale(1.02)"
        target.style.boxShadow = SHADOW_EFFECTS.glassHover
    } else {
        target.style.background = theme.hover
    }
}

/**
 * 处理鼠标离开事件
 * @param event - 鼠标事件
 * @param theme - 颜色主题
 * @param glassMorphism - 是否启用玻璃态效果
 * @param disabled - 是否禁用状态
 * @param styleType - 按钮样式类型
 */
const handleMouseOut = (
    event: React.MouseEvent<HTMLButtonElement>,
    theme: ColorTheme,
    glassMorphism: boolean,
    disabled: boolean,
    styleType: StyleType
) => {
    if (disabled) return

    const target = event.currentTarget

    if (styleType === "link") {
        if (glassMorphism) {
            target.style.background = theme.glass
            target.style.boxShadow = "0 2px 8px rgba(37, 99, 235, 0.1)"
            target.style.borderColor = "rgba(37, 99, 235, 0.3)"
        } else {
            target.style.background = theme.bg
            target.style.boxShadow = "0 1px 3px rgba(37, 99, 235, 0.1)"
            target.style.borderColor = "rgba(37, 99, 235, 0.2)"
        }
        target.style.transform = "translateY(0)"
        target.style.textDecoration = "none"
        return
    }

    if (glassMorphism) {
        target.style.background = theme.glass
        target.style.transform = "scale(1)"
        target.style.boxShadow = SHADOW_EFFECTS.glass
    } else {
        target.style.background = theme.bg
    }
}

/**
 * MyButton - 自定义按钮组件
 * 支持多种样式主题、尺寸和玻璃态效果
 */
function MyButton({
    htmlType = "button",
    styleType = "normal",
    size = "medium",
    disabled = false,
    onClick,
    children,
    className = "",
    glassMorphism = true
}: MyButtonProps) {
    // 获取当前主题配置
    const theme = COLOR_THEMES[styleType || "normal"]
    const sizeStyle = SIZE_CONFIG[size || "medium"]

    // 计算按钮样式
    const baseStyle = getButtonBaseStyle(theme, glassMorphism, disabled, styleType)
    const textColor = getTextColor(theme, glassMorphism, disabled)

    return (
        <button
            type={htmlType}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                // 基础样式
                "rounded-xl font-medium transition-all duration-200 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50",
                "relative overflow-hidden",
                // link 样式特殊处理
                styleType === "link"
                    ? "transform hover:translate-y-1 active:translate-y-0 no-underline hover:underline"
                    : "transform hover:scale-102 active:scale-98",
                // 禁用状态样式
                disabled && "opacity-50 cursor-not-allowed hover:scale-100",
                // 尺寸相关样式
                sizeStyle.padding,
                sizeStyle.fontSize,
                sizeStyle.minWidth,
                // 自定义样式
                className
            )}
            style={{
                ...baseStyle,
                color: textColor,
                fontWeight: "600",
                letterSpacing: "0.025em",
            }}
            onMouseOver={(e) => handleMouseOver(e, theme, glassMorphism, disabled, styleType)}
            onMouseOut={(e) => handleMouseOut(e, theme, glassMorphism, disabled, styleType)}
        >
            {children}
        </button>
    )
}

export default MyButton