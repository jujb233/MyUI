import clsx from 'clsx'
import type { AnimationProp, AnimationConfig } from '../Options/Animations/Animation'
import { animationMap, easingValueMap } from '../Options/Animations/Animation'
import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../Options/Interactions/interaction'
import { INTERACTION_PRESETS } from '../Options/Interactions/presets'
import type { InteractionPolicy } from '../Interfaces/behavior/interaction'


/**
 * className 建造者模式
 */
class ClassNameBuilder {
    private parts: Array<string | false | undefined | null> = [];

    add(...classes: Array<string | false | undefined | null>) {
        this.parts.push(...classes);
        return this;
    }

    addIf(condition: boolean, ...classes: Array<string | false | undefined | null>) {
        if (condition) {
            this.parts.push(...classes);
        }
        return this;
    }

    addAnimation(animation?: AnimationProp) {
        if (!animation) return this;
        const config: AnimationConfig = typeof animation === 'string' ? { type: animation } : animation;
        if (config.type && animationMap[config.type]) this.parts.push(animationMap[config.type]);
        if (config.duration) this.parts.push(`[animation-duration:${config.duration}ms]`);
        if (config.delay) this.parts.push(`[animation-delay:${config.delay}ms]`);
        if (config.easing) {
            const easing = easingValueMap[config.easing];
            if (easing) this.parts.push(`[animation-timing-function:${easing}]`);
        }
        return this;
    }

    addInteraction(interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS) {
        if (!interaction) return this;
        const policy: InteractionPolicy = typeof interaction === 'string' ? (INTERACTION_PRESETS as any)[interaction] ?? {} : interaction;
        this.parts.push(ClassNameBuilder.buildInteractionClasses(policy));
        return this;
    }

    static buildInteractionClasses(policy: InteractionPolicy = {}): string {
        const {
            enabled = true,
            behavior = DEFAULT_INTERACTION_BEHAVIOR,
            effects = DEFAULT_INTERACTION_EFFECTS,
            classes = {},
        } = policy;
        if (!enabled) return '';
        const interactionClasses: string[] = [];
        if (behavior.transition) {
            interactionClasses.push('transition-all duration-200 ease-in-out');
        }
        if (behavior.hover) {
            if (effects.scale?.hover) {
                interactionClasses.push(`hover:scale-[${String(effects.scale.hover)}]`);
            }
            if (effects.opacity?.hover) {
                const v = String(effects.opacity.hover);
                interactionClasses.push(`hover:opacity-[${v}]`);
            }
            if (classes.hover) {
                interactionClasses.push(classes.hover);
            }
        }
        if (behavior.focus) {
            interactionClasses.push(
                'focus:outline-none',
                'focus-visible:ring-2',
                'focus-visible:ring-offset-2',
                'focus-visible:ring-opacity-50'
            );
            if (classes.focus) {
                interactionClasses.push(classes.focus);
            }
        }
        if (behavior.active) {
            if (effects.scale?.active) {
                interactionClasses.push(`active:scale-[${String(effects.scale.active)}]`);
            }
            if (effects.opacity?.active) {
                const v = String(effects.opacity.active);
                interactionClasses.push(`active:opacity-[${v}]`);
            }
            if (classes.active) {
                interactionClasses.push(classes.active);
            }
        }
        if (behavior.disabled) {
            if (effects.scale?.disabled) {
                interactionClasses.push(`disabled:scale-[${String(effects.scale.disabled)}]`);
            }
            if (effects.opacity?.disabled) {
                const v = String(effects.opacity.disabled);
                interactionClasses.push(`disabled:opacity-[${v}]`);
            }
            interactionClasses.push('disabled:cursor-not-allowed');
            if (classes.disabled) {
                interactionClasses.push(classes.disabled);
            }
        }
        return interactionClasses.filter(Boolean).join(' ');
    }

    build() {
        return clsx(this.parts.filter(Boolean));
    }
}

export const styleUtil = {
    ClassNameBuilder,
    buildInteractionClasses: ClassNameBuilder.buildInteractionClasses,
};

export default styleUtil;
