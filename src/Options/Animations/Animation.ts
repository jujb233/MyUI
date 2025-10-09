/**
 * 预设的动画效果类型。
 * 这些名称可以映射到 Tailwind CSS 的动画类或自定义动画。
 * - `fade`: 淡入效果
 * - `slide-up`: 从下往上滑动进入
 * - `slide-down`: 从上往下滑动进入
 * - `scale-in`: 放大进入
 * - `pulse`: 脉冲动画，用于吸引注意力
 * - `spin`: 旋转动画
 */
export type AnimationType =
    | 'fade'
    | 'slide-up'
    | 'slide-down'
    | 'scale-in'
    | 'pulse'
    | 'spin'

/**
 * 动画的详细配置对象。
 */
export interface AnimationConfig {
    /** 动画类型 */
    type: AnimationType
    /** 
     * 持续时间 (ms)。若不指定，则使用默认值。
     * 可以映射到 Tailwind 的 `duration-[...]` 类。
     */
    duration?: number
    /** 
     * 延迟时间 (ms)。
     * 可以映射到 Tailwind 的 `delay-[...]` 类。
     */
    delay?: number
    /** 
     * 缓动函数。
     * 可以映射到 Tailwind 的 `ease-[...]` 类。
     */
    easing?: 'linear' | 'in' | 'out' | 'in-out'
}

/**
 * 组件的动画属性。
 * - 可以是简单的动画类型字符串。
 * - 也可以是详细的动画配置对象。
 */
export type AnimationProp = AnimationType | AnimationConfig

export const animationMap: Record<string, string> = {
    fade: 'animate-fade',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
}

// 将自定义的缓动关键字映射为 CSS 动画的 timing-function 值
export const easingValueMap: Record<NonNullable<AnimationConfig['easing']>, string> = {
    linear: 'linear',
    in: 'ease-in',
    out: 'ease-out',
    'in-out': 'ease-in-out',
}
