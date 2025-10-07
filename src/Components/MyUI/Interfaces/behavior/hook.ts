/**
 * Behavior - hook 接口
 * 简要：定义与行为钩子（hooks）相关的类型与契约，用于组件行为复用。
 */

/**
 * Hook 返回值约定（基础）：统一命名 rootStyle/rootClasses
 */
export interface UseComponentBaseResult {
    rootStyle: React.CSSProperties
    rootClasses: string
}
