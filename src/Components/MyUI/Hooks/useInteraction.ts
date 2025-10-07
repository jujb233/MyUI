/**
 * useInteraction / buildHookInteractionClasses
 * 简要：根据交互策略（hover/focus/active/disabled）生成一组 Tailwind CSS 类
 * 用途：供组件在构建交互效果时复用（例如按钮、面板、卡片等）
 */
import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from "../../../Options/Interactions/interaction"
import type { InteractionPolicy } from "../Interfaces/behavior/interaction"

/**
 * 构建交互类名
 */
export function buildHookInteractionClasses(policy: InteractionPolicy = {}): string {
  const {
    enabled = true,
    behavior = DEFAULT_INTERACTION_BEHAVIOR,
    effects = DEFAULT_INTERACTION_EFFECTS,
    classes = {},
  } = policy

  if (!enabled) return ''

  const interactionClasses: string[] = []

  // 若启用过渡，则添加基础过渡类
  if (behavior.transition) {
    interactionClasses.push('transition-all duration-200 ease-in-out')
  }

  // 处理 hover（悬停）相关的类：scale / opacity / 用户自定义类
  if (behavior.hover) {
    if (effects.scale?.hover) {
      interactionClasses.push(`hover:scale-[${String(effects.scale.hover)}]`)
    }
    if (effects.opacity?.hover) {
      // 使用 Tailwind arbitrary value 语法，例如 hover:opacity-[0.9]
      const v = String(effects.opacity.hover)
      interactionClasses.push(`hover:opacity-[${v}]`)
    }
    if (classes.hover) {
      interactionClasses.push(classes.hover)
    }
  }

  // 处理 focus（聚焦）相关的可访问性样式与自定义类
  if (behavior.focus) {
    interactionClasses.push(
      'focus:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-2',
      'focus-visible:ring-opacity-50'
    )
    if (classes.focus) {
      interactionClasses.push(classes.focus)
    }
  }

  // 处理 active（按下/激活）相关的类
  if (behavior.active) {
    if (effects.scale?.active) {
      interactionClasses.push(`active:scale-[${String(effects.scale.active)}]`)
    }
    if (effects.opacity?.active) {
      const v = String(effects.opacity.active)
      interactionClasses.push(`active:opacity-[${v}]`)
    }
    if (classes.active) {
      interactionClasses.push(classes.active)
    }
  }

  // 处理 disabled（禁用）相关的类，通常用于设置不可交互样式
  if (behavior.disabled) {
    if (effects.scale?.disabled) {
      interactionClasses.push(`disabled:scale-[${String(effects.scale.disabled)}]`)
    }
    if (effects.opacity?.disabled) {
      const v = String(effects.opacity.disabled)
      interactionClasses.push(`disabled:opacity-[${v}]`)
    }
    interactionClasses.push('disabled:cursor-not-allowed')
    if (classes.disabled) {
      interactionClasses.push(classes.disabled)
    }
  }

  // 过滤空字符串并以空格连接，返回最终可用的 className 字符串
  return interactionClasses.filter(Boolean).join(' ')
}