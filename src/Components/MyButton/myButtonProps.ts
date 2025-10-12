import React from "react"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithIcon,
    WithOptions,
    HtmlButtonType,
    AnimationProps,
    Clickable,
} from "../../Interfaces"

export type MyButtonProps =
    ThemeProps &
    StyleProps &
    Disableable &
    Clickable<HTMLButtonElement> &
    WithIcon &
    WithOptions &
    HtmlButtonType &
    AnimationProps & {
        children?: React.ReactNode
    }
