import clsx from 'clsx'
import { INTERACTION_PRESETS } from '../../../Options/Interactions/presets'
import { buildHookInteractionClasses } from '../Hooks/useInteraction'
import type { InteractionPolicy } from '../Interfaces/behavior/interaction'

/** 合并 className 的小工具 */
export function mergeClasses(...parts: Array<string | false | undefined | null>) {
    return clsx(parts.filter(Boolean))
}

/**
 * 将组件层传入的 interaction（可能是 key 或对象）规范化为 InteractionPolicy 再构建 class
 */
export function buildInteractionClassesFromProp(interaction?: InteractionPolicy | keyof typeof INTERACTION_PRESETS): string {
    if (!interaction) return ''
    const policy: InteractionPolicy = typeof interaction === 'string' ? (INTERACTION_PRESETS as any)[interaction] ?? {} : interaction
    return buildHookInteractionClasses(policy)
}
