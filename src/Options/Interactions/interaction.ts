/**
 * 统一的交互（hover/active）行为配置。
 * 目标：所有组件共享同一组交互效果，并可按需关闭部分效果。
 */

import type { InteractionBehavior, InteractionConfig } from "../../Components/MyUI/Interfaces";

export interface BuildInteractionOptions {
    /** 是否启用交互（总开关） */
    enabled?: boolean;
    /** 是否启用 hover 态反馈（默认开启） */
    hover?: boolean;
    /** 是否启用 active 态反馈（默认开启） */
    active?: boolean;
    /** 是否包含过渡（默认开启） */
    transition?: boolean;
    /** 禁用态是否重置 hover/active 的 scale（默认开启） */
    disabledReset?: boolean;
}

/**
 * 构建统一的交互类名字符串。
 * 默认：transition-transform + hover:scale-[1.02] + active:scale-95 + disabled reset。
 */
export function buildInteractionClasses(options: BuildInteractionOptions = {}): string | undefined {
    const {
        enabled = true,
        hover = true,
        active = true,
        transition = true,
        disabledReset = true,
    } = options;

    if (!enabled) return undefined;

    const classes: string[] = [];
    if (transition) classes.push('transition-transform');
    if (hover) classes.push('hover:scale-[1.02]');
    if (active) classes.push('active:scale-95');
    if (disabledReset) classes.push('disabled:hover:scale-100', 'disabled:active:scale-100');

    return classes.join(' ');
}

/**
 * 默认交互行为配置
 */
export const DEFAULT_INTERACTION_BEHAVIOR: InteractionBehavior = {
  hover: true,
  focus: true,
  active: true,
  transition: true,
  disabled: true,
}

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
}


