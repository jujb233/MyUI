import NavContent from "./subcomponents/NavContent"
import NavOptions from "./subcomponents/NavOptions"
import NavTitle from "./subcomponents/NavTitle"
import NavMenu from "./subcomponents/NavMenu"
import { useMyNav } from "../../Hooks"
import type { IMyNavProps, IMyNavContext } from "./types"
import { ErrorCheck } from "../../Utils"
import { type Component, splitProps, Show } from "solid-js"
import { createSubcomponentContext } from "../../Utils/components"

export const [useNavContext, NavProvider] = createSubcomponentContext<IMyNavContext>('MyNav')

const MyNav: Component<IMyNavProps> = (props) => {
    // splitProps 要求传入的键均在 IMyNavProps 中，已在 types.ts 修复
    const [local, others] = splitProps(props, ["children", "title", "menu", "options"])

    const { rootClass, rootStyle, slots } = useMyNav(others)

    const contextValue: IMyNavContext = {
        ...others,
        slots,
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-4">Nav component failed to render.</div>}>
            <NavProvider value={contextValue}>
                <nav class={`${rootClass} ${props.class || ''}`} style={{ ...rootStyle, ...(props.style || {}) }}>
                    <Show when={local.title}>
                        <NavTitle>{local.title}</NavTitle>
                    </Show>
                    <NavContent>
                        <Show when={local.menu}>
                            <NavMenu>{local.menu}</NavMenu>
                        </Show>
                        {local.children}
                    </NavContent>
                    <Show when={local.options}>
                        <NavOptions>{local.options}</NavOptions>
                    </Show>
                </nav>
            </NavProvider>
        </ErrorCheck>
    )
}

export default MyNav
