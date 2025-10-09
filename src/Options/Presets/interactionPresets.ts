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
} as const

/** 默认 focus ring 类（Tailwind） */
export const FOCUS_RING_CLASSES = [
  'focus:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-offset-2',
].join(' ')