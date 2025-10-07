import type * as React from 'react';

/** 按压/点击类事件（按钮、可点击容器） */
export interface Pressable<T extends HTMLElement = HTMLElement> {
    onClick?: React.MouseEventHandler<T>;
}
