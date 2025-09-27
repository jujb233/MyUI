import React from "react";
import {
    type VariantName,
    type ColorPresetName,
    type SizeName,
    type ShadowName,
} from "../../../Styles";
import { PanelProvider } from "./Context";
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";
import PanelFooter from "./PanelFooter";
import { useMyPanel } from "../Hooks/useMyPanel";

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
    variant = "solid",
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
    const { panelStyle, panelClasses } = useMyPanel({ variant, color, size, glass, shadow, className, disabled, title, backgroundImage });
    return (
        <PanelProvider value={{ variant, color, size, glass, shadow, disabled, title, backgroundImage }}>
            <div className={panelClasses} style={panelStyle}>
                <PanelHeader title={title} />
                <PanelContent>{children}</PanelContent>
                {footer && <PanelFooter>{footer}</PanelFooter>}
            </div>
        </PanelProvider>
    );
}

export default MyPanel;
