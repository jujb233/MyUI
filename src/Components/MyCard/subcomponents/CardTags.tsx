import { useCardContext } from "../CardContext";
import { For } from "solid-js";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardTags: Component<{ tags: JSX.Element[]; class?: string }> = (props) => {
    const { slots } = useCardContext();
    return (
        <div class={clsx(slots.tagsContainer, props.class)}>
            <For each={props.tags}>
                {(tag) => (
                    <span
                        class={slots.tag}
                    >
                        {tag}
                    </span>
                )}
            </For>
        </div>
    );
}
