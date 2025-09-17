/**
 * 默认样式常量
 */
export const DEFAULT_STYLES = {
    disabled: {
        background: "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
        color: "#9ca3af"
    },
    glassMorphism: {
        text: "#1f2937"
    }
} as const

/**
 * 阴影效果常量
 */
export const SHADOW_EFFECTS = {
    normal: "0 1px 3px rgba(0, 0, 0, 0.1)",
    glass: `
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
    `,
    glassHover: `
        0 4px 12px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.25)
    `
} as const

/**
 * 默认样式类型
 */
export type DefaultStyles = typeof DEFAULT_STYLES
export type ShadowEffects = typeof SHADOW_EFFECTS
