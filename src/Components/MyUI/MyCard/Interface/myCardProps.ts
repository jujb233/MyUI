import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,
    MediaPlacementProps,
    Pressable,
    AnimationProps,
} from "../../Interfaces";

export type MyCardProps =
    ThemeProps &
    StyleProps &
    Borderable &
    Clickable &
    OrientationProps &
    MediaPlacementProps &
    Pressable<HTMLDivElement> & {
        children: React.ReactNode;
    } & AnimationProps;