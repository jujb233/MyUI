import { useCardContext } from "../CardContext";
import { Show } from "solid-js";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardFooter: Component<{ children?: JSX.Element; class?: string }> = (props) => {
    const { footerClasses } = useCardContext()
    return (
        <Show when={props.children}>
            <div
                class={clsx(
                    footerClasses,
                    props.class
                )}
            >
                {props.children}
            </div>
        </Show>
    )
}
