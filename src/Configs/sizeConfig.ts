/**
 * 尺寸配置
 * 定义不同按钮尺寸的样式属性
 */
export const SIZE_CONFIG = {
    small: {
        padding: "px-3 py-1",
        fontSize: "text-sm",
        minWidth: "min-w-16"
    },
    medium: {
        padding: "px-4 py-2",
        fontSize: "text-base",
        minWidth: "min-w-20"
    },
    large: {
        padding: "px-6 py-3",
        fontSize: "text-lg",
        minWidth: "min-w-24"
    }
} as const

/**
 * 尺寸类型
 */
export type SizeConfig = typeof SIZE_CONFIG[keyof typeof SIZE_CONFIG]
export type SizeName = keyof typeof SIZE_CONFIG
