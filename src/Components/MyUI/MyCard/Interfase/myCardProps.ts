import type {
    ThemeableProps,
    StylableProps,
    BorderableProps,
    ClickableProps,
    OrientationProps,
    MediaPlacementProps,
    PressableProps,
} from "../../Interfases";

export type MyCardProps =
    ThemeableProps &
    StylableProps &
    BorderableProps &
    ClickableProps &
    OrientationProps &
    MediaPlacementProps &
    PressableProps<HTMLDivElement> & {
        children: React.ReactNode;
    };