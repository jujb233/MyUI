import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options";
import { buildHookInteractionClasses } from "../Interfaces/Interaction";
import { useComponentStyle } from "../../../Hooks/useComponentStyle";
import clsx from "clsx";

export type UseMyPanelProps = {
    variant?: ComponentVariant;
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
        variant: variantProp,
        size = "medium",
        glass = true,
        shadow = "md",
        className = "",
        disabled = false,
        title,
        backgroundImage,
    } = props;

    const role = variantProp?.role || 'primary';
    const color = variantProp?.color || 'blue';
    const variant = VARIANT_ROLE_STYLES[role] as any;

    const sizeStyle = SIZE_CONFIG[size];

    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: true,
        shadow,
        elevationKind: 'panel',
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
        !disabled && buildHookInteractionClasses({ enabled: true, focusRing: false }),
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
        // 统一命名别名
        rootStyle: panelStyle,
        rootClasses: panelClasses,
        disabled,
        title,
        backgroundImage,
        glass,
    };
}
