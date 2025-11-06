import { type Component, type JSX, Show } from "solid-js"

// ButtonIcon: 渲染按钮左侧的图标区域，负责图标的间距和垂直居中
const ButtonIcon: Component<{ icon: JSX.Element }> = (props) => {
    const cls = "mr-2 flex items-center"
    return (
        <Show when={props.icon}>
            <span class={cls}>{props.icon}</span>
        </Show>
    )
}

export default ButtonIcon
