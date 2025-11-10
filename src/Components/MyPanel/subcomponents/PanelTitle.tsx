import { usePanelContext } from "../PanelContext"
import MyTitle from "../../Parts/myTitle/myTitle"
import { type Component, type JSX, Show } from "solid-js"

// Accept children so usage like <MyPanel.Header>Panel Header</MyPanel.Header> works
const PanelTitle: Component<{ children?: JSX.Element }> = (props) => {
    const { slots } = usePanelContext()
    return (
        <Show when={props.children}>
            <MyTitle level={2} class={slots.header}>{props.children}</MyTitle>
        </Show>
    )
}

export default PanelTitle
