import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps,
    Clickable,
} from "../../Interfaces";

export interface IMyButtonProps extends
    ThemeProps,
    StyleProps,
    Disableable,
    Clickable<HTMLButtonElement>,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps {
    children?: React.ReactNode;
}

export interface IMyButtonContext extends Omit<IMyButtonProps, 'children' | 'onClick'> {
    // Add any button-specific context properties here if needed in the future
}
