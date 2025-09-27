export const DEFAULT_STYLES = {
    disabled: {
        background: "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
        color: "#9ca3af",
        fill: "#9ca3af",
    },
    glass: {
        text: "#1f2937",
        subtleText: "#4b5563",
    },
} as const;

/**
 * 阴影效果
 */
export const SHADOWS = {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
} as const;

/**
 * 玻璃态效果的特殊阴影
 */
export const GLASS_SHADOWS = {
    md: `0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)`,
    lg: `0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)`,
} as const;


export type DefaultStyles = typeof DEFAULT_STYLES;
export type ShadowName = keyof typeof SHADOWS;
export type GlassShadowName = keyof typeof GLASS_SHADOWS;
