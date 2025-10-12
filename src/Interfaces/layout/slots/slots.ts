import type * as React from 'react'

/** 常用插槽：前置图标 */
export interface WithIcon {
    icon?: React.ReactNode
}

/** 常用插槽：末尾操作区 */
export interface WithOptions {
    options?: React.ReactNode
}

/** 常用插槽：标题（统一使用 ReactNode 以兼容 string/元素） */
export interface WithTitle {
    title?: React.ReactNode
}

/** 常用插槽：页脚/尾部 */
export interface WithFooter {
    footer?: React.ReactNode
}

/** 图片能力（Card、Panel 等） */
export interface WithImage {
    backgroundImage?: string
    imagePosition?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'background'
}
