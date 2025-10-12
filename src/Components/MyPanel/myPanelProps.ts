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

export type MyPanelProps =
    ThemeProps &
    StyleProps &
    Disableable &
    WithTitle &
    WithImage &
    WithFooter &
    AnimationProps & {
        children?: React.ReactNode
        interaction?: InteractionPolicy | 'none' | 'basic' | 'rich' | 'minimal'
    }