import type * as React from 'react'

/**
 * Layout - container
 * 简要：定义容器（container）相关的布局接口与辅助类型。
 */

/** 容器边框能力（容器类组件常用） */
export interface Borderable {
    bordered?: boolean
}

/** 可点击/可悬停能力（容器类组件常用） */
export interface Clickable<T extends HTMLElement = HTMLElement> {
    clickable?: boolean
    /** 是否启用 hover 效果（替代旧的 hoverable 字段） */
    hover?: boolean
    onClick?: React.MouseEventHandler<T>
}
