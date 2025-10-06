/**
 * 统一的交互（hover/active）行为配置。
 * 目标：所有组件共享同一组交互效果，并可按需关闭部分效果。
 */

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
 * 预设交互策略
 */
export const INTERACTION_PRESETS = {
  none: { enabled: false },
  basic: {
    enabled: true,
    behavior: {
      hover: true,
      focus: true,
      active: false,
      transition: true,
      disabled: true,
    },
  },
  rich: {
    enabled: true,
    behavior: {
      hover: true,
      focus: true,
      active: true,
      transition: true,
      disabled: true,
    },
    effects: {
      scale: {
        hover: 1.05,
        active: 0.95,
        disabled: 1,
      },
    },
  },
  minimal: {
    enabled: true,
    behavior: {
      hover: true,
      focus: false,
      active: false,
      transition: false,
      disabled: true,
    },
  },
} as const;
