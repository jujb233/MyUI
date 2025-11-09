import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavContent: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    return <div class={context.slots?.content ?? ''}>{props.children}</div>
}

export default NavContent
