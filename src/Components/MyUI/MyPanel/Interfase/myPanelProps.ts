import type { SizeName } from "../../../../Options";
import type {
    ThemeableProps,
    StylableProps,
    DisableableProps,
    WithTitleProps,
    WithBackgroundImageProps,
    WithFooterProps,
} from "../../Interfases";

export type MyPanelProps =
    ThemeableProps &
    StylableProps &
    DisableableProps &
    WithTitleProps &
    WithBackgroundImageProps &
    WithFooterProps & {
        size?: SizeName;
        children?: React.ReactNode;
    };