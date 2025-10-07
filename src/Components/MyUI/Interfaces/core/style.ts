/**
 * Core - style
 * 简要：定义与组件样式、样式配置相关的类型与辅助函数签名。
 */

import type * as React from 'react'

/** 样式与通用 DOM 属性 */
export interface StyleProps {
    className?: string
    style?: React.CSSProperties
    id?: string
}
