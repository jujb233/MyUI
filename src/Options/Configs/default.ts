// 聚合拆分后的默认值模块，保持原有对象结构对外不破坏（破坏性更新允许内部重构）
// themeDefaults 由各分组文件内部使用，这里无需直接引用
import {
    HTML_BUTTON_DEFAULTS,
    STYLE_PROPS_DEFAULTS,
    DISABLEABLE_DEFAULTS,
    POSITION_DEFAULTS,
    SIZE_DEFAULTS,
    THEME_PROPS_DEFAULTS,
    THEME_CONTEXT_DEFAULTS,
    ANIMATION_DEFAULTS,
} from './defaultGroups/base'
import {
    INTERACTION_BEHAVIOR_DEFAULTS,
    INTERACTION_CONFIG_DEFAULTS,
    INTERACTION_POLICY_DEFAULTS,
} from './defaultGroups/interaction'
import {
    WITH_ICON_DEFAULTS,
    WITH_OPTIONS_DEFAULTS,
    WITH_TITLE_DEFAULTS,
    WITH_FOOTER_DEFAULTS,
    WITH_IMAGE_DEFAULTS,
    CLICKABLE_DEFAULTS,
    BORDERABLE_DEFAULTS,
    FOCUSABLE_DEFAULTS,
    ORIENTATION_DEFAULTS,
} from './defaultGroups/componentExtras'
import {
    USE_MY_BUTTON_DEFAULTS,
    USE_MY_CARD_DEFAULTS,
    USE_MY_PANEL_DEFAULTS,
    USE_MY_NAV_DEFAULTS,
    USE_MY_INPUT_DEFAULTS,
} from './defaultGroups/componentHooks'

/**
 * @category Options
 * @description Various component properties 的默认值。
 * 该对象提供了一种集中管理不同接口的默认 props 的方法，
 * 确保组件库的一致性。
 */
export const defaultValues = {
    HtmlButtonType: HTML_BUTTON_DEFAULTS,
    WithIcon: WITH_ICON_DEFAULTS,
    WithOptions: WITH_OPTIONS_DEFAULTS,
    WithTitle: WITH_TITLE_DEFAULTS,
    WithFooter: WITH_FOOTER_DEFAULTS,
    WithImage: WITH_IMAGE_DEFAULTS,
    StyleProps: STYLE_PROPS_DEFAULTS,
    Disableable: DISABLEABLE_DEFAULTS,
    InteractionBehavior: INTERACTION_BEHAVIOR_DEFAULTS,
    InteractionConfig: INTERACTION_CONFIG_DEFAULTS,
    InteractionPolicy: INTERACTION_POLICY_DEFAULTS,
    Clickable: CLICKABLE_DEFAULTS,
    Borderable: BORDERABLE_DEFAULTS,
    Focusable: FOCUSABLE_DEFAULTS,
    OrientationProps: ORIENTATION_DEFAULTS,
    PositionProps: POSITION_DEFAULTS,
    SizeProps: SIZE_DEFAULTS,
    ThemeProps: THEME_PROPS_DEFAULTS,
    ThemeContextValue: THEME_CONTEXT_DEFAULTS,
    AnimationProps: ANIMATION_DEFAULTS,
    UseMyButtonProps: USE_MY_BUTTON_DEFAULTS,
    UseMyCardProps: USE_MY_CARD_DEFAULTS,
    UseMyPanelProps: USE_MY_PANEL_DEFAULTS,
    UseMyNavProps: USE_MY_NAV_DEFAULTS,
    UseMyInputProps: USE_MY_INPUT_DEFAULTS,
} as const;