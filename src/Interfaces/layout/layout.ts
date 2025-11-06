/**
 * Layout - layout 类型
 * 简要：定义通用布局的接口、插槽与布局配置类型。
 */

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
    top?: number;
    /** 
     * 与父容器的左距离 (单位: rem)
     * @TJS-type integer
     * @minimum 0
     */
    left?: number;
}


