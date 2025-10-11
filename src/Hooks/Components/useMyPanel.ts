import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../Options"
import type { InteractionPolicy } from "../../Interfaces/behavior/interaction"
import { styleUtil } from "../../Utils/styleBuilder"
import { DEFAULT_COMPONENT_HOOK_PROPS } from "../../Interfaces/components/common"
import type { AnimationProp } from "../../Options"

export type UseMyPanelProps = {
    variant?: ComponentVariant
    size?: SizeName
    glass?: boolean
    shadow?: ShadowName
    className?: string
    disabled?: boolean
    interaction?: InteractionPolicy | string
    animation?: AnimationProp
}

export function useMyPanel(props: UseMyPanelProps) {
    const {
        variant: variantProp,
        size = DEFAULT_COMPONENT_HOOK_PROPS.size,
        glass = DEFAULT_COMPONENT_HOOK_PROPS.glass,
        shadow = DEFAULT_COMPONENT_HOOK_PROPS.shadow,
        className = "",
        disabled = DEFAULT_COMPONENT_HOOK_PROPS.disabled,
        interaction = DEFAULT_COMPONENT_HOOK_PROPS.interaction as any,
        animation,
    } = props

    // 解析 variant 与 color，并从预设获取具体 variant 配置
    const role = variantProp?.role || 'primary'
    const color = variantProp?.color || 'blue'
    const intensity = VARIANT_ROLE_STYLES[role]

    // 获取尺寸样式（padding / fontSize 等）
    const sizeStyle = SIZE_CONFIG[size as keyof typeof SIZE_CONFIG]

    // 主题类与阴影类
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
    const elevationClass = glass ? 'myui-gs-lg' : (shadowMap[shadow] || 'shadow-md')
    const panelClasses = new styleUtil.ClassNameBuilder()
        .add(themeColorClass, themeVariantClass)
        .add("relative overflow-hidden rounded-2xl")
        .add(sizeStyle.padding, sizeStyle.fontSize)
        .add(
            glass
                ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]'
        )
        .add('text-[var(--text)]')
        .add(elevationClass)
        .addAnimation(animation)
        .addIf(!!glass, "backdrop-blur-md")
        .addIf(!!disabled, "opacity-60 cursor-not-allowed")
        .addInteraction(interaction as any)
        .add(className)
        .build()
    // 返回可直接用于渲染的类名，以及一些常用属性
    return { panelClasses }
}
