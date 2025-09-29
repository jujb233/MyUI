// 公共类型
export type { Color, VariantRole, ComponentVariant } from './Themes/variant';
export type { IntensityName as VariantName } from './Themes/colorThemes';
export type { ColorPresetName } from './Themes/colorPresets';
export type { SizeName } from './Styles/sizeConfig';
export type { ShadowName } from './Styles/styleConstants';

// 主题解析器 (核心 API)
export { computeComponentTheme, type ThemeOptions as ComponentThemeParams, type ComponentThemeResult } from './Utils/componentTheme';

// 尺寸配置
export { SIZE_CONFIG } from './Styles/sizeConfig';
export { DEFAULT_STYLES } from './Styles/styleConstants';

// 样式常量
export { INTENSITY as VARIANTS, DEFAULT_BASE_COLOR } from './Themes/colorThemes';

// 变体行为配置
export { VARIANT_ROLE_STYLES } from './Themes/variant';

// Hooks & utils
export { useThemeStyles as useComponentTheme } from './Utils/useComponentTheme';

// Elevation & Interaction
export { resolveElevation } from './Styles/elevation';
export type { ElevationKind } from './Styles/elevation';
export { buildInteractionClasses } from './Interactions/interaction';
export type { BuildInteractionOptions } from './Interactions/interaction';
