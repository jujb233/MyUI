import type {
    ThemeProps,
    StyleProps,
    Borderable,
    Clickable,
    OrientationProps,
    AnimationProps,
    WithFooter,
    WithImage,
    WithTitle,
    InteractionBehavior,
} from "../../Interfaces";

// IMyCardProps combines all the necessary props interfaces.
// The duplicate Clickable has been removed to fix the type conflict.
export interface IMyCardProps extends
    ThemeProps,
    StyleProps,
    Borderable,
    OrientationProps,
    Clickable<HTMLDivElement>,
    AnimationProps,
    InteractionBehavior,
    WithFooter,
    WithImage,
    WithTitle {
    children?: React.ReactNode;
}

// IMyCardContext defines the shape of the context object for the MyCard component.
export interface IMyCardContext extends Omit<IMyCardProps, 'children'> {
    isHorizontal: boolean;
    imagePosition: "top" | "left" | "right" | "center" | "bottom";
    sizeConfig: {
        spacing: string;
        titleSize: string;
        contentSize: string;
        borderRadius: string;
        minHeight: string;
    };
    // sub-component classes
    imageClasses: string;
    headerClasses: string;
    titleClasses: string;
    contentClasses: string;
    footerClasses: string;
    actionsClasses: string;
    tagsContainerClasses: string;
    tagClasses: string;
}
