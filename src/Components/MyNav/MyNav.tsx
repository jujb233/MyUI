import NavContent from "./subcomponents/NavContent"
import NavActions from "./subcomponents/NavActions"
import NavBrand from "./subcomponents/NavBrand"
import NavMenu from "./subcomponents/NavMenu"
import { useMyNav } from "../../Hooks"
import type { IMyNavProps, IMyNavContext } from "./types"
import { ErrorBoundary } from "../../Utils"
import { createSubcomponentContext } from "../../Utils/componentFactory"
import { type Component, splitProps, Show } from "solid-js"

export const [useNavContext, NavProvider] = createSubcomponentContext<IMyNavContext>('MyNav')

const MyNav: Component<IMyNavProps> = (props) => {
    const [local, others] = splitProps(props, ["children", "title", "menu", "options"])

    const classes = useMyNav(others)

    const contextValue: IMyNavContext = {
        ...others
    }

    return (
        <ErrorBoundary fallback={<div class="border border-red-500 p-4">Nav component failed to render.</div>}>
            <NavProvider value={contextValue}>
                <nav class={classes.nav}>
                    <Show when={local.title}>
                        <NavBrand>{local.title}</NavBrand>
                    </Show>
                    <NavContent>
                        <Show when={local.menu}>
                            <NavMenu>{local.menu}</NavMenu>
                        </Show>
                        {local.children}
                    </NavContent>
                    <Show when={local.options}>
                        <NavActions>{local.options}</NavActions>
                    </Show>
                </nav>
            </NavProvider>
        </ErrorBoundary>
    )
}

export default MyNav
