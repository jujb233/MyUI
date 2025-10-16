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
        hover: 1.06,
        active: 0.95,
        disabled: 1,
      },
      opacity: {
        hover: 0.98,
      },
    },
    // 为 demo 增强视觉反馈，加入额外的 hover classes（box-shadow 与 slight translate）
    classes: {
      hover: 'hover:shadow-lg hover:-translate-y-0.5',
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