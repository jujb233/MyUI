import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavOptions: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    const classes = useMyNav(context)
    return <div class={classes.options}>{props.children}</div>
}

export default NavOptions
