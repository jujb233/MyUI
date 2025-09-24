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
    primary: {},
    secondary: {},
    danger: {},
    normal: {},
    link: {
        button: {
            classes: [
                // 下划线交互 + 轻微浮动阴影
                'underline underline-offset-4',
                'hover:-translate-y-0.5 shadow-sm',
                // 链接型按钮通常不需要过度缩放
                'hover:scale-100 active:scale-100'
            ].join(' '),
        },
    },
};

export type VariantBehaviorsMap = typeof VARIANT_BEHAVIORS;
