import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavMenu: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    const { slots } = useMyNav(context)
    return <ul class={slots?.menu ?? ''}>{props.children}</ul>
}

export default NavMenu
