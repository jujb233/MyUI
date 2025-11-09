import type { JSX } from "solid-js";
import type { ThemeProps, AnimationProps, StyleProps, WithTitle, WithOptions, InteractionProp } from "../../Interfaces";
import type { ComponentHookResult } from "../../Interfaces/types/ComponentHookResult";

export interface IMyNavProps extends ThemeProps, StyleProps, WithTitle, WithOptions, AnimationProps {
    children?: JSX.Element;
    menu?: JSX.Element;
    /** 交互策略或预设 key（如 'rich' | 'basic' | 'none'） */
    interaction?: InteractionProp;
}

export interface IMyNavContext extends Omit<IMyNavProps, 'children'> {
    slots?: ComponentHookResult['slots'];
}
