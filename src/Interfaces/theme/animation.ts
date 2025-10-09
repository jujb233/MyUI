/**
 * Theme - animation
 * 简要：定义动画配置与动画相关的类型接口，用于主题系统中的动画预设。
 */

import type { AnimationProp } from '../../Options'

/**
 * 为组件提供动画能力的接口。
 */
export interface AnimationProps {
    /**
     * 控制组件的动画效果。
     *
     * - **字符串形式**: 直接指定一个预设的动画名称。
     *   @example `animation="fade"`
     *
     * - **对象形式**: 提供更详细的动画配置，如持续时间、延迟等。
     *   @example `animation={{ type: 'slide-up', duration: 500, delay: 100 }}`
     */
    animation?: AnimationProp
}
