import { useCardContext } from "../CardContext";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardContent: Component<{ children?: JSX.Element; class?: string }> = (props) => {
    const { contentClasses } = useCardContext()
    // 横向布局时内容自适应
    return (
        <div
            class={clsx(
                contentClasses,
                props.class
            )}
        >
            {props.children}
        </div>
    )
}
