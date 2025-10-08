import clsx from 'clsx'
import type { AnimationProp, AnimationConfig } from '../../../Options/Animations/Animation'
import { animationMap, easingValueMap } from '../../../Options/Animations/Animation'
import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../../../Options/Interactions/interaction'
import { INTERACTION_PRESETS } from '../../../Options/Interactions/presets'
import type { InteractionPolicy } from '../Interfaces/behavior/interaction'

/**
 * 一个工厂式的样式构建工具，集中处理动画、交互、以及 className 合并逻辑。
 * 使用工厂可以在未来注入配置或替换默认行为。
 */
export function createStyleUtil() {
    /** 将 AnimationProp 解析为 Tailwind 类字符串 */
    function animationPropToClass(animation?: AnimationProp): string {
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

    /** 合并 className 的小工具（基于 clsx） */
    function mergeClasses(...parts: Array<string | false | undefined | null>) {
        return clsx(parts.filter(Boolean))
    }

    /**
     * 构建交互类名（与原 useInteraction 中的逻辑保持一致）
     */
    function buildInteractionClasses(policy: InteractionPolicy = {}): string {
        const {
            enabled = true,
            behavior = DEFAULT_INTERACTION_BEHAVIOR,
            effects = DEFAULT_INTERACTION_EFFECTS,
            classes = {},
        } = policy

        if (!enabled) return ''

        const interactionClasses: string[] = []

        if (behavior.transition) {
            interactionClasses.push('transition-all duration-200 ease-in-out')
        }

        if (behavior.hover) {
            if (effects.scale?.hover) {
                interactionClasses.push(`hover:scale-[${String(effects.scale.hover)}]`)
            }
            if (effects.opacity?.hover) {
                const v = String(effects.opacity.hover)
                interactionClasses.push(`hover:opacity-[${v}]`)
            }
            if (classes.hover) {
                interactionClasses.push(classes.hover)
            }
        }

        if (behavior.focus) {
            interactionClasses.push(
                'focus:outline-none',
                'focus-visible:ring-2',
                'focus-visible:ring-offset-2',
                'focus-visible:ring-opacity-50'
            )
            if (classes.focus) {
                interactionClasses.push(classes.focus)
            }
        }

        if (behavior.active) {
            if (effects.scale?.active) {
                interactionClasses.push(`active:scale-[${String(effects.scale.active)}]`)
            }
            if (effects.opacity?.active) {
                const v = String(effects.opacity.active)
                interactionClasses.push(`active:opacity-[${v}]`)
            }
            if (classes.active) {
                interactionClasses.push(classes.active)
            }
        }

        if (behavior.disabled) {
            if (effects.scale?.disabled) {
                interactionClasses.push(`disabled:scale-[${String(effects.scale.disabled)}]`)
            }
            if (effects.opacity?.disabled) {
                const v = String(effects.opacity.disabled)
                interactionClasses.push(`disabled:opacity-[${v}]`)
            }
            interactionClasses.push('disabled:cursor-not-allowed')
            if (classes.disabled) {
                interactionClasses.push(classes.disabled)
            }
        }

        return interactionClasses.filter(Boolean).join(' ')
    }

    /**
     * 将组件层传入的 interaction（可能是 key 或对象）规范化为 InteractionPolicy 再构建 class
     */
    function buildInteractionClassesFromProp(interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS): string {
        if (!interaction) return ''
        const policy: InteractionPolicy = typeof interaction === 'string' ? (INTERACTION_PRESETS as any)[interaction] ?? {} : interaction
        return buildInteractionClasses(policy)
    }

    /**
     * 一个方便的方法，将 animation / interaction / 自定义类合并为最终 className
     */
    function buildCombinedClasses(options: {
        animation?: AnimationProp
        interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS
        className?: string
        extra?: string
    }) {
        const { animation, interaction, className, extra } = options
        const parts: string[] = []
        const a = animationPropToClass(animation)
        if (a) parts.push(a)
        const i = buildInteractionClassesFromProp(interaction)
        if (i) parts.push(i)
        if (className) parts.push(className)
        if (extra) parts.push(extra)
        return mergeClasses(parts.join(' '))
    }

    return {
        animationPropToClass,
        mergeClasses,
        buildHookInteractionClasses: buildInteractionClasses,
        buildInteractionClassesFromProp,
        buildCombinedClasses,
    }
}

// 默认单例，方便直接导入使用
export const styleUtil = createStyleUtil()

export default styleUtil
