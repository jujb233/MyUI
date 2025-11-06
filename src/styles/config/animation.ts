// src/styles/config/animation.ts

export const animationMap = {
    'fade-in': 'animate-fade',
    'fade': 'animate-fade',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
    'pulse': 'animate-pulse',
    'spin': 'animate-spin',
};

export const easingValueMap = {
    'linear': 'linear',
    'in': 'ease-in',
    'out': 'ease-out',
    'in-out': 'ease-in-out',
};

export type AnimationType = keyof typeof animationMap;
export type EasingType = keyof typeof easingValueMap;

/**
 * 动画的详细配置对象。
 */
export interface AnimationConfig {
    /** 动画类型 */
    type: AnimationType;
    /** 持续时间 (ms)。若不指定，则使用默认值。 */
    duration?: number;
    /** 延迟时间 (ms)。 */
    delay?: number;
    /** 缓动函数。 */
    easing?: 'linear' | 'in' | 'out' | 'in-out';
}

export type AnimationProp = AnimationType | AnimationConfig;
