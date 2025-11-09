import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../Styles/config/interaction';

/**
 * @description 定义了组件支持的交互状态类型。
 * @type InteractionType
 */
export type InteractionType = 'hover' | 'focus' | 'active' | 'disabled'

/**
 * @description 配置组件在不同交互状态下的行为，如是否启用效果、过渡等。
 * @interface InteractionBehavior
 * @property {boolean} [hover] - 是否启用悬停效果。
 * @property {boolean} [focus] - 是否启用聚焦效果。
 * @property {boolean} [active] - 是否启用激活效果。
 * @property {boolean} [transition] - 是否启用状态切换时的过渡动画。
 * @property {boolean} [disabled] - 在禁用时是否关闭所有交互反馈。
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
 * @description 定义在不同交互状态下的视觉变换细节，如缩放、透明度、背景和阴影。
 * @interface InteractionConfig
 * @property {object} [scale] - 缩放效果配置。
 * @property {object} [opacity] - 透明度效果配置。
 * @property {object} [background] - 背景色变化配置。
 * @property {object} [shadow] - 阴影效果配置。
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
 * @description 定义了组件的完整交互策略，包括是否启用、行为、视觉效果和自定义类。
 * @interface InteractionPolicy
 * @property {boolean} [enabled] - 是否启用交互策略。
 * @property {typeof DEFAULT_INTERACTION_BEHAVIOR} [behavior] - 交互行为配置。
 * @property {typeof DEFAULT_INTERACTION_EFFECTS} [effects] - 视觉反馈配置。
 * @property {object} [classes] - 用于不同交互状态的自定义 CSS 类。
 */
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
 * @description 统一的交互预设 key。用于在组件 props 中以字符串形式启用交互策略。
 */
export type InteractionPresetKey = 'none' | 'basic' | 'rich' | 'minimal'

/**
 * @description 组件可接受的交互配置类型（统一入口）。
 * - 可传入内置预设 key（如 'basic' | 'rich'）。
 * - 或传入完整 InteractionPolicy 对象以实现精细控制。
 */
export type InteractionProp = InteractionPolicy | InteractionPresetKey

/**
 * @description 供组件复用的交互属性集合。
 * 注意：为简化 API 并避免重复，旧的 interactionEnabled 已移除，请使用 policy.enabled。
 */
export interface InteractionProps {
    interaction?: InteractionProp
}

/**
 * @description 为组件提供声明其交互策略的能力。
 * @interface SupportsInteractionPolicy
 * @method getInteractionPolicy - 获取组件的交互策略。
 */
export interface SupportsInteractionPolicy {
    getInteractionPolicy(): InteractionPolicy
}

/**
 * @description 为组件提供可点击行为的属性。
 * @interface Clickable
 * @property {boolean} [clickable] - 如果为 `true`，组件将响应点击事件。
 * @property {(event: MouseEvent) => void} [onClick] - 点击事件的回调函数。
 * @property {boolean} [disabled] - 如果为 `true`，组件将被禁用，不响应点击。
 */
export interface Clickable {
    clickable?: boolean
    onClick?: (event: MouseEvent) => void
    disabled?: boolean
}
