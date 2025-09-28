import React from "react";
import type {
    ThemeableProps,
    StylableProps,
    DisableableProps,
    PressableProps,
    WithIconProps,
    WithActionsProps,
    HtmlTypeProp,
} from "../../Interfases";

export type MyButtonProps =
    ThemeableProps &
    StylableProps &
    DisableableProps &
    PressableProps<HTMLButtonElement> &
    WithIconProps &
    WithActionsProps &
    HtmlTypeProp & {
        children?: React.ReactNode;
    };
