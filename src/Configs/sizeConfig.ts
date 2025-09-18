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
 * 卡片尺寸配置
 * 定义不同卡片尺寸的样式属性
 */
export const CARD_SIZE_CONFIG = {
    small: {
        padding: "p-4",
        spacing: "space-y-2",
        titleSize: "text-lg",
        contentSize: "text-sm",
        borderRadius: "rounded-lg",
        minHeight: "min-h-32"
    },
    medium: {
        padding: "p-6",
        spacing: "space-y-3",
        titleSize: "text-xl",
        contentSize: "text-base",
        borderRadius: "rounded-xl",
        minHeight: "min-h-40"
    },
    large: {
        padding: "p-8",
        spacing: "space-y-4",
        titleSize: "text-2xl",
        contentSize: "text-lg",
        borderRadius: "rounded-2xl",
        minHeight: "min-h-48"
    }
} as const

/**
 * 尺寸类型
 */
export type SizeConfig = typeof SIZE_CONFIG[keyof typeof SIZE_CONFIG]
export type SizeName = keyof typeof SIZE_CONFIG
export type CardSizeConfig = typeof CARD_SIZE_CONFIG[keyof typeof CARD_SIZE_CONFIG]
export type CardSizeName = keyof typeof CARD_SIZE_CONFIG
