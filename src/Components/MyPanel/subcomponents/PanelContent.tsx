import { usePanelContext } from "../PanelContext"
import type { Component, JSX } from "solid-js"

const PanelContent: Component<{ children?: JSX.Element }> = (props) => {
    const { slots } = usePanelContext()
    return <div class={slots.content}>{props.children}</div>
}

export default PanelContent
