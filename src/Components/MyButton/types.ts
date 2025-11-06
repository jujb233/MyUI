import type { JSX } from "solid-js"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps,
    Clickable,
} from "../../Interfaces"

export interface IMyButtonProps extends
    ThemeProps,
    StyleProps,
    Disableable,
    Clickable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps {
    children?: JSX.Element
}

export interface IMyButtonContext extends Omit<IMyButtonProps, 'children' | 'onClick'> {
    // Add any button-specific context properties here if needed in the future
}
