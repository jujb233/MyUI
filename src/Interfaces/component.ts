import type { JSX } from 'solid-js'

/**
 * @description 按钮专有属性，用于指定其 `type` attribute。
 * @interface HtmlButtonType
 * @property {'button' | 'submit' | 'reset'} [buttonType] - HTML `type` 属性。
 */
export interface HtmlButtonType {
    buttonType?: 'button' | 'submit' | 'reset'
}

/**
 * @description 为组件提供前置图标的通用插槽。
 * @interface WithIcon
 * @property {JSX.Element} [icon] - 图标元素。
 */
export interface WithIcon {
    icon?: JSX.Element
}

/**
 * @description 为组件提供末尾操作区的通用插槽。
 * @interface WithOptions
 * @property {JSX.Element} [options] - 操作区元素。
 */
export interface WithOptions {
    options?: JSX.Element
}

/**
 * @description 为组件提供标题的通用插槽，兼容字符串和元素。
 * @interface WithTitle
 * @property {JSX.Element} [title] - 标题内容。
 */
export interface WithTitle {
    title?: JSX.Element
}

/**
 * @description 为组件提供页脚或尾部的通用插槽。
 * @interface WithFooter
 * @property {JSX.Element} [footer] - 页脚/尾部元素。
 */
export interface WithFooter {
    footer?: JSX.Element
}

/**
 * @description 为组件（如 Card、Panel）提供背景图片及位置设置。
 * @interface WithImage
 * @property {string} [backgroundImage] - 背景图片的 URL。
 * @property {'top' | 'bottom' | 'left' | 'right' | 'center' | 'background'} [imagePosition] - 图片位置。
 */
export interface WithImage {
    backgroundImage?: string
    imagePosition?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'background'
}

/**
 * @description 输入框专有属性，用于指定其 `type` attribute。
 * @interface HtmlInputType
 * @property {'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'color' | 'checkbox' | 'radio' | 'file' | 'hidden' | 'range'} [inputType] - HTML `type` 属性。
 */
export interface HtmlInputType {
    inputType?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'color'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'hidden'
    | 'range'
}
