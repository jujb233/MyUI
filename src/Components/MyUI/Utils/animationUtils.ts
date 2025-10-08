import type { AnimationProp, AnimationConfig } from '../../../Options/Animations/Animation'
import { animationMap, easingValueMap } from '../../../Options/Animations/Animation'

/** 将 AnimationProp 解析为 Tailwind 类字符串的纯函数（可被 useAnimation 使用） */
export function animationPropToClass(animation?: AnimationProp): string {
    if (!animation) return ''
    const config: AnimationConfig = typeof animation === 'string' ? { type: animation } : animation
    const classes: string[] = []
    if (config.type && animationMap[config.type]) classes.push(animationMap[config.type])
    if (config.duration) classes.push(`[animation-duration:${config.duration}ms]`)
    if (config.delay) classes.push(`[animation-delay:${config.delay}ms]`)
    if (config.easing) {
        const easing = easingValueMap[config.easing]
        if (easing) classes.push(`[animation-timing-function:${easing}]`)
    }
    return classes.join(' ')
}
