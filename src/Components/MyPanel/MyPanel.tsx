import { useMyPanel } from "../../Hooks";
import type { IMyPanelProps, IMyPanelContext } from "./types";
import { ErrorBoundary } from "../../Utils";
import { PanelBackground } from "./subcomponents/PanelBackground";
import { createSubcomponentContext } from "../../Utils/componentFactory";
import { type Component, splitProps } from "solid-js";

export const [usePanelContext, PanelProvider] = createSubcomponentContext<IMyPanelContext>('MyPanel');

// 组合式 Panel 组件
const MyPanel: Component<IMyPanelProps> = (props) => {
    const [local, others] = splitProps(props, ["children", "backgroundImage"]);

    // 交由 useMyPanel 生成所有样式
    const styles = useMyPanel(props);

    const contextValue: IMyPanelContext = {
        ...others,
    };

    return (
        <ErrorBoundary fallback={<div class="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={contextValue}>
                <div class={styles.panel}>
                    <PanelBackground backgroundImage={local.backgroundImage} class={styles.background} />
                    <div class="relative z-10">
                        {local.children}
                    </div>
                </div>
            </PanelProvider>
        </ErrorBoundary>
    );
}

export default MyPanel
