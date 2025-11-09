import { type Component, type JSX, Show } from "solid-js"
import { useButtonContext } from "../ButtonContext"

// ButtonOptions: 渲染按钮右侧的附加操作区域（例如下拉箭头或操作按钮）
const ButtonOptions: Component<{ children?: JSX.Element }> = (props) => {
    const context = useButtonContext()
    return (
        <Show when={props.children}>
            <span class={context.slots.options}>{props.children}</span>
        </Show>
    )
}

export default ButtonOptions
