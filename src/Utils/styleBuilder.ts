import clsx from 'clsx'

import type { AnimationProp, AnimationConfig } from '../Options/Animations/Animation'
import { animationMap, easingValueMap } from '../Options/Animations/Animation'

import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../Options/Interactions/interaction'
import { INTERACTION_PRESETS } from '../Options/Presets/interactionPresets'
import type { InteractionPolicy } from '../Interfaces/behavior/interaction'

type ClassType = string | false | undefined | null | Array<string | false | undefined | null>

/**
 * className 建造者模式
 * 用于链式构建和拼接 className 字符串，支持条件、动画、交互等扩展
 */
class ClassNameBuilder {
    // 存储所有 className 片段
    private cssParts: Array<string | false | undefined | null> = []



    /**
     * 添加 className 片段，支持条件添加和普通添加的重载
     *
     * 普通用法：
     *   add('a', 'b', condition && 'c')
     *
     * 条件用法：
     *   add(condition, 'class-if-true', 'class-if-false')
     *   add(condition, ['classes-if-true'], ['classes-if-false'])
     *
     * @param {...(string | false | undefined | null)[]} classes - 需要添加的 className 片段
     * @returns {ClassNameBuilder} 返回当前实例以支持链式调用
     */
    add(...classes: Array<string | false | undefined | null>): ClassNameBuilder
    /**
     * 条件添加 className 片段
     * @param {boolean} condition - 条件判断
     * @param {ClassType} trueClasses - condition 为 true 时添加的 className (可以是字符串或字符串数组)
     * @param {ClassType} [falseClasses] - condition 为 false 时添加的 className (可以是字符串或字符串数组)
     * @returns {ClassNameBuilder} 返回当前实例以支持链式调用
     */
    add(condition: boolean, trueClasses: ClassType, falseClasses?: ClassType): ClassNameBuilder

    /**
     * 实现 add 方法重载逻辑
     * @private
     */
    add(...args: any[]): ClassNameBuilder {
        if (typeof args[0] === 'boolean') {
            const [condition, trueClasses, falseClasses] = args
            const classesToAdd = condition ? trueClasses : falseClasses
            if (classesToAdd) {
                if (Array.isArray(classesToAdd)) {
                    this.cssParts.push(...classesToAdd)
                } else {
                    this.cssParts.push(classesToAdd)
                }
            }
        } else {
            this.cssParts.push(...args)
        }
        return this
    }


    /**
     * 添加动画相关 className
     * @param {AnimationProp} [animation] - 动画配置，可以为字符串类型动画名或动画配置对象
     * @returns {ClassNameBuilder} 返回当前实例以支持链式调用
     */
    addAnimation(animation?: AnimationProp): ClassNameBuilder {
        if (!animation) return this
        const config: AnimationConfig = typeof animation === 'string' ? { type: animation } : animation
        if (config.type && animationMap[config.type]) this.cssParts.push(animationMap[config.type])
        if (config.duration) this.cssParts.push(`[animation-duration:${config.duration}ms]`)
        if (config.delay) this.cssParts.push(`[animation-delay:${config.delay}ms]`)
        if (config.easing) {
            const easing = easingValueMap[config.easing]
            if (easing) this.cssParts.push(`[animation-timing-function:${easing}]`)
        }
        return this
    }


    /**
     * 添加交互相关 className
     * @param {InteractionPolicy | keyof typeof INTERACTION_PRESETS} [interaction] - 交互策略对象或预设名
     * @returns {ClassNameBuilder} 返回当前实例以支持链式调用
     */
    addInteraction(interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS): ClassNameBuilder {
        if (!interaction) return this
        const policy: InteractionPolicy = typeof interaction === 'string' ? (INTERACTION_PRESETS as any)[interaction] ?? {} : interaction
        this.cssParts.push(ClassNameBuilder.#buildInteractionClasses(policy))
        return this
    }


    /**
     * 静态方法：根据交互策略生成交互相关 className 字符串
     * @param {InteractionPolicy} [policy] - 交互策略对象，包含 enabled、behavior、effects、classes 等属性
     * @returns {string} 交互相关的 className 字符串
     */
    static #buildInteractionClasses(policy: InteractionPolicy = {}): string {
        const {
            enabled = true,
            behavior = DEFAULT_INTERACTION_BEHAVIOR,
            effects = DEFAULT_INTERACTION_EFFECTS,
            classes = {},
        } = policy
        if (!enabled) return ''
        const interactionClasses: string[] = []
        // 过渡动画
        if (behavior.transition) {
            interactionClasses.push('transition-all duration-200 ease-in-out')
        }
        // hover 效果
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
        // focus 效果
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
        // active 效果
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
        // disabled 效果
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
     * 构建最终 className 字符串
     * @returns {string} 拼接后的 className 字符串，已自动过滤无效项
     */
    build(): string {
        return clsx(this.cssParts.filter(Boolean))
    }
}


// styleUtil 工具导出
export const styleUtil = {
    ClassNameBuilder,
}

export default styleUtil
