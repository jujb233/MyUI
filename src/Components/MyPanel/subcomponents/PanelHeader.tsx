import { usePanelContext } from "../MyPanel"
import MyTitle from "../../Parts/myTitle/myTitle"
import { type Component, type JSX, Show } from "solid-js"

const PanelHeader: Component<{ title?: JSX.Element }> = (props) => {
    const { slots } = usePanelContext()
    return (
        <Show when={props.title}>
            <MyTitle level={2} class={slots.header}>{props.title}</MyTitle>
        </Show>
    )
}

export default PanelHeader
