import { usePanelContext } from "../PanelContext"
import type { Component, JSX } from "solid-js"

const PanelFooter: Component<{ children?: JSX.Element }> = (props) => {
    const { slots } = usePanelContext()
    return <div class={slots.footer}>{props.children}</div>
}

export default PanelFooter
