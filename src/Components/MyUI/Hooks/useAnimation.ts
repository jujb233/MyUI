/**
 * useAnimation Hook
 * 简要：解析组件传入的 animation prop，生成适用于 Tailwind 的 class 字符串（支持 duration/delay/easing 等）
 * 返回：一个可直接用于元素 className 的字符串
 */
import { useMemo } from 'react'
import { type AnimationProp, type AnimationConfig, animationMap, easingValueMap } from '../../../Options/Animations/Animation'



/**
 * 一个解析动画属性并返回 Tailwind CSS 类名的 Hook。
 * @param animation - 来自组件 props 的动画配置。
 * @returns 返回一个包含动画相关类名的字符串。
 */
export const useAnimation = (animation?: AnimationProp): string => {
    // 计算并缓存 animation 对应的 Tailwind 类字符串
    const animationClasses = useMemo(() => {
        // 如果未传入 animation，则返回空字符串（没有动画）
        if (!animation) {
            return ''
        }

        // 支持字符串或对象两种写法，统一转换为配置对象
        const config: AnimationConfig =
            typeof animation === 'string' ? { type: animation } : animation

        const classes: string[] = []

        // 将语义化的动画 type 映射为具体的 class（例如 fade/slide -> 对应类名）
        if (config.type && animationMap[config.type]) {
            classes.push(animationMap[config.type])
        }

        // 支持任意值的 Tailwind arbitrary syntax 来设置持续时间与延迟
        if (config.duration) {
            classes.push(`[animation-duration:${config.duration}ms]`)
        }

        if (config.delay) {
            classes.push(`[animation-delay:${config.delay}ms]`)
        }

        // 将 easing（语义名）映射为具体的 timing-function
        if (config.easing) {
            const easing = easingValueMap[config.easing]
            if (easing) {
                classes.push(`[animation-timing-function:${easing}]`)
            }
        }

        // 返回以空格连接的 class 字符串，适合作为 element 的 className
        return classes.join(' ')
    }, [animation])

    return animationClasses
}
