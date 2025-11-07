import { useCardContext } from "../CardContext";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardActions: Component<{ children: JSX.Element; class?: string }> = (props) => {
    const { slots } = useCardContext();
    return <div class={clsx(slots.actions, props.class)}>{props.children}</div>;
}
