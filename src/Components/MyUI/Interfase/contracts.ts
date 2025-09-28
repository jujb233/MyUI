import type * as React from 'react';
import type {
    ComponentVariant,
    SizeName,
    ShadowName,
} from '../../../Options';

/**
 * 主题与尺寸（所有主题相关组件可选实现）
 */
export interface ThemeableProps {
    /** { role, color }，role 经 VARIANT_ROLE_STYLES 映射到 intensity */
    variant?: ComponentVariant;
    /** 'small' | 'medium' | 'large' */
    size?: SizeName;
    /** 是否启用玻璃态（默认值由组件内部决定，通常为 true） */
    glass?: boolean;
    /** 阴影等级（默认值由组件内部决定） */
    shadow?: ShadowName;
}

/** 样式与通用 DOM 属性 */
export interface StylableProps {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}

/** 可禁用能力（交互组件或可点击容器） */
export interface DisableableProps {
    disabled?: boolean;
}

/** 容器边框能力（容器类组件常用） */
export interface BorderableProps {
    bordered?: boolean;
}

/** 可点击/可悬停能力（容器类组件常用） */
export interface ClickableProps {
    /** 设为 true 时需统一 A11y（role='button'、tabIndex 等） */
    clickable?: boolean;
    /** 是否允许 hover 反馈（默认通常为 true） */
    hoverable?: boolean;
}

/** 布局方向（卡片等） */
export interface OrientationProps {
    direction?: 'vertical' | 'horizontal';
}

/** 媒体放置位置（卡片/媒体类） */
export interface MediaPlacementProps {
    imagePosition?: 'top' | 'left' | 'right' | 'background';
}

/** 常用插槽：前置图标 */
export interface WithIconProps {
    icon?: React.ReactNode;
}

/** 常用插槽：末尾操作区 */
export interface WithActionsProps {
    actions?: React.ReactNode;
}

/** 常用插槽：标题（统一使用 ReactNode 以兼容 string/元素） */
export interface WithTitleProps {
    title?: React.ReactNode;
}

/** 常用插槽：页脚/尾部 */
export interface WithFooterProps {
    footer?: React.ReactNode;
}

/** 背景图能力（Panel 等） */
export interface WithBackgroundImageProps {
    backgroundImage?: string;
}

/** 按压/点击类事件（按钮、可点击容器） */
export interface PressableProps<T extends HTMLElement = HTMLElement> {
    onClick?: React.MouseEventHandler<T>;
}

/**
 * 统一的交互种类，用于 buildInteractionClasses 等工具
 */
export type InteractionKind = 'button' | 'card' | 'panel' | 'nav';

/**
 * Context 约定：各组件 Context 至少提供这些主题字段（可扩展组件自有字段）
 */
export interface ThemeContextValue {
    variant?: ComponentVariant;
    size: SizeName;
    glass: boolean;
    shadow: ShadowName;
    disabled?: boolean;
    // ...component-specific
}

/**
 * Hook 返回值约定（基础）：统一命名 rootStyle/rootClasses
 */
export interface UseComponentBaseResult {
    rootStyle: React.CSSProperties;
    rootClasses: string;
}

/** 按钮专有：htmlType */
export interface HtmlTypeProp {
    htmlType?: 'button' | 'submit' | 'reset';
}

/**
 * 可选：多态 as 支持（需要时为交互组件提供）
 */
export type AsComponent<E extends React.ElementType> = {
    as?: E;
};

export type PolymorphicComponentProps<E extends React.ElementType, P> =
    P &
    AsComponent<E> &
    Omit<React.ComponentPropsWithRef<E>, keyof P | 'as'>;
