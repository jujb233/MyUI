import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../../styles/config/interaction';

/**
 * @category Options
 * @description Various component properties 的默认值。
 * 该对象提供了一种集中管理不同接口的默认 props 的方法，
 * 确保组件库的一致性。
 */
export const defaultValues = {
    /**
     * @description `HtmlButtonType` 的默认属性。
     * @property {string} buttonType - 按钮元素的默认类型。
     */
    HtmlButtonType: {
        buttonType: 'button',
    },
    /**
     * @description `WithIcon` 的默认属性。
     * @property {null} icon - 图标的默认值，为 null。
     */
    WithIcon: {
        icon: null,
    },
    /**
     * @description `WithOptions` 的默认属性。
     * @property {null} options - 选项的默认值，为 null。
     */
    WithOptions: {
        options: null,
    },
    /**
     * @description `WithTitle` 的默认属性。
     * @property {null} title - 标题的默认值，为 null。
     */
    WithTitle: {
        title: null,
    },
    /**
     * @description `WithFooter` 的默认属性。
     * @property {null} footer - 页脚的默认值，为 null。
     */
    WithFooter: {
        footer: null,
    },
    /**
     * @description `WithImage` 的默认属性。
     * @property {string} backgroundImage - 默认背景图片，一个空字符串。
     * @property {string} imagePosition - 背景图片的默认位置。
     */
    WithImage: {
        backgroundImage: '',
        imagePosition: 'center',
    },
    /**
     * @description `StyleProps` 的默认属性。
     * @property {string} class - 默认 CSS 类，一个空字符串。
     * @property {string} id - 默认元素 ID，一个空字符串。
     * @property {object} style - 默认内联样式，一个空对象。
     */
    StyleProps: {
        class: '',
        id: '',
        style: {},
    },
    /**
     * @description `Disableable` 的默认属性。
     * @property {boolean} disabled - 默认禁用状态，为 false。
     */
    Disableable: {
        disabled: false,
    },
    /**
     * @description `InteractionBehavior` 的默认属性。
     * 定义各种用户交互的默认状态。
     */
    InteractionBehavior: {
        hover: false,
        focus: false,
        active: false,
        transition: false,
        disabled: false,
    },
    /**
     * @description `InteractionConfig` 的默认属性。
     * 定义交互效果的默认配置。
     */
    InteractionConfig: {
        scale: {},
        opacity: {},
        background: {},
        shadow: {},
    },
    /**
     * @description `InteractionPolicy` 的默认属性。
     * 定义组件交互的默认策略。
     */
    InteractionPolicy: {
        enabled: true,
        behavior: DEFAULT_INTERACTION_BEHAVIOR,
        effects: DEFAULT_INTERACTION_EFFECTS,
        classes: {},
    },
    /**
     * @description `Clickable` 的默认属性。
     */
    Clickable: {
        clickable: false,
        onClick: () => { },
        disabled: false,
    },
    /**
     * @description `Borderable` 的默认属性。
     */
    Borderable: {
        bordered: false,
    },
    /**
     * @description `Focusable` 的默认属性。
     */
    Focusable: {
        clickFocusable: false,
        hover: false,
    },
    /**
     * @description `OrientationProps` 的默认属性。
     */
    OrientationProps: {
        direction: 'vertical',
    },
    /**
     * @description `PositionProps` 的默认属性。
     */
    PositionProps: {
        top: 0,
        left: 0,
    },
    /**
     * @description `SizeProps` 的默认属性。
     */
    SizeProps: {
        size: 'medium',
    },
    /**
     * @description `ThemeProps` 的默认属性。
     */
    ThemeProps: {
        variant: undefined,
        size: 'medium',
        glass: true,
        shadow: 'none',
    },
    /**
     * @description `ThemeContextValue` 的默认属性。
     */
    ThemeContextValue: {
        variant: undefined,
        size: 'medium',
        glass: true,
        shadow: 'none',
        disabled: false,
    },
    /**
     * @description `AnimationProps` 的默认属性。
     */
    AnimationProps: {
        animation: undefined,
    },
};