/**
 * @description 为容器类组件提供边框显示的能力。
 * @interface Borderable
 * @property {boolean} [bordered] - 如果为 `true`，则显示边框。
 */
export interface Borderable {
    bordered?: boolean
}

/**
 * @description 为容器类组件提供可聚焦和悬停的交互能力。
 * @interface Focusable
 * @property {boolean} [clickFocusable] - 如果为 `true`，点击时组件可聚焦。
 * @property {boolean} [hover] - 如果为 `true`，鼠标悬停时触发效果。
 */
export interface Focusable {
    clickFocusable?: boolean
    hover?: boolean
}

/**
 * @description 定义组件内部元素的布局方向。
 * @interface OrientationProps
 * @property {'vertical' | 'horizontal'} [direction] - 布局方向。
 */
export interface OrientationProps {
    direction?: 'vertical' | 'horizontal'
}

/**
 * @description 描述组件相对于其父容器的位置。
 * @interface PositionProps
 * @property {number} [top] - 与父容器的上边距，单位为 `rem`。
 * @property {number} [left] - 与父容器的左边距，单位为 `rem`。
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
 * @description 描述组件的尺寸。
 * @interface SizeProps
 * @property {'small' | 'medium' | 'large'} [size] - 组件的尺寸。
 */
export interface SizeProps {
    size?: 'small' | 'medium' | 'large'
}
