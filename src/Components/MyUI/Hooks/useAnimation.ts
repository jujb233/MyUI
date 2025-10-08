import { useMemo } from 'react'
import type { AnimationProp } from '../../../Options/Animations/Animation'
import { animationPropToClass } from '../Utils/animationUtils'



/**
 * 一个解析动画属性并返回 Tailwind CSS 类名的 Hook。
 * @param animation - 来自组件 props 的动画配置。
 * @returns 返回一个包含动画相关类名的字符串。
 */
export const useAnimation = (animation?: AnimationProp): string => {
    // 计算并缓存 animation 对应的 Tailwind 类字符串
    const animationClasses = useMemo(() => {
        // 如果未传入 animation，则返回空字符串（没有动画）
        return animationPropToClass(animation)
    }, [animation])

    return animationClasses
}
