/**
 * Core - events
 * 简要：定义组件与系统使用的事件类型、事件负载（payload）与工具类型。
 */

import type * as React from 'react'

/** 按压/点击类事件（按钮、可点击容器） */
export interface Pressable<T extends HTMLElement = HTMLElement> {
    onClick?: React.MouseEventHandler<T>
}
