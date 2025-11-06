import { type Component, type JSX, Show } from "solid-js";

// ButtonActions: 渲染按钮右侧的附加操作区域（例如下拉箭头或操作按钮）
const ButtonActions: Component<{ children?: JSX.Element }> = (props) => {
    const cls = "ml-2 flex items-center";
    return (
        <Show when={props.children}>
            <span class={cls}>{props.children}</span>
        </Show>
    );
};

export default ButtonActions;
