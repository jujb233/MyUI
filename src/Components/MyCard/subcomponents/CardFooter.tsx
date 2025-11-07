import { useCardContext } from "../CardContext";
import { Show } from "solid-js";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardFooter: Component<{ children?: JSX.Element; class?: string }> = (props) => {
    const { slots } = useCardContext();
    return (
        <Show when={props.children}>
            <div
                class={clsx(
                    slots.footer,
                    props.class
                )}
            >
                {props.children}
            </div>
        </Show>
    );
}
