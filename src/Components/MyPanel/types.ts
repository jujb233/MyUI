import type { JSX } from "solid-js"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithImage,
    WithFooter,
    AnimationProps,
    InteractionPolicy,
    PositionProps,
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
    interaction?: InteractionPolicy | 'none' | 'basic' | 'rich' | 'minimal'
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
