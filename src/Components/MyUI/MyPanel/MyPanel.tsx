import { PanelProvider } from "./PanelContext";
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";
import PanelFooter from "./PanelFooter";
import { useMyPanel } from "../Hooks/useMyPanel";
import { useAnimation } from "../Hooks/useAnimation";
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
    animation,
    interaction,
}: MyPanelProps) {
    const { panelStyle, panelClasses } = useMyPanel({ variant, size, glass, shadow, className, disabled, title: typeof title === 'string' ? title : undefined, backgroundImage, interaction });
    const animationClasses = useAnimation(animation);
    const classes = [panelClasses, animationClasses].filter(Boolean).join(" ");
    return (
        <PanelProvider value={{ variant, size, glass, shadow, disabled, title, backgroundImage, interaction }}>
            <div className={classes} style={{ ...panelStyle, ...(style || {}) }}>
                <PanelHeader title={title} />
                <PanelContent>{children}</PanelContent>
                {footer && <PanelFooter>{footer}</PanelFooter>}
            </div>
        </PanelProvider>
    );
}

export default MyPanel;
