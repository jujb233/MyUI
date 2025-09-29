import { useMemo } from 'react';
import type { AnimationProp, AnimationConfig } from '../../../Options/Animations/Animation';

const animationMap: Record<string, string> = {
    fade: 'animate-fade',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'scale-in': 'animate-scale-in',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
};

// 将自定义的缓动关键字映射为 CSS 动画的 timing-function 值
const easingValueMap: Record<NonNullable<AnimationConfig['easing']>, string> = {
    linear: 'linear',
    in: 'ease-in',
    out: 'ease-out',
    'in-out': 'ease-in-out',
};

/**
 * 一个解析动画属性并返回 Tailwind CSS 类名的 Hook。
 * @param animation - 来自组件 props 的动画配置。
 * @returns 返回一个包含动画相关类名的字符串。
 */
export const useAnimation = (animation?: AnimationProp): string => {
    const animationClasses = useMemo(() => {
        if (!animation) {
            return '';
        }

        const config: AnimationConfig =
            typeof animation === 'string' ? { type: animation } : animation;

        const classes: string[] = [];

        // 映射动画类型
        if (config.type && animationMap[config.type]) {
            classes.push(animationMap[config.type]);
        }

        // 使用任意属性类映射动画持续时间与延迟（Tailwind v3+/v4 支持）
        if (config.duration) {
            classes.push(`[animation-duration:${config.duration}ms]`);
        }

        if (config.delay) {
            classes.push(`[animation-delay:${config.delay}ms]`);
        }

        // 映射动画缓动函数
        if (config.easing) {
            const easing = easingValueMap[config.easing];
            if (easing) {
                classes.push(`[animation-timing-function:${easing}]`);
            }
        }

        return classes.join(' ');
    }, [animation]);

    return animationClasses;
};
