import { PanelProvider } from "./PanelContext"
import PanelHeader from "./PanelHeader"
import PanelContent from "./PanelContent"
import PanelFooter from "./PanelFooter"
import { useMyPanel } from "../../Hooks"
import type { MyPanelProps } from "./myPanelProps"
import { ErrorBoundary } from "../../Utils"

function MyPanel({
    variant,
    size = "medium",
    glass = true,
    shadow = "md",
    className = "",
    children,
    disabled = false,
    title,
    backgroundImage,
    footer,
    interaction,
    animation,
}: MyPanelProps) {
    const { panelClasses } = useMyPanel({ variant, size, glass, shadow, className, disabled, title: typeof title === 'string' ? title : undefined, backgroundImage, interaction, animation })
    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={{ variant, size, glass, shadow, disabled, title, backgroundImage, interaction }}>
                <div className={panelClasses}>
                    {backgroundImage ? (
                        <img src={backgroundImage} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 select-none" />
                    ) : null}
                    <div className="relative z-10">
                        <PanelHeader title={title} />
                        <PanelContent>{children}</PanelContent>
                        {footer && <PanelFooter>{footer}</PanelFooter>}
                    </div>
                </div>
            </PanelProvider>
        </ErrorBoundary>
    )
}

export default MyPanel
