import { DEFAULT_BASE_COLOR, type VariantName } from "../colorThemes";
import { type ColorPresetName, PRESET_THEMES } from "./colorPresets";
import { buildThemeByIntensity, type ComponentTheme } from "./themeBuilder";
import { adjustHex, isHexColor } from "../Utils/colorUtils";

export type ThemeResolverParams = {
    variant?: VariantName;
    color?: ColorPresetName | string; // 允许自定义十六进制颜色
};

/**
 * 解析并返回最终的组件主题
 *
 * 逻辑:
 * 1. 如果提供了 `color` 且是合法的十六进制值，则动态构建主题。
 * 2. 如果提供了 `color` 且是预set 名称，则使用该预设主题。
 * 3. 如果只提供了 `variant`，则使用该变体对应的默认颜色预设。
 * 4. 如果什么都没提供，则回退到 'normal' 变体的默认主题。
 *
 * @returns `ComponentTheme` 对象
 */
export const resolveTheme = (params: ThemeResolverParams): ComponentTheme => {
    const { variant = 'solid', color } = params;
    const presetThemes = PRESET_THEMES;

    let themeColor: ColorPresetName | string | undefined = color ?? DEFAULT_BASE_COLOR;

    // 1) 预设名称：返回嵌套结构的对应强度
    if (themeColor && typeof themeColor === 'string' && themeColor in presetThemes) {
        return presetThemes[themeColor as ColorPresetName][variant];
    }

    // 2) 十六进制颜色：按强度构建
    if (typeof themeColor === 'string' && isHexColor(themeColor)) {
        const from = themeColor;
        const to = adjustHex(themeColor, -12);
        return buildThemeByIntensity(from, to, variant);
    }

    // 3) 兜底：默认基色 + 指定强度
    return presetThemes[DEFAULT_BASE_COLOR][variant];
};
