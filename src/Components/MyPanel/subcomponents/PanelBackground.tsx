import { type Component, Show } from "solid-js"

// 背景图子组件 props 类型
type MyPanelBackgroundProps = {
    // 明确允许 undefined，以兼容严格的 exactOptionalPropertyTypes 配置
    backgroundImage?: string | undefined
    class?: string | undefined
}

export const PanelBackground: Component<MyPanelBackgroundProps> = (props) => {
    return (
        <Show when={props.backgroundImage}>
            <img
                src={props.backgroundImage}
                alt=""
                aria-hidden
                class={props.class}
            />
        </Show>
    )
}