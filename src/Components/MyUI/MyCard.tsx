import React from "react"
import clsx from "clsx"
import {
    CARD_COLOR_THEMES,
    CARD_SIZE_CONFIG,
    SHADOW_EFFECTS,
    type CardColorTheme,
    type CardColorThemeName,
    type CardSizeName
} from "../../Configs"
import { resolveCardColorTheme, type CardUnifiedTheme } from "../../Configs/presets"

/**
 * MyCard 组件的属性类型定义
 */
export type MyCardProps = {
    /** 卡片标题 */
    title?: React.ReactNode
    /** 卡片内容 */
    content?: React.ReactNode
    /** 卡片图片 */
    image?: string
    /** 图片替代文本 */
    imageAlt?: string
    /** 页脚内容 */
    footer?: React.ReactNode
    /** 操作按钮 */
    actions?: React.ReactNode
    /** 标签内容 */
    tags?: React.ReactNode[]
    /** 卡片样式类型 */
    variant?: CardColorThemeName
    /** 颜色：预设名(blue/indigo/...)或十六进制，如 #1e90ff */
    color?: string
    /** 卡片尺寸 */
    size?: CardSizeName
    /** 是否启用玻璃态效果 */
    glassMorphism?: boolean
    /** 是否可点击 */
    clickable?: boolean
    /** 点击事件处理函数 */
    onClick?: React.MouseEventHandler<HTMLDivElement>
    /** 自定义样式类名 */
    className?: string
    /** 是否显示边框 */
    bordered?: boolean
    /** 是否显示阴影 */
    shadow?: boolean
    /** 图片位置 */
    imagePosition?: "top" | "left" | "right" | "background"
    /** 内容布局方向 */
    direction?: "vertical" | "horizontal"
    /** 是否启用悬停效果 */
    hoverable?: boolean
    /** 卡片子元素 */
    children?: React.ReactNode
}

/**
 * 获取卡片基础样式
 */
const getCardBaseStyle = (
    theme: CardUnifiedTheme | CardColorTheme,
    glassMorphism: boolean,
    bordered: boolean,
    shadow: boolean
) => {
    const baseStyle: React.CSSProperties = {
        background: glassMorphism ? theme.glass : theme.bg,
        color: theme.text,
    }

    if (glassMorphism) {
        baseStyle.backdropFilter = "blur(12px)"
        baseStyle.border = `1px solid ${theme.border}`
    } else if (bordered) {
        baseStyle.border = `1px solid ${theme.border}`
    }

    if (shadow) {
        baseStyle.boxShadow = glassMorphism ? SHADOW_EFFECTS.glass : SHADOW_EFFECTS.normal
    }

    return baseStyle
}

/**
 * 处理鼠标悬停事件
 */
const handleMouseOver = (
    event: React.MouseEvent<HTMLDivElement>,
    theme: CardUnifiedTheme | CardColorTheme,
    glassMorphism: boolean,
    hoverable: boolean,
    clickable: boolean
) => {
    if (!hoverable && !clickable) return

    const target = event.currentTarget

    if (glassMorphism) {
        target.style.background = theme.glassHover
        target.style.transform = "translateY(-2px) scale(1.01)"
        target.style.boxShadow = SHADOW_EFFECTS.glassHover
    } else {
        target.style.background = theme.hover
        target.style.transform = "translateY(-2px)"
        target.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)"
    }
}

/**
 * 处理鼠标离开事件
 */
const handleMouseOut = (
    event: React.MouseEvent<HTMLDivElement>,
    theme: CardUnifiedTheme | CardColorTheme,
    glassMorphism: boolean,
    hoverable: boolean,
    clickable: boolean,
    shadow: boolean
) => {
    if (!hoverable && !clickable) return

    const target = event.currentTarget

    if (glassMorphism) {
        target.style.background = theme.glass
        target.style.transform = "translateY(0) scale(1)"
        target.style.boxShadow = shadow ? SHADOW_EFFECTS.glass : "none"
    } else {
        target.style.background = theme.bg
        target.style.transform = "translateY(0)"
        target.style.boxShadow = shadow ? SHADOW_EFFECTS.normal : "none"
    }
}

/**
 * 图片组件
 */
const CardImage: React.FC<{
    src: string
    alt: string
    position: "top" | "left" | "right" | "background"
    size: CardSizeName
}> = ({ src, alt, position, size }) => {
    const sizeConfig = CARD_SIZE_CONFIG[size]

    if (position === "background") {
        return (
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${src})` }}
            />
        )
    }

    const imageClasses = clsx(
        "object-cover",
        position === "top" && "w-full h-48",
        position === "left" && "w-32 h-full",
        position === "right" && "w-32 h-full",
        sizeConfig.borderRadius
    )

    return (
        <img
            src={src}
            alt={alt}
            className={imageClasses}
        />
    )
}

/**
 * 标签组件
 */
const CardTags: React.FC<{ tags: React.ReactNode[] }> = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}

/**
 * MyCard - 自定义卡片组件
 * 支持多种布局、样式主题、尺寸和交互效果
 */
function MyCard({
    title,
    content,
    image,
    imageAlt = "",
    footer,
    actions,
    tags,
    variant = "white",
    color,
    size = "medium",
    glassMorphism = true,
    clickable = false,
    onClick,
    className = "",
    bordered = true,
    shadow = true,
    imagePosition = "top",
    direction = "vertical",
    hoverable = true,
    children
}: MyCardProps) {
    // 获取当前主题和尺寸配置
    const theme = (color
        ? resolveCardColorTheme(color).theme
        : (CARD_COLOR_THEMES[variant] as unknown as CardUnifiedTheme))
    const sizeConfig = CARD_SIZE_CONFIG[size]

    // 计算卡片样式
    const baseStyle = getCardBaseStyle(theme, glassMorphism, bordered, shadow)

    // 判断是否显示图片
    const hasImage = image && image.trim() !== ""

    // 内容区域布局
    const isHorizontal = direction === "horizontal" && hasImage && imagePosition !== "top"

    return (
        <div
            className={clsx(
                // 基础样式
                "relative overflow-hidden transition-all duration-300 ease-out",
                "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-opacity-50",

                // 尺寸相关样式
                sizeConfig.borderRadius,
                sizeConfig.minHeight,

                // 布局样式
                isHorizontal ? "flex" : "flex flex-col",
                imagePosition === "right" && isHorizontal && "flex-row-reverse",

                // 交互样式
                (clickable || hoverable) && "cursor-pointer",
                clickable && "select-none",

                // 响应式样式
                "w-full max-w-sm md:max-w-md lg:max-w-lg",

                // 自定义样式
                className
            )}
            style={baseStyle}
            onClick={onClick}
            onMouseOver={(e) => handleMouseOver(e, theme, glassMorphism, hoverable, clickable)}
            onMouseOut={(e) => handleMouseOut(e, theme, glassMorphism, hoverable, clickable, shadow)}
            role={clickable ? "button" : undefined}
            tabIndex={clickable ? 0 : undefined}
        >
            {/* 背景图片 */}
            {hasImage && imagePosition === "background" && (
                <CardImage
                    src={image}
                    alt={imageAlt}
                    position={imagePosition}
                    size={size}
                />
            )}

            {/* 顶部图片 */}
            {hasImage && imagePosition === "top" && !isHorizontal && (
                <div className="mb-4">
                    <CardImage
                        src={image}
                        alt={imageAlt}
                        position={imagePosition}
                        size={size}
                    />
                </div>
            )}

            {/* 水平布局：侧边图片 */}
            {hasImage && isHorizontal && (
                <div className="flex-shrink-0">
                    <CardImage
                        src={image}
                        alt={imageAlt}
                        position={imagePosition}
                        size={size}
                    />
                </div>
            )}

            {/* 内容区域 */}
            <div className={clsx(
                sizeConfig.padding,
                isHorizontal && "flex-1",
                hasImage && imagePosition === "background" && "relative z-10"
            )}>
                <div className={sizeConfig.spacing}>
                    {/* 标签 */}
                    {tags && tags.length > 0 && <CardTags tags={tags} />}

                    {/* 标题 */}
                    {title && (
                        <h3 className={clsx(
                            sizeConfig.titleSize,
                            "font-bold leading-tight",
                            "text-gray-900 dark:text-gray-100"
                        )}>
                            {title}
                        </h3>
                    )}

                    {/* 内容 */}
                    {content && (
                        <div className={clsx(
                            sizeConfig.contentSize,
                            "text-gray-600 dark:text-gray-300 leading-relaxed"
                        )}>
                            {content}
                        </div>
                    )}

                    {/* 自定义子元素 */}
                    {children && (
                        <div className="mt-3">
                            {children}
                        </div>
                    )}

                    {/* 操作按钮 */}
                    {actions && (
                        <div className="flex gap-2 mt-4">
                            {actions}
                        </div>
                    )}
                </div>
            </div>

            {/* 页脚 */}
            {footer && (
                <div className={clsx(
                    "mt-auto px-6 py-3 border-t border-gray-200 dark:border-gray-700",
                    "bg-gray-50 dark:bg-gray-800/50",
                    sizeConfig.borderRadius === "rounded-lg" && "rounded-b-lg",
                    sizeConfig.borderRadius === "rounded-xl" && "rounded-b-xl",
                    sizeConfig.borderRadius === "rounded-2xl" && "rounded-b-2xl"
                )}>
                    {footer}
                </div>
            )}
        </div>
    )
}

export default MyCard