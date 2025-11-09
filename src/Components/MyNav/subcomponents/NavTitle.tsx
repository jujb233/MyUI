import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import { MyTitle } from "../../Parts"
import type { Component, JSX } from "solid-js"

const NavTitle: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    const classes = useMyNav(context)
    return (<MyTitle level={4} class={classes.brand}>{props.children}</MyTitle>)
}

export default NavTitle
