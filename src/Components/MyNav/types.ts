import type { JSX } from "solid-js";
import type { ThemeProps } from "../../Interfaces/theme/theme";
import type { StyleProps } from "../../Interfaces/core/style";
import type { WithTitle, WithOptions } from "../../Interfaces/layout/slots/slots";
import type { AnimationProps } from "../../Interfaces/theme/animation";
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction";
export interface IMyNavProps extends ThemeProps, StyleProps, WithTitle, WithOptions, AnimationProps {
    children?: JSX.Element;
    menu?: JSX.Element;
    /** 是否开启容器 hover/active 等交互效果 */
    interactionEnabled?: boolean;
    /** 交互策略或预设 key（如 'rich' | 'basic' | 'none'） */
    interaction?: InteractionPolicy | string | undefined;
}

export interface IMyNavContext extends Omit<IMyNavProps, 'children'> {
    // Add any nav-specific context properties here if needed
}
