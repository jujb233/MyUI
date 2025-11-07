import type { ComponentVariant, SizeName, ShadowName } from "../../Interfaces/core/types";
import styleBuilder from "../../Utils/styleBuilder";
import { useCardLayout } from "../../Hooks/useCardLayout";
import type { AnimationProp } from "../../styles/config/animation";
import { createBaseStyle } from "../../Utils/styleFactory";
import clsx from "clsx";
import type { PositionProps } from "../../Interfaces";
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction";
import type { JSX } from "solid-js";
import { COMMON_CLASSES } from "../../Options/Configs/classConfig";
import { SLOTS_STYLE } from "../../Options/Configs/componentSlots";

// 类型声明移到顶部
export interface UseMyCardProps extends PositionProps {
    variant?: ComponentVariant | undefined;
    size?: SizeName;
    glass?: boolean;
    clickable?: boolean;
    className?: string;
    bordered?: boolean;
    shadow?: ShadowName;
    imagePosition?: "top" | "left" | "right" | "background" | "bottom" | "center";
    direction?: "vertical" | "horizontal";
    hover?: boolean;
    hasImage?: boolean;
    disabled?: boolean;
    animation?: AnimationProp;
}

export function useMyCard(props: UseMyCardProps) {
    // 解构 props 并提供合理默认值
    const {
        variant: variantProp,
        size = "medium",
        glass = true,
        clickable = false,
        className = "",
        bordered = true,
        shadow = "md",
        imagePosition = "top",
        direction = "vertical",
        hover = true,
        hasImage = false,
        disabled = false,
        animation,
    } = props;

    // 解析 variant -> role/color，并从预设中取到实际的 variant 配置
    const role = variantProp?.role || 'primary';
    const color = variantProp?.color || 'blue';
    // intensity not needed here because factory handles variant intensity mapping

    // 尺寸相关配置（由工厂返回）

    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage });

    const interactionPolicy: InteractionPolicy | undefined = (hover || clickable)
        ? { enabled: true, behavior: { hover: !!hover, focus: false, active: false, disabled: false, transition: true } }
        : undefined;

    // 使用共享工厂创建基础 builder，再补充 card 特有类
    const { builder, sizeConfig } = createBaseStyle({
        variant: { role, color },
        size,
        glass,
        shadow,
        className,
        disabled,
        animation,
        interaction: interactionPolicy,
    });

    const containerClasses = builder
        .add(COMMON_CLASSES.RELATIVE_OVERFLOW_HIDDEN, COMMON_CLASSES.ROUNDED_2XL)
        .add(direction === 'horizontal', 'flex flex-row')
        .add(direction === 'vertical', 'flex flex-col')
        .add(clickable, COMMON_CLASSES.CURSOR_POINTER)
        .add(bordered, COMMON_CLASSES.BORDER)
        .build();

    // 位置样式（单位 rem）
    const containerStyle: JSX.CSSProperties | undefined =
        props.top !== undefined || props.left !== undefined
            ? {
                ...(props.top !== undefined ? { top: `${Math.max(0, props.top)}rem` } : {}),
                ...(props.left !== undefined ? { left: `${Math.max(0, props.left)}rem` } : {}),
            }
            : undefined;

    const bodyClasses = styleBuilder.builder()
        .add(sizeConfig.padding, sizeConfig.spacing)
        .add(isHorizontal, 'flex-1')
        .add(imagePosition === 'background', 'relative z-10')
        .build();

    // Sub-component classes
    const imageClasses = clsx(
        "object-cover",
        imagePosition === "top" && "w-full h-48",
        imagePosition === "left" && "w-32 h-full",
        imagePosition === "right" && "w-32 h-full",
        imagePosition === "background" && "absolute inset-0 h-full w-full object-cover opacity-10",
        sizeConfig.borderRadius
    );

    const headerClasses = clsx(SLOTS_STYLE.cardHeaderBase, SLOTS_STYLE.header);
    const titleClasses = clsx(SLOTS_STYLE.title, sizeConfig.titleSize);
    const contentClasses = clsx(
        SLOTS_STYLE.textMuted,
        sizeConfig.contentSize,
        isHorizontal ? 'flex-1 min-w-0' : ''
    );
    const footerClasses = clsx(
        SLOTS_STYLE.cardFooterBase,
        sizeConfig.borderRadius.replace('rounded-', 'rounded-b-'),
        isHorizontal ? 'w-full' : ''
    );
    const actionsClasses = SLOTS_STYLE.actions;
    const tagsContainerClasses = SLOTS_STYLE.tagsContainer;
    const tagClasses = SLOTS_STYLE.tag;


    // 返回对组件渲染有用的值与别名（移除 style 相关）
    return {
        size,
        sizeConfig,
        containerClasses,
        containerStyle,
        bodyClasses,
        isHorizontal,
        imagePosition,
        // sub-component classes
        imageClasses,
        headerClasses,
        titleClasses,
        contentClasses,
        footerClasses,
        actionsClasses,
        tagsContainerClasses,
        tagClasses,
    };
}
