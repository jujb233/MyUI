import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import { MyTitle } from "../../Parts"
import type { Component, JSX } from "solid-js"

const NavTitle: Component<{ children?: JSX.Element }> = (props) => {
    const context = useNavContext()
    const { slots } = useMyNav(context)
    return (<MyTitle level={4} class={slots?.brand ?? ''}>{props.children}</MyTitle>)
}

export default NavTitle
