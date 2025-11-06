import type { JSX } from "solid-js";

/** 样式与通用 DOM 属性 */
export interface StyleProps {
    // Tailwind CSS 类名
    class?: string
    id?: string
    // 内联样式
    style?: JSX.CSSProperties
}
