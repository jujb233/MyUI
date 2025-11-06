// src/types.ts

import { baseColors, sizeConfig, shadows } from "./styles/config/base";

export type Color = keyof typeof baseColors;
export type SizeName = keyof typeof sizeConfig;
export type ShadowName = keyof typeof shadows;

export type VariantRole = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text';

export interface ComponentVariant {
    role: VariantRole;
    color: Color;
}
