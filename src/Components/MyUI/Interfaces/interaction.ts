export type InteractionType = 'hover' | 'focus' | 'active' | 'disabled';

export interface InteractionBehavior {
    /** 是否启用悬停效果 */
    hover?: boolean;
    /** 是否启用聚焦效果 */
    focus?: boolean;
    /** 是否启用激活效果 */
    active?: boolean;
    /** 是否启用过渡动画 */
    transition?: boolean;
    /** 禁用状态下的交互行为 */
    disabled?: boolean;
}

export interface InteractionConfig {
    /** 交互缩放效果 */
    scale?: {
        hover?: number | string;
        active?: number | string;
        disabled?: number | string;
    };
    /** 透明度效果 */
    opacity?: {
        hover?: number | string;
        active?: number | string;
        disabled?: number | string;
    };
    /** 背景色变化 */
    background?: {
        hover?: string;
        active?: string;
        disabled?: string;
    };
    /** 阴影效果 */
    shadow?: {
        hover?: string;
        focus?: string;
        active?: string;
    };
}

/**
 * 组件交互策略：由各组件的 Hook 决定开启哪些具体交互能力。
 * 将通用的交互（hover/active/transition/disabledReset）与可选的 focusRing 聚合在一起。
 */
export interface InteractionPolicy {
    /** 总开关 */
    enabled?: boolean
    /** 具体交互行为配置 */
    behavior?: InteractionBehavior
    /** 视觉反馈配置 */
    effects?: InteractionConfig
    /** 自定义类名 */
    classes?: {
        [key in InteractionType]?: string;
    }
}

/**
 * 提供一个“组件可声明交互策略”的接口，供 Hook/组件实现。
 * TypeScript 接口仅作为约束，运行时不强制要求。
 */
export interface SupportsInteractionPolicy {
    getInteractionPolicy(): InteractionPolicy;
}

/** 默认 focus ring 类（Tailwind） */
export const FOCUS_RING_CLASSES = [
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
].join(' ')

