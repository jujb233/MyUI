import { useMemo } from "react";
import { useComponentTheme, type VariantName, type ColorPresetName, type ShadowName } from "../Styles";
import type { ElevationKind } from "../Styles";

/**
 * @description `useComponentStyle` 的属性
 */
export type UseComponentStyleProps = {
    /**
     * @description 样式变体
     * @default "solid"
     */
    variant?: VariantName;
    /**
     * @description 颜色预设或自定义颜色
     */
    color?: ColorPresetName | string;
    /**
     * @description 是否启用玻璃效果
     * @default true
     */
    glass?: boolean;
    /**
     * @description 是否带边框
     * @default true
     */
    bordered?: boolean;
    /**
     * @description 阴影级别
     * @default "md"
     */
    shadow?: ShadowName;
    /**
     * @description 海拔效果类型
     * @default "card"
     */
    elevationKind?: ElevationKind;
};

/**
 * @description 根据组件属性动态生成内联样式
 * @param props `useComponentStyle` 的属性
 * @returns `style` 内联样式对象, `theme` 主题变量对象
 */
export function useComponentStyle(props: UseComponentStyleProps) {
    const {
        variant = "solid",
        color,
        glass = true,
        bordered = true,
        shadow = "md",
        elevationKind = "card",
    } = props;

    const { style: themedStyle, theme } = useComponentTheme({
        variant,
        color,
        glass,
        shadow,
        elevationKind,
    });

    const style = useMemo(() => ({
        ...themedStyle,
        border: bordered ? `1px solid ${theme["--border"]}` : "none",
    }), [themedStyle, bordered, theme]);

    return { style, theme };
}
