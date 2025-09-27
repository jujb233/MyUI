/**
 * 尺寸配置
 * 统一所有组件（按钮/卡片/面板）的尺寸样式属性
 */
export const SIZE_CONFIG = {
    small: {
        // 按钮/面板常用
        padding: "px-3 py-1",
        fontSize: "text-sm",
        minWidth: "min-w-16",
        // 卡片特有/扩展字段
        spacing: "space-y-2",
        titleSize: "text-lg",
        contentSize: "text-sm",
        borderRadius: "rounded-lg",
        minHeight: "min-h-32",
    },
    medium: {
        padding: "px-4 py-2",
        fontSize: "text-base",
        minWidth: "min-w-20",
        spacing: "space-y-3",
        titleSize: "text-xl",
        contentSize: "text-base",
        borderRadius: "rounded-xl",
        minHeight: "min-h-40",
    },
    large: {
        padding: "px-6 py-3",
        fontSize: "text-lg",
        minWidth: "min-w-24",
        spacing: "space-y-4",
        titleSize: "text-2xl",
        contentSize: "text-lg",
        borderRadius: "rounded-2xl",
        minHeight: "min-h-48",
    }
} as const

/**
 * 尺寸类型
 */
export type SizeStyle = typeof SIZE_CONFIG[keyof typeof SIZE_CONFIG]
export type SizeName = keyof typeof SIZE_CONFIG
