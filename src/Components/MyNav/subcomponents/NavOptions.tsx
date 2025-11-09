import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavOptions: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    return <div class={context.slots?.options ?? ''}>{props.children}</div>
}

export default NavOptions
