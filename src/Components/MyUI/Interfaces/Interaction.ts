import { buildInteractionClasses as buildBaseInteractionClasses, type BuildInteractionOptions } from "../../../Options";

/**
 * 组件交互策略：由各组件的 Hook 决定开启哪些具体交互能力。
 * 将通用的交互（hover/active/transition/disabledReset）与可选的 focusRing 聚合在一起。
 */
export interface InteractionPolicy {
    /** 总开关 */
    enabled?: boolean;
    /** 悬停反馈 */
    hover?: boolean;
    /** 按下反馈 */
    active?: boolean;
    /** 过渡 */
    transition?: boolean;
    /** 禁用态重置 hover/active */
    disabledReset?: boolean;
    /** 是否启用 focus-visible 的聚焦可视化（ring） */
    focusRing?: boolean;
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
].join(' ');

/**
 * 将组件交互策略映射为最终的 className 片段。
 * - 统一委托给 Options 层的 buildInteractionClasses 构建基础交互
 * - 可选附加焦点 ring
 */
export function buildHookInteractionClasses(policy: InteractionPolicy = {}): string | undefined {
    const {
        enabled = true,
        hover = true,
        active = true,
        transition = true,
        disabledReset = true,
        focusRing = false,
    } = policy;

    const base = buildBaseInteractionClasses({ enabled, hover, active, transition, disabledReset } as BuildInteractionOptions);
    if (!base && !focusRing) return undefined;

    const extra = focusRing ? FOCUS_RING_CLASSES : '';
    return [base, extra].filter(Boolean).join(' ');
}

/**
 * 工具：从更细粒度配置转为 Policy（便于未来扩充）。
 */
export function toInteractionPolicy(options: Partial<InteractionPolicy>): InteractionPolicy {
    return { ...options };
}

