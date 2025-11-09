import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavMenu: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    return <ul class={context.slots?.menu ?? ''}>{props.children}</ul>
}

export default NavMenu
