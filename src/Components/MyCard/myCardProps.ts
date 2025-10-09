import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,
    MediaPlacementProps,
    Pressable,
    AnimationProps,
    WithFooter,
    WithBackgroundImage,
    WithTitle,
} from "../../Interfaces"

export type MyCardProps =
    ThemeProps &
    StyleProps &
    Borderable &
    Clickable &
    OrientationProps &
    MediaPlacementProps &
    Pressable<HTMLDivElement> &
    AnimationProps &
    WithFooter &
    WithBackgroundImage &
    WithTitle & {
        children: React.ReactNode
    }
