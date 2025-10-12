import { useMyPanel } from "../../Hooks";
import type { IMyPanelProps, IMyPanelContext } from "./types";
import { ErrorBoundary } from "../../Utils";
import { PanelBackground } from "./subcomponents/PanelBackground";
import { createCompoundComponentContext } from "../../Utils/componentFactory";

export const [usePanelContext, PanelProvider] = createCompoundComponentContext<IMyPanelContext>('MyPanel');

// 组合式 Panel 组件
function MyPanel(props: IMyPanelProps) {
    const {
        children,
        ...restProps
    } = props;

    // 交由 useMyPanel 生成所有样式
    const styles = useMyPanel(props);

    const contextValue: IMyPanelContext = {
        ...restProps,
    };

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={contextValue}>
                <div className={styles.panel}>
                    <PanelBackground backgroundImage={props.backgroundImage} className={styles.background} />
                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </PanelProvider>
        </ErrorBoundary>
    );
}

export default MyPanel
