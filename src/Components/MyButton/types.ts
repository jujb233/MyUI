import type { JSX } from "solid-js"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps,
    Focusable,
    PositionProps,
    Clickable,
    SizeProps,
    InteractionProp,
} from "../../Interfaces"

export interface IMyButtonProps extends
    ThemeProps,
    StyleProps,
    Disableable,
    Focusable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps,
    PositionProps,
    SizeProps,
    Clickable {
    children?: JSX.Element
    interaction?: InteractionProp
}

export interface IMyButtonContext extends Omit<IMyButtonProps, 'children' | 'onClick'> {
    slots: {
        icon: string;
        content: string;
        options: string;
    };
}
