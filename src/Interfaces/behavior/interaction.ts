export type InteractionType = 'hover' | 'focus' | 'active' | 'disabled'

/**
 * 交互行为开关与配置
 *
 * 说明：用于描述组件在不同交互状态下（hover/focus/active/disabled）是否启用
 * 以及是否启用过渡等通用行为。此接口用于在组件级别声明哪些交互能力
 * 应该被开启并由 Hook/主题层去实际应用。
 */
export interface InteractionBehavior {
    /** 是否启用悬停效果（hover）
     *  - true: 启用悬停相关视觉/变换
     *  - false | undefined: 不启用
     *  示例：hover: true
     */
    hover?: boolean
    /** 是否启用聚焦效果（focus）
     *  - 常用于键盘可访问场景（focus ring）
     */
    focus?: boolean
    /** 是否启用激活效果（active）
     *  - active 一般在按下/点击时触发，常用于缩放/按压反馈
     */
    active?: boolean
    /** 是否启用过渡动画（transition）
     *  - 控制交互状态切换时是否应用动画（如 transform/opacity 的过渡）
     *  - 示例：transition: true 表示从 normal -> hover 会有平滑过渡
     */
    transition?: boolean
    /** 当组件被禁用时，是否禁用交互行为
     *  - true: 在 disabled 状态下关闭所有交互反馈
     *  - false | undefined: 允许在视觉上仍然展示少量反馈
     */
    disabled?: boolean
}

/**
 * 交互视觉效果配置
 *
 * 说明：定义在不同交互状态下的视觉变换细节（缩放、透明度、背景、阴影等）。
 * 所有子属性均为可选；可使用 number（视为比例）或 string（CSS 值，例如 '0.95'、'95%'、'1.05' 或 '8px'）
 * 来提供灵活的配置。
 */
export interface InteractionConfig {
    /** 缩放（scale）配置
     *  - hover/active/disabled 可选
     *  - 推荐使用数值（如 0.98/1.02）或字符串（如 '0.98'）表示缩放比例
     *  - 示例：scale: { hover: 1.02, active: 0.98 }
     */
    scale?: {
        hover?: number | string
        active?: number | string
        disabled?: number | string
    }
    /** 透明度（opacity）配置
     *  - 取值一般为 0 ~ 1 的数值或可被 CSS 识别的字符串
     *  - 示例：opacity: { hover: 0.95, active: 0.9 }
     */
    opacity?: {
        hover?: number | string
        active?: number | string
        disabled?: number | string
    }
    /** 背景色变化配置
     *  - 可以为颜色字符串（name/hex/rgb/rgba）或 CSS 变量
     *  - 示例：background: { hover: '#f5f5f5', active: 'rgba(0,0,0,0.04)' }
     */
    background?: {
        hover?: string
        active?: string
        disabled?: string
    }
    /** 阴影效果配置
     *  - 不同状态可设置不同阴影样式（如 box-shadow 的字符串）
     *  - focus 常用于强调环（focus ring）或外发光
     */
    shadow?: {
        hover?: string
        focus?: string
        active?: string
    }
}

/**
 * InteractionPolicy 定义合并，移除重复定义。
 */
import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../../styles/config/interaction';

export interface InteractionPolicy {
    /** 总开关 */
    enabled?: boolean
    /** 具体交互行为配置 */
    behavior?: typeof DEFAULT_INTERACTION_BEHAVIOR
    /** 视觉反馈配置 */
    effects?: typeof DEFAULT_INTERACTION_EFFECTS
    /** 自定义类名 */
    classes?: {
        hover?: string
        focus?: string
        active?: string
        disabled?: string
    }
}

/**
 * 提供一个“组件可声明交互策略”的接口，供 Hook/组件实现。
 * TypeScript 接口仅作为约束，运行时不强制要求。
 */
export interface SupportsInteractionPolicy {
    getInteractionPolicy(): InteractionPolicy
}

export interface Clickable {
    clickable?: boolean
    onClick?: (event: MouseEvent) => void
    disabled?: boolean
}

