import type { SizeName } from "../../../../Options";
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithBackgroundImage,
    WithFooter,
} from "../../Interfases";

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