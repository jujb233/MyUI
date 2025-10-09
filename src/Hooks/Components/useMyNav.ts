import { useComponentTheme, VARIANT_ROLE_STYLES } from "../../Options"
import type { ComponentVariant, SizeName, ShadowName } from "../../Options"

import { styleUtil } from "../../Utils/styleBuilder"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import { INTERACTION_PRESETS } from "../../Options/Presets/interactionPresets"

export type UseMyNavOptions = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    /** 是否启用容器交互（默认关闭，避免导航栏整体 hover/active） */
    interactionEnabled?: boolean
    /** 容器是否显示 focus ring（默认关闭） */
    focusRing?: boolean
    interaction?: InteractionPolicy
}

export function useMyNav(options: UseMyNavOptions) {
    const {
        variant,
        size = 'medium',
        glass = false,
        shadow = 'none',
        className = '',
        interactionEnabled = false,
        interaction = 'none',
    } = options

    // 解构 options 并使用默认值

    // 通过主题 hook 获取对应的 theme 类与行内样式，合并 style 为 className
    const { theme, style: navStyle } = useComponentTheme({
        intensity: variant ? VARIANT_ROLE_STYLES[variant.role] : undefined,
        color: variant?.color,
        glass,
        shadow,
    })
    const navClasses = new styleUtil.ClassNameBuilder()
        .add('my-nav', `my-nav-${size}`)
        .add(typeof theme === 'string' ? theme : undefined)
        .addIf(
            interactionEnabled,
            styleUtil.buildInteractionClasses(typeof interaction === 'string' ? INTERACTION_PRESETS[interaction] : interaction)
        )
        .add(
            Object.entries(navStyle || {})
                .map(([k, v]) => v !== undefined ? `[${k}:${v}]` : null)
                .filter(Boolean)
                .join(' ')
        )
        .add(className)
        .build()
    // 返回样式与类名，移除 style 相关
    return { navClasses, rootClasses: navClasses }
}
