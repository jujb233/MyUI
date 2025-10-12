import React from "react"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    Pressable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps,
} from "../../Interfaces"

export type MyButtonProps =
    ThemeProps &
    StyleProps &
    Disableable &
    Pressable<HTMLButtonElement> &
    WithIcon &
    WithOptions &
    HtmlButtonType &
    AnimationProps & {
        children?: React.ReactNode
    }
