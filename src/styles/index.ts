// 公共类型
export type { VariantName } from './colorThemes';
export type { ColorPresetName } from './themes/colorPresets';
export type { SizeName, CardSizeName } from './sizeConfig';
export type { ShadowName } from './styleConstants';

// 主题解析器 (核心 API)
export { resolveTheme, type ThemeResolverParams } from './themes/themeResolver';

// 尺寸配置
export { SIZE_CONFIG, CARD_SIZE_CONFIG } from './sizeConfig';

// 样式常量
export { DEFAULT_STYLES, SHADOWS, GLASS_SHADOWS } from './styleConstants';

// 可用的颜色和变体 (用于文档或 Storybook)
export { COLOR_PRESET_NAMES } from './themes/colorPresets';
export { VARIANTS, DEFAULT_VARIANT_COLOR } from './colorThemes';
