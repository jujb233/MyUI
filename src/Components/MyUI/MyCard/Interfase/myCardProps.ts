import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,
    MediaPlacementProps,
    Pressable,
} from "../../Interfases";

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