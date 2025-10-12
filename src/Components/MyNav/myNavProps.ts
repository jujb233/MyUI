import type { ThemeProps, StyleProps, WithTitle, WithOptions, AnimationProps } from "../../Interfaces"
import type { InteractionPolicy } from "../../Interfaces"

export type MyNavProps =
    ThemeProps &
    StyleProps &
    WithTitle &
    WithOptions &
    AnimationProps & {
        children?: React.ReactNode
        menu?: React.ReactNode
        /** 是否开启容器 hover/active 等交互效果 */
        interactionEnabled?: boolean
        /** 交互策略或预设 key（如 'rich' | 'basic' | 'none'） */
        interaction?: InteractionPolicy | string
    }