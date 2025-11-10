import { type Component, type JSX, Show } from "solid-js"
import { useInputContext } from "../InputContext"

const InputOptions: Component<{ children?: JSX.Element }> = (props) => {
    const ctx = useInputContext()
    return (
        <Show when={props.children}>
            <span class={ctx.slots.options}>{props.children}</span>
        </Show>
    )
}

export default InputOptions
