import type { SizeName } from "../../../../Options"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithTitle,
    WithBackgroundImage,
    WithFooter,
    AnimationProps,
} from "../../Interfaces"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"

export type MyPanelProps =
    ThemeProps &
    StyleProps &
    Disableable &
    WithTitle &
    WithBackgroundImage &
    WithFooter &
    AnimationProps & {
        size?: SizeName
        children?: React.ReactNode
        interaction?: InteractionPolicy | 'none' | 'basic' | 'rich' | 'minimal'
    }