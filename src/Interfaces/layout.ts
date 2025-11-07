/** 容器边框能力（容器类组件常用） */
export interface Borderable {
    bordered?: boolean
}

/** 可点击/可悬停能力（容器类组件常用） */
export interface Focusable {
    clickFocusable?: boolean
    hover?: boolean
}

/** 布局方向（卡片等） */
export interface OrientationProps {
    direction?: 'vertical' | 'horizontal'
}

/**
 * 描述与父容器的相对位置
 */
export interface PositionProps {
    /** 
     * 与父容器的上距离 (单位: rem)
     * @TJS-type integer
     * @minimum 0
     */
    top?: number
    /** 
     * 与父容器的左距离 (单位: rem)
     * @TJS-type integer
     * @minimum 0
     */
    left?: number
}

/**
 * 描述组件的尺寸
 */
export interface SizeProps {
    size?: 'small' | 'medium' | 'large'
}
