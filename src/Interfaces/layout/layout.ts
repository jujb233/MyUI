/**
 * Layout - layout 类型
 * 简要：定义通用布局的接口、插槽与布局配置类型。
 */

/** 布局方向（卡片等） */
export interface OrientationProps {
    direction?: 'vertical' | 'horizontal'
}

/** 媒体放置位置（卡片/媒体类） */
export interface MediaPlacementProps {
    imagePosition?: 'top' | 'left' | 'right' | 'background'
}
