import type { ShadowName } from "../../Interfaces/core";

// 阴影类映射（实体态下使用）
export const SHADOW_CLASS_MAP: Record<ShadowName, string> = {
    xs: "shadow-sm",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    inner: "shadow-inner",
    none: "shadow-none",
};

// 背景与边框（基于 CSS 变量）
export const BACKGROUND_CLASSES = {
    glass:
        "[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]",
    traditional:
        "[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]",
} as const;

// 通用文本与玻璃态特效
export const TEXT_CLASS = "text-[var(--text)]";
export const GLASS_BACKDROP_CLASS = "backdrop-blur-md";

// 玻璃态各组件的默认海拔（阴影）
export const GLASS_ELEVATION = "myui-glass-md" as const;

// 主题类名前缀（避免在各处硬编码）
export const THEME_CLASS_PREFIX = {
    color: "myui-color-",
    variant: "myui-variant-",
} as const;

// 通用布局与基础样式
export const COMMON_CLASSES = {
    FLEX_CENTER: "flex items-center",
    FLEX_CENTER_JUSTIFY: "flex items-center justify-center",
    RELATIVE_OVERFLOW_HIDDEN: "relative overflow-hidden",
    DISABLED_STATE: "opacity-60 cursor-not-allowed",
    DISABLED_STATE_RAW:
        "[background:var(--disabled-bg)] [color:var(--disabled-text)]",
    BORDER: "border",
    CURSOR_POINTER: "cursor-pointer",
    ROUNDED_XL: "rounded-xl",
    ROUNDED_2XL: "rounded-2xl",
} as const;

// 动画与过渡
export const TRANSITION_CLASSES = {
    DEFAULT: "transition-all duration-200 ease-out will-change-transform",
} as const;
