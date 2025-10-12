import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,

    AnimationProps,
    WithFooter,
    WithImage,
    WithTitle,
} from "../../Interfaces"

export type MyCardProps =
    ThemeProps &
    StyleProps &
    Borderable &
    Clickable &
    OrientationProps &
    Clickable<HTMLDivElement> &
    AnimationProps &
    WithFooter &
    WithImage &
    WithTitle & {
        children: React.ReactNode
    }
