import type { JSX } from "solid-js"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithImage,
    WithFooter,
    AnimationProps,
    PositionProps,
    InteractionProp,
} from "../../Interfaces"

export interface IMyPanelProps extends
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithImage,
    WithFooter,
    AnimationProps,

    PositionProps {
    children?: JSX.Element
    interaction?: InteractionProp
}

export interface IMyPanelContext extends Omit<IMyPanelProps, 'children'> {
    backgroundImage?: string
    slots: {
        background?: string;
        header: string;
        content: string;
        footer: string;
    };
}
