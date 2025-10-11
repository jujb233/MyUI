import { PanelProvider } from "./PanelContext"
import { useMyPanel } from "../../Hooks"
import type { MyPanelProps } from "./myPanelProps"
import { ErrorBoundary } from "../../Utils"


// 组合式 Panel 组件
function MyPanel({
    variant,
    size = "medium",
    glass = true,
    shadow = "md",
    className = "",
    children,
    disabled = false,
    interaction,
    animation,
    backgroundImage,
}: MyPanelProps) {
    const styles = useMyPanel({ variant, size, glass, shadow, className, disabled, interaction, animation })
    // 修复 interaction 可能为 undefined 的类型问题
    const safeInteraction = interaction === undefined ? 'rich' : interaction;
    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={{ variant, size, glass, shadow, disabled, backgroundImage, interaction: safeInteraction, styles }}>
                <div className={styles.panel}>
                    {backgroundImage ? (
                        <img src={backgroundImage} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80 select-none" />
                    ) : null}
                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </PanelProvider>
        </ErrorBoundary>
    )
}

export default MyPanel
