import type * as React from 'react'

/** 常用插槽：前置图标 */
export interface WithIcon {
    icon?: React.ReactNode
}

/** 常用插槽：末尾操作区 */
export interface WithActions {
    actions?: React.ReactNode
}

/** 常用插槽：标题（统一使用 ReactNode 以兼容 string/元素） */
export interface WithTitle {
    title?: React.ReactNode
}

/** 常用插槽：页脚/尾部 */
export interface WithFooter {
    footer?: React.ReactNode
}

/** 背景图能力（Panel 等） */
export interface WithBackgroundImage {
    backgroundImage?: string
}
