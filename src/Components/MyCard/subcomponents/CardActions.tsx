import { useCardContext } from "../CardContext";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardActions: Component<{ children: JSX.Element; class?: string }> = (props) => {
    const { actionsClasses } = useCardContext()
    return <div class={clsx(actionsClasses, props.class)}>{props.children}</div>
}
