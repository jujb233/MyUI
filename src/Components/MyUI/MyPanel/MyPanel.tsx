import { PanelProvider } from "./PanelContext";
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";
import PanelFooter from "./PanelFooter";
import { useMyPanel } from "../Hooks/useMyPanel";
import type { MyPanelProps } from "./Interface/myPanelProps";

function MyPanel({
    variant,
    size = "medium",
    glass = true,
    shadow = "md",
    className = "",
    style,
    children,
    disabled = false,
    title,
    backgroundImage,
    footer,
}: MyPanelProps) {
    const { panelStyle, panelClasses } = useMyPanel({ variant, size, glass, shadow, className, disabled, title: typeof title === 'string' ? title : undefined, backgroundImage });
    return (
        <PanelProvider value={{ variant, size, glass, shadow, disabled, title, backgroundImage }}>
            <div className={panelClasses} style={{ ...panelStyle, ...(style || {}) }}>
                <PanelHeader title={title} />
                <PanelContent>{children}</PanelContent>
                {footer && <PanelFooter>{footer}</PanelFooter>}
            </div>
        </PanelProvider>
    );
}

export default MyPanel;
