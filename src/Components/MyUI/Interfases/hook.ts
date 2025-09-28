/**
 * 统一的交互种类，用于 buildInteractionClasses 等工具
 */
export type InteractionKind = 'button' | 'card' | 'panel' | 'nav';

/**
 * Hook 返回值约定（基础）：统一命名 rootStyle/rootClasses
 */
export interface UseComponentBaseResult {
    rootStyle: React.CSSProperties;
    rootClasses: string;
}
