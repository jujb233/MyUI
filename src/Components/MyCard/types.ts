import type { JSX } from "solid-js"
import type {
    ThemeProps,
    StyleProps,
    Borderable,
    OrientationProps,
    AnimationProps,
    WithFooter,
    WithImage,
    WithTitle,
    InteractionBehavior,
} from "../../Interfaces"
// 使用 layout 下的 Clickable（泛型），以获得正确的 onClick 事件签名
import type { Clickable as ContainerClickable } from "../../Interfaces/layout"

// IMyCardProps combines all the necessary props interfaces.
// The duplicate Clickable has been removed to fix the type conflict.
export interface IMyCardProps extends
    ThemeProps,
    StyleProps,
    Borderable,
    OrientationProps,
    ContainerClickable<HTMLDivElement>,
    AnimationProps,
    InteractionBehavior,
    WithFooter,
    WithImage,
    WithTitle {
    children?: JSX.Element
}

// IMyCardContext defines the shape of the context object for the MyCard component.
export interface IMyCardContext extends Omit<IMyCardProps, 'children'> {
    isHorizontal: boolean
    imagePosition: "top" | "left" | "right" | "center" | "bottom"
    sizeConfig: {
        spacing: string
        titleSize: string
        contentSize: string
        borderRadius: string
        minHeight: string
    }
    // sub-component classes
    imageClasses: string
    headerClasses: string
    titleClasses: string
    contentClasses: string
    footerClasses: string
    actionsClasses: string
    tagsContainerClasses: string
    tagClasses: string
}
