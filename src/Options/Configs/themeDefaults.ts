import type { ComponentVariant, ShadowName } from "../../Interfaces/core";
import type { SizeName } from "../../Interfaces/core"; // adjust if SizeName lives elsewhere

/**
 * 集中管理主题/样式相关的基础默认值，避免在 default.ts 中膨胀。
 * 仅包含纯样式语义：variant/size/glass/shadow；不包含业务或结构属性。
 */
export interface ThemeDefaultConfig {
    variant: ComponentVariant | undefined;
    size: SizeName; // 基础尺寸（由 size tokens 系统解析）
    glass: boolean; // 是否启用玻璃态
    shadow: ShadowName; // 阴影等级
}

// 样式层默认：所有组件的初始主题态；业务层通过 mergeDefaults 可覆盖。
export const THEME_DEFAULTS: ThemeDefaultConfig = {
    variant: undefined,
    size: "medium",
    glass: true,
    shadow: "none",
} as const;

export type ThemeDefaultKeys = keyof typeof THEME_DEFAULTS;

/**
 * 工具：选择性抽取样式默认值（便于后续扩展，避免直接解构常量导致失去 readonly 信息）。
 */
export function pickThemeDefaults(keys: ThemeDefaultKeys[]): Partial<ThemeDefaultConfig> {
    const out: Partial<ThemeDefaultConfig> = {};
    for (const k of keys) {
        (out as any)[k] = THEME_DEFAULTS[k];
    }
    return out;
}
