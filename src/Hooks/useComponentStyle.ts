import { useMemo } from "react";
import { useComponentTheme, type VariantName, type ColorPresetName, type ShadowName } from "../Styles";

export type UseComponentStyleProps = {
    variant?: VariantName;
    color?: ColorPresetName | string;
    glass?: boolean;
    bordered?: boolean;
    shadow?: ShadowName;
    elevationKind?: any; // TODO: 使用项目实际 ElevationKind 类型
    isCard?: boolean;
};

export function useComponentStyle(props: UseComponentStyleProps) {
    const {
        variant = "solid",
        color,
        glass = true,
        bordered = true,
        shadow = "md",
        elevationKind = "card",
        isCard = false,
    } = props;

    const { style: themedStyle, theme } = useComponentTheme({
        variant,
        color,
        glass,
        shadow,
        isCard,
        elevationKind,
    });

    const style = useMemo(() => ({
        ...themedStyle,
        border: bordered ? `1px solid ${theme["--border"]}` : "none",
    }), [themedStyle, bordered, theme]);

    return { style, theme };
}
