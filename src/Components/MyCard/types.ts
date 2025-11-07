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
    PositionProps,
    Clickable,
} from "../../Interfaces"
import type { Focusable as ContainerClickable } from "../../Interfaces/layout"

export interface IMyCardProps extends
    ThemeProps,
    StyleProps,
    Borderable,
    OrientationProps,
    ContainerClickable,
    Clickable,
    PositionProps,
    AnimationProps,
    WithFooter,
    WithImage,
    WithTitle {
    children?: JSX.Element
}

export interface IMyCardContext extends Omit<IMyCardProps, 'children'> {
    isHorizontal: boolean
    imagePosition: "top" | "left" | "right" | "background" | "bottom" | "center"
    sizeConfig: {
        spacing: string
        titleSize: string
        contentSize: string
        borderRadius: string
        minHeight: string
    }
    slots: {
        image: string;
        header: string;
        title: string;
        content: string;
        footer: string;
        actions: string;
        tagsContainer: string;
        tag: string;
    };
}
