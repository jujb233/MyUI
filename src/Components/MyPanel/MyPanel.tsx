import { PanelProvider } from "./PanelContext"
import { useMyPanel } from "../../Hooks"
import type { MyPanelProps } from "./myPanelProps"
import { ErrorBoundary } from "../../Utils"
import { PanelBackground } from "./PanelBackground";

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
    // 交由 useMyPanel 生成所有样式
    // 只在有 backgroundImage 时传递该属性，避免 undefined
    const styles = useMyPanel(
        backgroundImage !== undefined
            ? { variant, size, glass, shadow, className, disabled, interaction, animation, backgroundImage }
            : { variant, size, glass, shadow, className, disabled, interaction, animation }
    );
    // 修复 interaction 可能为 undefined 的类型问题
    const safeInteraction = interaction === undefined ? 'rich' : interaction;
    const safeBackgroundImage = backgroundImage === undefined ? '' : backgroundImage;
    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={
                {
                    variant, size, glass, shadow, disabled, backgroundImage: safeBackgroundImage, interaction: safeInteraction, styles
                }}>
                <div className={styles.panel}>
                    <PanelBackground backgroundImage={backgroundImage} className={styles.background} />
                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </PanelProvider>
        </ErrorBoundary>
    )
}

export default MyPanel
