import { DEFAULT_BASE_COLOR, type IntensityName } from "./colorThemes"
import { baseColors } from "../../Styles/config/base"
import { buildThemeByIntensity, type ComponentTheme } from "./themeBuilder"
import { adjustColorBrightness, isHexColor } from "../../Utils"

export type ColorPresetName = keyof typeof baseColors

export type ThemeResolverParams = {
    intensity?: IntensityName
    color?: ColorPresetName | string
}

/**
 * 解析并返回最终的组件主题
 *
 * 逻辑:
 * 1. 如果提供了 `color` 且是合法的十六进制值，则动态构建主题。
 * 2. 如果提供了 `color` 且是预set 名称，则使用该预设主题。
 * 3. 如果只提供了 `intensity`，则使用该强度对应的默认颜色预设。
 * 4. 如果什么都没提供，则回退到 'solid' 强度的默认主题。
 *
 * @returns `ComponentTheme` 对象
 */
export const resolveTheme = (params: ThemeResolverParams): ComponentTheme => {
    const { intensity: intensity = 'solid', color } = params
    // 构建或获取预设主题（基于 styles/config/base.ts 中的 baseColors）
    const COLOR_PRESET_NAMES = Object.keys(baseColors) as ColorPresetName[]
    const presetThemes: Record<ColorPresetName, Record<IntensityName, ComponentTheme>> = COLOR_PRESET_NAMES.reduce(
        (acc, name) => {
            const val = (baseColors as any)[name]
            if (!val || typeof val === 'string' || !('from' in val && 'to' in val)) return acc
            const { from, to } = val
            acc[name] = {
                solid: buildThemeByIntensity(from, to, 'solid'),
                soft: buildThemeByIntensity(from, to, 'soft'),
                subtle: buildThemeByIntensity(from, to, 'subtle'),
                text: buildThemeByIntensity(from, to, 'text'),
            }
            return acc
        },
        {} as Record<ColorPresetName, Record<IntensityName, ComponentTheme>>
    )

    let themeColor: ColorPresetName | string | undefined = (color ?? DEFAULT_BASE_COLOR) as any

    // 1) 预设名称：返回嵌套结构的对应强度
    if (themeColor && typeof themeColor === 'string' && themeColor in presetThemes) {
        return presetThemes[themeColor as ColorPresetName][intensity]
    }

    // 2) 十六进制颜色：按强度构建
    if (typeof themeColor === 'string' && isHexColor(themeColor)) {
        const from = themeColor
        const to = adjustColorBrightness(themeColor, -12)
        return buildThemeByIntensity(from, to, intensity)
    }

    // 3) 备用方案：默认颜色 + 指定强度
    return presetThemes[DEFAULT_BASE_COLOR][intensity]
}
