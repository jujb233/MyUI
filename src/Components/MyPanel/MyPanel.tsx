import { useMyPanel } from "../../Hooks"
import type { IMyPanelProps, IMyPanelContext } from "./types"
import { ErrorCheck } from "../../Utils"
import { PanelBackground } from "./subcomponents/PanelBackground"
// ...existing code...
import { type Component, splitProps } from "solid-js"

import { PanelProvider } from "./PanelContext"

const MyPanel: Component<IMyPanelProps> = (props) => {
    const [local, others] = splitProps(props, ["children", "backgroundImage"])

    const { rootClass, rootStyle, slots } = useMyPanel({
        ...props,
        backgroundImage: typeof props.backgroundImage === 'string' ? props.backgroundImage : ''
    })

    // slots 可能为 undefined，需保证类型安全，补全 header/content/footer
    const safeSlots = {
        background: slots?.background ?? "",
        header: slots?.header ?? "",
        content: slots?.content ?? "",
        footer: slots?.footer ?? ""
    }

    const contextValue: IMyPanelContext = {
        ...others,
        backgroundImage: typeof local.backgroundImage === 'string' ? local.backgroundImage : '',
        slots: safeSlots
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-4">Panel component failed to render.</div>}>
            <PanelProvider value={contextValue}>
                <div class={`${rootClass} ${props.class || ''}`} style={{ ...rootStyle, ...(props.style || {}) }}>
                    <PanelBackground backgroundImage={local.backgroundImage} class={safeSlots.background} />
                    <div class="relative z-10">
                        {local.children}
                    </div>
                </div>
            </PanelProvider>
        </ErrorCheck>
    )
}

export default MyPanel
