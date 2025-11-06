import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavMenu: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    const classes = useMyNav(context)
    return <ul class={classes.menu}>{props.children}</ul>
}

export default NavMenu
