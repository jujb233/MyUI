import { type Component, type JSX } from "solid-js"

// ButtonContent: 按钮的主内容区域，负责文本内容自适应与文本截断
const ButtonContent: Component<{ children?: JSX.Element }> = (props) => {
    const cls = "flex-1 truncate"
    return <span class={cls}>{props.children}</span>
}

export default ButtonContent
