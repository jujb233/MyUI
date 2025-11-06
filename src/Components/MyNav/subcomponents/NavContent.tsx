import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import type { Component, JSX } from "solid-js"

const NavContent: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    const classes = useMyNav(context)
    return <div class={classes.content}>{props.children}</div>
}

export default NavContent
