import type { InteractionBehavior, InteractionConfig, InteractionPolicy } from "../Interfaces/behavior/interaction";

/**
 * 默认交互行为配置
 */
export const DEFAULT_INTERACTION_BEHAVIOR: InteractionBehavior = {
  hover: true,
  focus: true,
  active: true,
  transition: true,
  disabled: true,
};

/**
 * 默认交互效果配置
 */
export const DEFAULT_INTERACTION_EFFECTS: InteractionConfig = {
  scale: {
    hover: 1.02,
    active: 0.98,
    disabled: 1,
  },
  opacity: {
    hover: 0.9,
    active: 0.8,
    disabled: 0.6,
  },
};

/**
 * 构建交互类名
 */
export function buildHookInteractionClasses(policy: InteractionPolicy = {}): string {
  const {
    enabled = true,
    behavior = DEFAULT_INTERACTION_BEHAVIOR,
    effects = DEFAULT_INTERACTION_EFFECTS,
    classes = {},
  } = policy;

  if (!enabled) return '';

  const interactionClasses: string[] = [];

  // 基础交互行为
  if (behavior.transition) {
    interactionClasses.push('transition-all duration-200 ease-in-out');
  }

  // 悬停效果
  if (behavior.hover) {
    if (effects.scale?.hover) {
      interactionClasses.push(`hover:scale-[${String(effects.scale.hover)}]`);
    }
    if (effects.opacity?.hover) {
      // 使用 Tailwind arbitrary value 语法，例如 hover:opacity-[0.9]
      const v = String(effects.opacity.hover);
      interactionClasses.push(`hover:opacity-[${v}]`);
    }
    if (classes.hover) {
      interactionClasses.push(classes.hover);
    }
  }

  // 聚焦效果
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

  // 激活效果
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

  // 禁用状态
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