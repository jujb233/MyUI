import clsx from 'clsx';
import { animationMap, easingValueMap } from '../styles/config/animation';
import type { AnimationProp, AnimationConfig } from '../styles/config/animation';
import { INTERACTION_PRESETS } from '../styles/config/interaction';
import type { InteractionPolicy } from '../styles/config/interaction';
import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../styles/config/interaction';

type ClassType = string | false | undefined | null | Array<string | false | undefined | null>;

/**
 * className 建造者模式
 * 用于链式构建和拼接 className 字符串，支持条件、动画、交互等扩展
 */
class ClassNameBuilder {
    private cssParts: Array<string | false | undefined | null> = [];

    add(...classes: Array<string | false | undefined | null>): ClassNameBuilder;
    add(condition: boolean, trueClasses: ClassType, falseClasses?: ClassType): ClassNameBuilder;
    add(...args: any[]): ClassNameBuilder {
        if (typeof args[0] === 'boolean') {
            const [condition, trueClasses, falseClasses] = args;
            const classesToAdd = condition ? trueClasses : falseClasses;
            if (classesToAdd) {
                if (Array.isArray(classesToAdd)) {
                    this.cssParts.push(...classesToAdd);
                } else {
                    this.cssParts.push(classesToAdd);
                }
            }
        } else {
            this.cssParts.push(...args);
        }
        return this;
    }

    addAnimation(animation?: AnimationProp): ClassNameBuilder {
        if (!animation) return this;
        const config: AnimationConfig = typeof animation === 'string' ? { type: animation } : animation;
        if (config.type && animationMap[config.type]) this.cssParts.push(animationMap[config.type]);
        if (config.duration) this.cssParts.push(`duration-${config.duration}`);
        if (config.delay) this.cssParts.push(`delay-${config.delay}`);
        if (config.easing) {
            const easing = easingValueMap[config.easing];
            if (easing) this.cssParts.push(`ease-${easing}`);
        }
        return this;
    }

    addInteraction(interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS): ClassNameBuilder {
        if (!interaction) return this;
        const policy: InteractionPolicy = typeof interaction === 'string' ? (INTERACTION_PRESETS as any)[interaction] ?? {} : interaction;
        this.cssParts.push(ClassNameBuilder.buildInteractionClasses(policy));
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
                interactionClasses.push(`hover:scale-${effects.scale.hover * 100}`);
            }
            if (effects.opacity?.hover) {
                interactionClasses.push(`hover:opacity-${effects.opacity.hover * 100}`);
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
                interactionClasses.push(`active:scale-${effects.scale.active * 100}`);
            }
            if (effects.opacity?.active) {
                interactionClasses.push(`active:opacity-${effects.opacity.active * 100}`);
            }
            if (classes.active) {
                interactionClasses.push(classes.active);
            }
        }
        if (behavior.disabled) {
            if (effects.scale?.disabled) {
                interactionClasses.push(`disabled:scale-${effects.scale.disabled * 100}`);
            }
            if (effects.opacity?.disabled) {
                interactionClasses.push(`disabled:opacity-${effects.opacity.disabled * 100}`);
            }
            interactionClasses.push('disabled:cursor-not-allowed');
            if (classes.disabled) {
                interactionClasses.push(classes.disabled);
            }
        }
        return interactionClasses.filter(Boolean).join(' ');
    }

    build(): string {
        return clsx(this.cssParts.filter(Boolean));
    }
}

export const styleBuilder = {
    builder: () => new ClassNameBuilder(),
};

export default styleBuilder;