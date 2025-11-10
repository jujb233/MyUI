import clsx from "clsx"
import type { AnimationConfig, InteractionPolicy } from "../../Interfaces"
import {
    AnimationProp,
    animationMap,
    easingValueMap,
    INTERACTION_PRESETS,
    DEFAULT_INTERACTION_BEHAVIOR,
    DEFAULT_INTERACTION_EFFECTS
} from "@/Design"


type ClassType = string | false | undefined | null | Array<string | false | undefined | null>

/**
 * className 建造者模式
 * 用于链式构建和拼接 className 字符串，支持条件、动画、交互等扩展
 */
class ClassNameBuilder {
    private cssParts: Array<string | false | undefined | null> = []

    add(...classes: Array<string | false | undefined | null>): ClassNameBuilder
    add(condition: boolean, trueClasses: ClassType, falseClasses?: ClassType): ClassNameBuilder
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

    addAnimation(animation?: AnimationProp): ClassNameBuilder {
        if (!animation) return this
        const config: AnimationConfig = typeof animation === 'string' ? { type: animation } : animation
        if (config.type) {
            const key = config.type as keyof typeof animationMap
            const val = (animationMap as Record<string, string>)[key as string]
            if (val) this.cssParts.push(val)
        }
        if (config.duration) this.cssParts.push(`duration-${config.duration}`)
        if (config.delay) this.cssParts.push(`delay-${config.delay}`)
        if (config.easing) {
            const easingKey = config.easing as keyof typeof easingValueMap
            const easing = (easingValueMap as Record<string, string>)[easingKey as string]
            if (easing) this.cssParts.push(`ease-${easing}`)
        }
        return this
    }

    addInteraction(interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS): ClassNameBuilder {
        if (!interaction) return this
        const policy: InteractionPolicy = typeof interaction === 'string' ? ((INTERACTION_PRESETS as unknown as Record<string, InteractionPolicy>)[interaction] ?? {}) : interaction
        this.cssParts.push(ClassNameBuilder.buildInteractionClasses(policy))
        return this
    }

    static buildInteractionClasses(policy: InteractionPolicy = {}): string {
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
                interactionClasses.push(`hover:scale-${parseFloat(String(effects.scale.hover)) * 100}`)
            }
            if (effects.opacity?.hover) {
                interactionClasses.push(`hover:opacity-${parseFloat(String(effects.opacity.hover)) * 100}`)
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
                interactionClasses.push(`active:scale-${parseFloat(String(effects.scale.active)) * 100}`)
            }
            if (effects.opacity?.active) {
                interactionClasses.push(`active:opacity-${parseFloat(String(effects.opacity.active)) * 100}`)
            }
            if (classes.active) {
                interactionClasses.push(classes.active)
            }
        }
        if (behavior.disabled) {
            if (effects.scale?.disabled) {
                interactionClasses.push(`disabled:scale-${parseFloat(String(effects.scale.disabled)) * 100}`)
            }
            if (effects.opacity?.disabled) {
                interactionClasses.push(`disabled:opacity-${parseFloat(String(effects.opacity.disabled)) * 100}`)
            }
            interactionClasses.push('disabled:cursor-not-allowed')
            if (classes.disabled) {
                interactionClasses.push(classes.disabled)
            }
        }
        return interactionClasses.filter(Boolean).join(' ')
    }

    build(): string {
        return clsx(this.cssParts.filter(Boolean))
    }
}

export const styleBuilder = {
    builder: () => new ClassNameBuilder(),
}

export default styleBuilder