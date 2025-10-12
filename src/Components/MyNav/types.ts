import type { ThemeProps, StyleProps, WithTitle, WithOptions, AnimationProps, InteractionPolicy } from "../../Interfaces";

export interface IMyNavProps extends
    ThemeProps,
    StyleProps,
    WithTitle,
    WithOptions,
    AnimationProps {
    children?: React.ReactNode;
    menu?: React.ReactNode;
    /** 是否开启容器 hover/active 等交互效果 */
    interactionEnabled?: boolean;
    /** 交互策略或预设 key（如 'rich' | 'basic' | 'none'） */
    interaction?: InteractionPolicy | string;
}

export interface IMyNavContext extends Omit<IMyNavProps, 'children'> {
    // Add any nav-specific context properties here if needed
}
