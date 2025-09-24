import React from "react";
import clsx from "clsx";
import {
    CARD_SIZE_CONFIG,
    useComponentTheme,
    buildInteractionClasses,
    type VariantName,
    type ColorPresetName,
    type CardSizeName,
    type ShadowName,
} from "../../Styles";

/**
 * MyCard 组件的属性
 */
export type MyCardProps = {
    /** 卡片标题 */
    title?: React.ReactNode;
    /** 卡片内容 */
    content?: React.ReactNode;
    /** 卡片图片 URL */
    image?: string;
    /** 图片替代文本 */
    imageAlt?: string;
    /** 页脚内容 */
    footer?: React.ReactNode;
    /** 操作区域 */
    actions?: React.ReactNode;
    /** 标签 */
    tags?: React.ReactNode[];
    /**
     * 主题变体
     * @default "normal"
     */
    variant?: VariantName;
    /**
     * 颜色预设或自定义十六进制颜色
     * @default 根据 variant 决定
     */
    color?: ColorPresetName | string;
    /**
     * 尺寸
     * @default "medium"
     */
    size?: CardSizeName;
    /**
     * 是否启用玻璃态效果
     * @default true
     */
    glass?: boolean;
    /**

     * 是否可点击
     * @default false
     */
    clickable?: boolean;
    /** 点击事件 */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** 自定义样式类 */
    className?: string;
    /**
     * 是否显示边框
     * @default true
     */
    bordered?: boolean;
    /**
     * 阴影等级
     * @default "md"
     */
    shadow?: ShadowName;
    /**
     * 图片位置
     * @default "top"
     */
    imagePosition?: "top" | "left" | "right" | "background";
    /**
     * 内容布局方向
     * @default "vertical"
     */
    direction?: "vertical" | "horizontal";
    /**
     * 是否启用悬停效果
     * @default true
     */
    hoverable?: boolean;
    /** 子元素，会覆盖 content */
    children?: React.ReactNode;
};

// 子组件拆分：提升可维护性与测试性
const CardContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => (
    <div className={clsx(className)} {...rest} />
);

const CardBody: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => (
    <div className={clsx(className)}>{children}</div>
);

const CardImage: React.FC<{
    src: string;
    alt: string;
    position: "top" | "left" | "right" | "background";
    size: CardSizeName;
}> = ({ src, alt, position, size }) => {
    const sizeConfig = CARD_SIZE_CONFIG[size];

    if (position === "background") {
        return (
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${src})` }}
            />
        );
    }

    const imageClasses = clsx(
        "object-cover",
        position === "top" && "w-full h-48",
        position === "left" && "w-32 h-full",
        position === "right" && "w-32 h-full",
        sizeConfig.borderRadius
    );

    return <img src={src} alt={alt} className={imageClasses} />;
};

const CardTags: React.FC<{ tags: React.ReactNode[] }> = ({ tags }) => (
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
);


/**
 * MyCard - 一个多功能、主题化的卡片组件。
 *
 * 支持丰富的布局选项、图片集成、玻璃态效果，并与新的样式系统完全集成。
 */
function MyCard({
    title,
    content,
    image,
    imageAlt = "",
    footer,
    actions,
    tags,
    variant = "normal",
    color,
    size = "medium",
    glass = true,
    clickable = false,
    onClick,
    className = "",
    bordered = true,
    shadow = "md",
    imagePosition = "top",
    direction = "vertical",
    hoverable = true,
    children,
}: MyCardProps) {
    // 1. 尺寸配置
    const sizeConfig = CARD_SIZE_CONFIG[size];
    // 2. 主题（card 模式）与投影
    const { style: themedStyle, theme } = useComponentTheme({ variant, color, glass, shadow, isCard: true, elevationKind: 'card' });
    // 3. 内联样式
    const cardStyle: React.CSSProperties = {
        ...themedStyle,
        border: bordered ? `1px solid ${theme["--border"]}` : 'none',
    };

    const hasImage = image && image.trim() !== "";
    const isHorizontal = direction === "horizontal" && hasImage && imagePosition !== "top";

    return (
        <CardContainer
            className={clsx(
                isHorizontal ? 'flex' : 'flex flex-col',
                imagePosition === 'right' && isHorizontal && 'flex-row-reverse',
                sizeConfig.borderRadius,
                sizeConfig.minHeight,
                'relative overflow-hidden transition-all duration-300 ease-out',
                '[background:var(--bg)] hover:[background:var(--bg-hover)] text-[var(--text)] border border-[var(--border)]',
                (hoverable || clickable) && buildInteractionClasses({ kind: 'card', enabled: true }),
                clickable && 'cursor-pointer',
                glass && 'backdrop-blur-md',
                className
            )}
            style={cardStyle}
            onClick={onClick}
            role={clickable ? 'button' : undefined}
            tabIndex={clickable ? 0 : undefined}
        >
            {hasImage && imagePosition === "background" && (
                <CardImage src={image} alt={imageAlt} position="background" size={size} />
            )}
            {hasImage && imagePosition === "top" && !isHorizontal && (
                <div className="mb-4">
                    <CardImage src={image} alt={imageAlt} position="top" size={size} />
                </div>
            )}
            {hasImage && isHorizontal && (
                <div className="flex-shrink-0">
                    <CardImage src={image} alt={imageAlt} position={imagePosition} size={size} />
                </div>
            )}

            <CardBody
                className={clsx(
                    'card-content-area',
                    sizeConfig.padding,
                    sizeConfig.spacing,
                    { 'flex-1': isHorizontal, 'relative z-10': imagePosition === 'background' }
                )}
            >
                {tags && tags.length > 0 && <CardTags tags={tags} />}
                {title && (
                    <h3 className={clsx('font-bold text-[var(--text)]', sizeConfig.titleSize)}>{title}</h3>
                )}
                {content && !children && (
                    <div className={clsx('text-[var(--text)]/85', sizeConfig.contentSize)}>{content}</div>
                )}
                {children && <div className="mt-3">{children}</div>}
                {actions && <div className="flex gap-2 mt-4">{actions}</div>}
            </CardBody>

            {footer && (
                <div className={clsx("card-footer", sizeConfig.borderRadius.replace('rounded-', 'rounded-b-'))}>
                    {footer}
                </div>
            )}
        </CardContainer>
    );
}

export default MyCard;