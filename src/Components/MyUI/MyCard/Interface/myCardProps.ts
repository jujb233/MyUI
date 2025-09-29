import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,
    MediaPlacementProps,
    Pressable,
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
    };