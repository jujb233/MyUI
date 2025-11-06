// src/styles/config/animation.ts

export const animationMap = {
    'fade-in': 'animate-fade',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
};

export const easingValueMap = {
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'linear': 'linear',
};

export type AnimationType = keyof typeof animationMap;
export type EasingType = keyof typeof easingValueMap;

export interface AnimationConfig {
    type: AnimationType;
    duration?: number;
    delay?: number;
    easing?: EasingType;
}

export type AnimationProp = AnimationType | AnimationConfig;
