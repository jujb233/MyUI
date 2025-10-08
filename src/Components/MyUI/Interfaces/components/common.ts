import type * as React from 'react'
import type { ComponentVariant, SizeName, ShadowName } from '../../../../Options'
import type { AnimationProp } from '../../../../Options/Animations/Animation'
import type { InteractionPolicy } from '../behavior/interaction'
import { INTERACTION_PRESETS } from '../../../../Options/Interactions/presets'

/**
 * 组件共有的基础 Props 定义（用于 Button/Card/Panel 等）
 */
export interface ComponentBaseProps {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    style?: React.CSSProperties
    disabled?: boolean
    /** 统一的动画属性，支持 string 或详细对象 */
    animation?: AnimationProp
    /** 交互策略：可以传 InteractionPolicy 或预设 key（'rich'|'basic' 等） */
    interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS
}

/** 默认值便于在 Hook 中复用 */
export const DEFAULT_COMPONENT_PROPS = {
    size: 'medium' as SizeName,
    glass: true,
    shadow: 'md' as ShadowName,
    disabled: false,
    interaction: 'rich' as keyof typeof INTERACTION_PRESETS,
}

export type AnimationPropType = AnimationProp
