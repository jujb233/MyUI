import React from "react";
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    Pressable,
    WithIcon,
    WithActions,
    HtmlButtonType,
    AnimationProps,
} from "../../Interfaces";

export type MyButtonProps =
    ThemeProps &
    StyleProps &
    Disableable &
    Pressable<HTMLButtonElement> &
    WithIcon &
    WithActions &
    HtmlButtonType &
    AnimationProps & {
        children?: React.ReactNode;
    };
