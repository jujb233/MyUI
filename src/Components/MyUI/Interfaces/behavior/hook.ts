// 已统一交互 API，取消基于 kind 的交互类型。

/**
 * Hook 返回值约定（基础）：统一命名 rootStyle/rootClasses
 */
export interface UseComponentBaseResult {
    rootStyle: React.CSSProperties;
    rootClasses: string;
}
