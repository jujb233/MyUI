import { useCardContext } from "../CardContext";
import { Show } from "solid-js";
import type { Component } from "solid-js";

export const CardImage: Component<{ src: string; alt?: string }> = (props) => {
    const { imagePosition, imageClasses } = useCardContext()

    return (
        <Show
            when={imagePosition === "center"}
            fallback={<img src={props.src} alt={props.alt || ""} class={imageClasses} />}
        >
            <div class={imageClasses}>
                <img src={props.src} alt={props.alt || ""} class="absolute inset-0 h-full w-full object-cover opacity-10" />
            </div>
        </Show>
    )
}
