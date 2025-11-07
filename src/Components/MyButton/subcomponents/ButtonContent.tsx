import { type Component, type JSX } from "solid-js"
import { useButtonContext } from "../MyButton"

// ButtonContent: 按钮的主内容区域，负责文本内容自适应与文本截断
const ButtonContent: Component<{ children?: JSX.Element }> = (props) => {
    const context = useButtonContext()
    return <span class={context.slots.content}>{props.children}</span>
}

export default ButtonContent
