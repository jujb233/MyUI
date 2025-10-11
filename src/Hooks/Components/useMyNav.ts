import { VARIANT_ROLE_STYLES } from "../../Options"
import type { AnimationProp } from "../../Options"
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
    interaction?: InteractionPolicy | string
    animation?: AnimationProp
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
        animation,
    } = options

    // 解构 options 并使用默认值

    // 通过主题 hook 获取对应的 theme 类与行内样式，合并 style 为 className
    const role = variant?.role || 'primary'
    const color = variant?.color || 'blue'
    const intensity = VARIANT_ROLE_STYLES[role]
    const themeColorClass = `myui-color-${color}`
    const themeVariantClass = `myui-variant-${intensity}`
    const shadowMap: Record<ShadowName, string> = {
        xs: 'shadow-sm',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        '2xl': 'shadow-2xl',
        inner: 'shadow-inner',
        none: 'shadow-none',
    }
    const elevationClass = glass ? 'myui-gs-md' : (shadowMap[shadow] || 'shadow-none')

    const navClasses = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add(`my-nav-${size}`)
        .add(
            glass
                ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]'
        )
        .add('text-[var(--text)]')
        .add(elevationClass)
        .addAnimation(animation)
        .addIf(glass, 'backdrop-blur-md')
        .addInteraction(
            interactionEnabled
                ? (typeof interaction === 'string'
                    ? (INTERACTION_PRESETS as Record<string, any>)[interaction] ?? INTERACTION_PRESETS.none
                    : interaction)
                : undefined
        )
        .add(className)
        .build()
    // 返回样式与类名，移除 style 相关
    return { navClasses}
}
