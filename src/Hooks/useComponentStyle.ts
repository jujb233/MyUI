import { useMemo } from "react"
import { type Color, type ShadowName, VARIANT_ROLE_STYLES, type VariantRole, type IntensityName } from "../Options"
import type { ElevationKind } from "../Options"
import { useComponentTheme } from "./useComponentTheme"

/**
 * @description `useComponentStyle` 的属性
 */
export type UseComponentStyleProps = {
    /**
     * @description 样式变体或功能角色
     * @default "solid"
     */
    variant?: IntensityName | VariantRole
    /**
     * @description 颜色预设或自定义颜色
     */
    color?: Color | string
    /**
     * @description 是否启用玻璃效果
     * @default true
     */
    glass?: boolean
    /**
     * @description 是否带边框
     * @default true
     */
    bordered?: boolean
    /**
     * @description 阴影级别
     * @default "md"
     */
    shadow?: ShadowName
    /**
     * @description 海拔效果类型
     * @default "card"
     */
    elevationKind?: ElevationKind
}

/**
 * @description 根据组件属性动态生成内联样式
 * @param props `useComponentStyle` 的属性
 * @returns `style` 内联样式对象, `theme` 主题变量对象
 */
export function useComponentStyle(props: UseComponentStyleProps) {
    const {
        variant: variantOrRole = "solid",
        color,
        glass = true,
        bordered = true,
        shadow = "md",
        elevationKind = "card",
    } = props

    // 检查 variantOrRole 是否是角色，如果是，则从映射中获取实际的 variant 样式
    const variant = (VARIANT_ROLE_STYLES as Record<string, IntensityName>)[variantOrRole] || variantOrRole

    const { style: themedStyle, theme } = useComponentTheme({
        intensity: variant as IntensityName,
        color,
        glass,
        shadow,
        elevationKind,
    })

    const style = useMemo(() => {
        if (!theme) {
            return {} // 防御性编程，防止 theme 未定义时崩溃
        }
        return {
            ...themedStyle,
            border: bordered ? `1px solid ${theme["--border"]}` : "none",
        }
    }, [themedStyle, bordered, theme])

    return { style, theme }
}
