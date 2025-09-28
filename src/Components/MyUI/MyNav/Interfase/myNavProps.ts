import type { SizeName } from "../../../../Options";
import type { ThemeableProps, StylableProps, WithTitleProps, WithActionsProps } from "../../Interfases";

export type MyNavProps =
    ThemeableProps &
    StylableProps &
    WithTitleProps &
    WithActionsProps & {
        size?: SizeName;
        children?: React.ReactNode;
        menu?: React.ReactNode;
    };