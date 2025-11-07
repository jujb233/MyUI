import { useCardContext } from "../CardContext";
import MyTitle from "../../Parts/myTitle/myTitle";
import { Show } from "solid-js";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardHeader: Component<{ children?: JSX.Element; class?: string }> = (props) => {
    let headerClasses = "";
    let titleClasses = "";

    try {
        const { slots } = useCardContext();
        headerClasses = slots.header;
        titleClasses = slots.title;
    } catch (err) {
        try {
            if ((import.meta as any)?.env?.DEV) {
                console.warn("[MyUI] <CardHeader> used outside of <MyCard>.Provider. Rendering with fallback styles.");
            }
        } catch { }
    }

    return (
        <div class={clsx(headerClasses, props.class)}>
            <Show when={props.children}>
                <MyTitle level={3} class={titleClasses}>{props.children}</MyTitle>
            </Show>
        </div>
    );
}