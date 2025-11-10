import { type Component, type JSX, Show } from "solid-js"
import { useInputContext } from "../InputContext"

const InputIcon: Component<{ icon?: JSX.Element }> = (props) => {
    const ctx = useInputContext()
    return (
        <Show when={props.icon}>
            <span class={ctx.slots.icon}>{props.icon}</span>
        </Show>
    )
}

export default InputIcon
