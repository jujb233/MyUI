/**
 * 交互（hover/active）行为统一配置。
 * 避免在各组件内分散硬编码 scale/translate 类。
 */
export interface Interaction {
    classes: string;
}

export type InteractionKind = 'button' | 'card' | 'panel';

const INTERACTION_BASE: Record<InteractionKind, Interaction> = {
    button: {
        classes: [
            'transition-transform',
            'hover:scale-[1.02]',
            'active:scale-95',
            // 禁用态保持尺寸
            'disabled:hover:scale-100 disabled:active:scale-100'
        ].join(' '),
    },
    card: {
        classes: [
            'transition-transform',
            'hover:scale-[1.01]',
            'hover:-translate-y-1',
        ].join(' '),
    },
    panel: {
        classes: [
            'transition-transform',
            'hover:scale-[1.01]',
        ].join(' '),
    },
};

export interface UseInteractionParams {
    kind: InteractionKind;
    enabled?: boolean;
}

export function getInteraction(kind: InteractionKind): Interaction {
    return INTERACTION_BASE[kind];
}

export function buildInteractionClasses(params: UseInteractionParams): string | undefined {
    const { kind, enabled } = params;
    if (!enabled) return undefined;
    return getInteraction(kind).classes;
}
