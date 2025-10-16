import NavContent from "./subcomponents/NavContent"
import NavActions from "./subcomponents/NavActions"
import NavBrand from "./subcomponents/NavBrand"
import NavMenu from "./subcomponents/NavMenu"
import { useMyNav } from "../../Hooks"
import type { IMyNavProps, IMyNavContext } from "./types"
import { ErrorBoundary } from "../../Utils"
import { createSubcomponentContext } from "../../Utils/componentFactory"

export const [useNavContext, NavProvider] = createSubcomponentContext<IMyNavContext>('MyNav')

function MyNav(props: IMyNavProps) {
    const {
        children,
        title,
        menu,
        options: actions,
        ...otherProps
    } = props

    const classes = useMyNav(otherProps)

    const contextValue: IMyNavContext = {
        ...otherProps
    }

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Nav component failed to render.</div>}>
            <NavProvider value={contextValue}>
                <nav className={classes.nav}>
                    {title && <NavBrand>{title}</NavBrand>}
                    <NavContent>
                        {menu && <NavMenu>{menu}</NavMenu>}
                        {children}
                    </NavContent>
                    {actions && <NavActions>{actions}</NavActions>}
                </nav>
            </NavProvider>
        </ErrorBoundary>
    )
}

export default MyNav
