import { useMyPanel } from "../../Hooks"
import type { IMyPanelProps, IMyPanelContext } from "./types"
import { ErrorCheck } from "../../Utils"
import { PanelBackground } from "./subcomponents/PanelBackground"
import { createSubcomponentContext } from "../../Utils/componentFactory"
import { type Component, splitProps } from "solid-js"

export const [usePanelContext, PanelProvider] = createSubcomponentContext<IMyPanelContext>('MyPanel')

const MyPanel: Component<IMyPanelProps> = (props) => {
    const [local, others] = splitProps(props, ["children", "backgroundImage"])

    const { slots, ...styles } = useMyPanel(props)

    const contextValue: IMyPanelContext = {
        ...others,
        slots: {
            ...slots,
            background: slots.background || "",
        },
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={contextValue}>
                <div class={styles.panel} style={styles.panelStyle}>
                    <PanelBackground backgroundImage={local.backgroundImage} class={slots.background} />
                    <div class="relative z-10">
                        {local.children}
                    </div>
                </div>
            </PanelProvider>
        </ErrorCheck>
    )
}

export default MyPanel
