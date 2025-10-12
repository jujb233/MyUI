import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithImage,
    WithFooter,
    AnimationProps,
    InteractionPolicy,
} from "../../Interfaces";

export interface IMyPanelProps extends
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithImage,
    WithFooter,
    AnimationProps {
    children?: React.ReactNode;
    interaction?: InteractionPolicy | 'none' | 'basic' | 'rich' | 'minimal';
}

export interface IMyPanelContext extends Omit<IMyPanelProps, 'children'> {
    // Add any panel-specific context properties here if needed
    backgroundImage?: string;
}
