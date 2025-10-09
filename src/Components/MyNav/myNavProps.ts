import type { SizeName } from "../../Options"
import type { ThemeProps, StyleProps, WithTitle, WithActions, AnimationProps } from "../../Interfaces"

export type MyNavProps =
    ThemeProps &
    StyleProps &
    WithTitle &
    WithActions &
    AnimationProps & {
        size?: SizeName
        children?: React.ReactNode
        menu?: React.ReactNode
    }