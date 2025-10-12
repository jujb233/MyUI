import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,

    Pressable,
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
    Pressable<HTMLDivElement> &
    AnimationProps &
    WithFooter &
    WithImage &
    WithTitle & {
        children: React.ReactNode
    }
