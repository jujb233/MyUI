import { useCardContext } from "../CardContext";
import MyTitle from "../../Parts/myTitle/myTitle"
import { Show } from "solid-js";
import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export const CardHeader: Component<{ children?: JSX.Element; class?: string }> = (props) => {
    // 防御性：当 CardHeader 未包裹在 <MyCard> 内时，优雅降级而非直接抛错
    let headerClasses = ""
    let titleClasses = ""

    try {
        const ctx = useCardContext()
        headerClasses = ctx.headerClasses
        titleClasses = ctx.titleClasses
    } catch (err) {
        // 在开发环境提示一次，生产环境静默降级
        try {
            // 某些环境下没有 import.meta，添加保护
            // @ts-ignore
            if ((import.meta as any)?.env?.DEV) {
                // eslint-disable-next-line no-console
                console.warn("[MyUI] <CardHeader> used outside of <MyCard>.Provider. Rendering with fallback styles.")
            }
        } catch { }
    }

    // Header 仅负责展示标题或内联内容
    const imageNode: JSX.Element = null

    return (
        <div class={clsx(headerClasses, props.class)}>
            {imageNode}
            <Show when={props.children}>
                <MyTitle level={3} class={titleClasses}>{props.children}</MyTitle>
            </Show>
        </div>
    )
}