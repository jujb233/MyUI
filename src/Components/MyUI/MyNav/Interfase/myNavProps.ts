import type { SizeName } from "../../../../Options";
import type { ThemeProps, StyleProps, WithTitle, WithActions } from "../../Interfases";

export type MyNavProps =
    ThemeProps &
    StyleProps &
    WithTitle &
    WithActions & {
        size?: SizeName;
        children?: React.ReactNode;
        menu?: React.ReactNode;
    };