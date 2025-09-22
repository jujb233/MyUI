import React from "react"
import clsx from "clsx"
import { COLOR_THEMES, SIZE_CONFIG, DEFAULT_STYLES, SHADOW_EFFECTS, type ColorTheme } from "../../Configs"

export type MyPanelProps = {
    /** 主题类型 */
    theme?: "primary" | "secondary" | "danger" | "normal" | "white"
    /** 尺寸类型 */
    size?: "small" | "medium" | "large"
    /** 是否启用玻璃态 */
    glassMorphism?: boolean
    /** 是否有阴影 */
    shadow?: boolean
    /** 自定义类名 */
    className?: string
    /** 内容 */
    children?: React.ReactNode
    /** 是否禁用 */
    disabled?: boolean
}

const getPanelBaseStyle = (
    theme: ColorTheme,
    glassMorphism: boolean,
    disabled: boolean,
    shadow: boolean
) => {
    if (disabled) {
        return {
            background: DEFAULT_STYLES.disabled.background,
            boxShadow: shadow ? SHADOW_EFFECTS.normal : "none",
            border: "none",
        }
    }
    if (glassMorphism) {
        return {
            background: theme.glass,
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: shadow ? SHADOW_EFFECTS.glass : "none",
        }
    }
    return {
        background: theme.bg,
        boxShadow: shadow ? SHADOW_EFFECTS.normal : "none",
        border: "none",
    }
}

const getTextColor = (
    theme: ColorTheme,
    glassMorphism: boolean,
    disabled: boolean
): string => {
    if (disabled) return DEFAULT_STYLES.disabled.color
    if (glassMorphism) return DEFAULT_STYLES.glassMorphism.text
    return theme.text
}

function MyPanel({
    theme = "normal",
    size = "medium",
    glassMorphism = true,
    shadow = true,
    className = "",
    children,
    disabled = false
}: MyPanelProps) {
    // 只允许 COLOR_THEMES 支持的 theme
    const themeObj = COLOR_THEMES[theme as keyof typeof COLOR_THEMES] || COLOR_THEMES.normal
    const sizeStyle = SIZE_CONFIG[size]
    const baseStyle = getPanelBaseStyle(themeObj, glassMorphism, disabled, shadow)
    const textColor = getTextColor(themeObj, glassMorphism, disabled)

    return (
        <div
            className={clsx(
                "rounded-2xl transition-all duration-200 ease-out",
                "relative overflow-hidden",
                "p-4", // 默认内边距
                sizeStyle.padding,
                sizeStyle.fontSize,
                sizeStyle.minWidth,
                disabled && "opacity-60 cursor-not-allowed",
                className
            )}
            style={{
                ...baseStyle,
                color: textColor,
                fontWeight: "500",
                letterSpacing: "0.02em",
            }}
        >
            {children}
        </div>
    )
}

export default MyPanel