// 公共类型
export type { Color, VariantRole, ComponentVariant } from './variantBehaviors';
export type { IntensityName as VariantName } from './colorThemes';
export type { ColorPresetName } from './Themes/colorPresets';
export type { SizeName, CardSizeName } from './sizeConfig';
export type { ShadowName } from './styleConstants';

// 主题解析器 (核心 API)
export { computeComponentTheme, type ThemeOptions as ComponentThemeParams, type ComponentThemeResult } from './Utils/componentTheme';

// 尺寸配置
export { SIZE_CONFIG, CARD_SIZE_CONFIG } from './sizeConfig';
export { DEFAULT_STYLES } from './styleConstants';

// 样式常量
export { INTENSITY as VARIANTS, DEFAULT_BASE_COLOR } from './colorThemes';

// 变体行为配置
export { VARIANT_ROLE_STYLES } from './variantBehaviors';

// Hooks & utils
export { useThemeStyles as useComponentTheme } from './Utils/useComponentTheme';

// Elevation & Interaction
export { resolveElevation } from './elevation';
export type { ElevationKind } from './elevation';
export { buildInteractionClasses } from './interactionBehaviors';
