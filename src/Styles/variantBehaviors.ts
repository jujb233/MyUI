import type { VariantName } from './colorThemes';

/**
 * 变体行为配置
 * 将组件中基于 variant 的分支样式抽离到配置，便于集中维护与扩展。
 */
export interface VariantBehavior {
    button?: {
        /** 额外的 class（会追加在按钮基础样式后） */
        classes?: string;
    };
    card?: {
        classes?: string;
    };
    panel?: {
        classes?: string;
    };
}

export const VARIANT_BEHAVIORS: Record<VariantName, VariantBehavior> = {
    solid: {},
    soft: {},
    subtle: {},
    text: {
        button: {
            classes: [
                'underline underline-offset-4',
                'hover:-translate-y-0.5 shadow-sm',
                'hover:scale-100 active:scale-100'
            ].join(' '),
        },
    },
};

export type VariantBehaviorsMap = typeof VARIANT_BEHAVIORS;
