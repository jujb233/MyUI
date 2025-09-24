import React from "react";
import clsx from "clsx";
import {
    SIZE_CONFIG,
    useComponentTheme,
    buildInteractionClasses,
    type VariantName,
    type ColorPresetName,
    type SizeName,
    type ShadowName,
} from "../../../Styles";
import { PanelProvider } from "./Context";
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";
import PanelFooter from "./PanelFooter";

export type MyPanelProps = {
    variant?: VariantName;
    color?: ColorPresetName | string;
    size?: SizeName;
    glass?: boolean;
    shadow?: ShadowName;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    title?: string;
    backgroundImage?: string;
    footer?: React.ReactNode;
};

function MyPanel({
    variant = "normal",
    color,
    size = "medium",
    glass = true,
    shadow = "md",
    className = "",
    children,
    disabled = false,
    title,
    backgroundImage,
    footer,
}: MyPanelProps) {
    const sizeStyle = SIZE_CONFIG[size];
    const { style: themedStyle } = useComponentTheme({ variant, color, glass, shadow, elevationKind: 'panel', isCard: glass });
    const panelStyle: React.CSSProperties = {
        ...themedStyle,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    };
    return (
        <PanelProvider value={{ variant, color, size, glass, shadow, disabled, title, backgroundImage }}>
            <div
                className={clsx(
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
                )}
                style={panelStyle}
            >
                <PanelHeader title={title} />
                <PanelContent>{children}</PanelContent>
                {footer && <PanelFooter>{footer}</PanelFooter>}
            </div>
        </PanelProvider>
    );
}

export default MyPanel;
