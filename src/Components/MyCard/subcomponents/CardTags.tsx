import { useCardContext } from "../CardContext";
import { For } from "solid-js";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardTags: Component<{ tags: JSX.Element[]; class?: string }> = (props) => {
    const { tagsContainerClasses, tagClasses } = useCardContext()
    return (
        <div class={clsx(tagsContainerClasses, props.class)}>
            <For each={props.tags}>
                {(tag) => (
                    <span
                        class={tagClasses}
                    >
                        {tag}
                    </span>
                )}
            </For>
        </div>
    )
}
