/**
 * 颜色主题配置
 * 定义不同按钮类型的颜色方案，包括普通状态和玻璃态效果
 */
export const COLOR_THEMES = {
    primary: {
        bg: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        hover: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
        text: "#fff",
        glass: "linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)",
        glassHover: "linear-gradient(135deg, rgba(79, 70, 229, 0.25) 0%, rgba(124, 58, 237, 0.25) 100%)"
    },
    secondary: {
        bg: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
        hover: "linear-gradient(135deg, #0891b2 0%, #2563eb 100%)",
        text: "#fff",
        glass: "linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(59, 130, 246, 0.12) 100%)",
        glassHover: "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)"
    },
    danger: {
        bg: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
        hover: "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)",
        text: "#fff",
        glass: "linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(153, 27, 27, 0.15) 100%)",
        glassHover: "linear-gradient(135deg, rgba(220, 38, 38, 0.25) 0%, rgba(153, 27, 27, 0.25) 100%)"
    },
    normal: {
        bg: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
        hover: "linear-gradient(135deg, #4b5563 0%, #374151 100%)",
        text: "#fff",
        glass: "linear-gradient(135deg, rgba(107, 114, 128, 0.08) 0%, rgba(75, 85, 99, 0.08) 100%)",
        glassHover: "linear-gradient(135deg, rgba(107, 114, 128, 0.15) 0%, rgba(75, 85, 99, 0.15) 100%)"
    },
    link: {
        bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)",
        hover: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%)",
        text: "#2563eb",
        glass: "linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(37, 99, 235, 0.12) 100%)",
        glassHover: "linear-gradient(135deg, rgba(59, 130, 246, 0.20) 0%, rgba(37, 99, 235, 0.20) 100%)"
    }
} as const

/**
 * 卡片特定的颜色配置
 */
export const CARD_COLOR_THEMES = {
    white: {
        bg: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        hover: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        text: "#1f2937",
        border: "rgba(226, 232, 240, 0.8)",
        glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)",
        glassHover: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)"
    },
    gray: {
        bg: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        hover: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
        text: "#334155",
        border: "rgba(203, 213, 225, 0.8)",
        glass: "linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(226, 232, 240, 0.8) 100%)",
        glassHover: "linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(226, 232, 240, 0.9) 100%)"
    },
    primary: {
        bg: "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)",
        hover: "linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
        text: "#1f2937",
        border: "rgba(79, 70, 229, 0.2)",
        glass: "linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
        glassHover: "linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)"
    },
    secondary: {
        bg: "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
        hover: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        text: "#1f2937",
        border: "rgba(6, 182, 212, 0.2)",
        glass: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        glassHover: "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)"
    }
} as const

/**
 * 颜色主题类型
 */
export type ColorTheme = typeof COLOR_THEMES[keyof typeof COLOR_THEMES]
export type ColorThemeName = keyof typeof COLOR_THEMES
export type CardColorTheme = typeof CARD_COLOR_THEMES[keyof typeof CARD_COLOR_THEMES]
export type CardColorThemeName = keyof typeof CARD_COLOR_THEMES
