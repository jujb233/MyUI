import type { SizeName } from "../../../../Options";
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithBackgroundImage,
    WithFooter,
} from "../../Interfaces";

export type MyPanelProps =
    ThemeProps &
    StyleProps &
    Disableable &
    WithTitle &
    WithBackgroundImage &
    WithFooter & {
        size?: SizeName;
        children?: React.ReactNode;
    };