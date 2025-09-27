import { SIZE_CONFIG, type VariantName, type ColorPresetName, type SizeName, type ShadowName, buildInteractionClasses } from "../../../Styles";
import { useComponentStyle } from "../../../Hooks/useComponentStyle";
import clsx from "clsx";

export type UseMyPanelProps = {
    variant?: VariantName;
    color?: ColorPresetName | string;
    size?: SizeName;
    glass?: boolean;
    shadow?: ShadowName;
    className?: string;
    disabled?: boolean;
    title?: string;
    backgroundImage?: string;
};

export function useMyPanel(props: UseMyPanelProps) {
    const {
        variant = "solid",
        color,
        size = "medium",
        glass = true,
        shadow = "md",
        className = "",
        disabled = false,
        title,
        backgroundImage,
    } = props;

    const sizeStyle = SIZE_CONFIG[size];

    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: true,
        shadow,
        elevationKind: 'panel',
        isCard: glass,
    });

    const panelStyle: React.CSSProperties = {
        ...themedStyle,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    } as React.CSSProperties;

    const panelClasses = clsx(
        "relative overflow-hidden rounded-2xl",
        sizeStyle.padding,
        sizeStyle.fontSize,
        "transition-all duration-300 ease-out",
        glass
            ? "[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] text-[var(--text)]"
            : "[background:var(--bg)] hover:[background:var(--bg-hover)] text-[var(--text)]",
        !disabled && buildInteractionClasses({ kind: 'panel', enabled: true }),
        glass && "backdrop-blur-md",
        backgroundImage && "bg-cover bg-center",
        disabled && "opacity-60 cursor-not-allowed",
        className
    );

    return {
        size,
        sizeStyle,
        panelStyle,
        panelClasses,
        disabled,
        title,
        backgroundImage,
        glass,
    };
}
