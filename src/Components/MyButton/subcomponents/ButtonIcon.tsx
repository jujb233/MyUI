import { type Component, type JSX, Show } from "solid-js"
import { useButtonContext } from "../MyButton"

// ButtonIcon: 渲染按钮左侧的图标区域，负责图标的间距和垂直居中
const ButtonIcon: Component<{ icon: JSX.Element }> = (props) => {
    const context = useButtonContext()
    return (
        <Show when={props.icon}>
            <span class={context.slots.icon}>{props.icon}</span>
        </Show>
    )
}

export default ButtonIcon
