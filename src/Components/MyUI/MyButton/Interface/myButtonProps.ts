import React from "react";
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    Pressable,
    WithIcon,
    WithActions,
    HtmlButtonType,
} from "../../Interfaces";

export type MyButtonProps =
    ThemeProps &
    StyleProps &
    Disableable &
    Pressable<HTMLButtonElement> &
    WithIcon &
    WithActions &
    HtmlButtonType & {
        children?: React.ReactNode;
    };
