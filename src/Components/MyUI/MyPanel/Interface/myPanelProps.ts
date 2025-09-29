import type { SizeName } from "../../../../Options";
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithBackgroundImage,
    WithFooter,
    AnimationProps,
} from "../../Interfaces";

export type MyPanelProps =
    ThemeProps &
    StyleProps &
    Disableable &
    WithTitle &
    WithBackgroundImage &
    WithFooter &
    AnimationProps & {
        size?: SizeName;
        children?: React.ReactNode;
    };