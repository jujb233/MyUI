import type { JSX } from "solid-js";
import type { ThemeProps, AnimationProps } from "../../Interfaces/theme";
import type { StyleProps } from "../../Interfaces/core";
import type { WithTitle, WithOptions } from "../../Interfaces/component";

export interface IMyNavProps extends ThemeProps, StyleProps, WithTitle, WithOptions, AnimationProps {
    children?: JSX.Element;
    menu?: JSX.Element;
    /** 是否开启容器 hover/active 等交互效果 */
    interactionEnabled?: boolean;
    /** 交互策略或预设 key（如 'rich' | 'basic' | 'none'） */
    interaction?: string | undefined;
}

export interface IMyNavContext extends Omit<IMyNavProps, 'children'> {
    // Add any nav-specific context properties here if needed
}
