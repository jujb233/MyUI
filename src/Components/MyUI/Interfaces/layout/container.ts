/**
 * Layout - container
 * 简要：定义容器（container）相关的布局接口与辅助类型。
 */

/** 容器边框能力（容器类组件常用） */
export interface Borderable {
    bordered?: boolean
}

/** 可点击/可悬停能力（容器类组件常用） */
export interface Clickable {
    clickable?: boolean
    /** 是否允许 hover 反馈（默认通常为 true） */
    hoverable?: boolean
}
