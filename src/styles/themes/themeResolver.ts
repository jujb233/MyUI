import { DEFAULT_VARIANT_COLOR, type VariantName } from "../colorThemes";
import { type ColorPresetName, PRESET_CARD_THEMES, PRESET_THEMES } from "./colorPresets";
import { buildCardTheme, buildTheme, type ComponentTheme } from "./themeBuilder";
import { adjustHex, isHexColor } from "../utils/colorUtils";

export type ThemeResolverParams = {
    variant?: VariantName;
    color?: ColorPresetName | string; // 允许自定义十六进制颜色
    isCard?: boolean;
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
    const { variant = 'normal', color, isCard = false } = params;
    const presetThemes = isCard ? PRESET_CARD_THEMES : PRESET_THEMES;

    let themeColor: ColorPresetName | string | undefined = color;

    // 如果没有 color，则根据 variant 查找默认 color
    if (!themeColor) {
        themeColor = DEFAULT_VARIANT_COLOR[variant];
    }

    // 检查 themeColor 是否为预设名称
    if (themeColor && themeColor in presetThemes) {
        return presetThemes[themeColor as ColorPresetName];
    }

    // 检查 themeColor 是否为十六进制颜色
    if (typeof themeColor === 'string' && isHexColor(themeColor)) {
        const from = themeColor;
        const to = adjustHex(themeColor, -12);
        return isCard ? buildCardTheme(from, to) : buildTheme(from, to);
    }

    // 兜底方案：返回 normal 变体的默认主题
    const fallbackColor = DEFAULT_VARIANT_COLOR['normal'];
    return presetThemes[fallbackColor];
};
